import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Layout } from "antd";
import Sidebar from "../components/Sidebar";

const { Content } = Layout;

const mapApiKey = process.env.REACT_APP_GM_API_KEY;

export class MapContainer extends Component {
  render() {
    return (
      <Layout>
        <Sidebar />
        <Content>
          <Map
            google={this.props.google}
            zoom={14}
            style={{ height: "100%", width: "100%" }}
            className=" maps"
          >
            <Marker onClick={this.onMarkerClick} name={"Current Location"} />
            <InfoWindow onClose={this.onInfoWindowClose} />
          </Map>
        </Content>
      </Layout>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: mapApiKey
})(MapContainer);
