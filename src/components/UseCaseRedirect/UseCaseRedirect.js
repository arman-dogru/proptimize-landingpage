import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../UseCaseRedirect/UseCaseRedirect.css';
const UseCaseRedirect = () => {
  let navigate = useNavigate();

  const navigateToUseCase = () => {
    navigate('/usecase');
  };

  return (
    <div className='container'>
      <div className='container-top'>
        <h1>Curious about how Proptimize can work for you?</h1>
        <h2>Explore Our Use Cases scenarios</h2>
        <button onClick={navigateToUseCase} className='btn'>{">"}</button>
      </div>
    </div>
  );
};

export default UseCaseRedirect;