import React from 'react'
import { Field, Form, useFormikContext } from 'formik'

const ControlPanel = ({ setMarkerUpdated }) => {
  const { setFieldValue } = useFormikContext()
  const handleChange = event => {
    setFieldValue(event.target.name, Number(event.target.value))
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
