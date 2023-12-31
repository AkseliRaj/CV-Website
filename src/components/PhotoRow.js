import React from 'react';
import '../styles/photoRow.css';

function PhotoRow({ images }) {
  return (
    <div className="container">
    <div className="row justify-content-center">
      {images.map((imageUrl, index) => (
        <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div className="image-container">
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="img-fluid mb-3 hover-zoom"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default PhotoRow;
