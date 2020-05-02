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
	photoGrid.appendChild(div)
}