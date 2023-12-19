import React from 'react';
import { Link } from 'react-router-dom';
import SkeletonPicture1 from '../images/Skeleton.png'

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <img src={SkeletonPicture1} alt="Skeleton" />
      <p>Welcome to the Home Page!</p>
      <Link to="/Gallery">Go to Gallery</Link>
    </div>
  );
}

export default Home;       