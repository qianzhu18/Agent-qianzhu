'use client'

import { useEffect, useState } from 'react'

export default function WelcomeAnimation() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
    const timer = setTimeout(() => {
      setShow(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
      <h1 
        className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-fade-up"
        style={{
          textShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
          animation: 'fadeUp 1.5s ease-out forwards'
        }}
      >
        欢迎来到我的自我介绍
      </h1>
    </div>
  )
}

