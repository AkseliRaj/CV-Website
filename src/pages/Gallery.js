import React from 'react';
import PhotoRow from '../components/PhotoRow.js';
import { filmPhotos, digitalPhotos } from '../components/ImageImports.js';

function Gallery() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <h2>Film Photos</h2>
        <PhotoRow images={filmPhotos} />

        <h2>Digital Photos</h2>
        <PhotoRow images={digitalPhotos} />
      </div>
    </div>
  );
}

export default Gallery;
