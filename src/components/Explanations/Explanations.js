import React from 'react';
import "../Explanations/Explanations.css";
import Pic1 from "../Explanations/assets/pic1.jpg";
import Pic2 from "../Explanations/assets/pic2.jpg";
import Pic3 from "../Explanations/assets/pic3.jpg";

const Explanations = () => {
  return (
    <div className='Explanations-Container'>
      <div className='Heading-Images'>
        <div className="image-container">
          <img className='Pic' src={Pic1} alt='Discover' />
          <p className="image-caption">Discover</p>
        </div>
        <div className="image-container">
          <img className='Pic' src={Pic2} alt='use' />
          <p className="image-caption">Use</p>
        </div>
        <div className="image-container">
          <img className='Pic' src={Pic3} alt='case' />
          <p className="image-caption">Case</p>
        </div>
      </div>
      <section className='Explanations-Para'>
        <mark>
          Welcome to the heart of Proptimize, where real-life scenarios bring the versatility of our platform to light. Our use case page is specially designed to showcase how we cater to a diverse array of users - from property managers and landlords streamlining their operations, to young renters in search of their perfect home. We also empower service providers and small business owners to connect effortlessly with a vibrant, young clientele. Each scenario illustrates the unique ways Proptimize enriches experiences, solves challenges, and opens up new opportunities for our users.
        </mark>
      </section>
    </div>
  );
};

export default Explanations;
