console.log("hello world");

/* * * * * * *  
 * Selectors * 
 * * * * * * */

// NTS: const vs let? Ask at office hours
let form = document.querySelector('#contact');
const img = document.querySelector('#image-home');


/* * * * * * *  
 * Functions * 
 * * * * * * */

function handleSubmit(evt) {
	// prevents default behavior of browser.
	evt.preventDefault();
	
	// keep console.log() for self
	console.log('form submit');

	// alert user that the form has been submitted.
	// NTS: at a later time, figure out how to change "This page says -- Chrome"
	alert("Form submitted!")
}

const mouseOverHomeImg = (evt) => {
	alert("Discovered easter egg! You have amazing hair!")
}

/* * * * * * *  
 * Listeners * 
 * * * * * * */

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', mouseOverHomeImg);
