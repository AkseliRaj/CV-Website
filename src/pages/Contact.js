import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Welcome to the Contact page!</p>
      <Link to="/Home">Go back to Home</Link>
    </div>
  );
}

export default Contact;       