export const getWeatherIcon = (weatherCode: number): string => {
    switch (weatherCode) {
      case 0:
        return 'sun' // Sunny
      case 1:
        return 'cloud-sun' // Partly Cloudy
      case 2:
        return 'cloud' // Cloudy
      case 3:
        return 'cloud' // Overcast/Nublado
      case 4:
        return 'cloud-rain' // Rain
      case 5:
        return 'cloud-snow' // Snow
      case 6:
        return 'cloud-lightning' // Thunderstorm
      case 7:
        return 'wind' // Windy
      default:
        return 'cloud-question' // Unknown
    }
  }
  
  export const getAirQualityStatus = (aqi: number): { text: string; color: string } => {
    if (aqi <= 50) {
      return { text: 'Buena', color: 'text-green-500' }
    } else if (aqi <= 100) {
      return { text: 'Moderada', color: 'text-yellow-500' }
    } else if (aqi <= 150) {
      return { text: 'Dañina para grupos sensibles', color: 'text-orange-500' }
    } else if (aqi <= 200) {
      return { text: 'Dañina', color: 'text-red-500' }
    } else if (aqi <= 300) {
      return { text: 'Muy dañina', color: 'text-purple-500' }
    } else {
      return { text: 'Peligrosa', color: 'text-purple-900' }
    }
  }
  
  export const formatTemperature = (temp: number): string => {
    return `${temp.toFixed(1)}°C`
  }