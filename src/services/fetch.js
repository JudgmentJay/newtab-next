exports.fetchAll = (callback) => {
	fetch(`/bookmarks/read/`)
		.then((response) => {
			if (response.status === 404) {
				console.log('Bad Response')
			} else if (response.ok) {
				return response.json()
			}
		})
		.then(bookmarks => callback(bookmarks))
}

exports.fetchData = (path, method, data, callback) => {
	fetch(path, {
		method,
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then((response) => {
		if (response.status === 400) {
			alert('Invalid Password')
		} else if (response.status === 404) {
			console.log('Bad Response')
		} else if (response.ok) {
			callback()
		}
	})
}
