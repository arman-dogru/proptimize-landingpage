import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../DiscoverRedirect/DiscoverRedirect.css";

const DiscoverRedirect = () => {
  let navigate = useNavigate();

  const navigateToDiscover = () => {
    navigate('/discover');
  };

  return (
    <div className='Discover-Conatiner'>
      <div className='Discover-About'>
        <h2 className='About-Text'>About</h2>
      </div>
      <div className='Discover-Content'>
        <p className='Discover-Text'>At Proptimize, we're committed to empowering university students and 
          young professionals by helping them find a place they call can home. </p>
        <p className='Horizontal-line'></p>
        <button className='DiscoverMore-btn' onClick={navigateToDiscover}>{">"}</button>
      </div>
    </div>
  );
};

export default DiscoverRedirect;
