var links = {
	main: 'The <strong>Main</strong> page',
	about: 'The <strong>About</strong> page',
	downloads: 'The <strong>Download</strong> page'
};

contentEl = document.querySelector('.content');

var updatestate = function () {
	var content = links[location.hash.slice(1)];

	contentEl.innerHTML = content || 'Page not found';
}

window.addEventListener('hashchange', updatestate);
window.addEventListener('load', updatestate);