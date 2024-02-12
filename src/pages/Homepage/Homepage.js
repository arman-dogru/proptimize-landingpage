import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroPage from '../../components/HeroPage/HeroPage';
import ExploreGrid from '../../components/ExploreGrid/ExploreGrid';
import UseCaseRedirect from '../../components/UseCaseRedirect/UseCaseRedirect';
import DiscoverRedirect from '../../components/DiscoverRedirect/DiscoverRedirect';
import NewsletterSignup from '../../components/NewsletterSignup/NewsletterSignup';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';

const Homepage = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <HeroPage />
      <ExploreGrid />
      <UseCaseRedirect />
      <DiscoverRedirect />
      <NewsletterSignup />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Homepage;
