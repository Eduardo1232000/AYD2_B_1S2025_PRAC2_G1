export interface WeatherResponse {
    message: string
    codigo: number
    descripcion: string
  }
  
  export interface TemperatureResponse {
    message: string
    temperatura_aparente: number
  }
  
  export interface AirQualityResponse {
    message: string
    aqi: number
    pm2_5: number
  }
  
  export interface WeatherData {
    isLoading: boolean
    error: string | null
    weather: WeatherResponse | null
    temperature: TemperatureResponse | null
    airQuality: AirQualityResponse | null
  }