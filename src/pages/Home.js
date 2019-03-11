import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Layout } from "antd";

const { Content, Sider } = Layout;
const mapApiKey = process.env.REACT_APP_GM_API_KEY;

export class MapContainer extends Component {
  render() {
    return (
      <Layout>
        <Sider>Sidebar goes here</Sider>
        <Content>
          <Map google={this.props.google} zoom={14}>
            <Marker onClick={this.onMarkerClick} name={"Current location"} />

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
