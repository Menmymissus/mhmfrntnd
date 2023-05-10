import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../static/images/logo.png';
import '../static/css/Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-left">
        <Link to="/">
            <div className="navbar-logo">
              <img src={logo} alt="logo" />
            </div>
          </Link>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/stressometer">Stressometer</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
