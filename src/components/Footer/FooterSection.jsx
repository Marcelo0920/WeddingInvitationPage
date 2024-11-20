import React from "react";
import "./FooterSection.css";

import backgroundImage from "../../assets/footerBackground.jpg";
import topLeafLeft from "../../assets/left_wing.svg";
import topLeafRight from "../../assets/right_wing.svg";
import bottomLeafIcon from "../../assets/bottom_flower.svg";
import scrollUpIcon from "../../assets/top_button.svg";

const FooterSection = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <img
          src={backgroundImage}
          alt="Pablo and Angie in Florence"
          className="footer-background"
        />

        <div className="footer-overlay"></div>

        <button
          className="scroll-up-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={scrollUpIcon} alt="Scroll to top" className="scroll-icon" />
        </button>

        <div className="names-container">
          <img src={topLeafLeft} alt="" className="leaf top-left" />
          <img src={topLeafRight} alt="" className="leaf top-right" />
          <h2 className="names">Pablo & Angie</h2>
          <img src={bottomLeafIcon} alt="" className="leaf bottom" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
