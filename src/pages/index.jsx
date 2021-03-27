import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import { ModalProvider } from '../context/modal'

import {
	Boxes,
	CornerBox,
	DateAndWeather
} from '../components'

const NewTab = ({
	bookmarks,
	weather
}) => {
	const [editMode, setEditMode] = useState(false)

	return (
		<React.Fragment>
			<Head>
				<title>New Tab</title>
				<meta name="robots" content="noindex, follow" />
				<meta name="theme-color" content="#000000"></meta>
			</Head>
			<ModalProvider>
				<Boxes
					initialBookmarks={bookmarks}
					editMode={editMode} />
				<DateAndWeather weather={weather} />
				<CornerBox
					editMode={editMode}
					setEditMode={setEditMode} />
			</ModalProvider>
		</React.Fragment>
	)
}

export async function getStaticProps() {
	const proxy = process.env.PROXY

	const bookmarksFetch = fetch(`${proxy}/bookmarks/read/`)
		.then((response) => response.json())
		.then((bookmarks) => bookmarks)
		.catch(() => [])

	const darkSkyApiKey = process.env.DARK_SKY_API_KEY
	const latitude = '30.2973'
	const longitude = '-97.8105'
	const exclusions = 'minutely,hourly,alerts,flags'

	const weatherFetch = fetch(`${proxy}/proxy/https://api.darksky.net/forecast/${darkSkyApiKey}/${latitude},${longitude}?exclude=${exclusions}`, {
		headers: {
			'x-requested-with': 'XMLHttpRequest'
		}
	})
		.then((response) => response.json())
		.then((weather) => ({
			temperature: weather.currently.temperature,
			icon: weather.currently.icon,
			sunrise: weather.daily.data[0].sunriseTime,
			sunset: weather.daily.data[0].sunsetTime
		}))
		.catch(() => {})

	const [bookmarks, weather] = await Promise.all([bookmarksFetch, weatherFetch])

	return { props: { bookmarks, weather } }
}

NewTab.propTypes = {
	bookmarks: PropTypes.array.isRequired,
	weather: PropTypes.object.isRequired
}

export default NewTab
