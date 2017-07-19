var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: null
    }
  }

  componentDidMount() {
    var query = queryString.parse(this.props.location.search);

    api.fetchCurrentWeather(query.location)
      .then(weather => {
        this.setState({currentWeather: weather[0]});
      });
    console.log(this.state.currentWeather)
  }

  render() {
    return (

      <div className='container'>

        gagi mit bisi sauce
      </div>

    )
  }
}

module.exports = Forecast;