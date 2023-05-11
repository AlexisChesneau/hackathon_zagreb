import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Api() {
   const [environnement, setEnvironnement] = useState("")
    
   useEffect(() =>{
    axios
     .get('https://api.breezometer.com/')
     .then()
   })

   function changeToAirQuality() {
    setEnvironnement('https://tiles.breezometer.com/v1/air-quality/pm25/current-conditions/{z}/{x}/{y}.png?key=0f9b19c1eb6c451499c04edb155646da')
   }
   
   function changeToPollen() {
    setEnvironnement('https://tiles.breezometer.com/v1/pollen/tree/forecast/daily/{z}/{x}/{y}.png?key=0f9b19c1eb6c451499c04edb155646da')
   }
  
  function changeToWeather() {
   setEnvironnement('https://api.breezometer.com/weather/v1/forecast/hourly?lat=48.857456&lon=2.354611&key=0f9b19c1eb6c451499c04edb155646da&hours=3')
  }

    const apiKey = "0f9b19c1eb6c451499c04edb155646da"; // Your BreezoMeter API key
      const mapBoxAccessToken = "pk.eyJ1IjoidmljdG9yZmFiaWVyIiwiYSI6ImNsaGozOXVucjBlODMzcm11YTlkeDhnZHoifQ.211Um0EBIdXzaW9vEqyrpg"; // your mapbox access token from: https://account.mapbox.com

      const errorMessageBrz =
        "Update the variable 'apiKey' with a BreezoMeter API key to see the tiles. Contact BreezoMeter if you need any help: breezometer.com/contact-us";
      const errorMessageMapbox =
        "Update the variable 'mapBoxAccessToken' with a Mapbox Access Token to initialize the Mapbox SDK. You can get it from: https://account.mapbox.com";

      if (apiKey === "") alert(errorMessageBrz);
      if (mapBoxAccessToken === "") alert(errorMessageMapbox);

      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11", // your stylesheet location
        center: [2.29607332435684, 48.855992403969445], // Starting position [lng, lat]
        zoom: 9, // starting zoom
        accessToken: mapBoxAccessToken
      });

      map.on("load", function() {
        addRasterSource();
        addRasterLayer();
      });

      function addRasterSource() {
        map.addSource("breezometer-tiles", {
          type: "raster",
          tiles: [
            `${environnement}`
          ],
          tileSize: 256,
          maxzoom: 8
        });
      }

      function addRasterLayer() {
        map.addLayer(
          {
            id: "breezometer-tiles",
            type: "raster",
            source: "breezometer-tiles",
            minzoom: 0,
            maxzoom: 22,
            paint: {
              "raster-opacity": 0.6
            }
          },
          "admin-1-boundary-bg"
        );
      }

      return (
        <>
        <button onClick={changeToAirQuality}>Clique pour voir l'air</button>
        <button onClick={changeToPollen}>Clique pour voir le pollen !</button>
        <button onClick={changeToWeather}>Clique pour voir le temps !</button>
        </>
      )
}
