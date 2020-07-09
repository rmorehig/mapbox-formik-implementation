import React from 'react'
import Map from 'components/Map'
import { Formik } from 'formik'

function App() {
  return (
    <>
      <main>
        <Formik initialValues={{ longitude: -100, latitude: 37.785164 }}>
          <Map />
        </Formik>
      </main>
    </>
  )
}
export default App
