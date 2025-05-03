import React from 'react'
import { Wind } from 'lucide-react'
import { AirQualityResponse } from '../types'
import { getAirQualityStatus } from '../utils/formatters'
import LoadingSpinner from './LoadingSpinner'

interface AirQualityCardProps {
  data: AirQualityResponse | null
  isLoading: boolean
}

const AirQualityCard: React.FC<AirQualityCardProps> = ({ data, isLoading }) => {
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
        <p className="text-white text-center">No se pudo cargar la calidad del aire</p>
      </div>
    )
  }

  const { text, color } = getAirQualityStatus(data.aqi)

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-white/30">
      <div className="flex flex-col items-center">
        <div className="mb-4 text-white/90">
          <Wind size={50} strokeWidth={1.5} />
        </div>
        <h2 className="text-xl font-bold text-white mb-1">Calidad del Aire</h2>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-medium text-white">{data.aqi}</p>
          <p className={`text-lg font-medium ${color} mt-1`}>{text}</p>
        </div>
        <div className="mt-2 text-sm text-white/80">
          <p>PM2.5: {data.pm2_5} µg/m³</p>
        </div>
      </div>
    </div>
  )
}

export default AirQualityCard