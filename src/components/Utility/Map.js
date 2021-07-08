// Packages
import { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  margin: "0 auto",
  width: "80%",
  height: "600px",
};

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        containerStyle={containerStyle}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBtxxvXw4SJsBTvlAoysFfIxTmZMRccKyU",
})(MapContainer);
