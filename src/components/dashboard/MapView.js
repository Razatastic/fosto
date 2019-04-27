import React, { useEffect } from "react";

export default function MapView() {
  const mapApiKey = process.env.REACT_APP_GM_API_KEY;
  const url =
    "https://maps.googleapis.com/maps/api/js?key=" +
    mapApiKey +
    "&callback=initMap";

  const renderMap = () => {
    loadScript(url);
    window.initMap = initMap;
  };

  const initMap = () => {
    new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  };

  useEffect(() => {
    renderMap();
  }, []);

  return (
    <div id="map" className="map">
      <div>d</div>
    </div>
  );
}

function loadScript(url) {
  const index = window.document.getElementsByTagName("script")[0];
  const script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.differ = true;
  index.parentNode.insertBefore(script, index);
}
