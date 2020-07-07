function attachEvents() {
    const getWeatherButton = document.querySelector('#submit');
    const locationInput = document.querySelector('#location');
    const currentWeather = document.querySelector('#current');
    const upcomingWeather = document.querySelector('#upcoming');
    const forecastDiv = document.querySelector('#forecast');

    const symbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601',
        'Rain': '&#x2614;',
        'Degrees': '&#176'
    };


    getWeatherButton.addEventListener('click', function () {
        forecastDiv.style.display = 'block';
        getLocationData(locationInput.value)
            .then(getForecast);
    });

    function getLocationData(locationName) {
        return fetch('https://judgetests.firebaseio.com/locations.json')
            .then(response => response.json())
            .then(response => {
                return response.find(e => e.name === locationName).code;
            })
            .catch(error => {
                alert('There is no such that city');
            });
    }

    function getForecast(locationCode) {
        function getCurrentForecast(locationCode) {
            return fetch(`https://judgetests.firebaseio.com/forecast/today/${locationCode}.json`)
                .then(response => response.json());
        }

        function getUpcomingForecast(locationCode) {
            return fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${locationCode}.json`)
                .then(response => response.json());
        }

        Promise.all([getCurrentForecast(locationCode), getUpcomingForecast(locationCode)])
            .then(([current, upcoming]) => {
                const forecast = {};
                forecast.today = current;
                forecast.upcoming = upcoming;
                return forecast;
            })
            .then(renderForecast);

    }

    function renderForecast(forecast) {
        renderTodayForecast(forecast.today);
        renderUpcomingForecast(forecast.upcoming);
    }

    function renderUpcomingForecast(data) {
        upcomingWeather.innerHTML = upcomingWeather.querySelector('div').outerHTML;


        const forecastInfo = document.createElement('div');
        forecastInfo.classList.add('forecast-info');

        data.forecast.forEach(forecast => {
            const forecastSpan = document.createElement('span');
            forecastSpan.classList.add('upcoming');

            const symbolSpan = document.createElement('span');
            const temperatureSpan = document.createElement('span');
            const weatherStatusSpan = document.createElement('span');

            symbolSpan.classList.add('symbol');
            temperatureSpan.classList.add('forecast-data');
            weatherStatusSpan.classList.add('forecast-data');

            symbolSpan.innerHTML = symbols[forecast.condition];
            temperatureSpan.innerHTML = `${forecast.low}${symbols.Degrees}/${forecast.high}${symbols.Degrees}`;
            weatherStatusSpan.textContent = forecast.condition;

            forecastSpan.appendChild(symbolSpan);
            forecastSpan.appendChild(temperatureSpan);
            forecastSpan.appendChild(weatherStatusSpan);

            forecastInfo.appendChild(forecastSpan);
        });
        upcomingWeather.appendChild(forecastInfo);
    }

    function renderTodayForecast(data) {
        currentWeather.innerHTML = currentWeather.querySelector('div').outerHTML;

        const todayForecast = document.createElement('div');
        todayForecast.classList.add('forecasts');
        const conditionalSymbol = document.createElement('span');
        conditionalSymbol.classList.add('conditional', 'symbol');
        conditionalSymbol.innerHTML = symbols[data.forecast.condition];

        const condition = document.createElement('span');

        const cityName = document.createElement('span');
        cityName.classList.add('forecast-data');
        cityName.textContent = data.name;
        condition.appendChild(cityName);

        const temperature = document.createElement('span');
        temperature.classList.add('forecast-data');
        temperature.innerHTML =
            `${data.forecast.high}${symbols.Degrees}/${data.forecast.low}${symbols.Degrees}`;
        condition.appendChild(temperature);

        const weatherStatus = document.createElement('span');
        weatherStatus.classList.add('forecast-data');
        weatherStatus.textContent = data.condition;
        condition.appendChild(weatherStatus);

        todayForecast.appendChild(conditionalSymbol);
        todayForecast.appendChild(condition);
        currentWeather.appendChild(todayForecast);
    }
}

attachEvents();