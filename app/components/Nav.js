var React = require('react');

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({location: event.target.value})
    console.log(this.state.location)
  }

  render() {
    return (
      <div className='nav'>
        Weather App

      </div>

    )
  }
}

module.exports = Nav;