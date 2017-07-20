var React = require('react');

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({location: event.target.value})
  }

  handleClick() {
    window.location = '/'
  }

  render() {
    return (
      <div className='navbar' onClick={this.handleClick}>
        Weather App
      </div>
    )
  }
}

module.exports = Nav;