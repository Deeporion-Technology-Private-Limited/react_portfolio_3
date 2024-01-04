import React from "react";
import img1 from "../images/img1.png";
import "./petComponent.css";
const PetCare = () => {
  return (
    <div className="petcare_wrapper">
      <div className="petcare_bg">
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default PetCare;
