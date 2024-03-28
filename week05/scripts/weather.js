// weather API
// my API key: b943e64e275758a9bdee8e100ee52ab2
//coordinates: 49.19162500600741, -122.85031370287614
const myCity = document.querySelector('#city');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const myKey = "b943e64e275758a9bdee8e100ee52ab2";
const myLat = "49.19162500600741";
const myLong = "-122.85031370287614";

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetch() {
	try {
	  const response = await fetch(myURL);
	  if (response.ok) {
		const data = await response.json();
		console.log(data); // testing only
		// displayResults(data); // uncomment when ready
	  } else {
		  throw Error(await response.text());
	  }
	} catch (error) {
		console.log(error);
	}
  }

  function displayResults(data) {
	console.log('hello')
	myCity.innerHTML = data.name
	myDescription.innerHTML = data.weather[0].description
  myTemperature.innerHTML = `${data.main.temp}&deg;F`
  const iconsrc = `https://openweathermap.org/img/wn/${dataweather[0].icon}@2x.png`
  myGraphic.setAttribute('SRC', iconsrc)
  myGraphic.setAttribute('alt', data.weather[0].description)
  }
  
  apiFetch();