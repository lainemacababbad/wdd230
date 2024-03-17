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

// dark more
document.addEventListener("DOMContentLoaded", function() {
	const darkModeButton = document.getElementById("dark_mode");
	const body = document.body;
  
	darkModeButton.addEventListener("click", function() {
	  body.classList.toggle("dark-mode");
	});
  });

// visits
// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `Welcome! Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

// START OF JS FOR FORM
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
// END OF JS

// weather API
// my API key: b943e64e275758a9bdee8e100ee52ab2
//coordinates: 49.19162500600741, -122.85031370287614

const currentTemp = document.getElementById('currentTemp');
const weatherDesc = document.getElementById('weatherDesc');
const weatherIcon = document.getElementById('weatherIcon');

const latitude = 49.19162500600741;
const longitude = -122.85031370287614;
const apiKey = 'b943e64e275758a9bdee8e100ee52ab2';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


async function getWeatherData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    updateWeatherInfo(data);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
  }
}

function updateWeatherInfo(data) {
  currentTemp.textContent = `${data.main.temp}°C`;
  weatherDesc.textContent = data.weather[0].description;
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
  weatherIcon.src = iconUrl;
}

getWeatherData();
