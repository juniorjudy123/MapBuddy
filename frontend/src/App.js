import React, { useEffect, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PopupCardComponent from './components/PopupCardComponent';
import axios from 'axios'


function App() {
  const [pins, setPins] = useState([])
  const [currentPlaceId, setCurrentPlaceId] = useState(null)
  const [viewport, setViewport] = useState({
    longitude: 76.8671,
    latitude: 8.8607,
    zoom: 4
  });
  const [showPopup, setShowPopup] = useState(true);
  // Function to handle marker clicks

  const handleLocationClick = (id) => {
    console.log('clicked marker id: ' + id);
    setCurrentPlaceId(id);

  }
  // Fetch marker data on component mount

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("/api/pins");
        console.log("fetched marker data:", res.data);
        setPins(res.data);
      } catch (error) {
        console.log('Error fetching marker data:', error)
      }
    }
    getPins();
  }, []);



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
      >

        {pins.map(p => (
          < div key={p._id}>
            <Marker longitude={p.longitude} latitude={p.latitude} anchor="bottom" >

              <LocationOnIcon
                style={{ fontSize: '24px' }}
                className="text-blue-600 cursor-pointer"
                onClick={() => handleLocationClick(p._id)}
              />

            </Marker>


            {p._id === currentPlaceId && (
              <Popup
                longitude={p.longitude}
                latitude={p.latitude}
                anchor="top"
                onClose={() => setCurrentPlaceId(null)}
                closeOnClick={false}
              >
                <PopupCardComponent pin={p} />
              </Popup>
            )})
          </div>))}

      </Map>
    </div >
  );
}

export default App;