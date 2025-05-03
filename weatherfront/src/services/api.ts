const API_WEATHER_URL = import.meta.env.VITE_API_WEATHER_URL
const API_TEMPERATURE_URL = import.meta.env.VITE_API_TEMPERATURE_URL
const API_AIR_QUALITY_URL = import.meta.env.VITE_API_AIR_QUALITY_URL

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