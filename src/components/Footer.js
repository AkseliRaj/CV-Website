import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="list-inline-item">
            <a href="https://github.com/AkseliRaj" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
