'use client'
import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl';
import geoJson from "../../assets/location.json"

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = 77.59130196640416;
  const lat = 13.007519054855095;
  const zoom = 15;
  
  if(mapboxgl){
  mapboxgl.accessToken = 'pk.eyJ1IjoiaHMwNWp1biIsImEiOiJjbGJ5b2wwc2Ewczl2M3JvNWp5MjA4aW5lIn0.0dgJ13L9nKyjexDti0e4zQ';
  }

  useEffect(() => {
    if (map.current) return;
    if(mapboxgl){
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [lng, lat],
    zoom: zoom
    });

    map.current.on("load", function () {
        map.current.loadImage(
          "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
          function (error, image) {
            if (error) throw error;
            map.current.addImage("custom-marker", image);
            map.current.addSource("points", {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: geoJson.features,
              },
            });
            map.current.addLayer({
              id: "points",
              type: "symbol",
              source: "points",
              layout: {
                "icon-image": "custom-marker",
                "text-field": ["get", "title"],
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 1.25],
                "text-anchor": "top",
              },
            });
          }
        );
    });
 
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");
  }
    },[mapboxgl]);
  return (
    <div ref={mapContainer} className="mx-auto h-full rounded-xl  relative w-full " />
  )
}

export default Map