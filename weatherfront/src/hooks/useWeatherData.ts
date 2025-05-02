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

    const results = await Promise.allSettled([
      fetchWeatherData(),
      fetchTemperatureData(),
      fetchAirQualityData()
    ])

    const newData: Partial<WeatherData> = {
      isLoading: false,
      error: null
    }

    console.log('API Results:', results)

    results.forEach((result, index) => {
      const key = ['weather', 'temperature', 'airQuality'][index]
      if (result.status === 'fulfilled') {
        newData[key as keyof WeatherData] = result.value
      } else {
       
        console.error(`Error fetching ${key}:`, result.reason)
      
        newData.error = `${(newData.error ? newData.error + ' | ' : '')}${key} failed`
      }
    })

    setData(prev => ({
      ...prev,
      ...newData
    }))
  }, [])

  useEffect(() => {
    fetchAllData()
  }, [fetchAllData])

  return {
    ...data,
    refetch: fetchAllData
  }
}
