import React from "react";

import nombreFloreal from "../assets/nombre_floreal.svg";
import buttonLeftIndicator from "../assets/button_left_indicator.svg";
import buttonRightIndicator from "../assets/button_right_indicator.svg";
import invitationIcon from "../assets/invitation_icon.svg";
import weddingBack from "../assets/wedding_back.png";

import "./invitationhome.css";

const InvitationHome = () => {
  return (
    <div className="welcome_intro">
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
        <img src={buttonLeftIndicator} />
        <div className="invitation_btn">
          <img src={invitationIcon} />
          <p>Abrir invitación</p>
        </div>
        <img src={buttonRightIndicator} />
      </div>
    </div>
  );
};

export default InvitationHome;
