import React from "react";
import "./PolaroidHistory.css";

const PolaroidHistory = ({ image, caption, style, onClick }) => {
  return (
    <div className="polaroid" style={style} onClick={onClick}>
      <div className="polaroid__inner">
        <img src={image} alt={caption} className="polaroid__image" />
        <div className="polaroid__caption">{caption}</div>
      </div>
    </div>
  );
};

export default PolaroidHistory;
