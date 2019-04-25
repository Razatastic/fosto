import React, { useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const mapApiKey = process.env.REACT_APP_GM_API_KEY;

function MapView({ google }) {
  const [selectedPlace, setSelectedPlace] = useState({});
  const [activeMarker, setActiveMarker] = useState({});
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };

  const onMapClicked = props => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };

  return (
    <Map
      google={google}
      onClick={onMapClicked}
      style={{ width: "100%", height: "100%", position: "absolute" }}
      zoom={14}
    >
      <Marker onClick={onMarkerClick} name={"Current location"} />

      <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
        <div>
          <h1>{selectedPlace.name}</h1>
        </div>
      </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: mapApiKey
})(MapView);
