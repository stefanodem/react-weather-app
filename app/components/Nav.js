var React = require('react');
var Form = require('./Form');

class Nav extends React.Component {
  render() {
    return (
      <div className='nav'>
      Weather App
        <Form />
      </div>

    )
  }
}

module.exports = Nav;