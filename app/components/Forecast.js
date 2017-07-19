var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');

class WeatherToday extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
      </div>
    )
  }
}

class WeatherForecast extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var forecastedDays = this.props.weatherData;

    return(
      <div>
        <ul>
          {forecastedDays.map((day, index) => <li key={index}>{JSON.stringify(day)}</li>)}
        </ul>
      </div>
    )
  }
}

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      currentWeather: null,
      forecastedWeather: null
    }
  }

  componentDidMount() {
    var query = queryString.parse(this.props.location.search);

    api.fetchCurrentWeather(query.location)
      .then(weather => {
        this.setState({currentWeather: weather[0]});
      });

    api.fetchForecastedWeather(query.location)
      .then(weather => {
        console.log(weather)
        this.setState({forecastedWeather: weather.data.list});
        this.setState({location: weather.data.city.name + ', ' + weather.data.city.country})
      });
  }

  render() {
    var forecastedWeather = this.state.forecastedWeather;
    var currentWeather = this.state.currentWeather;
    var location = this.state.location;

    return (

      <div className='container'>

        <div> {location} </div>

        {currentWeather &&
          <div> Schöns wätter hütte </div>}

        {forecastedWeather &&
          <div>
          <WeatherForecast weatherData={forecastedWeather} />
          </div>
          }
      </div>

    )
  }
}

module.exports = Forecast;