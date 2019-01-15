import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, withRouter } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route component={() => (<div>App</div>)} path="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(hot(App));
