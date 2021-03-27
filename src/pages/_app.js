/* eslint react/prop-types: 0 */
import React from 'react'

import '../css/main.scss'

const MyApp = ({ Component, pageProps }) => {
	return <Component {...pageProps} />
}



export default MyApp
