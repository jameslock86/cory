import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import './App.css';
import Home from './components/home.js';
import About from './components/about.js';
import Topics from './components/topics.js';
import Music from './components/music.js';
import CoryImage from './public/coryImage.jpg';
class App extends Component {
  render() {
    return (
      <HashRouter >
       <div>
         <img id="hero-image"src={CoryImage} alt="hero Image"/>
          <h1 id="hero-title">Punk Bordello</h1>
          <ul className="header" inverse fluid>
            <a><NavLink className="navLink right-link" to="/music">Music</NavLink></a>
            <a><NavLink className="navLink " to="/">Home</NavLink></a>
            <a><NavLink className="navLink" to="/about">About</NavLink></a>
           <a><NavLink className="navLink" to="/topics">Topics</NavLink></a>
          </ul>
          
            <Route path="/"exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
            <Route path="/music" component={Music}/>
          </div>
        
      </HashRouter >
    );
  }
}

export default App; 