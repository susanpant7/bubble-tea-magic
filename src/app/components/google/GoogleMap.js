"use client";
import React, { useEffect, useRef } from "react";
import GoogleMapReact from "google-map-react";

const GoogleMap = ({ center, zoom, markers }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB4Qm8ixFUZFyLMLQWc7S2NntCeK42HJYQ" }}
        defaultCenter={location}
        defaultZoom={17}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
