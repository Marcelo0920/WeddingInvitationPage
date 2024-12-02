import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import nombreFloreal from "../assets/nombre_floreal.svg";
import buttonLeftIndicator from "../assets/button_left_indicator.svg";
import buttonRightIndicator from "../assets/button_right_indicator.svg";
import invitationIcon from "../assets/invitation_icon.svg";
import weddingBack from "../assets/wedding_back.png";

import "./invitationhome.css";
import Loader from "../components/HamsterLoader/Loader";

const InvitationHome = () => {
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    e.preventDefault();
    setShowLoader(true);

    setTimeout(() => {
      setShowLoader(false);
      navigate("/content");
    }, 1500);
  };

  return (
    <div className="welcome_intro">
      {showLoader && (
        <div className="loader-modal">
          <Loader />
        </div>
      )}

      <div className="background-container">
        <img src={weddingBack} alt="Background" className="background-image" />
        <div className="background-overlay"></div>
      </div>

      <div></div>
      <div className="welcome_words">
        <div></div>
        <div>
          <img
            src={nombreFloreal}
            alt="Diseño floral"
            className="nombre-floreal"
          />
          <h4>Un cordial saludo</h4>
          <p>Te invitamos a participar en nuestra boda</p>
        </div>
        <h1>Pablo & Angie</h1>
      </div>

      <div className="invitation_btn_zone">
        <img src={buttonLeftIndicator} alt="Left indicator" />
        <a
          href="/content"
          className="invitation_btn"
          onClick={handleNavigation}
        >
          <img src={invitationIcon} alt="Invitation" />
        </a>
        <img src={buttonRightIndicator} alt="Right indicator" />
      </div>
    </div>
  );
};

export default InvitationHome;
