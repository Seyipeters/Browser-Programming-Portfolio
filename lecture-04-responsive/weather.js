const cityText = document.getElementById('city');
const temperatureText = document.getElementById('temperature');
const windText = document.getElementById('wind');
const output = document.getElementById('output');
const buttons = document.querySelectorAll('.weather-btn');

function log(message) {
    output.textContent += message + '\n';
}

function clearOutput() {
    output.textContent = '';
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const cityName = button.dataset.city;
        const latitude = button.dataset.lat;
        const longitude = button.dataset.lon;
        loadWeatherByCity(cityName, latitude, longitude);
    });
});

async function loadWeatherByCity(cityName, latitude, longitude) {
    clearOutput();

    try {
        const url =
            'https://api.open-meteo.com/v1/forecast?latitude=' +
            latitude +
            '&longitude=' +
            longitude +
            '&current_weather=true';

        log('Loading weather for ' + cityName + '...');

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('HTTP Error: ' + response.status);
        }

        const data = await response.json();
        const temperature = data.current_weather.temperature;
        const wind = data.current_weather.windspeed;

        cityText.textContent = cityName;
        temperatureText.textContent = temperature + ' °C';
        windText.textContent = wind + ' km/h';

        log('City: ' + cityName);
        log('Temperature: ' + temperature + ' °C');
        log('Wind Speed: ' + wind + ' km/h');
    } catch (error) {
        log('Error: ' + error.message);
    }
}
