import React, { useState } from "react";
import PolaroidImage from "./PolaroidImage";
import "./Gallery.css";

import polaroid1 from "../../assets/gallery1.jpg";
import polaroid2 from "../../assets/gallery2.jpg";
import polaroid3 from "../../assets/gallery3.jpg";
import polaroid4 from "../../assets/gallery4.jpg";
import polaroid5 from "../../assets/gallery5.jpg";
import polaroid6 from "../../assets/gallery6.jpg";
import polaroid7 from "../../assets/gallery7.jpg";
import polaroid8 from "../../assets/gallery8.jpg";
import polaroid9 from "../../assets/gallery9.jpg";
import polaroid10 from "../../assets/gallery10.jpg";
import polaroid11 from "../../assets/gallery11.jpg";
import PhotoModal from "./PhotoModal";

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [sourceRect, setSourceRect] = useState(null);

  const photos = [
    {
      image: polaroid1,
      caption: "Polaroid 600 Format",
      style: {
        "--rotation": "-5deg",
        position: "absolute",
        left: "-1%",
        top: "5px",
      },
    },
    {
      image: polaroid2,
      caption: "Polaroid SX-70 Format",
      style: {
        "--rotation": "3deg",
        position: "absolute",
        left: "33%",
        top: "20px",
      },
    },
    {
      image: polaroid3,
      caption: "Fujifilm Instax Mini Format",
      style: {
        "--rotation": "-2deg",
        position: "absolute",
        right: "0%",
        top: "80px",
      },
    },
    {
      image: polaroid4,
      caption: "Fujifilm Instax Mini Format",
      style: {
        "--rotation": "4deg",
        position: "absolute",
        left: "0%",
        top: "250px",
      },
    },
    {
      image: polaroid5,
      caption: "Polaroid Image/Spectra Format",
      style: {
        "--rotation": "-3deg",
        position: "absolute",
        right: "25%",
        top: "210px",
      },
    },
    {
      image: polaroid6,
      caption: "Polaroid 600 Format",
      style: {
        "--rotation": "2deg",
        position: "absolute",
        right: "2%",
        top: "240px",
      },
    },
    {
      image: polaroid7,
      caption: "Polaroid 600 Format",
      style: {
        "--rotation": "-4deg",
        position: "absolute",
        right: "10%",
        top: "400px",
      },
    },
    {
      image: polaroid8,
      caption: "Fujifilm Instax Wide Format",
      style: {
        "--rotation": "8deg",
        position: "absolute",
        left: "0%",
        top: "400px",
      },
    },
    {
      image: polaroid9,
      caption: "Fujifilm Instax Mini Format",
      style: {
        "--rotation": "-2deg",
        position: "absolute",
        left: "35%",
        top: "500px",
      },
    },
    {
      image: polaroid10,
      caption: "Polaroid Image/Spectra Format",
      style: {
        "--rotation": "4deg",
        position: "absolute",
        right: "0%",
        top: "580px",
      },
    },
    {
      image: polaroid11,
      caption: "Polaroid 600 Format",
      style: {
        "--rotation": "-3deg",
        position: "absolute",
        left: "5%",
        top: "580px",
      },
    },
    {
      image: polaroid11,
      caption: "Fujifilm Instax Mini Format",
      style: {
        "--rotation": "2deg",
        position: "absolute",
        left: "25%",
        top: "700px",
      },
    },
  ];

  const handlePhotoClick = (photo, event) => {
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
  };
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Galería</h1>

      <div className="gallery-scattered">
        {photos.map((photo, index) => (
          <PolaroidImage
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
        ))}
      </div>

      <div className="gallery-quote">
        <p>
          "And among His verses is that He has created for you wives of your own
          kind, so that you may feel comfortable in them, and He has made
          between you mawaddah and mercy. Verily in that are signs for the
          people who think""
        </p>
        <p className="gallery-quote-source">- AR-RUM 21 -</p>
      </div>

      <PhotoModal
        isOpen={selectedPhoto !== null}
        image={selectedPhoto?.image}
        caption={selectedPhoto?.caption}
        onClose={() => setSelectedPhoto(null)}
        sourceRect={sourceRect}
      />
    </div>
  );
};

export default Gallery;
