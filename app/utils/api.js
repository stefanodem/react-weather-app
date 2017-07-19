var axios = require('axios');
var apiKey = '3cdf6e248b35ef6d7b247bdc62e69ff8';

module.exports = {
  fetchCurrentWeather: function(location) {
    var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&type=accurate&APPID=' + apiKey);

    return axios.get(encodedURI)
      .then(function(response) {
        return response.data.weather;
    });
  },
  fetchForecastedWeather: function(location) {
    var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + location + '&type=accurate&APPID=' + apiKey + '&cnt=5');

    return axios.get(encodedURI)
      .then(function(response) {
        return response;
    });
  },
  getPicture: function(id) {
    //Do something
  }
}