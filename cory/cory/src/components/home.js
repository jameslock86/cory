import React, { Component } from "react";
import CoryImage from '../public/coryImage.jpg';
import Yass from '../public/yass.jpg';
 import './index.css';
class Home extends Component {
  render() {
    return (
      <div className="section-body">
        
        <div className="intro-section">
        <h1>Home </h1>
        
          <h3> So you’ ve made it to the PunkBordello Home page huh ?</h3>
        </div>

        <img id="image-1"src={Yass} alt="hero Image" align="right"/>
        <p> 





          

Let me give you a little low down of what I do here:

I produce and play my own music. Visiting and checking out this site is the best way to show some love to me as a musician. I offer to you the opportunity to help an artist grow. The more PunkBordello grows, the more able I’ll be to put on the best show possible, with the best music possible.


About

My name is Cory Jones - and I like to do one thing…. Play that loud ass funky shit, boi. Bordello is another word for a brothel and so the first time I heard that word in a band name my immediate next thought was PunkBordello (Punk Rock Whorehouse). I came up with it a very, long time ago and quite honestly it just sounded like the most Punk shit I’d ever heard. So I kept it and now I’m running with it. 
	Now My first album, “Epitaph” was me realizing what I had the potential to do with basic tools and a dream. I spent an incredible amount of time creating and just learning how to produce everything on that album with a small amount of help. 
	This next album (entitled eponymously) “PunkBordello” is going to be a reflection of everything |I’ve learned in the time since. An acknowledgement that punk is purely an attitude, yet the most punk shit I could ever do is whatever experimental thing I can think of for the song. 
	I believe in music without limitations - “For the love of music”. 
Growth without limitations allowed us to be the versions of ourselves we actually should strive to be.

Online store:
Eventually, the goal is to get to place where I can make PunkBordello more of a career project. Show your support and rep the brand by buying some merch, fambinos ❤
      </p>
      <button>
        <a  id="learn_more"href="#" >Learn more about me</a>
      </button>
      </div>
    );
  }
}
 
export default Home;