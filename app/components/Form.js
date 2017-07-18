var React = require('react');

class Form extends React.Component {
  render() {
  return(
    <form className='column' onSubmit={this.handleSubmit}>
      <input
        placeholder='Zurich, Switzerland'
        type='text'
        autoComplete='off'
      />
      <button
        className='button'
        type='submit'>
          Get Weather
      </button>
    </form>
  )
  }
}

module.exports = Form;