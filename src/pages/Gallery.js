import React from 'react';
import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <div>
      <h1>Gallery Page</h1>
      <p>Welcome to the Gallery page!</p>
      <Link to="/Contact">Go to contact</Link>
    </div>
  );
}

export default Gallery;       