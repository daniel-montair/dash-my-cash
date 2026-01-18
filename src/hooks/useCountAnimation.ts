import { useState, useEffect } from 'react'

/**
 * Hook para animação de contagem numérica
 * Anima de zero até o valor final em aproximadamente 800ms
 */
export function useCountAnimation(targetValue: number, duration: number = 800): number {
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    if (targetValue === 0) {
      setCurrentValue(0)
      return
    }

    const startValue = currentValue
    const difference = targetValue - startValue
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)

      const newValue = startValue + difference * easeOut
      setCurrentValue(newValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCurrentValue(targetValue)
      }
    }

    requestAnimationFrame(animate)
  }, [targetValue, duration])

  return Math.round(currentValue)
}
