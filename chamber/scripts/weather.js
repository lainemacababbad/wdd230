// weather API
// my API key: b943e64e275758a9bdee8e100ee52ab2
// coordinates: 49.19162500600741, -122.85031370287614

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