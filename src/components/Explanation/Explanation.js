import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Explanation/Explanation.css";
const Explanation = () => {
  let navigate = useNavigate();
  const navigateToDiscover = () => {
    navigate('/usecase');
  };
  return (
    <div className='Explaination-Container'>
      <h1 className='Explanination-Heading'>How do we help you find a home?</h1>
      <div className='Text-Conatiner'>
        <div className='Text-Para1'>
          <section>
            <p className='Para-Heading'>Interactive map and Area Amenities.</p>
            <p className='Para-Content'>Navigate potential neighbourhoods with our interactive map. Be updated with local amenities, events in the area and much more. Ask our AI to find you things to do, experiences or places to visit with or without friends and family in your area. Play our area amenities game to discover what's nearby, making your search both informative and fun.</p>
          </section>
        </div>
        <div className='Text-Para2'>
          
            <p className='Para-Heading'>Meet Echo.</p>
            <p className='Para-Content'>Discover your ideal home using our AI-driven search tools. Have a 24/7 available AI assistant whether you're exploring listings or seeking answers to your queries, Echo is there to guide you. Ask echo create scripts, personalized suggestions, descriptions, lists and more. Echo knows you like your best friend. </p>
        </div>
        <div className='Text-Para3'>
          <section>
            <p className='Para-Heading'>Matchmaking.</p>
            <p className='Para-Content'>Seeking a roommate? Take the stress out by using our platform that matches you with compatible roommates and rental buildings, ensuring a harmonious living arrangement. If you prefer, outsource the entire roommate or room-finding process to us for a completely hands-off experience.</p>
          </section>
        </div>
        <div className='Text-Para2'>
          <section>
            <p className='Para-Heading'>Finding rental buildings & Service providers.</p>
            <p className='Para-Content'>Gain access to a curated list of rental buildings and reliable service providers, from plumbers to movers. We ensure that the services you need are just a few clicks away. All our listings and service providers are verified and easy to connect especially with young renters.</p>
          </section>
        </div>
        <div className='Text-Para1'>
          <section>
            <p className='Para-Heading'>Stay Connected. </p>
            <p className='Para-Content'>Share listings, places, things to do, local culture, experiences, and tips with friends and family. Our platform fosters a vibrant community, encouraging connections and shared experiences in your rental journey. </p>
          </section>
        </div>
        <div className='Text-Para2'>
          <section>
            <p className='Para-Heading'>Safety and Security. </p>
            <p className='Para-Content'>We prioritize your safety, offering scam-free experiences and verified listings. Proptimize is committed to providing a secure platform where you can search with peace of mind. We are only focused on providing students and young professionals a platform to simplify their home.</p>
          </section>
        </div>
        <div className='Text-Para3'>
          <section>
            <p className='Para-Heading'>Weekly discovery challenge.</p>
            <p className='Para-Content'>Each week, embark on a new adventure with our Discovery Challenge. Explore and learn about local cultures, amenities, and hidden gems in your area, turning your search for a home into an exciting journey of cultural exploration and fun. Find other like minded users on these quests.</p>
          </section>
        </div>
        <div className='Text-Para2'>
          <section>
            <p className='Para-Heading'>Management.</p>
            <p className='Para-Content'>Securely link your bank account for smooth rent transactions. We simplify management within your home and financial, from paying rent to splitting bills with roommates. Also, create a group and assign tasks among roommates, keep a track and have a harmony at home. Stay connected with your roommates for sustainable co-living.</p>
          </section>
        </div>
        <div className='Text-Para1'>
          <section>
            <p className='Para-Heading'>Data Security. </p>
            <p className='Para-Content'>Your privacy is our priority. We employ advanced security measures to safeguard your personal data. Rest assured, we do not use or share your sensitive financial information to train our AI algorithms, ensuring your data remains confidential and protected.</p>
          </section>
        </div>
      </div>
      <div className='Discover-Section'>
        <mark className='Discover-Para'>Discover how Proptimize can redefine your approach to finding a home. Whether you're a student, a professional, or simply seeking a new adventure, our platform caters to a multitude of needs with ease, security, and a sense of community.</mark>
        <div><button className='Discover-btn' onClick={navigateToDiscover}>{">"}</button></div>
      </div>
     
      
    </div>
  );
};

export default Explanation;
