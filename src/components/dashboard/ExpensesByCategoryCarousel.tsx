import { useRef, useState, useEffect } from 'react'
import { useFinance } from '../../contexts/FinanceContext'
import CategoryDonutCard from './CategoryDonutCard'

/**
 * ExpensesByCategoryCarousel - Carrossel de gastos por categoria
 * Mostra cards com gráficos donut para cada categoria
 * Scroll horizontal com mouse wheel, drag e setas de navegação
 */
function ExpensesByCategoryCarousel() {
  const { calculateExpensesByCategory, calculateCategoryPercentage, calculateIncomeForPeriod } =
    useFinance()
  const carouselRef = useRef<HTMLDivElement>(null)
  const [showArrows, setShowArrows] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const expensesByCategory = calculateExpensesByCategory
  const totalIncome = calculateIncomeForPeriod

  // Array de cores que rotaciona
  const colors = [
    'var(--color-lime-green)',
    'var(--black)',
    'var(--gray-500)',
    'var(--color-primary-blue)',
    'var(--color-danger-red)',
    'var(--color-success-green)',
  ]

  // Scroll horizontal com mouse wheel
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        carousel.scrollLeft += e.deltaY
      }
    }

    carousel.addEventListener('wheel', handleWheel, { passive: false })
    return () => carousel.removeEventListener('wheel', handleWheel)
  }, [])

  // Drag para scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    setShowArrows(false)
  }

  // Navegação com setas
  const scrollLeftArrow = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' })
    }
  }

  const scrollRightArrow = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full">
      <div
        className="relative"
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Setas de navegação (apenas desktop) */}
        {showArrows && (
          <>
            <button
              onClick={scrollLeftArrow}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[var(--white)] rounded-full shadow-[var(--shadow-md)] border border-[var(--gray-200)] items-center justify-center hover:bg-[var(--gray-50)] transition-colors duration-200"
              aria-label="Rolar para esquerda"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 text-[var(--gray-700)]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={scrollRightArrow}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[var(--white)] rounded-full shadow-[var(--shadow-md)] border border-[var(--gray-200)] items-center justify-center hover:bg-[var(--gray-50)] transition-colors duration-200"
              aria-label="Rolar para direita"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 text-[var(--gray-700)]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </>
        )}

        {/* Carrossel com gradiente de máscara */}
        <div className="relative overflow-hidden">
          {/* Gradiente esquerdo */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--gray-50)] to-transparent pointer-events-none z-10" />

          {/* Gradiente direito */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--gray-50)] to-transparent pointer-events-none z-10" />

          {/* Container scrollável */}
          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="flex gap-4 overflow-x-auto scrollbar-hide py-4 px-6 cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {expensesByCategory.map((item, index) => {
              // Calcular percentual em relação à receita total
              // Se receita total for zero, retorna 0% para evitar divisão por zero
              const categoryPercentage =
                totalIncome > 0 ? calculateCategoryPercentage(item.category) : 0

              return (
                <CategoryDonutCard
                  key={item.category}
                  category={item.category}
                  total={item.total}
                  percentage={categoryPercentage}
                  color={colors[index % colors.length]}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpensesByCategoryCarousel
