import React from 'react';
import Echologo from '../MessageFromEcho/assets/Proptimizelogo.jpg'
import '../MessageFromEcho/MessageFromEcho.css';
const MessageFromEcho = () => {
  return (
    <div className='EchoSection'>
      {/* <video autoPlay loop muted>
        <source src="path_to_video.mp4" type="video/mp4" />
      </video> */}
      <div className='EchoText'>
        <h1 className='EchoHeading'>A message from Echo</h1>
        <span className='Icon-Container'><img className='Echo-icon' src={Echologo} alt='EchoIcon'></img><p className='Icon-text'>Echo</p></span>
        <p className='EchoMessage-Text'>"Hey there! My name is Echo and I am your generative AI guide. At Proptimize, my human colleagues
          and I specialize in turning the challenge of finding a home into a delightful experience for students
          and young professionals. We know you're looking for more than just a place to live—you're seeking a
          launchpad for your dreams and ambitions. Whether it's close to campus for easy access to classes or
          in the heart of the city for career opportunities, our platform caters to your unique lifestyle.
          Proptimize offers a smarter alternative with user-friendly tools, AI-driven insights, and a
          community-centric approach. Here, you'll find living spaces that resonate with your academic goals
          and professional aspirations, ensuring every day is a step towards success in a home that truly
          feels like yours. Ask me or my human collaborators to help find you a place where you can relax
          and focus more on yourself and personal goals; less about parking your car in the wrong area or
          finding a plumber to fix those mommy issues. See you on the other side."
        </p>
      </div>
    </div>
  );
};

export default MessageFromEcho;
