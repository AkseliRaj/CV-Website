import React from 'react';
import PhotoRow from '../components/PhotoRow.js';
import { filmPhotos, digitalPhotos } from '../components/ImageImports.js';

function Gallery() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className='col-3'>
          <h5>Kinofilmi kuvat</h5>
          <h5>Digitaaliset kuvat</h5>
        </div>
        <div className='col-8'>
          <h2>Kinofilmi kuvat</h2>
          <PhotoRow images={filmPhotos} />
          <h2>Digitaaliset kuvat</h2>
          <PhotoRow images={digitalPhotos} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
