import React, { useState, useCallback, useEffect } from 'react'
import MapGL, {
  Marker,
  NavigationControl,
  FlyToInterpolator
} from 'react-map-gl'
import { useFormikContext } from 'formik'
import Pin from './Pin'
import ControlPanel from './ControlPanel'
import 'mapbox-gl/dist/mapbox-gl.css'

const initialViewport = {
  latitude: 37.785164,
  longitude: -100,
  zoom: 3.5,
  bearing: 0,
  pitch: 0
}

const Map = () => {
  const [viewport, setViewport] = useState(initialViewport)
  const [markerUpdated, setMarkerUpdated] = useState(false)
  const {
    setFieldValue,
    values: { longitude, latitude }
  } = useFormikContext()

  const updateViewport = useCallback(
    viewport => {
      setViewport(viewport)
    },
    [setViewport]
  )
  const handleDrag = event => {
    setFieldValue('longitude', event.lngLat[0])
    setFieldValue('latitude', event.lngLat[1])
  }

  const handleDragEnd = () => {
    setMarkerUpdated(true)
  }

  useEffect(() => {
    if (markerUpdated) {
      setMarkerUpdated(false)
      const newViewport = {
        ...viewport,
        longitude,
        latitude,
        transitionDuration: 1000,
        transitionInterpolator: new FlyToInterpolator()
      }
      updateViewport(newViewport)
    }
  }, [
    markerUpdated,
    setMarkerUpdated,
    longitude,
    latitude,
    updateViewport,
    viewport
  ])

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
          longitude={longitude}
          latitude={latitude}
          offsetTop={-20}
          offsetLeft={-10}
          draggable
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
        >
          <Pin size={20} />
        </Marker>
        <div className="nav">
          <NavigationControl onViewportChange={updateViewport} />
        </div>
        <ControlPanel
          longitude={longitude}
          latitude={latitude}
          setMarkerUpdated={setMarkerUpdated}
        />
      </MapGL>
    </div>
  )
}

export default Map
