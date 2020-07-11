import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Button, Skeleton } from 'antd';
import "antd/dist/antd.css";
import GetName from './getname';
import PutName from './putname';

class App extends Component {
  render() {
    return (
      <div>
        <hr />

        <Router>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ display: 'inline-block' }}>
              <Link to="/"><Button>Home</Button></Link>
            </li>
            <li style={{ display: 'inline-block', marginLeft: '30px' }}>
              <Link to="/getname"><Button>GET</Button></Link>
            </li>
            <li style={{ display: 'inline-block', marginLeft: '30px' }} >
              <Link to="/putname"><Button>PUT</Button></Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <h1>这里是首页</h1>
              <Skeleton />
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