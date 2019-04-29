import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapApiKey = process.env.REACT_APP_GM_API_KEY;

function MapView({ currentLat, currentLng }) {
  if (currentLat == null || currentLng == null) {
    return <div />;
  }
  return (
    <LoadScript id="script-loader" googleMapsApiKey={mapApiKey}>
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
    </LoadScript>
  );
}

export default MapView;
