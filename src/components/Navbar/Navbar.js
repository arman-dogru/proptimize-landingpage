import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/discover">Discover</Link></li>
        <li><Link to="/usecase">Use Case</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
