"use client"

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapProps {
  center: { lat: number; lng: number };
  zoom: number;
  markers: { lat: number; lng: number }[];
}

const Map: React.FC<MapProps> = ({ center, zoom, markers }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCAQtfMwWULypyXvqatmNBzwXsfaYWLQJw">
      <GoogleMap mapContainerStyle={{ width: '100%', height: '400px' }} center={center} zoom={zoom}>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
