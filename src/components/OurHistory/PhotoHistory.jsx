import React, { useEffect, useRef, useState } from "react";
import "./PhotoHistory.css";

const PhotoHistory = ({
  image,
  caption,
  isOpen,
  onClose,
  sourceRect,
  backContent,
}) => {
  const modalRef = useRef(null);
  const [closing, setClosing] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const startScale = sourceRect.width / 300;
      const startX = sourceRect.left - (window.innerWidth - 300) / 2;
      const startY = sourceRect.top - (window.innerHeight - 380) / 2;

      modalRef.current.style.setProperty("--startX", `${startX}px`);
      modalRef.current.style.setProperty("--startY", `${startY}px`);
      modalRef.current.style.setProperty("--startScale", startScale);
      modalRef.current.style.setProperty(
        "--startRotation",
        sourceRect.rotation
      );

      modalRef.current.classList.add("picking-up");
      setTimeout(() => setOverlayActive(true), 100);
    }
  }, [isOpen, sourceRect]);

  const handleClose = () => {
    setClosing(true);
    setOverlayActive(false);
    setIsFlipped(false);
    modalRef.current.classList.remove("picking-up");
    modalRef.current.classList.add("putting-down");

    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 600);
  };

  const handleFlip = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  if (!isOpen && !closing) return null;

  return (
    <div
      className={`modal-overlay-history ${overlayActive ? "active" : ""}`}
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className={`modal-polaroid-history ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="modal-polaroid__flipper">
          <div className="modal-polaroid__front">
            <div className="modal-polaroid__inner">
              <img
                src={image}
                alt={caption}
                className="modal-polaroid__image"
              />
              <div className="modal-polaroid__caption">{caption}</div>
            </div>
          </div>
          <div className="modal-polaroid__back">
            <div className="modal-polaroid__inner">
              <div className="modal-polaroid__back-content">
                {backContent || "No description available"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoHistory;
