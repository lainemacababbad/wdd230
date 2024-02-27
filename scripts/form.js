// password
const p1 = document.querySelector("#password");
const p2 = document.querySelector("#password2");
const message = document.querySelector("#passwordmessage");

p2.addEventListener("focusout", controlar);

function controlar() {
	if (p1.value !== p2.value) {
		p1.value =""
        p2.value=""
        p1.focus()
        message.textContent = "Password Do Not Match. Please try again."
	} else {
		message.textContent=""
	}
}

// range
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

// get current year
const currentYearElement = document.querySelector('#year');
const currentYear = new Date().getFullYear();
currentYearElement.innerHTML = `&copy;${currentYear} Lalaine Macababbad | PH CA 🇵🇭🇨🇦`;

// get last modified date
const lastModifiedElement = document.querySelector('#lastModified');
const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;

// hamburger menu
const hamburgerMenu = document.querySelector('#hamburger_menu');
const navigation = document.querySelector('.navigation');

hamburgerMenu.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamburgerMenu.classList.toggle('open');
});

// dark mode
document.addEventListener("DOMContentLoaded", function() {
	const darkModeButton = document.getElementById("dark_mode");
	const body = document.body;
  
	darkModeButton.addEventListener("click", function() {
	  body.classList.toggle("dark-mode");
	});
  });
