import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import ReactGA from 'react-ga';
import './App.css';
import Home from './components/home.js';
import About from './components/about.js';
import Topics from './components/topics.js';
import Music from './components/music.js';
import CoryImage from './public/coryImage.jpg';
import Publishing from './components/publishing.js';
import LogoBordello from './public/logoBordello.png';


function initializeReactGA() {
  ReactGA.initialize('UA-123791717-1');
  ReactGA.pageview('/home');
}

class App extends Component {



  
  render() {
    return (
      <HashRouter>
       <div >
         
         <img id="logoBordello"src={LogoBordello} alt="logoImage"/>
         <img id="hero-image"src={CoryImage} alt="hero Image"/>
          
          
          <ul className="header" inverse fluid>
            <a><NavLink className="navLink right-link" to="/music">Music</NavLink></a>
            <a><NavLink className="navLink " to="/">Home</NavLink></a>
            <a><NavLink className="navLink" to="/about">About</NavLink></a>
            <a><NavLink className="navLink" to="/topics">Topics</NavLink></a>
            <a><NavLink className="navLink" to="/publishing">Publishing</NavLink></a>
          </ul>
          
            <Route path="/"exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
            <Route path="/music" component={Music}/>
            <Route path="/publishing" component={Publishing}/>

          </div>
        
      </HashRouter >
    );
  }
}

export default App; 