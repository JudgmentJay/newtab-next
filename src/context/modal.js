import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

const ModalContext = React.createContext()

const ModalProvider = ({ children }) => {
	const initialState = {
		modalVisible: false,
		modalType: '',
		category: '',
		bookmark: {}
	}

	const [modalStatus, dispatch] = useReducer(modalReducer, initialState)

	const providedItems = {
		modalVisible: modalStatus.modalVisible,
		modalType: modalStatus.modalType,
		category: modalStatus.category,
		bookmark: modalStatus.bookmark,
		dispatch: dispatch
	}

	return <ModalContext.Provider value={providedItems}>{children}</ModalContext.Provider>
}

const modalReducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_ADD_MODAL':
			return {...state, modalVisible: true, modalType: 'add', category: action.category}
		case 'TOGGLE_EDIT_MODAL':
			return {modalVisible: true, modalType: 'edit', category: action.category, bookmark: action.bookmark}
		case 'CLOSE_MODAL':
			return {modalVisible: false, modalType: '', category: '', bookmark: {}}
		default:
			return state
	}
}

ModalProvider.propTypes = {
	children: PropTypes.node
}

export {
	ModalContext,
	ModalProvider
}
