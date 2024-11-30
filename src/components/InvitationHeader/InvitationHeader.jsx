import React from "react";

import weddingBack from "../../assets/wedding_back2.png";
import invitationWings from "../../assets/invitation_wings.svg";
import dateDot from "../../assets/date_dot.svg";

import "./invitationheader.css";

const InvitationHeader = () => {
  return (
    <div>
      <div className="invitation_greetigs">
        <div></div>
        <div className="background-container">
          <img
            src={weddingBack}
            alt="Background"
            className="background-image"
          />
          <div className="background-overlay"></div>
        </div>
        <div className="welcome-text">
          <h4 className="texto-negrita-sombreado">Con todo el amor de Dios</h4>
          <p className="texto-ligero-sombreado">
            Que con la bendición de Dios nos ha unido a nosotros en un lazo de
            matrimonio sagrado
          </p>
        </div>
        <div className="title-header">
          <h4 className="texto-negrita-sombreado ">LA BODA DE</h4>
          <div className="title-name">
            <img alt="wings" className="wings-header" src={invitationWings} />
            <p className="highlighted-text ">Pablo & Angie</p>
          </div>
          <div>
            <img />
            <p className="texto-negrita-sombreado ">10 12 2025</p>
            <img />
          </div>
        </div>
        <div className="space-blank"></div>
      </div>
    </div>
  );
};

export default InvitationHeader;
