import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const Weather = ({ weather }) => {
	const now = new Date()

	const twoHours = 60 * 60 * 2 * 1000
	const halfHour = 60 * 30 * 1000

	const sunrise = weather.sunrise * 1000
	const sunriseStart = sunrise - halfHour
	const sunriseEnd = sunrise + twoHours

	const sunset = weather.sunset * 1000
	const sunsetStart = sunset - twoHours
	const sunsetEnd = sunset + halfHour

	let bodyClass

	if ((now >= sunriseStart && now < sunriseEnd) || (now >= sunsetStart && now < sunsetEnd)) {
		bodyClass = 'golden'
	} else if (now >= sunriseEnd && now < sunsetStart) {
		bodyClass = 'day'
	} else {
		bodyClass = 'night'
	}

	if (typeof document !== 'undefined') {
		const body = document.getElementsByTagName('body')[0]

		body.classList.add(bodyClass)
	}

	return (
		<div className={styles.weather}>
			<a href="https://darksky.net/forecast/30.2973,-97.8105/us12/en" rel="noreferrer noopener">
				<img className={styles.icon} src={`/newtab/img/${weather.icon}.webp`} alt="Current weather" />
			</a>
			<div className={styles.temp}>{Math.round(weather.temperature)}&deg;</div>
		</div>
	)
}

Weather.propTypes = {
	weather: PropTypes.object.isRequired
}

export default Weather
