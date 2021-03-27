import React from 'react'
import PropTypes from 'prop-types'

import {
	Today,
	Weather
} from '../../components'

import styles from './styles.module.scss'

const DateAndWeather = ({ weather }) => {
	return (
		<div className={styles.dateAndWeather}>
			{ Boolean(Object.keys(weather).length > 0) &&
				<Weather weather={weather} />
			}
			<Today />
		</div>
	)
}

DateAndWeather.propTypes = {
	weather: PropTypes.object.isRequired
}

export default DateAndWeather
