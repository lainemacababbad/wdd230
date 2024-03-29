// const currentTemp = document.getElementById('currentTemp');
// const weatherDesc = document.getElementById('weatherDesc');
// const weatherIcon = document.getElementById('weatherIcon');

// const latitude = 49.19162500600741;
// const longitude = -122.85031370287614;
// const apiKey = 'b943e64e275758a9bdee8e100ee52ab2';
// const currentWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
// const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

// async function getWeatherData() {
//   try {
//     const response = await fetch(currentWeatherApiUrl);
//     if (!response.ok) {
//       throw new Error('Failed to fetch weather data');
//     }
//     const data = await response.json();
//     updateWeatherInfo(data);
//   } catch (error) {
//     console.error('Error fetching weather data:', error.message);
//   }
// }

// function updateWeatherInfo(data) {
//   currentTemp.textContent = `${data.main.temp}°C`;
//   weatherDesc.textContent = data.weather[0].description;
//   const iconCode = data.weather[0].icon;
//   const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
//   weatherIcon.src = iconUrl;
// }

// // 5 day forecast
// async function getForecastData() {
//   try {
//     const response = await fetch(forecastApiUrl);
//     if (!response.ok) {
//       throw new Error('Failed to fetch forecast data');
//     }
//     const data = await response.json();
//     updateForecastInfo(data);
//   } catch (error) {
//     console.error('Error fetching forecast data:', error.message);
//   }
// }

// function updateForecastInfo(data) {
//   const forecastContainer = document.querySelector('.forecast');
//   forecastContainer.innerHTML = '<h3>5-Day Forecast:</h3>';

//   for (let i = 0; i < data.list.length; i += 8) {
//     const forecastData = data.list[i];
//     const date = new Date(forecastData.dt * 1000);
//     const temp = forecastData.main.temp;
//     const desc = forecastData.weather[0].description;
//     const icon = forecastData.weather[0].icon;
//     const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

//     const forecastHTML = `
//       <div class="day-forecast">
//         <h4>${date.toDateString()}</h4>
//         <p>Temp: ${temp.toFixed(1)}°C</p>
//       </div>
//     `;

//     forecastContainer.innerHTML += forecastHTML;
//   }
// }

// getWeatherData();
// getForecastData();
