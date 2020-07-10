import React from 'react'
import { Field, Form, useFormikContext } from 'formik'
import { fixCoordinates } from 'utils/map'

const ControlPanel = ({ setMarkerUpdated }) => {
  const { setFieldValue } = useFormikContext()

  const handleChange = event => {
    const type = event.target.name
    const value = fixCoordinates({
      type,
      value: event.target.value
    })

    if (!Number.isNaN(event.target.value)) {
      setFieldValue(type, value)
      setMarkerUpdated(true)
    }
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
