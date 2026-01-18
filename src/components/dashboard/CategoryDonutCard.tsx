import { formatCurrency } from '../../utils/format'

interface CategoryDonutCardProps {
  category: string
  total: number
  percentage: number
  color: string
}

/**
 * CategoryDonutCard - Card individual de categoria com gráfico donut
 * Mostra percentual, nome da categoria e valor total
 */
function CategoryDonutCard({ category, total, percentage, color }: CategoryDonutCardProps) {
  // Calcular o ângulo do arco para o gráfico donut
  // Diâmetro 64px, raio 32px, espessura do anel 4px, então raio interno = 28px
  const radius = 28
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="w-full bg-[var(--white)] border border-[var(--gray-200)] rounded-[var(--border-radius-lg)] p-4 hover:border-[var(--color-lime-green)] transition-colors duration-200">
      {/* Gráfico Donut */}
      <div className="relative w-16 h-16 mx-auto mb-3">
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
          {/* Anel de fundo (cinza claro) */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke="var(--gray-200)"
            strokeWidth="4"
          />
          {/* Anel colorido (percentual) */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        {/* Percentual centralizado */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[var(--font-size-sm)] font-[var(--font-weight-semibold)] text-[var(--gray-700)]">
            {percentage.toFixed(1)}%
          </span>
        </div>
      </div>

      {/* Nome da categoria */}
      <p className="text-[var(--font-size-sm)] text-[var(--gray-700)] text-center mb-2 truncate">
        {category}
      </p>

      {/* Valor total */}
      <p className="text-[var(--font-size-body)] font-[var(--font-weight-bold)] text-[var(--gray-900)] text-center">
        {formatCurrency(total)}
      </p>
    </div>
  )
}

export default CategoryDonutCard
