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
		themeIcons[i].classList.remove('selected');
	}
	this.classList.add('selected')
	document.documentElement.setAttribute('data-theme', this.getAttribute('id'));
}

for (var i = 0; i < themeIcons.length; i++) {
	var icon = themeIcons[i];
	icon.addEventListener('click', changeCol, false);
}

function setInitialTheme() {

	if (window.matchMedia('prefers-color-scheme: dark').matches) {
  		console.log('dark mode is enabled');
    	document.documentElement.setAttribute('data-theme', 'dark');
    	document.querySelector('#dark').classList.add('selected');
	} else {
  		console.log('dark mode is not enabled');
    	document.documentElement.setAttribute('data-theme', 'colourful');
    	document.querySelector('#colourful').classList.add('selected');
	}

	window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
  	if (e.matches) {
    	console.log('dark mode is enabled');
    	document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('#dark').classList.add('selected');
  	} else {
  		console.log('dark mode is not enabled');
    	document.documentElement.setAttribute('data-theme', 'colourful');
        document.querySelector('#colourful').classList.add('selected');
  	}
	});
}

setInitialTheme();

function setAge() {
	var birth = new Date('1997-03-22');
	var now = new Date();
	var difference = now - birth;
	var age = new Date(difference).getFullYear() - 1970

	var span = document.getElementById('age');
	span.innerHTML = age;
}

setAge();




// Replace ./data.json with your JSON feed
fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    var data = JSON.parse(this.response)

    data.forEach(movie => {
      // Log each movie's title
      console.log(movie.title)
    })
  })
  .catch(err => {
    // Do something for an error here
  })


//GETTING DATA
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function() {
    // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  data.forEach(movie => {
    // Log each movie's title
    console.log(movie.title)
  })
}

// Send request
request.send()
