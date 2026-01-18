import { useState } from 'react'
import { useFinance } from '../../contexts/FinanceContext'

/**
 * DateRangeSelector - Seletor de período com calendário
 * Mostra período atual e abre calendário ao clicar
 */
function DateRangeSelector() {
  const { dateRange, setDateRange } = useFinance()
  const [isOpen, setIsOpen] = useState(false)

  // Formatar período atual
  const formatDateRange = () => {
    if (!dateRange.startDate && !dateRange.endDate) {
      return '01 Jan - 31 Jan 2026'
    }
    if (dateRange.startDate && dateRange.endDate) {
      const start = dateRange.startDate.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
      })
      const end = dateRange.endDate.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
      return `${start} - ${end}`
    }
    return '01 Jan - 31 Jan 2026'
  }

  const handleQuickSelect = (range: 'thisMonth' | 'lastMonth' | 'last3Months' | 'thisYear') => {
    const today = new Date()
    let start: Date
    let end: Date

    switch (range) {
      case 'thisMonth':
        start = new Date(today.getFullYear(), today.getMonth(), 1)
        end = new Date(today.getFullYear(), today.getMonth() + 1, 0)
        break
      case 'lastMonth':
        start = new Date(today.getFullYear(), today.getMonth() - 1, 1)
        end = new Date(today.getFullYear(), today.getMonth(), 0)
        break
      case 'last3Months':
        start = new Date(today.getFullYear(), today.getMonth() - 2, 1)
        end = new Date(today.getFullYear(), today.getMonth() + 1, 0)
        break
      case 'thisYear':
        start = new Date(today.getFullYear(), 0, 1)
        end = new Date(today.getFullYear(), 11, 31)
        break
    }

    setDateRange({ startDate: start, endDate: end })
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 bg-[var(--white)] border border-[var(--color-neutral-500)] rounded-full text-[var(--font-size-body)] text-[var(--gray-900)] hover:bg-[var(--gray-50)] transition-colors duration-200"
        style={{ borderRadius: '100px' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 text-[var(--gray-500)]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          />
        </svg>
        <span>{formatDateRange()}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 w-80 bg-[var(--white)] rounded-[var(--border-radius-lg)] shadow-[var(--shadow-md)] border border-[var(--gray-200)] p-4 z-50">
            <div className="mb-4">
              <h3 className="text-[var(--font-size-sm)] font-[var(--font-weight-semibold)] text-[var(--gray-700)] mb-3">
                Atalhos Rápidos
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleQuickSelect('thisMonth')}
                  className="px-3 py-2 text-[var(--font-size-sm)] bg-[var(--gray-50)] hover:bg-[var(--gray-100)] rounded-[var(--border-radius-md)] transition-colors duration-200"
                >
                  Este mês
                </button>
                <button
                  onClick={() => handleQuickSelect('lastMonth')}
                  className="px-3 py-2 text-[var(--font-size-sm)] bg-[var(--gray-50)] hover:bg-[var(--gray-100)] rounded-[var(--border-radius-md)] transition-colors duration-200"
                >
                  Mês passado
                </button>
                <button
                  onClick={() => handleQuickSelect('last3Months')}
                  className="px-3 py-2 text-[var(--font-size-sm)] bg-[var(--gray-50)] hover:bg-[var(--gray-100)] rounded-[var(--border-radius-md)] transition-colors duration-200"
                >
                  Últimos 3 meses
                </button>
                <button
                  onClick={() => handleQuickSelect('thisYear')}
                  className="px-3 py-2 text-[var(--font-size-sm)] bg-[var(--gray-50)] hover:bg-[var(--gray-100)] rounded-[var(--border-radius-md)] transition-colors duration-200"
                >
                  Este ano
                </button>
              </div>
            </div>
            <div className="pt-4 border-t border-[var(--gray-200)]">
              <p className="text-[var(--font-size-xs)] text-[var(--gray-500)] text-center">
                Calendário completo será implementado no PROMPT 16
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default DateRangeSelector
