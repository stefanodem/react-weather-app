var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');
var date = require('date-and-time');
var Redirect = require('react-router-dom').Redirect;

function WeatherIcon(props) {
  return (
    <img
      key={props.id}
      className='weather-icons'
      src={'./app/images/weather-icons/' + props.icon + '.svg'}
      alt='weather-icon'
    />
  )
}

class WeatherToday extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push({
      pathname: '/details/',
      description: this.props.weatherData.weather[0].description,
      icon: this.props.weatherData.weather[0].icon,
      temp_min: this.props.weatherData.main.temp_min,
      temp_max: this.props.weatherData.main.temp_max,
      humidity: this.props.weatherData.main.humidity,
      city: this.props.city
    })
  }

  render() {
    var currentDay = this.props.weatherData.weather[0];
    var now = new Date();
    var today = date.format(now, 'dddd, MMMM DD YYYY')

    return(
      <ul>
        <li key={0} className='today' id={0}>
          <img
            key={0}
            className='weather-icons'
            src={'./app/images/weather-icons/' + currentDay.icon + '.svg'}
            alt='weather-icon'
            onClick={this.handleClick}
          />
          <p>{currentDay.description}</p>
          <p>{today}</p>
        </li>
      </ul>
    )
  }
}

class WeatherForecast extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    console.log(props)
  }

  handleClick(day) {
    this.props.history.push({
      pathname: '/details/',
      description: this.props.weatherData[day].weather[0].description,
      icon: this.props.weatherData[day].weather[0].icon,
      temp_min: this.props.weatherData[day].temp.min,
      temp_max: this.props.weatherData[day].temp.max,
      humidity: this.props.weatherData[day].humidity,
      city: this.props.city
    })
  }

  render() {
    var forecastedDays = this.props.weatherData;
    var now = new Date();
    var day = date.format(now, 'dddd, MMMM DD YYYY')

    return(
      <ul>
        {
          forecastedDays.map((forecast, index) => {
            var now = new Date();
            var day = date.addDays(now, (index + 1));
            var forecastedDay = date.format(day, 'dddd, MMMM DD YYYY')

            return(
              <li key={index + 1} className='forecast' id={index + 1}>
                <img
                  key={0}
                  className='weather-icons'
                  src={'./app/images/weather-icons/' + forecast.weather[0].icon + '.svg'}
                  alt='weather-icon'
                  onClick={this.handleClick.bind(null, index)}
                />
                <p>{forecast.weather[0].description}</p>
                <p>{forecastedDay}</p>
              </li>
            )
          }
        )}
      </ul>
    )
  }
}

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      currentWeather: null,
      forecastedWeather: null
    }
  }

  componentDidMount() {
    var query = queryString.parse(this.props.location.search);

    api.fetchCurrentWeather(query.location)
      .then(object => {
        this.setState({currentWeather: object.data});
      });

    api.fetchForecastedWeather(query.location)
      .then(object => {
        this.setState({forecastedWeather: object.data.list});
        this.setState({city: object.data.city.name + ', ' + object.data.city.country})
      });
  }

  render() {
    var forecastedWeather = this.state.forecastedWeather;
    var currentWeather = this.state.currentWeather;
    var city = this.state.city;

    return (
      <div className='container'>

        <div className='header'> {city} </div>

        {currentWeather &&
          <WeatherToday city={city} history={this.props.history}  weatherData={currentWeather} />}

        {forecastedWeather &&
          <WeatherForecast city={city} history={this.props.history} weatherData={forecastedWeather} />
          }
      </div>
    )
  }
}

module.exports = Forecast;