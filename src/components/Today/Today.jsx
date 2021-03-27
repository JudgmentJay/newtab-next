import React from 'react'

import styles from './styles.module.scss'

const Today = () => {
	const getDate = () => {
		const now = new Date()

		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		]

		const currentMonth = months[now.getMonth()]

		const days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		]

		const currentDay = days[now.getDay()]

		return `${currentDay}, ${currentMonth} ${now.getDate()}`
	}

	return <div className={styles.today}>{getDate()}</div>
}

export default Today
