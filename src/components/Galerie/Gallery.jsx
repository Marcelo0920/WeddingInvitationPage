import React, { useState } from "react";
import PolaroidImage from "./PolaroidImage";
import "./Gallery.css";

import PhotoModal from "./PhotoModal";

const Gallery = () => {
  const polaroid1 =
    "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142208/gallery5_au1knt.jpg";
  const polaroid2 =
    "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142209/gallery4_hnnxxl.jpg";
  const polaroid3 =
    "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142210/gallery3_gkqy4p.jpg";
  const polaroid4 =
    "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142210/gallery2_pxp2vs.jpg";
  const polaroid5 =
    "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142211/gallery1_zw5bfi.jpg";
  const polaroid6 =
    "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142211/gallery7_xaliwt.jpg";
  const polaroid7 =
    "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142213/gallery9_jsvsbp.jpg";
  const polaroid8 =
    "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142214/gallery10_p3orxb.jpg";
  const polaroid9 =
    "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142215/gallery8_npj9by.jpg";
  const polaroid10 =
    "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142217/gallery11_i1ztuf.jpg";
  const polaroid11 =
    "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142235/gallery6_rxi7rs.jpg";

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [sourceRect, setSourceRect] = useState(null);

  const photos = [
    {
      image: polaroid1,
      caption: "Polaroid 600 Format",
      style: {
        "--rotation": "-5deg",
      },
    },
    {
      image: polaroid2,
      caption: "Polaroid SX-70 Format",
      style: {
        "--rotation": "3deg",
      },
    },
    {
      image: polaroid3,
      caption: "Fujifilm Instax Mini Format",
      style: {
        "--rotation": "-2deg",
      },
    },
    {
      image: polaroid4,
      caption: "Fujifilm Instax Mini Format",
      style: {
        "--rotation": "4deg",
      },
    },
    {
      image: polaroid5,
      caption: "Polaroid Image/Spectra Format",
      style: {
        "--rotation": "-3deg",
      },
    },
    {
      image: polaroid6,
      caption: "Polaroid 600 Format",
      style: {
        "--rotation": "2deg",
      },
    },
    {
      image: polaroid7,
      caption: "Polaroid 600 Format",
      style: {
        "--rotation": "-4deg",
      },
    },
    {
      image: polaroid8,
      caption: "Fujifilm Instax Wide Format",
      style: {
        "--rotation": "8deg",
      },
    },
    {
      image: polaroid9,
      caption: "Fujifilm Instax Mini Format",
      style: {
        "--rotation": "-2deg",
      },
    },
    {
      image: polaroid10,
      caption: "Polaroid Image/Spectra Format",
      style: {
        "--rotation": "4deg",
      },
    },
    {
      image: polaroid11,
      caption: "Polaroid 600 Format",
      style: {
        "--rotation": "-3deg",
      },
    },
    {
      image: polaroid11,
      caption: "Fujifilm Instax Mini Format",
      style: {
        "--rotation": "2deg",
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
          <div className="photo-wrapper" key={index}>
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
          </div>
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
