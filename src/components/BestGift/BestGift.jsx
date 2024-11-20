import React from "react";
import "./BestGift.css";

import leftArrowIcon from "../../assets/green_indicator_left.svg";
import rightArrowIcon from "../../assets/green_indicator_right.svg";

const BestGift = () => {
  return (
    <div className="gift-container">
      <h2 className="gift-title">¿El mejor regalo?</h2>

      <p className="gift-highlight">
        Tu oración y bendición es el mejor regalo que podamos recibir
      </p>

      <p className="gift-description">
        Como una expresión de tu amor, puedes ayudarnos a construir nuestro
        hogar
      </p>

      <div className="button-container">
        <img
          src={leftArrowIcon}
          alt="Left decorative arrow"
          className="arrow-icon"
        />
        <button className="gift-button">Enviar Regalo</button>
        <img
          src={rightArrowIcon}
          alt="Right decorative arrow"
          className="arrow-icon"
        />
      </div>
    </div>
  );
};

export default BestGift;
