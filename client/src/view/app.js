import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import GetName from './getname';
import PutName from './putname';


class App extends Component {
  render() {
    return (
      <div>
        <hr />

        <Router>
          <ul>
            <li>
              <Link to="/getname">GET</Link>
            </li>
            <li>
              <Link to="/putname">PUT</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <h1>这里是首页</h1>
            </Route>
            <Route path="/getname">
              <GetName />
            </Route>
            <Route path="/putname">
              <PutName />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;