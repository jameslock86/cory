import React, { Component } from "react";
import './index.css';
import PickGuitar from '../public/pickGuitar.jpg';
class Music extends Component {
  render() {
    return (
      <div className="section-body">
        <h2>Music </h2>
        <p>Soundcloud, bandcamp, Spotify, Apple Music, I paid for
           pretty much everything to be available 
          everywhere and as long as you search PunkBordello
           it’ll always be the first thing to come up</p>
 
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        <img src={PickGuitar} alt="guitar"/>
      </div>
    );
  }
}
 
export default Music;