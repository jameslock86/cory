import React, { Component } from "react";
import './index.css';
import PickGuitar from '../public/pickGuitar.jpg';
import YouTube from 'react-youtube';
class Music extends Component {
  render() {


     const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }}
    return (
      <div className="section-body">
        <h2>Music </h2>
        <p>Soundcloud, bandcamp, Spotify, Apple Music, I paid for
           pretty much everything to be available 
          everywhere and as long as you search PunkBordello
           it’ll always be the first thing to come up</p>
 
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        <img src={PickGuitar} alt="guitar"/>
        <br/>

        <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady}
      />
      </div>
    );
  }
}
 
export default Music;