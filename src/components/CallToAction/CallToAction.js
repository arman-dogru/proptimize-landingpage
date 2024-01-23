import React from 'react';

const CallToAction = () => {
  return (
    <div>
      <h2>Join Us Now!</h2>
      <p>Slogan or Call to Action Text</p>
      <form>
        <input type="email" placeholder="Your Email" />
        <button type="submit">Subscribe</button>
      </form>
      <video autoPlay loop muted>
        <source src="path_to_background_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default CallToAction;
