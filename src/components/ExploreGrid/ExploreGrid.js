import React from 'react';

const ExploreGrid = () => {
  const gridItems = [...Array(9)].map((_, i) => (
    <div key={i}>
      <img src={`path_to_image_${i}.jpg`} alt={`Grid ${i}`} />
      <p>Text for image {i}</p>
    </div>
  ));

  return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>{gridItems}</div>;
};

export default ExploreGrid;
