import React from 'react';

const GridDisplay = () => {
  // Display images in a grid
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {/* Populate with images */}
      {[...Array(9)].map((_, i) => (
        <img key={i} src={`path_to_image_${i}.jpg`} alt={`Item ${i}`} />
      ))}
    </div>
  );
};

export default GridDisplay;
