const API_WEATHER_URL = 'http://34.122.70.47:3000'
const API_TEMPERATURE_URL = 'http://34.59.174.138:3000'
const API_AIR_QUALITY_URL = 'http://34.30.182.156:3000'


export const fetchWeatherData = async () => {
  try {
    const response = await fetch(`${API_WEATHER_URL}/clima`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Weather fetch error:', error)
    throw error
  }
}

export const fetchTemperatureData = async () => {
  try {
    const response = await fetch(`${API_TEMPERATURE_URL}/temperatura`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (!response.ok) {
      throw new Error(`Error fetching temperature data: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Temperature fetch error:', error)
    throw error
  }
}

export const fetchAirQualityData = async () => {
  try {
    const response = await fetch(`${API_AIR_QUALITY_URL}/calidad`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (!response.ok) {
      throw new Error(`Error fetching air quality data: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Air quality fetch error:', error)
    throw error
  }
}