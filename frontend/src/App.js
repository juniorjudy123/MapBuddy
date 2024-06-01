import React from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <div className="App">
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        initialViewState={{
          longitude: 76.2673,
          latitude: 9.9312,
          zoom: 6
        }}
        style={{ width: '100VW', height: '100VH' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
}

export default App;
