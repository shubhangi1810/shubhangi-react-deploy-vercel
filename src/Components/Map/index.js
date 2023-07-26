import React, { useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap  } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

const Map = (props) => {
  const { regionInfo } = useSelector((state) => state);
  const coordinates = regionInfo?.coordinates?.length
    ? regionInfo.coordinates
    : [0, 0];

  const MapUpdater = () => {
    const map = useMap();
    useEffect(() => {
      map.setView(coordinates, 5);
    }, [map, coordinates]);

    return null;
  };

  const customIcon = L.icon({
    iconUrl: "./location.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  console.log("coordinates::", coordinates);
  return (
    <MapContainer
      style={{ height: "100vh", width: "100%" }}
      center={coordinates}
      zoom={3}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker icon={customIcon} position={coordinates}>
      </Marker>
      <MapUpdater />
    </MapContainer>
  );
};

export default Map;
