console.log("Hello, World!")
const div = document.createElement('div')
div.classList.add('photo')
const photoGrid = document.querySelector('.photo_grid')
div.setAttribute('background-image', 'url(\'me.jpg\')');
div.setAttribute('background-color', 'blue');
div.style.backgroundImage = 'url(\'me.jpg\')'
photoGrid.appendChild(div)
photoGrid.appendChild(div)