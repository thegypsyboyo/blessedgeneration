"use client"
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import { ContactMap, MapLocation } from '@/typings';

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

  const mapLocations: MapLocation[] = Array.isArray(contactmap[0]?.coordinates)
  ? contactmap[0].coordinates.map((item, index) => ({
      name: item.name,
      mapCoordinates: item.mapCoordinates[0], // Correct format for coordinates
      index, // Store the index for marker identification
    }))
  : [];

  return (
    <LoadScript googleMapsApiKey="AIzaSyCAQtfMwWULypyXvqatmNBzwXsfaYWLQJw">
    <GoogleMap mapContainerStyle={{ width: '100%', height:"500px" }} center={center} zoom={zoom}>
    {mapLocations.map((marker, index) => (
          <Marker
          key={index}
            position={{
              lat: parseFloat(marker.mapCoordinates.latitude),
              lng: parseFloat(marker.mapCoordinates.longitude),
            }}
            onClick={() => handleMarkerClick(index)}
          >
            {activeMarker === index && (
              <InfoWindow onCloseClick={() => handleMarkerClick(index)}>
                <div>
                  <h3>{marker.name}</h3>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
