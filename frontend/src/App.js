import React, { useEffect, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PopupCardComponent from './components/PopupCardComponent';
import axios from 'axios'



function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const [pins, setPins] = useState([])
  const [newPlace, setNewPlace] = useState(null)
  const [currentPlaceId, setCurrentPlaceId] = useState(null)
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    longitude: 30.8025,
    latitude: 26.8206,
    zoom: 4
  });
  const [title, setTitle] = useState(null)
  const [desc, setDesc] = useState(null)
  const [rating, setRating] = useState(1)
  // Function to handle marker clicks

  const handleLocationClick = (id, latitude, longitude) => {
    console.log('Marker clicked:', id);
    setCurrentPlaceId(id);
    setViewport({
      ...viewport,
      latitude: latitude,
      longitude: longitude
    })
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

  const handleAddClick = (e) => {
    const { lng, lat } = e.lngLat
    setNewPlace({
      latitude: lat,
      longitude: lng,
    })
  };
  const handleViewportChange = (newViewport) => {
    setViewport(newViewport);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPin = {
      username: currentUser,
      title: title,
      description: desc,
      rating: rating,
      longitude: newPlace.longitude,
      latitude: newPlace.latitude
    }
    console.log(newPin)
    try {
      const res = await axios.post('/api/pins', newPin)
      setPins([...pins, res.data])
      setNewPlace(null);
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        initialViewState={viewport}
        onViewportChange={handleViewportChange}
        style={{ width: '100VW', height: '100VH' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onDblClick={handleAddClick}
      >

        {pins.map(p => (
          < div key={p._id}>

            <Marker longitude={p.longitude} latitude={p.latitude} anchor="bottom" offetLeft={-viewport.zoom * 3.5} offsetTop={- viewport.zoom * 7}>

              <LocationOnIcon
                style={{ fontSize: viewport.zoom * 7, color: p.username === currentUser ? "tomato" : "slateblue", cursor: 'pointer' }}

                onClick={() => handleLocationClick(p._id, p.latitude, p.longitude, p.longitude)}
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
            )}
          </div>
        ))}
        {newPlace &&
          <Popup
            longitude={newPlace.longitude}
            latitude={newPlace.latitude}
            anchor="top"
            onClose={() => setNewPlace(null)}
            closeOnClick={false}
          >
            <div className=" bg-white rounded-lg  p-4 w-60">
              <form
                className="flex flex-col justify-between h-full  "
                onSubmit={handleSubmit}
              >
                <label
                  htmlFor="title"
                  className="text-orange font-semibold text-lg mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter a title"
                  className="border border-gray-400 rounded px-3 py-2 mb-4"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label
                  htmlFor="review"
                  className="text-orange font-semibold text-lg mb-2"
                >
                  Review
                </label>
                <textarea
                  name="review"
                  placeholder="Say something"
                  rows="3"
                  className="border border-gray-400 rounded px-3 py-2 mb-4"
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
                <label
                  htmlFor="rating"
                  className="text-orange font-semibold text-lg mb-2"
                >
                  Rating
                </label>
                <select
                  className="border border-gray-400 rounded px-3 py-2 mb-4"
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>

                <button className="bg-tomato text-white font-semibold py-2 px-4  rounded border-none cursor-pointer ">
                  Add Pin
                </button>
              </form>
            </div>

          </Popup>

        }

        {currentUser ? <button className="bg-tomato absolute top-5 right-5 m-1 opacity-85 rounded-lg p-3 text-white">Log Out</button> :
          <div className='flex flex-row m-1 top-5 left-5 absolute opacity-85'>
            <button className="bg-teal-600 hover:bg-teal-700 rounded-lg p-3 text-white mx-1">Log In</button>
            <button className="bg-slate-600 hover:bg-slate-700 rounded-lg p-3 text-white mx-1">Register</button>
          </div>
        }

      </Map>
    </div >
  );
}

export default App;