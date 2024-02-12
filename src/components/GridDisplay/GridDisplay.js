import React from "react";
import "../GridDisplay/GridDisplay.css";
import IM1 from "../GridDisplay/assets/IM0.jpg";
import IM2 from "../GridDisplay/assets/IM1.jpg";
import IM3 from "../GridDisplay/assets/IM2.jpg";
import IM4 from "../GridDisplay/assets/IM3.jpg";
import IM5 from "../GridDisplay/assets/IM4.jpg";
import IM6 from "../GridDisplay/assets/IM5.jpg";
import IM7 from "../GridDisplay/assets/IM6.jpg";

const GridDisplay = () => {
  // Display images in a grid
  return (
    <div
      className="Grid-Full"
      // style={{
      //   display: "grid",
      //   gridTemplateColumns: 'repeat(3, 1fr)',
      // }}
    >
      <img className="Grid-Image" src={IM1} alt="IM1"></img>
      <img className="Grid-Image" src={IM2} alt="IM2"></img>
      <img className="Grid-Image" src={IM3} alt="IM3"></img>
      <img className="Grid-Image" src={IM4} alt="IM4"></img>
      <img className="Grid-Image" src={IM5} alt="IM5"></img>
      <img className="Grid-Image" src={IM6} alt="IM6"></img>
      <img className="Grid-Image" src={IM7} alt="IM7"></img>
    </div>
  );
};

export default GridDisplay;
