import React from 'react';
import BgVideo2 from './Videos/BgVideo2.mp4'
const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay muted loop>
        <source src={BgVideo2}type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;