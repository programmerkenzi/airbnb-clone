/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-12 16:46:45
 * @LastEditTime: 2021-08-12 17:45:15
 * @LastEditors: Kenzi
 */

import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import { getCenter } from "geolib";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState("");

  //Transform the search results  object into the
  //{latitude: 37.7577, longitude:-122.4376}
  //object

  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  //center of locations coordinates
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
    width: "100%",
    height: "100%",
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/a23g32/cks8oa2fq26hg17quxfi5gbym"
      mapboxApiAccessToken={process.env.mapbox_key}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          {/* The popup that should show if we click on a marker */}
          {selectedLocation.long === result.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : null}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
