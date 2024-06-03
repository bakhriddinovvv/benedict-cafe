import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { IoCloseSharp } from "react-icons/io5";
const MapComponent = (props) => {
  const position = [41.2995, 69.2401];
  console.log();
  return (
    <div
      className={`fixed overflow-y-scroll top-0 right-0 w-full h-full bg-white text-white transform transition-transform ${
        props.mapIsOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-around gap-12  py-3  bg-gray-100 ">
        <p className="text-green-500 font-bold text-[1.3rem] ">Map Content</p>
        <button
          className="text-black  float-right bg-gray-300 rounded-full mt-2 p-2"
          onClick={() => {
            props.setMapIsOpen(false);
          }}
        >
          <IoCloseSharp />
        </button>
      </div>

      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Toshkent shahridagi markaziy nuqta.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
