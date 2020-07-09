import React, { useState, useCallback } from 'react'
import MapGL, { Marker, NavigationControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Pin from './Pin'
import ControlPanel from './ControlPanel'

const initialViewport = {
  latitude: 37.785164,
  longitude: -100,
  zoom: 3.5,
  bearing: 0,
  pitch: 0
}

const Map = () => {
  const [viewport, setViewport] = useState(initialViewport)
  const [marker, setMarker] = useState({
    latitude: 37.785164,
    longitude: -100
  })

  const [events, setEvents] = useState({})

  const updateViewport = useCallback(
    viewport => {
      setViewport(viewport)
    },
    [setViewport]
  )
  const logDragEvent = (name, event) => {
    setEvents(events => ({
      ...events,
      [name]: event.lngLat
    }))
  }

  const handleDrag = event => {
    logDragEvent('onDrag', event)
    setMarker({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1]
    })
  }

  return (
    <div className="map-container">
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={updateViewport}
      >
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          offsetTop={-20}
          offsetLeft={-10}
          draggable
          onDrag={handleDrag}
        >
          <Pin size={20} />
        </Marker>
        <div className="nav">
          <NavigationControl onViewportChange={updateViewport} />
        </div>
        <ControlPanel events={events} />
      </MapGL>
    </div>
  )
}

export default Map
