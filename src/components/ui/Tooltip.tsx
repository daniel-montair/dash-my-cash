import { ReactNode, useState } from 'react'

interface TooltipProps {
  children: ReactNode
  content: string
  delay?: number
}

/**
 * Componente Tooltip que aparece ao passar o mouse
 * Usado quando a sidebar está colapsada
 */
function Tooltip({ children, content, delay = 300 }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    setTimeoutId(id)
  }

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
    setIsVisible(false)
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div
          className="absolute left-full ml-2 z-50 px-3 py-2 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap shadow-md pointer-events-none"
          style={{
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          {content}
          <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-r-4 border-r-gray-900 border-b-4 border-b-transparent" />
        </div>
      )}
    </div>
  )
}

export default Tooltip
