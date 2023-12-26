import '../styles/home.css'
import React from 'react';
import { Link } from 'react-router-dom';
import SkeletonPicture1 from '../images/Skeleton.png'

function Home() {
  return (
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-4 ml-5 align-self-center" id='heading-container'>
          <div>
            <h1>Moro, minun nimi on Akseli!</h1>
          </div>
          <div>
            <h3>Tässä edustavin kuva itsestäni:</h3>
          </div>
          <div>
            <h6 id="asterisk-text">*Hieman pidempi livenä mitä olisi voinut odottaa,tai niin olen ainakin kuullut*</h6>
          </div>
        </div>
        <div class="col-6">
          <img src={SkeletonPicture1} alt="Skeleton" class="img-fluid"/>
        </div>
      </div>
    </div>
  );
}

export default Home;       