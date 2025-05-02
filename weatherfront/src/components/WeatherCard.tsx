import React from 'react'
import { WeatherResponse } from '../types'
import { getWeatherIcon } from '../utils/formatters'
import LoadingSpinner from './LoadingSpinner'
import * as LucideIcons from 'lucide-react'

interface WeatherCardProps {
  data: WeatherResponse | null
  isLoading: boolean
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col items-center justify-center min-h-[200px]">
        <LoadingSpinner size={30} />
      </div>
    )
  }

  if (!data) {
    return (
      <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col items-center justify-center min-h-[200px]">
        <p className="text-white text-center">No se pudo cargar el clima</p>
      </div>
    )
  }

  const iconName = getWeatherIcon(data.codigo)
  const IconComponent = (LucideIcons[iconName as keyof typeof LucideIcons] || LucideIcons.Cloud) as React.ElementType

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-white/30">
      <div className="flex flex-col items-center">
        <div className="mb-4 text-white/90">
          <IconComponent size={50} strokeWidth={1.5} className="animate-pulse" />
        </div>
        <h2 className="text-xl font-bold text-white mb-1">Condiciones actuales</h2>
        <p className="text-2xl font-medium text-white">{data.descripcion}</p>
      </div>
    </div>
  )
}

export default WeatherCard