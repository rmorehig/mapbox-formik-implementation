import { checkLatitude, checkLongitude, fixCoordinates } from './map'

describe('checkLatitude', () => {
  it('should return 90 if latitude is greater than 90', () => {
    const latitude = 100
    const result = checkLatitude(latitude)
    expect(result).toBe(90)
  })

  it('should return -90 if latitude is lower than -90', () => {
    const latitude = -100
    const result = checkLatitude(latitude)
    expect(result).toBe(-90)
  })
  it('should return the same value if latitude is between the limits', () => {
    const latitude = 50
    const result = checkLatitude(latitude)
    expect(result).toBe(latitude)
  })
})

describe('checkLongitude', () => {
  it('should return 180 if longitude is greater than 180', () => {
    const longitude = 400
    const result = checkLongitude(longitude)
    expect(result).toBe(180)
  })

  it('should return -180 if longitude is lower than -180', () => {
    const longitude = -400
    const result = checkLongitude(longitude)
    expect(result).toBe(-180)
  })
  it('should return the same value if longitude is between the limits', () => {
    const longitude = 50
    const result = checkLongitude(longitude)
    expect(result).toBe(longitude)
  })
})

describe('fixCoordinates', () => {
  it('should return 0 if value is not a number', () => {
    const value = fixCoordinates({ type: 'longitude', value: '-' })
    expect(value).toBe(0)
  })
  it('should return the right longitude', () => {
    const value = fixCoordinates({ type: 'longitude', value: '45' })
    expect(value).toBe(45)
  })
  it('should return the right latitude', () => {
    const value = fixCoordinates({ type: 'latitude', value: '45' })
    expect(value).toBe(45)
  })
})
