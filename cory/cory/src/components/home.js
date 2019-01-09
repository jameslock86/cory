import React, { Component } from "react";
import CoryImage from '../public/coryImage.jpg';
 import './index.css';
class Home extends Component {
  render() {
    return (
      <div className="section-body">
        <h2>Home </h2>
        <p>Soundcloud, bandcamp, Spotify, Apple Music, I paid for
           pretty much everything to be available 
          everywhere and as long as you search PunkBordello
           it’ll always be the first thing to come up</p>
 
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>

        <img id="image-1"src={CoryImage} alt="hero Image" align="right"/>
        <p> Aptent class cubilia dignissim elit erat eros
         est facilisis fermentum fringilla interdum ligula magna
          molestie nam neque nulla odio placerat porttitor praesent
           primis quis scelerisque semper sodales ultrices vivamus
            volutpat.Ad auctor blandit congue eleifend habitasse magnis non nostra
             phasellus potenti primis pulvinar sodales.Ac auctor consequat conubia donec eros
              et fames gravida hac iaculis integer lacinia lectus luctus montes neque non placerat 
              sed tempor tincidunt urna.Condimentum curae;

        dapibus egestas eu habitant habitasse hac hendrerit interdum ipsum laoreet lectus 
        magnis malesuada nulla nullam primis pulvinar quisque rhoncus senectus suscipit 
        suspendisse ut vestibulum vitae.

        Dictum dictumst et feugiat imperdiet libero litora mauris mus nascetur nec odio orci p
        ellentesque placerat porta praesent senectus suscipit tempor tristique vehicula vivamus.
        Accumsan aliquam amet feugiat inceptos integer justo lacinia lectus maecenas malesuada 
        massa mauris nec porttitor potenti pretium purus rhoncus rutrum sed sociis sollicitudin 
        tristique vel venenatis viverra vulputate.A amet curabitur diam dictum eget eleifend facilis
        i fusce habitant libero lorem magna malesuada mauris nostra potenti quam sociosqu sodales tristiqu
        e ultrices.Ad bibendum class cras cum curae;
        dictum facilisi faucibus feugiat fusce hac himenaeos justo magna magnis nec nullam part
        urient sem semper tincidunt varius velit.

        Condimentum diam dictumst egestas eros felis imperdiet ligula mi parturient 
        pulvinar quisque ridiculus suspendisse torquent varius vehicula vivamus volutpat
        .Arcu auctor cubilia diam donec elit felis in inceptos ipsum mus nostra nullam 
        ornare pellentesque penatibus per pharetra potenti primis quisque sapien sem taciti tempus venenatis vivamus vulputate.Aliquam arcu at augue class conubia dictumst dolor est et eu euismod facilisi facilisis gravida imperdiet ipsum justo magnis metus nibh placerat scelerisque senectus sit vel.Arcu dui etiam himenaeos laoreet litora magnis metus mus non praesent primis taciti.Auctor consequat cubilia curae;
        dolor donec enim et fermentum habitant hac iaculis imperdiet lorem magna metus montes netus parturient phasellus potenti sed turpis ut vivamus.
      </p>
      <button>
        <a  id="learn_more"href="#" >Learn more about me</a>
      </button>
      </div>
    );
  }
}
 
export default Home;