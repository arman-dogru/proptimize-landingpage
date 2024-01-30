import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundVideo from '../Navbar/BackgroundVideo.js';
import "./Navbar.css"

const Navbar = () => {
  return (
      <nav>
        <BackgroundVideo/>
        <div className='nav--container'>
          <h1>Proptimize</h1>
          <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/discover">Discover</Link></li>
            <li><Link to="/usecase">Use Case</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </div>
        <div className='nav--content'>
              <h2>home. the place where you leap, learn and live</h2>
        </div>
      </nav>
  );
};

export default Navbar;