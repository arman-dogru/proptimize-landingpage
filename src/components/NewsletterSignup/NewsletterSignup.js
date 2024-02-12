import React from 'react';
import "../NewsletterSignup/NewsletterSignup.css";
const NewsletterSignup = () => {
  return (
    <form className='SignupContent'>
      <h3 className='SignupHeading'>Join our pre-launch community <br/> & get a free guide to renting!</h3>
      <span className='SignupDetails'>
      <label><b>Enter your email here*</b></label><br/>
      <div className='signupform'>
        <input id='SignupInput' type="email"/>
      <button id='SignupButton' type="submit">Sign Up!</button>
      </div>
      
      </span>
    </form>
  );
};

export default NewsletterSignup;
