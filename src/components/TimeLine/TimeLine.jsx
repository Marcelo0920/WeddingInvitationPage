import React from "react";
import PolaroidImage from "../Galerie/PolaroidImage";
import "./timeLine.css";

const TimeLine = ({ onPhotoClick }) => {
  const LeafGroup = ({ x, y, rotation, scale = 1 }) => (
    <g transform={`translate(${x},${y}) rotate(${rotation}) scale(${scale})`}>
      <g filter="url(#modernShadow)">
        <path
          d="M 0,0 
                     C 10,-20 25,-30 40,-20
                     C 25,-5 10,0 0,0 Z"
          fill="#2F5233"
        />
        <path
          d="M 5,-5
                     C 12,-15 20,-20 30,-15
                     C 20,-5 12,-2 5,-5 Z"
          fill="#2F5233"
        />
      </g>
    </g>
  );

  const timelineData = [
    {
      year: "2019",
      x: 50,
      y: 460,
      textX: 340,
      textY: 80,
      image:
        "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142208/gallery5_au1knt.jpg",
      caption: "Polaroid 600 Format",
      backContent: "Este es nuestro viaje a Roma",
      leaves: [
        { x: 280, y: 88, rotation: -30, scale: 1 },
        { x: 300, y: 52, rotation: 20, scale: 0.8 },
        { x: 315, y: 90, rotation: -80, scale: 0.9 },
      ],
    },
    {
      year: "2020",
      x: 200,
      y: 750,
      textX: 180,
      textY: 320,
      image:
        "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142209/gallery4_hnnxxl.jpg",
      caption: "Polaroid SX-70 Format",
      backContent: "Este es nuestro viaje a Francia",
      leaves: [
        { x: 223, y: 300, rotation: 30, scale: 1 },
        { x: 250, y: 270, rotation: 90, scale: 0.8 },
        { x: 260, y: 300, rotation: 40, scale: 0.9 },
      ],
    },
    {
      year: "2021",
      x: 50,
      y: 950,
      textX: 360,
      textY: 520,
      image:
        "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142209/gallery4_hnnxxl.jpg",
      caption: "Polaroid SX-70 Format",
      backContent: "Este es nuestro viaje a Holanda",
      leaves: [
        { x: 310, y: 520, rotation: -20, scale: 1 },
        { x: 335, y: 490, rotation: -40, scale: 0.9 },
        { x: 335, y: 490, rotation: 20, scale: 0.8 },
      ],
    },
    {
      year: "2022",
      x: 200,
      y: 1270,
      textX: 180,
      textY: 720,
      image:
        "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142209/gallery4_hnnxxl.jpg",
      caption: "Polaroid SX-70 Format",
      backContent: "Este es nuestro viaje a Alemania",
      leaves: [
        { x: 235, y: 700, rotation: 55, scale: 1 },
        { x: 237, y: 730, rotation: 15, scale: 0.8 },
        { x: 310, y: 712, rotation: -160, scale: 0.9 },
      ],
    },
    {
      year: "2023",
      x: 50,
      y: 1520,
      textX: 355,
      textY: 920,
      image:
        "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142209/gallery4_hnnxxl.jpg",
      caption: "Polaroid SX-70 Format",
      backContent: "Este es nuestro viaje a Suiza",
      leaves: [
        { x: 310, y: 910, rotation: -15, scale: 1 },
        { x: 295, y: 945, rotation: -35, scale: 0.9 },
        { x: 310, y: 910, rotation: 35, scale: 0.8 },
      ],
    },
    {
      year: "2024",
      x: 130,
      y: 1840,
      textX: 330,
      textY: 1145,
      image:
        "https://res.cloudinary.com/dvqsabodr/image/upload/v1733142209/gallery4_hnnxxl.jpg",
      caption: "Polaroid SX-70 Format",
      backContent: "Este es nuestro viaje a Bolivia",
      leaves: [
        { x: 260, y: 1170, rotation: 0, scale: 1 },
        { x: 285, y: 1185, rotation: -40, scale: 0.9 },
        { x: 295, y: 1150, rotation: 50, scale: 0.8 },
      ],
    },
  ];

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <svg viewBox="150 0 300 1350" className="w-full max-w-2xl">
        <defs>
          <filter
            id="modernShadow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0   
                          0 0 0 0 0   
                          0 0 0 0 0   
                          0 0 0 0.3 0"
            />
            <feBlend in="SourceGraphic" />
          </filter>
        </defs>

        <path
          d="M 300,50 
                 C 450,150 150,300 300,450 
                 C 500,600 100,750 300,900 
                 C 450,1000 200,1100 300,1150"
          fill="none"
          stroke="#2F5233"
          strokeWidth="3"
          className="animate-draw"
        />

        {timelineData.map(
          ({
            year,
            textX,
            textY,
            leaves,
            x,
            y,
            image,
            caption,
            backContent,
          }) => (
            <g key={year}>
              {leaves.map((leaf, index) => (
                <LeafGroup
                  key={index}
                  x={leaf.x}
                  y={leaf.y}
                  rotation={leaf.rotation}
                  scale={leaf.scale}
                />
              ))}
              <text
                x={textX}
                y={textY}
                className="text-2xl font-bold"
                fill="#2F5233"
              >
                {year}
              </text>
              {/* We'll keep the rect for reference but make it invisible */}
              <rect
                x={x}
                y={y}
                width={100}
                height={100}
                fill="none"
                stroke="transparent"
                strokeDasharray="5,5"
              />
            </g>
          )
        )}
      </svg>

      {/* Overlay the PolaroidImages on top of the SVG */}
      <div>
        {timelineData.map(
          ({ year, x, y, image, caption, backContent }, index) => (
            <div
              key={year}
              style={{
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
              }}
            >
              <PolaroidImage
                image={image}
                caption={caption}
                backContent={backContent}
                style={{
                  "--rotation": "0deg",
                  "--index": index,
                  cursor: "pointer",
                }}
                onClick={(e) =>
                  onPhotoClick({ image, caption, backContent }, e)
                }
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default TimeLine;
