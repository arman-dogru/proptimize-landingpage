import React from 'react';
import { useNavigate } from 'react-router-dom';

const DiscoverRedirect = () => {
  let navigate = useNavigate();

  const navigateToDiscover = () => {
    navigate('/discover');
  };

  return (
    <div>
      <div>
        <h2>About Proptimize</h2>
        <p>Discover how we can help you...</p>
      </div>
      <div>
        <button onClick={navigateToDiscover}>Discover More</button>
      </div>
    </div>
  );
};

export default DiscoverRedirect;
