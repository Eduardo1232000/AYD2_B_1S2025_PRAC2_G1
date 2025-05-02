import { useState, useEffect, useCallback } from 'react'
import { 
  fetchWeatherData, 
  fetchTemperatureData, 
  fetchAirQualityData 
} from '../services/api'
import { WeatherData } from '../types'

export const useWeatherData = () => {
  const [data, setData] = useState<WeatherData>({
    isLoading: true,
    error: null,
    weather: null,
    temperature: null,
    airQuality: null
  })

  const fetchAllData = useCallback(async () => {
    setData(prev => ({ ...prev, isLoading: true, error: null }))
    
    try {
      const [weatherData, temperatureData, airQualityData] = await Promise.all([
        fetchWeatherData(),
        fetchTemperatureData(),
        fetchAirQualityData()
      ])
      
      setData({
        isLoading: false,
        error: null,
        weather: weatherData,
        temperature: temperatureData,
        airQuality: airQualityData
      })
    } catch (error) {
      setData(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred'
      }))
    }
  }, [])

  useEffect(() => {
    fetchAllData()
  }, [fetchAllData])

  return {
    ...data,
    refetch: fetchAllData
  }
}