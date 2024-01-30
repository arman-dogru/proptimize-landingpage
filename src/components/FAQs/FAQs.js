import React, { useState } from 'react';
import "../FAQs/FAQ.css";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqsData = [
    {
      question: "About Proptimize",
      answer: `Proptimize is a Hyperlocal social media marketplace platform. It uniquely combines AI-driven property matchmaking with a community-focused approach, enabling users to find ideal homes, connect with compatible roommates, and engage with local neighbourhoods. Property managers and landlords can efficiently manage listings, while service providers reach a wider audience. Proptimize is more than just a social media platform; it's a community where everyone can find their living space while engaging with the local culture and services in form of short-video content and games.`
    },
    {
      question: "Where we operrate?",
      answer: `As a premium platform helping young renters. We operate in top universities only in Canada and California, USA. As for young professionals, we operate in the same geographic - Canada and California. We are actively growing our userbase to other cities as well. Contact us for more info if you want join our platform!`
    },
    {
      question: "Is it safe to find a roommate on Proptimize?",
      answer: `Absolutely. We prioritize user safety by implementing a thorough verification process for all type users and employing a compatibility algorithm for roommate matching to ensure secure and harmonious living arrangements. Every user is verified. We recommend our users to connect virtually prior to meeting in-person using our video conferencing.`
    },
    {
      question: "How can I manage my rental payments through Proptimize?",
      answer: `Proptimize offers integrated financial tools that allow you to securely link your bank account for rent payments, track expenses, and split bills with roommates, all within the platform.`
    },
    {
      question: "What Can Proptimize Offer Beyond Finding Renters and Roommates?",
      answer: `Even if you're not in the market for a new rental or roommate, you can still use our platform! \n 1. Management: Manage your home with your roommates with ease. Track important bills, organize maintenance schedules, and handle other critical aspects of property management with a streamlined, user-friendly interface.\n2. Community Engagement: Dive into the heart of your neighborhood and explore local communities and cultures. Participate in exploring places, local events, and visiting experiences that are especially tailored for you and enhance your living experience.\n3. Financial Convenience: Effortlessly pay your rent and split important bills with roommates or family members. Our platform simplifies these transactions, making financial management hassle-free.\n4. Local Amenities and Service Providers: Whether you need a plumber, electrician, or want to explore local cafes and parks, Proptimize makes it easy to find what you need. Use our AI assistant and AI-powered interactive map to find your neighborhood and its offerings.\n5. Weekly Discovery Challenge: Engage in our Weekly Discovery Challenge to explore new experiences and activities in your area. It’s a fun and interactive way to discover local culture and hidden gems.\n6. Stay Connected: Share your experiences, tips, and hacks with the Proptimize community. Whether you're posting about a local event or sharing a home-living hack, our platform helps you stay connected and contribute to the community. Go out more and experience the world. We are not just a rental platform; we are a community building and harmonious living revolution. #StayStressFree`
    },
    {
      question: "Why should landlords and business owners use our platform?",
      answer: `# For Property Managers and Landlords:\n \n 1. Hybrid Renting Program: Our innovative platform supports a new concept of hybrid renting model unlike on other platforms Landlords can list properties for both short-term (minimum one week) and long-term (three months or more) rentals on the same property/area. This flexibility allows for immediate positive cash flow from short-term rentals while ensuring steady, long-term income from long term income. We also provide insurance covers for any damages by renters. We will also provide upto one month of rent if the renter misses payments. \n \n 2. Efficient Payment Collection: Collect payments effortlessly through our platform, enjoying the convenience of managing both short-term and long-term rental incomes seamlessly.\n \n 3. Market Exposure: Gain significant exposure to a diverse tenant base, including students and young professionals actively seeking rental options. Manage leads, have a simple yet effective CRM to keep a track of your tenants and ensure a pleasant stay. \n \n # For Small Business Owners and Service Providers:\n\n 1. Small businesses and service providers to connect with a vast audience both professional and retail. \n \n  2. Business Visibility: Restaurants, gyms, hair saloons local stores, photographers and more along with service providers like plumbers or electricians can showcase their services, tapping into a large community of potential customers. Post about deals, events and experience to engage our users and help be a part of the local culture and explore.\n 3.Community Engagement: Engage with the local community by participating in events, offering special deals, or showcasing unique services, increasing your brand's visibility and customer base. `
    },
    {
      question:"How do we employ AI?",
      answer:`We integrate advanced AI and machine learning technology to enhance user experience across the platform.\n \n Intelligent Matching Algorithms: Our AI algorithms are tailored for both renters and landlords, ensuring properties and tenants are perfectly matched based on preferences and criteria. You can also watch short videos and informative posts tailored based on our preference and likes specially and make the home experience entertaining while sharing with loved ones. \n \n Generative AI Assistant, Echo: Echo, our AI assistant, provides real-time assistance, answering queries, offering insights, personalized suggestions, guiding users and much more through their Proptimize journey.\n \n Interactive AI Map: This feature allows users to explore neighbourhoods, understand local amenities, and make informed decisions based on real-time data and insights.\n \n These AI-driven features ensure that Proptimize is not just a platform for finding and listing rentals but a comprehensive tool for understanding and engaging with the real estate market in a more informed and efficient way.`
    },
    {
      question:"When are we launching?",
      answer:`We are launching in just one month! Please show your support by signing up below to be part of community! We truly appreciate your support. Be a part of this revolution and lets harmonize co-living worldwide.`
    }
    // Add more FAQs as needed
  ];

  return (
    <div className='FAQ-Container'>
      {faqsData.map((faq, index) => (
        <div className='FAQ-Full' key={index}>
          <div
            className="faq-question"
            onClick={() => handleToggle(index)}
            style={{ cursor: 'pointer' }}
          >
            <span>{index + 1}. </span>
            <span>{faq.question}</span>
            <span id='DropDown-Arrow' className={`arrow ${activeIndex === index ? 'active' : ''}`}>&#9660;</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
