import React from 'react';

const MessageFromEcho = () => {
  return (
    <div>
      <video autoPlay loop muted>
        <source src="path_to_video.mp4" type="video/mp4" />
      </video>
      <p>Message displayed by Echo...</p>
    </div>
  );
};

export default MessageFromEcho;
