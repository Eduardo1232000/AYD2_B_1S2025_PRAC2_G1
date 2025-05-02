import React from 'react'
import { Thermometer } from 'lucide-react'
import { TemperatureResponse } from '../types'
import { formatTemperature } from '../utils/formatters'
import LoadingSpinner from './LoadingSpinner'

interface TemperatureCardProps {
  data: TemperatureResponse | null
  isLoading: boolean
}

const TemperatureCard: React.FC<TemperatureCardProps> = ({ data, isLoading }) => {
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
        <p className="text-white text-center">No se pudo cargar la temperatura</p>
      </div>
    )
  }

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-white/30">
      <div className="flex flex-col items-center">
        <div className="mb-4 text-white/90">
          <Thermometer size={50} strokeWidth={1.5} />
        </div>
        <h2 className="text-xl font-bold text-white mb-1">Temperatura</h2>
        <p className="text-3xl font-medium text-white">
          {formatTemperature(data.temperatura_aparente)}
        </p>
        <p className="text-sm text-white/80 mt-2">Sensación térmica</p>
      </div>
    </div>
  )
}

export default TemperatureCard