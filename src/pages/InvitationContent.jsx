import React from "react";
import InvitationHeader from "../components/InvitationHeader/InvitationHeader";
import MeetCard from "../components/MeetCard.jsx/MeetCard";
import WeddingCountdown from "../components/WeddingCountdown/WeddingCountdown";
import WeddingRingsIcon from "../assets/wedding-ring.svg";
import ring from "../assets/ring.png";
import WeddingEventCard from "../components/WeddingEventCard/WeedingEventCard";
import table from "../assets/dinner-table.svg";
import DinnerTable from "../assets/dinnertable.png";
import WeddingMap from "../components/WeddingMap/WeddingMap";
import OurStory from "../components/OurHistory/OurHistory";
import Gallery from "../components/Galerie/Gallery";
import DressingCode from "../components/DressingCode/DressingCode";
import NoKids from "../components/NoKids/NoKids";
import BestGift from "../components/BestGift/BestGift";
import ConfirmAttendance from "../components/ConfirmAttendance/ConfirmAttendance";
import FooterSection from "../components/Footer/FooterSection";

import sectionDivider from "../assets/sectionDivider.svg";
import sectionFirstDivider from "../assets/sectionFirstDivider.svg";

const InvitationContent = () => {
  return (
    <div>
      <InvitationHeader />
      <div className="background">
        <MeetCard />
        <div className="divider">
          <img src={sectionFirstDivider} />
        </div>
        <WeddingCountdown />
        <div className="wedding-section-wrapper">
          <WeddingEventCard
            icon={WeddingRingsIcon}
            title="Ceremonia"
            timeRange="07:00 - 08:00"
            location="Iglesia Santo Domingo"
            address="Entre las calles Bernabe Sosa y Tao, una cuadra antes del segundo anillo por la avenida mutualista"
            backgroundImage={ring}
          />
          <div className="wedding-card-separator"></div>
          <WeddingEventCard
            icon={table}
            title="Fiesta"
            timeRange="11:00 - 14:00"
            location="La Floresta Casa Quinta"
            address="Sobre la avenida Doble Via la Guardia, Comunidad el Bajío No.21"
            backgroundImage={DinnerTable}
          />
        </div>
        <WeddingMap />
        <div className="divider">
          <img src={sectionDivider} />
        </div>
        {/*    <OurStory />
        <div className="divider">
          <img src={sectionDivider} />
        </div>
        <Gallery />
        <div className="divider">
          <img src={sectionDivider} />
        </div> */}
        <DressingCode />
        <div className="divider">
          <img src={sectionDivider} />
        </div>
        <NoKids />
        <div className="divider">
          <img src={sectionDivider} />
        </div>
        <BestGift />

        <div className="divider">
          <img src={sectionDivider} />
        </div>

        <ConfirmAttendance />
        <FooterSection />
      </div>
    </div>
  );
};

export default InvitationContent;
