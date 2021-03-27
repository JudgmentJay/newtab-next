import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.scss'

const CornerBox = ({
	editMode,
	setEditMode
}) => {
	const buttonClasses = classNames(styles.cornerBox, {
		[`${styles['cornerBox--editMode']}`]: editMode
	})

	return (
		<button className={buttonClasses} onClick={(() => setEditMode(!editMode))}>
			<span>+</span>
		</button>
	)
}

CornerBox.propTypes = {
	editMode: PropTypes.bool.isRequired,
	setEditMode: PropTypes.func.isRequired
}

export default CornerBox
