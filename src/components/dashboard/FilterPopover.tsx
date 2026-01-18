import { useEffect, useRef } from 'react'
import { useFinance } from '../../contexts/FinanceContext'

interface FilterPopoverProps {
  onClose: () => void
}

/**
 * FilterPopover - Popover de filtros para desktop
 * Fundo branco semi-transparente com efeito glassmorphism
 */
function FilterPopover({ onClose }: FilterPopoverProps) {
  const { transactionType, setTransactionType } = useFinance()
  const popoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClose])

  const handleTypeChange = (type: 'all' | 'income' | 'expense') => {
    setTransactionType(type)
  }

  return (
    <div
      ref={popoverRef}
      className="absolute top-full right-0 mt-2 w-64 bg-white bg-opacity-95 backdrop-blur-md rounded-[var(--border-radius-lg)] shadow-[var(--shadow-md)] border border-[var(--gray-200)] p-4 z-50"
    >
      <h3 className="text-[var(--font-size-sm)] font-[var(--font-weight-semibold)] text-[var(--gray-700)] mb-3">
        Tipo de Transação
      </h3>
      <div className="space-y-2">
        {(['all', 'income', 'expense'] as const).map((type) => (
          <button
            key={type}
            onClick={() => handleTypeChange(type)}
            className={`
              w-full text-left px-4 py-2.5 rounded-[var(--border-radius-md)] text-[var(--font-size-body)] font-[var(--font-weight-medium)] transition-all duration-200
              ${
                transactionType === type
                  ? 'bg-[var(--black)] text-[var(--white)]'
                  : 'bg-[var(--gray-50)] text-[var(--gray-900)] hover:bg-[var(--gray-100)]'
              }
            `}
          >
            {type === 'all' ? 'Todos' : type === 'income' ? 'Receitas' : 'Despesas'}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterPopover
