import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./WeddingMap.css";

// Fix for default marker icon
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const WeddingMap = () => {
  // La Floresta Casa Quinta coordinates
  const coordinates = [-17.857431, -63.259971]; // Example coordinates for Santa Cruz, Bolivia

  return (
    <div className="map-container">
      <MapContainer center={coordinates} zoom={13} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={coordinates}>
          <Popup>
            <b>La Floresta Casa Quinta</b>
            <br />
            Sobre la avenida Doble Via la Guardia,
            <br />
            Comunidad el Bajío No.21
          </Popup>
        </Marker>
      </MapContainer>

      <p className="map-message">
        Nos haría felices contar con su presencia y amor en nuestro día más
        importante como pareja.
      </p>
    </div>
  );
};

export default WeddingMap;
