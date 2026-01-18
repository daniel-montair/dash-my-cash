import { useFinance } from '../../contexts/FinanceContext'
import { formatCurrency } from '../../utils/format'
import { useCountAnimation } from '../../hooks/useCountAnimation'

/**
 * ExpenseCard - Card de Despesas
 * Fundo branco com borda sutil
 * Mostra despesas totais com animação de contagem
 */
function ExpenseCard() {
  const { calculateExpensesForPeriod } = useFinance()

  const expenses = calculateExpensesForPeriod
  const animatedValue = useCountAnimation(expenses, 800)

  return (
    <div className="bg-[var(--white)] border border-[var(--gray-200)] rounded-[var(--border-radius-lg)] p-6 shadow-[var(--shadow-sm)]">
      {/* Header com ícone de seta para cima vermelho no topo */}
      <div className="mb-5">
        <div className="w-10 h-10 flex items-center justify-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6 text-[var(--color-danger-red)]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
          </svg>
        </div>
        
        {/* Label */}
        <h3 className="text-[var(--font-size-body)] font-[var(--font-weight-bold)] text-[var(--black)] mb-2">
          Despesas
        </h3>
      </div>

      {/* Valor formatado - em preto */}
      <p className="text-4xl font-[var(--font-weight-bold)] text-[var(--black)] leading-tight">
        {formatCurrency(animatedValue)}
      </p>
    </div>
  )
}

export default ExpenseCard
