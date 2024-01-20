"use client";
import { useState } from "react";
import Map from "react-map-gl";
const MapPage = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  return (
    // <ReactMapGL
    //   mapStyle='mapbox://styles/longvo010203/clg7koufv000001kpp0j22ubb'
    //   mapboxAccessToken='pk.eyJ1IjoibG9uZ3ZvMDEwMjAzIiwiYSI6ImNsYm5hMWZkZzBwNjYzbm55OTF0N3hjNjQifQ.yk4GNDccRHi6xjD2YGqpjA'
    //   {...viewport}
    //   vi
      
    // ></ReactMapGL>
    <Map
    initialViewState={{
      longitude: 108.2772,
      latitude: 14.0583,
      zoom: 5
    }}
    
    style={{width: "100vw",marginTop:"-7rem",height: "100vh"}}
    mapStyle="mapbox://styles/longvo010203/clg7koufv000001kpp0j22ubb"
    mapboxAccessToken="pk.eyJ1IjoibG9uZ3ZvMDEwMjAzIiwiYSI6ImNsYm5hMWZkZzBwNjYzbm55OTF0N3hjNjQifQ.yk4GNDccRHi6xjD2YGqpjA"
  ></Map>
  );
};

export default MapPage;
