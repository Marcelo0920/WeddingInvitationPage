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

const InvitationContent = () => {
  return (
    <div>
      <InvitationHeader />
      <div className="background">
        <MeetCard />
        <WeddingCountdown />
        <WeddingEventCard
          icon={WeddingRingsIcon}
          title="Ceremonia"
          timeRange="07:00 - 08:00"
          location="Iglesia Santo Domingo"
          address="Entre las calles Bernabe Sosa y Tao, una cuadra antes del segundo anillo por la avenida mutualista"
          backgroundImage={ring}
        />
        <div style={{ margin: "30px 0px" }}></div>
        <WeddingEventCard
          icon={table}
          title="Fiesta"
          timeRange="11:00 - 14:00"
          location="La Floresta Casa Quinta"
          address="Sobre la avenida Doble Via la Guardia, Comunidad el Bajío No.21"
          backgroundImage={DinnerTable}
        />
        <WeddingMap />
        <OurStory />
        <Gallery />
        <DressingCode />
        <NoKids />
        <BestGift />
        <ConfirmAttendance />
        <FooterSection />
      </div>
    </div>
  );
};

export default InvitationContent;
