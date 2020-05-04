const photoGrid = document.querySelector('.photo_grid')

for (var i = 0; i < 12; i++) {
	const div = document.createElement('div')
	div.classList.add('photo')
	div.classList.add('shadowed')
	div.setAttribute('background-color', 'blue')
	div.style.opacity = 1;

	div.addEventListener('click', () => {
		// console.log(square.style.opacity)
		const popup = document.querySelector('.popup')
  		popup.style.visibility = 'visible'
  		const body = document.querySelector('body')
  		body.classList.add('noScroll')
  		div.classList.add('shadowed')
	})

	photoGrid.appendChild(div)
}

var themeIcons = document.querySelectorAll('.theme_icon')

var changeCol = function() {
	for (var i = 0; i < themeIcons.length; i++) {
		themeIcons[i].style.backgroundColor = 'rgba(255, 255, 255, 0)'
	}
	this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
	document.documentElement.setAttribute('data-theme', this.getAttribute('id'));
}

for (var i = 0; i < themeIcons.length; i++) {
	var icon = themeIcons[i];
	icon.addEventListener('click', changeCol, false);
}