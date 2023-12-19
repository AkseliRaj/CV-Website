import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Koti
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Ota yhteyttä
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
