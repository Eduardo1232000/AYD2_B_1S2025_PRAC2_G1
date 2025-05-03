import React from 'react'
import { useWeatherData } from '../hooks/useWeatherData'
import WeatherCard from './WeatherCard'
import TemperatureCard from './TemperatureCard'
import AirQualityCard from './AirQualityCard'
import RefreshButton from './RefreshButton'

const Dashboard: React.FC = () => {
  const { 
    isLoading, 
    error, 
    weather, 
    temperature, 
    airQuality, 
    refetch 
  } = useWeatherData()

  // Determine background gradient based on weather and time of day
  const getBackgroundGradient = () => {
    if (!weather) return 'bg-gradient-to-br from-blue-400 to-blue-800'
    
    switch (weather.codigo) {
      case 0: // Sunny
        return 'bg-gradient-to-br from-blue-400 to-blue-700'
      case 1: // Partly Cloudy
      case 2: // Cloudy
        return 'bg-gradient-to-br from-blue-400 to-indigo-700'
      case 3: // Overcast
        return 'bg-gradient-to-br from-gray-400 to-gray-700'
      case 4: // Rain
        return 'bg-gradient-to-br from-blue-500 to-gray-700'
      case 5: // Snow
        return 'bg-gradient-to-br from-blue-300 to-indigo-600'
      case 6: // Thunderstorm
        return 'bg-gradient-to-br from-gray-600 to-gray-900'
      case 7: // Windy
        return 'bg-gradient-to-br from-blue-400 to-blue-600'
      default:
        return 'bg-gradient-to-br from-blue-400 to-blue-800'
    }
  }

  return (
    <div className={`min-h-screen ${getBackgroundGradient()} transition-all duration-1000`}>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white">Clima Actual</h1>
              <RefreshButton onClick={refetch} isLoading={isLoading} />
            </div>
            
            {error && (
              <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-4 mb-6 text-white">
                <p>{error}</p>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <WeatherCard data={weather} isLoading={isLoading} />
              <TemperatureCard data={temperature} isLoading={isLoading} />
              <AirQualityCard data={airQuality} isLoading={isLoading} />
            </div>
            
            <div className="mt-8 text-white/70 text-center text-sm">
              <p>Última actualización: {new Date().toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard