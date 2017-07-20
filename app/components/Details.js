var React = require('react');


class Details extends React.Component {
  render() {
    var props = this.props

    return (
      <div className='description-container'>
          <img
            className='weather-icons'
            src={'/app/images/weather-icons/' + props.location.icon + '.svg'}
            alt='weather-icon'
          />
          <p>{props.location.city}</p>
          <p>{props.location.description}</p>
          <p>min temp: {props.location.temp_min}</p>
          <p>max temp: {props.location.temp_max}</p>
          <p>humidity: {props.location.humidity}</p>
      </div>
    )
  }
}

module.exports = Details;