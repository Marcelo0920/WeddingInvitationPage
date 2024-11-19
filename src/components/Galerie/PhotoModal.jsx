import React, { useEffect, useRef, useState } from "react";
import "./PhotoModal.css";

const PhotoModal = ({ image, caption, isOpen, onClose, sourceRect }) => {
  const modalRef = useRef(null);
  const [closing, setClosing] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Get the starting position and scale
      const startScale = sourceRect.width / 300; // 300 is modal image width
      const startX = sourceRect.left - (window.innerWidth - 300) / 2;
      const startY = sourceRect.top - (window.innerHeight - 380) / 2;

      // Set CSS variables for the animation
      modalRef.current.style.setProperty("--startX", `${startX}px`);
      modalRef.current.style.setProperty("--startY", `${startY}px`);
      modalRef.current.style.setProperty("--startScale", startScale);
      modalRef.current.style.setProperty(
        "--startRotation",
        sourceRect.rotation
      );

      // Start animations
      modalRef.current.classList.add("picking-up");
      setTimeout(() => setOverlayActive(true), 100);
    }
  }, [isOpen, sourceRect]);

  const handleClose = () => {
    setClosing(true);
    setOverlayActive(false);
    modalRef.current.classList.remove("picking-up");
    modalRef.current.classList.add("putting-down");

    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 600);
  };

  if (!isOpen && !closing) return null;

  return (
    <div
      className={`modal-overlay ${overlayActive ? "active" : ""}`}
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className="modal-polaroid"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-polaroid__inner">
          <img src={image} alt={caption} className="modal-polaroid__image" />
          <div className="modal-polaroid__caption">{caption}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
