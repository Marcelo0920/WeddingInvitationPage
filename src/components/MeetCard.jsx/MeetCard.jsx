import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

import pabloMeet from "../../assets/pablo_meet1.jpg";
import angieMeet from "../../assets/angie_meet1.jpg";

import "./meetcard.css";
import { Link } from "react-router-dom";

const MeetCard = () => {
  return (
    <div className="background">
      <div className="container">
        <h1 className="title-meet">Conoce a la Pareja</h1>

        <p className="subtitle">
          Gloria a Dios quien ha creado a las criaturas en parejas. Por favor,
          aceptanos y bendicenos Dios.
        </p>

        <div className="profile_wrapper">
          <div className="profile">
            <div className="profile__image-wrapper">
              <img src={pabloMeet} alt="Profile 1" className="profile__image" />
            </div>
            <h2 className="profile__name ">Pablo Vargas Avila</h2>
            <p className="profile__label">Hijo de</p>
            <p className="profile__parents">Sr. Mateo & Sra. Yvonne</p>
            <div className="social-icons">
              <FaInstagram className="social-icons__icon" />
              <FaTwitter className="social-icons__icon" />
              <FaFacebook className="social-icons__icon" />
            </div>
          </div>

          <div className="profile">
            <div className="profile__image-wrapper">
              <img src={angieMeet} alt="Profile 2" className="profile__image" />
            </div>
            <h2 className="profile__name">Maria de los Angeles</h2>
            <p className="profile__label">Hija de</p>
            <p className="profile__parents">Sr. Angeles & Sra. Maria</p>
            <div className="social-icons">
              <FaInstagram className="social-icons__icon" />
              <FaTwitter className="social-icons__icon" />
              <FaFacebook className="social-icons__icon" />
            </div>
          </div>
        </div>

        <Link to="/ourhistory" className="history-button">
          Nuestra Historia
        </Link>
      </div>
    </div>
  );
};

export default MeetCard;
