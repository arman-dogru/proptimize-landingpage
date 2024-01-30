import React, { useState } from 'react';
import "../HeroPage/HeroPage.css"
import backvid from "../HeroPage/assets/file.mp4";
import backvid2 from "../HeroPage/assets/Back1.mp4";
 const HeroPage = () => {
  let [showVideo,setShowVideo]=useState(false);
  let handleMouseEnter=()=>{
    setShowVideo(true);
  }
  let handleMouseLeave=()=>{
    setShowVideo(false);
  }
  return (
    <div>
       <div className={`ShortIntro ${showVideo ? 'video-background' : ''}`}
           onMouseEnter={handleMouseEnter} 
           onMouseLeave={handleMouseLeave}>
        {showVideo ? (
          <video src={backvid2} autoPlay loop muted className='background-video'></video>
        ) : null}
        <div className='text-content'>
          <h1 className='IntroSlogan'>#DEMYSTIFYREALESTATE</h1>
          <p className='Intro-text'>
            Welcome to Proptimize! We are revolutionizing the way students and young professionals
            approach renting and connecting with the local community. Our platform combines the ease
            of hyperlocal social media with a powerful marketplace, all geared towards making your
            search for the perfect home or roommate both simple and fun.
          </p>
          <button id='Get-Btn'>GET TO KNOW US →</button>
        </div>
      </div>

      <div className='HeroP-Slogan2'>
        <video id='Video-2' src={backvid} autoPlay loop muted />
        <div className='HeroP-Content'>
          <h1>Connect locally then globally.</h1>
          <p>A new era in real estate</p>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
