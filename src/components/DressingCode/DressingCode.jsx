import React from "react";
import "./DressingCode.css";
import dressImage from "../../assets/dress.svg";
import suitImage from "../../assets/suit.svg";

const DressingCode = () => {
  return (
    <div className="clothing-container">
      <h1 className="clothing-title">Vestimenta</h1>

      <div className="clothing-sections">
        {/* Women's Section */}
        <div className="clothing-item">
          <div className="clothing-image-container">
            <img
              src={dressImage}
              alt="Women's Clothing Icon"
              className="clothing-image"
            />
          </div>

          <div className="clothing-content">
            <h2 className="clothing-subtitle">Mujeres</h2>
            <p className="clothing-description">
              Como una expresión de tu amor, puedes ayudarnos a construir
              nuestro hogar
            </p>
          </div>
        </div>

        {/* Men's Section */}
        <div className="clothing-item">
          <div className="clothing-image-container">
            <img
              src={suitImage}
              alt="Men's Clothing Icon"
              className="clothing-image"
            />
          </div>

          <div className="clothing-content">
            <h2 className="clothing-subtitle">Hombres</h2>
            <p className="clothing-description">
              Como una expresión de tu amor, puedes ayudarnos a construir
              nuestro hogar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressingCode;
