const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
	const isDev = phase === PHASE_DEVELOPMENT_SERVER

	const devProxies = isDev
		? [
			{
				source: '/bookmarks/:path*',
				destination: 'http://localhost:3010/bookmarks/:path*',
				basePath: false
			}
		]
		: []

	return {
		basePath: '/newtab',
		distDir: 'build',
		async rewrites() {
			return devProxies
		},
		webpack: (config) => {
			config.module.rules.push({
				test: /\.(jpg?g|png|gif|svg|webp)$/,
				use: [
					'file-loader'
				]
			})

			return config
		}
	}
}
