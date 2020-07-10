const checkLatitude = latitude => {
  if (latitude > 90) {
    return 90
  }
  if (latitude < -90) {
    return -90
  }
  return latitude
}

const checkLongitude = longitude => {
  if (longitude > 180) {
    return 180
  }
  if (longitude < -180) {
    return -180
  }
  return longitude
}

export const fixCoordinates = ({ type, value }) => {
  let formattedValue = Number(value)
  if (Number.isNaN(formattedValue)) {
    return 0
  }
  if (type === 'longitude') {
    formattedValue = checkLongitude(formattedValue)
  }
  if (type === 'latitude') {
    formattedValue = checkLatitude(formattedValue)
  }
  return formattedValue
}
