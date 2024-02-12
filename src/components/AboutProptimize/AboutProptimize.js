import React from "react";
import "../AboutProptimize/AboutProptimize.css";
import AboutImg from "../AboutProptimize/assets/Young-Professional-Housing.jpg";
const AboutProptimize = () => {
  return (
    <div className="About-Container ">
      <div className="About-Prop">
        <div className="About-Content">
          <h1 className="About-Prop-Heading">About</h1>
          <h2 className="About-Prop-SubHeading">Meet Proptimize</h2>
          <p className="About-Prop-Para">
            Welcome to Proptimize! We are revolutionizing the way students and
            young professionals approach renting and connecting with the local
            community. Our platform combines the ease of hyperlocal social media
            with a powerful marketplace, all geared towards making your search
            for the perfect home or roommate both simple and fun. Connect with
            other students and young grads facing the same problem you are while
            house hunting. With our advanced AI and machine learning technology,
            we tackle the complexities of real estate, focusing on finding you a
            safe and compatible living space. Stay connected with your local
            community even if you aren't renting by staying updated with events,
            amenities, communities and explore the city. Ne home. Not just
            virtually, physically . Share your experiences with family and
            friends, connect with others with similar interests in your area. At
            Proptimize, we're more than just a platform; we're a community
            empowering you with knowledge and tools for a seamless, transparent,
            and supportive home-finding and community engagement experience. We
            want to help connect individuals with not only their homes but also
            experiences in the area they are in.
          </p>
          {/* Social media links */}
        </div>
        
      </div><div className="About-Image-prop">
          <img className="AboutIMG" src={AboutImg} alt="About" />
        </div>
    </div>
  );
};

export default AboutProptimize;
