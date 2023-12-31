import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';
import logo from '../images/nav/Logo.png';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Koti
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">
              Yhteystiedot
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Gallery">
              Galleria
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default NavigationBar;
