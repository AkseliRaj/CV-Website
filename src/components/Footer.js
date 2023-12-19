import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light p-4 text-center">
      <div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/Contact" className='text-dark'>Contact</Link>
          </li>
          <li className="list-inline-item">
            <a href="https://github.com/AkseliRaj" target="_blank" rel="noopener noreferrer" className='text-dark'>GitHub</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
