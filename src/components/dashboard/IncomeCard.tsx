import { useFinance } from '../../contexts/FinanceContext'
import { formatCurrency } from '../../utils/format'
import { useCountAnimation } from '../../hooks/useCountAnimation'

/**
 * IncomeCard - Card de Receitas
 * Fundo branco com borda sutil
 * Mostra receitas totais com animação de contagem
 */
function IncomeCard() {
  const { calculateIncomeForPeriod } = useFinance()

  const income = calculateIncomeForPeriod
  const animatedValue = useCountAnimation(income, 800)

  return (
    <div className="bg-[var(--white)] border border-[var(--gray-200)] rounded-[var(--border-radius-lg)] p-6 shadow-[var(--shadow-sm)]">
      {/* Header com ícone de seta para baixo verde no topo */}
      <div className="mb-5">
        <div className="w-10 h-10 flex items-center justify-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6 text-[var(--color-success-green)]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
        
        {/* Label */}
        <h3 className="text-[var(--font-size-body)] font-[var(--font-weight-bold)] text-[var(--black)] mb-2">
          Receitas
        </h3>
      </div>

      {/* Valor formatado - em preto */}
      <p className="text-4xl font-[var(--font-weight-bold)] text-[var(--black)] leading-tight">
        {formatCurrency(animatedValue)}
      </p>
    </div>
  )
}

export default IncomeCard
