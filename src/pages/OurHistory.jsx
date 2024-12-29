import React, { useState } from "react";
import invitationWings from "../assets/historyWings.svg";
import "./ourHistory.css";
import sectionFirstDivider from "../assets/sectionFirstDivider.svg";
import TimeLine from "../components/TimeLine/TimeLine";
import FooterSection from "../components/Footer/FooterSection";
import PolaroidHistory from "../components/OurHistory/PolaroidHistory";
import PhotoHistory from "../components/OurHistory/PhotoHistory";

const OurHistory = () => {
  const polaroid1 =
    "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142208/gallery5_au1knt.jpg";
  const polaroid2 =
    "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142209/gallery4_hnnxxl.jpg";

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [sourceRect, setSourceRect] = useState(null);

  const handlePhotoClick = (photo, event) => {
    console.log(photo);
    const rect = event.currentTarget.getBoundingClientRect();
    const rotation = getComputedStyle(event.currentTarget).getPropertyValue(
      "--rotation"
    );

    setSourceRect({
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
      rotation: rotation,
    });
    setSelectedPhoto(photo);
    console.log(selectedPhoto);
  };

  const photos = [
    {
      image: polaroid1,
      caption: "Polaroid 600 Format",
      style: {
        "--rotation": "0deg",
      },
    },
    {
      image: polaroid2,
      caption: "Polaroid SX-70 Format",
      style: {
        "--rotation": "0deg",
      },
    },
  ];

  return (
    <div style={{ maxWidth: "100vw" }}>
      <PhotoHistory
        isOpen={selectedPhoto !== null}
        image={selectedPhoto?.image}
        caption={selectedPhoto?.caption}
        backContent={selectedPhoto?.backContent}
        onClose={() => setSelectedPhoto(null)}
        sourceRect={sourceRect}
      />
      <div className="history-title">
        <img alt="wings" className="history-wings" src={invitationWings} />
        <p className="">Pablo & Angie</p>
      </div>
      <div className="photo-history-header">
        {photos.map((photo, index) => (
          <div className="history-photo-wrapper" key={index}>
            <PolaroidHistory
              key={index}
              image={photo.image}
              caption={photo.caption}
              style={{
                ...photo.style,
                "--index": index,
                cursor: "pointer",
              }}
              onClick={(e) => handlePhotoClick(photo, e)}
            />
          </div>
        ))}
      </div>

      <div className="history-divider">
        <img src={sectionFirstDivider} />
      </div>

      <TimeLine onPhotoClick={handlePhotoClick} />
      <FooterSection />
    </div>
  );
};

export default OurHistory;
