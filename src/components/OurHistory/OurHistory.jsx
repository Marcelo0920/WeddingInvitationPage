import React from "react";
import "./OurStory.css";

import PabloFormal from "../../assets/pablo_formal.jpg";
import AngieFormal from "../../assets/angie_formal.jpg";

const OurStory = () => {
  return (
    <div className="story-container">
      <h1 className="story-title">Nuestra Historia</h1>

      <div className="story-content">
        {/* First Story Section */}
        <div className="story-section">
          <div className="story-image-container">
            <img src={PabloFormal} alt="Groom story" className="story-image" />
          </div>
          <div className="story-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
            mauris odio tellus sem neque, pretium sem sed montes. Enim, cursus
            massa nec massa ultrices mauris donec id volutpat. Libero sed
            placerat morbi proin at nibh. Adipiscing nec pretium egestas.
          </div>
        </div>

        {/* Second Story Section */}
        <div className="story-section">
          <div className="story-image-container">
            <img src={AngieFormal} alt="Bride story" className="story-image" />
          </div>
          <div className="story-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
            mauris odio tellus sem neque, pretium sem sed montes. Enim, cursus
            massa nec massa ultrices mauris donec id volutpat. Libero sed
            placerat morbi proin at nibh. Adipiscing nec pretium egestas.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
