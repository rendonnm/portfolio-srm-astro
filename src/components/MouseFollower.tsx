import { useEffect, useCallback, useState } from 'react'

export const MouseFollower = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCoordinates({ x: e.pageX, y: e.pageY })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <div
      className="absolute h-32 w-32 bg-white/22 rounded-full blur-3xl pointer-events-none transition-all duration-75 ease-out hidden lg:block"
      style={{
        left: `${coordinates.x}px`,
        top: `${coordinates.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    />
  )
}
