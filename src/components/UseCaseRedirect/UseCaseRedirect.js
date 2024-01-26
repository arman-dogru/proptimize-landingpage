import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UseCaseRedirect.css'
const UseCaseRedirect = () => {
  let navigate = useNavigate();

  const navigateToUseCase = () => {
    navigate('/usecase');
  };

  return (
    <div className='container'>
      <div className='container--top'>
        <h1>Curious about how Proptimize can work for you?</h1>
        <h2>Explore Our Use Cases</h2>
        <button onClick={navigateToUseCase} className='btn top'>Learn More</button>
      </div>
      <div className='container--bottom'>
          <div className='left-section'>
            <h2>About</h2>
          </div>
          <div className='right-section'>
              <p>At Proptimize, we're committed to empowering university students and young professionals by helping them find a place they call can home. </p>
              <p>
              <button onClick={navigateToUseCase} className='btn btn-right'>Learn More</button>
              </p>
          </div>
      </div>
    </div>
  );
};

export default UseCaseRedirect;

