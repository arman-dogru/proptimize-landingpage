<<<<<<< HEAD
import React from 'react';
import BgVideo2 from '../Navbar/assets/pexels.mp4';
const BackgroundVideo = () => {
  return (
    <div className="background-video ">
      <video autoPlay muted loop>
        <source src={BgVideo2}type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

=======
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

>>>>>>> 731f0a32ea8466754e7654fb675cb667def7d10c
export default BackgroundVideo;