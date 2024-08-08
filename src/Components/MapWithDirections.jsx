import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 41.8507300,
  lng: -87.6512600,
};

const MapWithDirections = ({startlat,endlat}) => {
  const [directions, setDirections] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCHDrGJPaqRzCXH7JrfiJEYdyqiKYnRbnk",
  });
 

  const fetchDirections = useCallback(() => {
    if (!isLoaded || !window.google) {
      return;
    }

  let stlat= startlat.lat
  let stlng=startlat.lng
  let enlat=endlat.lat
  let enlng=endlat.lng
  console.log(stlat,stlng,enlat,enlng)

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: { lat: stlat, lng: stlng },
        destination: { lat: enlat,lng: enlng },
      
        // origin: { lat: 17.3297339, lng: 76.83429579999999 },
        // destination: { lat: 12.9716085, lng: 77.59451969999999 },
        travelMode: window.google.maps.TravelMode.WALKING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          console.log(result)
          setDirections(result);
        } else {
          console.error(`Error fetching directions: ${status}`, result);
        }
      }
    );
  }, [isLoaded]);

  useEffect(() => {
    fetchDirections();
  }, [fetchDirections]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{width:"80%"}}>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7}
     
    >
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
    </div>
  );
};

export default MapWithDirections;