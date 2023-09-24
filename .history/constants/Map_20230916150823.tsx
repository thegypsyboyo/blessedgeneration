"use client"
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import { ContactMap } from '@/typings';

interface MapProps {
  // center: { lat: number; lng: number };
  // zoom: number;
  // markers: { lat: number; lng: number }[];
  height: string;
}

type  Props = {
  contactmap: ContactMap[]
}

const Map = ({contactmap}:Props) => {
  
  const center = { lat: 51.5074, lng: -0.1278 }; // Default center (London, UK)
  const zoom = 10; // Default zoom level
  const defaultMarkers: { lat: number; lng: number; name: string }[] = []; // Default empty array of markers

  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const handleMarkerClick = (index: number) => {
    setActiveMarker(index === activeMarker ? null : index);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCAQtfMwWULypyXvqatmNBzwXsfaYWLQJw">
      <GoogleMap mapContainerStyle={{ width: '100%', height: "650px" }} center={center} zoom={zoom}>
        {defaultMarkers.map((marker, index) => (
          <Marker
            key={index}
            position={marker}
            onClick={() => handleMarkerClick(index)}
          >
            {activeMarker === index && (
              <InfoWindow onCloseClick={() => handleMarkerClick(index)}>
                <div>{marker.name}</div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
