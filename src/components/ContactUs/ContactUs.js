import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <div>
        <address>
          Your Address Here
        </address>
      </div>
      <div>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
