var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Home = require('./Home');
var Nav = require('./Nav');


class App extends React.Component {
  render() {
    return (
      <Router>
         <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;