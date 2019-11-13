import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter
} from 'react-router-dom';

import Home from './Home';
import Project from './Project';
import './App.css';

/**
 * Single page app component with browser routing
 */
class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>
          <div className="f-reg"><NavLink to="/">nick horn</NavLink></div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Project}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
