import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./WeddingEventCard.css";

const WeddingEventCard = ({
  icon,
  title,
  timeRange,
  location,
  address,
  backgroundImage,
}) => {
  return (
    <div
      className="event-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="event-card__overlay">
        <div className="event-card__content">
          <img src={icon} className="event-card__icon" />

          <h2 className="event-card__title">{title}</h2>

          <div className="event-card__divider"></div>

          <div className="event-card__time">{timeRange}</div>

          <h3 className="event-card__location">{location}</h3>

          <p className="event-card__address">{address}</p>

          <button className="event-card__map-button">
            <FaMapMarkerAlt /> Abrir Mapa
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeddingEventCard;
