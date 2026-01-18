import { CreditCard } from '../../types'
import { formatCurrency } from '../../utils/format'

interface CreditCardItemProps {
  card: CreditCard
  onClick: () => void
}

/**
 * CreditCardItem - Item individual de cartão de crédito
 * Mostra ícone, informações e indicador de uso
 */
function CreditCardItem({ card, onClick }: CreditCardItemProps) {
  // Calcular percentual de uso
  const usagePercentage = Math.round((card.currentBill / card.limit) * 100)

  // Determinar cor do tema do cartão
  const getThemeStyles = () => {
    switch (card.theme) {
      case 'black':
        return {
          iconBg: 'bg-[var(--black)]',
          iconColor: 'text-[var(--white)]',
          badgeBg: 'bg-[var(--black)]',
          badgeText: 'text-[var(--white)]',
        }
      case 'lime':
        return {
          iconBg: 'bg-[var(--color-lime-green)]',
          iconColor: 'text-[var(--black)]',
          badgeBg: 'bg-[var(--color-lime-green)]',
          badgeText: 'text-[var(--black)]',
        }
      case 'white':
        return {
          iconBg: 'bg-[var(--white)] border-2 border-[var(--gray-300)]',
          iconColor: 'text-[var(--gray-700)]',
          badgeBg: 'bg-[var(--gray-200)]',
          badgeText: 'text-[var(--gray-900)]',
        }
      default:
        return {
          iconBg: 'bg-[var(--gray-200)]',
          iconColor: 'text-[var(--gray-700)]',
          badgeBg: 'bg-[var(--gray-200)]',
          badgeText: 'text-[var(--gray-900)]',
        }
    }
  }

  const themeStyles = getThemeStyles()

  // Obter logo do banco baseado no nome
  const getBankLogo = () => {
    const bankName = card.bank?.toLowerCase() || ''
    if (bankName.includes('nubank')) {
      return (
        <div className="w-8 h-8 bg-[#8A05BE] rounded-[var(--border-radius-sm)] flex items-center justify-center">
          <span className="text-white text-xs font-bold">nu</span>
        </div>
      )
    }
    if (bankName.includes('inter') || bankName.includes('banco inter')) {
      return (
        <div className="w-8 h-8 bg-[#FF6C00] rounded-[var(--border-radius-sm)] flex items-center justify-center">
          <span className="text-white text-xs font-bold">inter</span>
        </div>
      )
    }
    if (bankName.includes('picpay')) {
      return (
        <div className="w-8 h-8 bg-[#21C25E] rounded-[var(--border-radius-sm)] flex items-center justify-center">
          <span className="text-white text-xs font-bold">P</span>
        </div>
      )
    }
    // Logo genérico
    return (
      <div className={`w-8 h-8 ${themeStyles.iconBg} rounded-[var(--border-radius-sm)] flex items-center justify-center`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-5 h-5 ${themeStyles.iconColor}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
          />
        </svg>
      </div>
    )
  }

  return (
    <div
      onClick={onClick}
      className="bg-[var(--white)] rounded-[var(--border-radius-lg)] p-4 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:-translate-y-1 transition-all duration-200 cursor-pointer flex items-center gap-4"
    >
      {/* Ícone à esquerda */}
      <div className="flex-shrink-0">
        {getBankLogo()}
      </div>

      {/* Informações ao centro */}
      <div className="flex-1 min-w-0">
        <p className="text-[var(--font-size-sm)] text-[var(--gray-500)] mb-1 truncate">
          {card.bank || card.name}
        </p>
        <p className="text-[var(--font-size-body)] font-[var(--font-weight-bold)] text-[var(--gray-900)] mb-1">
          {formatCurrency(card.currentBill)}
        </p>
        <p className="text-[var(--font-size-xs)] text-[var(--gray-400)] mb-1">
          Vence dia {card.dueDay}
        </p>
        {card.lastDigits && (
          <p className="text-[var(--font-size-xs)] text-[var(--gray-400)]">
            •••• {card.lastDigits}
          </p>
        )}
      </div>

      {/* Indicador de uso à direita */}
      <div className="flex-shrink-0">
        <div
          className={`w-12 h-12 rounded-full ${themeStyles.badgeBg} flex items-center justify-center`}
        >
          <span className={`text-[var(--font-size-sm)] font-[var(--font-weight-semibold)] ${themeStyles.badgeText}`}>
            {usagePercentage}%
          </span>
        </div>
      </div>
    </div>
  )
}

export default CreditCardItem
