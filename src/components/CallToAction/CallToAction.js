import React from 'react';

const CallToAction = () => {
  return (
    <form className='SignupContent'>
      <h3 className='SignupHeading'>#BeAProptimizer</h3>
      <h2>Join the Proptimizer Community!</h2>
      <p>Join our pre-launch community and get a free guide about renting.</p>
      <span className='SignupDetails'>
        <label><b>Enter your email here*</b></label><br />
        <input id='SignupInput' type="email" />
        <button id='SignupButton' type="submit">Sign Up!</button>
      </span>
    </form>
  );
};

export default CallToAction;
