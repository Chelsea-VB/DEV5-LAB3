import RickMorty from "./RickMorty";
export default class Weather {
    constructor(api_key) {
        this.apiKey = api_key;

        // check if weather data is in localstorage and if timestamp older than 10 minutes
        if (localStorage.getItem('weather') && Date.now() - localStorage.getItem('weather_timestamp') < 600000) {
            // get data from localstorage
            const weatherData = JSON.parse(localStorage.getItem('weather'));
        } else {
            this.getLocation();
        };
    };

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getWeather.bind(this));
        } else {
            console.log("Geolocation is not supported by this browser.");
        };      
    };

    getWeather(position) {
        //console.log(this);
        //console.log(position);
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`;
        //console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                // save to localstorage
                localStorage.setItem('weather', JSON.stringify(data));
                // save timestamp
                localStorage.setItem('weather_timestamp', Date.now());

                this.displayWeather(data);

                const rickmorty = new RickMorty(data.hourly.temperature_2m[0]);
            });
    };

    displayWeather(data) {
        const temp = data.hourly.temperature_2m[0];
        console.log(temp);
        document.querySelector('.weather__temp').textContent = temp;


    };
};