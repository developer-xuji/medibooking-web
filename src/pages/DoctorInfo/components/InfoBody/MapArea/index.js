import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

import { LOCATION_ICON } from "../../../../../constants";
import { CLINIC_INFO } from "../../../../../constants";

const Marker = () => (
  <div>
    <img alt="location" src={LOCATION_ICON}></img>
  </div>
);
const Layout = styled.div`
  margin-top: 48px;
`;

class MapArea extends Component {
  static defaultProps = {
    center: {
      lat: CLINIC_INFO.latitude,
      lng: CLINIC_INFO.longitude,
    },
    zoom: 15,
  };

  render() {
    return (
      <Layout>
        <h1>Find Us On Map</h1>
        <div style={{ height: "400px", width: "90%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyA1FTAh1Dgy8gLE_2qg8pXQCwl4F6S_Oac",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Marker lat={CLINIC_INFO.latitude} lng={CLINIC_INFO.longitude} />
          </GoogleMapReact>
        </div>
      </Layout>
    );
  }
}

export default MapArea;
