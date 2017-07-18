var React = require('react');
var Form = require('./Form')

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }

  handleSubmit(props) {

  }

  render() {
    return (
      <div className='home-container'>
        Enter a City and State
        <Form />
      </div>
    )
  }
}

module.exports = Home;