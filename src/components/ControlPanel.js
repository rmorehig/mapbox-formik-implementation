import React from 'react'
import { Field, Form, useFormikContext } from 'formik'

const fixCoordinates = ({ latitude, longitude }) => {
  if (latitude > 90) {
    return 90
  }
  if (latitude < -90) {
    return -90
  }
  if (longitude > 180) {
    return 180
  }
  if (longitude < -180) {
    return -180
  }
  return latitude || longitude
}

const ControlPanel = ({ setMarkerUpdated }) => {
  const { setFieldValue } = useFormikContext()
  const handleChange = event => {
    const latitude = fixCoordinates({
      [event.target.name]: Number(event.target.value)
    })
    setFieldValue(event.target.name, latitude)
    setMarkerUpdated(true)
  }
  return (
    <div className="control-panel">
      <h3>Coordinates</h3>
      <Form>
        <label>
          Longitude <Field name="longitude" onChange={handleChange} />
        </label>

        <label>
          Latitude
          <Field name="latitude" onChange={handleChange} />
        </label>
      </Form>
    </div>
  )
}

export default ControlPanel
