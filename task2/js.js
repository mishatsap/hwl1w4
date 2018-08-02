function getAttributes () {
	let myEl = document.getElementById('w3r'),
		attributesArr = [
			myEl.getAttribute('type'),
			myEl.getAttribute('hreflang'),
			myEl.getAttribute('rel'),
			myEl.getAttribute('target'),
			myEl.getAttribute('href')
		]

		for (let i = 0; i < attributesArr.length; i++) {
			console.log(attributesArr[i]);
		}
}