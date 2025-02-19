import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Explanations from '../../components/Explanations/Explanations';
import GridDisplay from '../../components/GridDisplay/GridDisplay';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';

const UseCase = () => {
  return (
    <div>
      <Navbar />
      <Explanations />
      <GridDisplay />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default UseCase;
