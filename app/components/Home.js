var React = require('react');
var Redirect = require('react-router-dom').Redirect;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      isSubmitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({isSubmitted: true})
  }

  handleChange(event) {
    this.setState({location: event.target.value})
  }

  render() {
    const isSubmitted = this.state.isSubmitted;
    const match = this.props.match;
    const path = '/forecast?location=' + this.state.location;

    return (
      <div>
        <div className='home-container' >
          Enter a City and State
          <form className='home-form' onSubmit={this.handleSubmit}>
            <input
              id='location'
              placeholder='Zurich, Switzerland'
              type='text'
              autoComplete='off'
              onChange={this.handleChange}
              value={this.state.location}
            />
            <button
              className='button'
              type='submit'>
                Get Weather
            </button>
          </form>
        </div>

        {isSubmitted &&
          <Redirect
            to={path}
             />
        }
      </div>
    )
  }
}

module.exports = Home;