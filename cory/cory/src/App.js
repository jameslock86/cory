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
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
           <li><NavLink to="/topics">Topics</NavLink></li>
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
