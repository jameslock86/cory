import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import './App.css';
import Home from './components/home.js';
import About from './components/about.js';
import Topics from './components/topics.js';
class App extends Component {
  render() {
    return (
      <HashRouter >
       <div>
          <h1>PunkBordello</h1>
          <ul className="header">
            <a className="navLink"><NavLink to="/">Home</NavLink></a>
            <a className="navLink"><NavLink to="/about">About</NavLink></a>
           <a className="navLink"><NavLink to="/topics">Topics</NavLink></a>
          </ul>
          
            <Route path="/"exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
          </div>
        
      </HashRouter >
    );
  }
}

export default App;
