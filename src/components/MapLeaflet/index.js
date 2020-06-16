import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import './map.css'

const customMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png",
  iconSize: [18, 30]
});

const MapLeaflet = ({ mapPoints }) => {
  return (
    <div id="map">
      <Map className="map" center={[-15.8290576, -61.1140448]} zoom={4} 
      zoomControl={false} 
      scrollWheelZoom={false} 
      doubleClickZoom={false} 
      touchZoom={false}
      zoomAnimation={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {
          mapPoints !== undefined && mapPoints.map(point => (
            <Marker position={[point.latitude, point.longitude]} icon={customMarker}>
              <Popup>
                {`${point.city} `}
                </Popup>
            </Marker>
          ))
        }
      </Map>
    </div>
  );
}

export default MapLeaflet




