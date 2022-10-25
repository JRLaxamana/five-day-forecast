// var requestURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey; MOVED DOWN

var cityHistory;

var city = document.getElementsById("search-input");
var humidity = document.getElementById("humidity");
var temperature = document.getElementById("temperature");
var windSpeed = document.getElementById("wind-speed");
var fiveDayForecast = document.getElementById("forecast");


function getWeather() {
    var APIKey = "88c83f79a504010b43db706ee5a0b599"
    var cityInput = $("city-input").value;
    var requestURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    fetch(requestURL)
        .then(function (response) {
            console.log(response.json);
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })

    // .then function (response) {
    //     console.log(repsonse.name);
    // }
}