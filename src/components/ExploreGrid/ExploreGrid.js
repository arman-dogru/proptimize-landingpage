import React from 'react';
import "./ExploreGrid.css"; // Import CSS file for styling

const imagesData = [
  { src: require(`./assets/Pic_0.jpg`), text: 'An Urban Explorer.', para:'Use our Neighbourhood Guide with an AI-powered map with real-time data about local amenities, events, pollution rates, traffic, and more. Be connected locally to discover your perfect urban space.' },
  { src: require(`./assets/Pic_1.jpg`), text: 'Find your ideal living buddy.',para:'Connect with people based on lifestyles and preferences to enjoy a harmonious living experience and say goodbye to roommate roulette and hello to compatible co-living.' },
  { src: require(`./assets/Pic_2.jpg`), text: 'Rental Rendezvous: Find the perfect retreat & nearby services',para:'Dive into our extensive catalog of rental properties, their amenities, and a list of essential service providers in the nearby area. Whether its a cozy apartment or a reliable mover, we have curated the best options to ensure smooth and stress-free transitions.' },
  { src: require(`./assets/Pic_3.jpg`), text: 'Stay connected.',para:'Make your home search a shared experience. Easily share listings and updates with friends and family, turning your quest for the perfect home into a collaborative adventure.' },
  { src: require(`./assets/Pic_4.jpg`), text: 'Outsource your search.',para:"Let us handle it. We'll give you the idea of a match—from the right neighborhood to the perfect roommate. Relax and prepare for your next big move." },
  { src: require(`./assets/Pic_5.jpg`), text: 'Meet Echo', para:'Echo is our AI-generative guide that helps a young renter like you on their home-finding adventure. From quick answers to smart suggestions, Echo is always ready to assist in your home quest.' }
];

const ExploreGrid = () => {
  const gridItems = imagesData.map((image, i) => (
    <div key={i} className={`grid-item-${i % 2 === 0 ? 'even' : 'odd'}`}>
      {i % 2 === 0 ? (
        <>
          <div className='Image-Section'>
            <img className='grid-img' src={image.src} alt={`Grid ${i}`} />
          </div>
          <div className='Text-Section'>
            <h3 className="Image-Heading">{image.text}</h3>
            <p className='Image-P'>{image.para}</p> 
            <button className='Text-Know-Btn'> KNOW MORE</button>
          </div>
        </>
      ) : (
        <>
          <div className='Text-Section-odd'>
            <h3 className="Image-Heading">{image.text}</h3>
            <p className='Image-P'>{image.para}</p> 
            <button className='Text-Know-Btn'> KNOW MORE</button>
          </div>
          <div className='Image-Section-odd'>
            <img className='grid-img' src={image.src} alt={`Grid ${i}`} />
          </div>
        </>
      )}
    </div>
  ));

  return <div className="grid-container">{gridItems}</div>;
};

export default ExploreGrid;
