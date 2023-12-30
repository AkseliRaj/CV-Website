import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

// Components
import ScrollWheel from '../components/ScrollDownIcon.js'

// Pictures
import SkeletonPicture1 from '../images/Skeleton.png';
import SkeletonPicture2 from '../images/Skeleton2.png';


function Home() {
  return (
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-4 ml-5 align-self-center" id='heading-Container'>
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
        <div class="col-5">
          <img src={SkeletonPicture1} alt="Skeleton1" class="img-fluid" />
        </div>
      </div>
      <div class="text-center" id="CV-Container">
        <div>
          <h1>Jos haluat kokonaisen elämäntarinani, voit ladata CV:ni</h1>
        </div>
        <div>
          <h4>MUTTA</h4>
        </div>
        <div>
          <h4>Huhut kertovat, että olet coolein henkilö, jos koluat sivustoni kokonaan läpi :)</h4>
        </div>
      </div>
      <div class="d-flex justify-content-center" id='picture2-Container'>
        <div class="col-6">
          <img src={SkeletonPicture2} alt="Skeleton2" class="img-fluid" />
        </div>
      </div>
      <ScrollWheel />
    </div>

  );
}

export default Home;       