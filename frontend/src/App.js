import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function App() {
  const [viewport, setViewport] = useState({
    longitude: 76.8671,
    latitude: 8.8607,
    zoom: 10
  });
  const [showPopup, setShowPopup] = useState(true);



  const handleViewportChange = (newViewport) => {
    setViewport(newViewport);
  }

  return (
    <div className="App">
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        initialViewState={viewport}
        onViewportChange={handleViewportChange}
        style={{ width: '100VW', height: '100VH' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      > <Marker longitude={76.8671} latitude={8.8607} anchor="bottom" >
          <LocationOnIcon
            style={{ fontSize: `${viewport.zoom * 7}px` }}
            className=" text-blue-600"
          />
        </Marker>
        {showPopup && (
          <Popup longitude={76.8671} latitude={8.8607}
            anchor="top"
            onClose={() => setShowPopup(false)}>
            You are here
          </Popup>)}
      </Map>
    </div>
  );
}

export default App;
