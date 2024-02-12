import React from "react";
import "../ContactUs/ContactUs.css";
const ContactUs = () => {
  return (
    <div className="ContactUs-Content">
      <div className="Address-Content">
        <section className="Nav-Section">
          <h1>More</h1>
          <h1 className="Conatct-Navigation">Blog & Resources.</h1>
          <h1 className="Conatct-Navigation">Contact us.</h1>
        </section>
        <section className="Address-Section">
          <h3>Get in Touch</h3>
          <address>
            <address> 50 Laurier Ave E, Ottawa Canada, K1H 1N7</address>
            <br />
            <address >647-835-9139</address>
            <br />
            <a id="Mail" href="mailto:info@proptimize.co">
              info@proptimize.co
            </a>
          </address>
        </section>
      </div>
      <div className="UserDetails-Content">
        <form className="UserDetails-form">
            <label>First Name:</label><input className="UserDetails-input" type="text" name="FirstName" />
            <br />
            <label>Last Name:</label><input className="UserDetails-input" type="text" name="LastName" />
            <br />
            <label>Email *</label><input className="UserDetails-input-Email" type="email" />
            <br />
            <label>Message</label><br/><textarea className="UserDetails-input-Message"></textarea>
            <br />
            <button id="UserDetails-SendBtn" type="submit">
              {" "}
              Send
            </button>
          <div>
            
            
            
            
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
