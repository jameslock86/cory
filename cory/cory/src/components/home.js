import React, { Component } from "react";
import Typing from 'react-typing-animation';
import CoryImage from '../public/coryImage.jpg';
import Yass from '../public/yass.jpg';
import CoryGuitar from '../public/coryGuitar.jpg';
 import './index.css';
 import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaSoundcloud } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { FaItunesNote } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaBandcamp } from 'react-icons/fa';
import { IconContext } from "react-icons";




class Home extends Component {
  render() {
    return (
      <div className="section-body">
          
        <div className="intro-section">
          <h1  id="punkBordello-home-title"> So you’ve made it to the PunkBordello Home page huh ?</h1>
          <img id="image-1"src={CoryGuitar} alt="hero Image" align="right"/>
          <h2 className="section-title">Let me give you a little low down of what I do here:</h2>
          
            <p id="punkBordello-home-text-body" > I produce and play my own music.Visiting and checking out this site is the best
                way to show some love to me as a musician. I offer to you the opportunity to help an 
                artist grow. The more PunkBordello grows, the more able I’ll be to put on the best show
                possible, with the best music possible.
              </p>

          <IconContext.Provider value={{ color: "white", size:"30px", className: "global-class-name" }}>
  <div>
    <a href=""><FaFacebookF /></a>
    <FaTwitter />
    <FaSoundcloud />
    <FaSpotify />
    <FaItunesNote />
    <FaYoutube />
    <FaInstagram />
    <FaBandcamp />
  </div>
</IconContext.Provider>

           
        </div>


        
          
       <div className="OnlineStore-section">
          <h2 className="section-title" id="onlineStore-title">Online store:</h2>
          <p id="onlineStore-text-body"> Eventually, the goal is to get to place where I can make PunkBordello more of a career
              project. Show your support and rep the brand by buying some merch, fambinos ❤
          </p>

      <button>
        <a  id="learn_more"href="#" >Learn more about me</a>
      </button>
      </div>
      </div>
    );
  }
}
 
export default Home;

{/* <Typing></Typing> */}