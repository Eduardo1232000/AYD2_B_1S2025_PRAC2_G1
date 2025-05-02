import React from 'react'
import { RefreshCw } from 'lucide-react'

interface RefreshButtonProps {
  onClick: () => void
  isLoading: boolean
}

const RefreshButton: React.FC<RefreshButtonProps> = ({ onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="flex items-center justify-center p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
      aria-label="Refrescar datos"
    >
      <RefreshCw 
        size={20} 
        className={`text-white ${isLoading ? 'animate-spin' : ''}`} 
      />
    </button>
  )
}

export default RefreshButton