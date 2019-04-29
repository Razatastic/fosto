import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

function MapView({ currentLat, currentLng }) {
  if (currentLat == null || currentLng == null) {
    return <div />;
  }
  return (
    <GoogleMap
      id="circle-example"
      mapContainerStyle={{
        height: "600px",
        width: "1000px"
      }}
      zoom={17}
      center={{
        lat: currentLat,
        lng: currentLng
      }}
    >
      <Marker
        onLoad={marker => {
          console.log("marker: ", marker);
        }}
        position={{
          lat: currentLat,
          lng: currentLng
        }}
      />
    </GoogleMap>
  );
}

export default MapView;
