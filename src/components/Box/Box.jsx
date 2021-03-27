import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { ModalContext } from '../../context/modal'

import styles from './style.module.scss'

const Box = ({
	category,
	bookmarks,
	editMode
}) => {
	const modalContext = useContext(ModalContext)

	const handleClick = (e, bookmark) => {
		if (editMode) {
			e.preventDefault()

			modalContext.dispatch({
				type: 'TOGGLE_EDIT_MODAL',
				category: category,
				bookmark: bookmark
			})
		}
	}

	const boxClasses = classNames(styles.box, {
		[`${styles['box--editMode']}`]: editMode
	})

	return (
		<div className={boxClasses}>
			<div className={styles.content}>
				<h1>{category}</h1>
				<ul className={styles.links}>
					{
						bookmarks.map((bookmark, i) => {
							return (
								<li key={`${category}Link${i}`}>
									<a className={styles.link} href={bookmark.url} rel="noreferrer noopener" onClick={(e) => handleClick(e, bookmark)}>
										{bookmark.site}
									</a>
								</li>
							)
						})
					}
					<li><a className={`${styles.link} ${styles.addNew}`} onClick={() => modalContext.dispatch({ type: 'TOGGLE_ADD_MODAL', category: category })}>+ Add New</a></li>
				</ul>
			</div>
		</div>
	)
}

Box.propTypes = {
	category: PropTypes.string.isRequired,
	bookmarks: PropTypes.array.isRequired,
	editMode: PropTypes.bool.isRequired
}

export default Box
