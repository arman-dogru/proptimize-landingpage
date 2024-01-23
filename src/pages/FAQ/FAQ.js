import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FAQs from '../../components/FAQs/FAQs';
import CallToAction from '../../components/CallToAction/CallToAction';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';

const FAQ = () => {
  return (
    <div>
      <Navbar />
      <FAQs />
      <CallToAction />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default FAQ;
