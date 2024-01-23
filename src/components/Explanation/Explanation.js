import React from 'react';

const Explanation = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {/* Add explanations in the shape of a cross */}
      <p>Feature 1</p>
      <p>Feature 2</p>
      <p>Feature 3</p>
      {/* ...and so on */}
    </div>
  );
};

export default Explanation;
