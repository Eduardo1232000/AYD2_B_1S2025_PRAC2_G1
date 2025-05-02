import React from 'react'
import { Loader2 } from 'lucide-react'

interface LoadingSpinnerProps {
  size?: number
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 24 }) => {
  return (
    <div className="flex justify-center items-center">
      <Loader2 
        size={size} 
        className="animate-spin text-blue-500" 
        aria-label="Cargando" 
      />
    </div>
  )
}

export default LoadingSpinner