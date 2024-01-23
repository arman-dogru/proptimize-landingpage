import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import AboutProptimize from '../../components/AboutProptimize/AboutProptimize';
import Explanation from '../../components/Explanation/Explanation';
import MessageFromEcho from '../../components/MessageFromEcho/MessageFromEcho';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';

const Discover = () => {
  return (
    <div>
      <Navbar />
      <AboutProptimize />
      <Explanation />
      <MessageFromEcho />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Discover;
