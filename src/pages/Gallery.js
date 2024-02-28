import React from 'react';
import '../styles/gallery.css'
import PhotoRow from '../components/PhotoRow.js';
import { filmPhotos, digitalPhotos } from '../components/ImageImports.js';

function Gallery() {
  return (
    <div className="container-fluid pt-5">
      <div class="row">

        <div className='col-3' id='galleryNavigation'>
          <div>
            <p>Premiere</p> 
          </div>
          <div>
            <p>Photoshop</p> 
          </div>
          <div>
            <p>Valokuvaus</p> 
          </div>
          <div>
            <p>Muut projektit</p> 
          </div>
        </div>
            
        <div className='col-7'>
          <div className='pb-4'>
            <h1 id='Header'>Premiere</h1>
          </div>
          <div>
            <p>Alta löydät videoprojektin, jonka olen toteuttanut AR Isännöinti Oy kiinteistönvälitys yritykselle.</p>
            <p>Kaikki heille toteuttamani videot löydät täältä</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Gallery