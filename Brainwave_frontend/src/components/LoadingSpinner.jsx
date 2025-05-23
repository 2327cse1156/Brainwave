import { Loader } from "lucide-react";
import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
        <div className="animate-spin-slow hover:animate-spin-fast transition-all duration-300 hover:scale-110">
        <Loader className="w-16 h-16 text-blue-600 dark:text-blue-400"/>
        </div>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 animate-pulse">Loading...</p>
    </div>
  )
}

export default LoadingSpinner