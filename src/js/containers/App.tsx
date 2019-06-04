import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, withRouter } from 'react-router';
import Foo from '../components/Foo'

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route>
            <Foo />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(hot(App));
