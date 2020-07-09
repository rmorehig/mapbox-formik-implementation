import React from 'react'

const eventName = 'onDrag'

const ControlPanel = ({ events = {} }) => {
  const renderEvent = eventName => {
    const lngLat = events[eventName]
    return (
      <>
        <div>
          <label>
            Longitude <input>{lngLat?.[0]}</input>
          </label>
        </div>
        <div>
          <label>
            Latitude
            <input value={lngLat?.[1]} />
          </label>
        </div>
      </>
    )
  }

  return (
    <div className="control-panel">
      <h3>Coordinates</h3>
      <div>{renderEvent(eventName)}</div>
    </div>
  )
}

export default ControlPanel
