import React from 'react';
import { useNavigate } from 'react-router-dom';

const UseCaseRedirect = () => {
  let navigate = useNavigate();

  const navigateToUseCase = () => {
    navigate('/usecase');
  };

  return (
    <div>
      <h2>Explore Our Use Cases</h2>
      <button onClick={navigateToUseCase}>Learn More</button>
    </div>
  );
};

export default UseCaseRedirect;
