import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { formatCurrency, formatCompactCurrency } from '../../utils/format'

/**
 * Interface para dados mensais do gráfico
 */
interface MonthlyData {
  month: string
  receitas: number
  despesas: number
}

/**
 * FinancialFlowChart - Gráfico de fluxo financeiro
 * Mostra evolução de receitas e despesas ao longo do tempo
 */
function FinancialFlowChart() {
  // Dados mock para 12 meses (estruturado para futuramente vir de transações reais)
  const data: MonthlyData[] = [
    { month: 'Jan', receitas: 2000, despesas: 1000 },
    { month: 'Fev', receitas: 5000, despesas: 3000 },
    { month: 'Mar', receitas: 11000, despesas: 6000 },
    { month: 'Abr', receitas: 10000, despesas: 7000 },
    { month: 'Mai', receitas: 8000, despesas: 9000 },
    { month: 'Jun', receitas: 7000, despesas: 8500 },
    { month: 'Jul', receitas: 6500, despesas: 8000 },
    { month: 'Ago', receitas: 7000, despesas: 6000 },
    { month: 'Set', receitas: 6000, despesas: 4000 },
    { month: 'Out', receitas: 7000, despesas: 3500 },
    { month: 'Nov', receitas: 9000, despesas: 5000 },
    { month: 'Dez', receitas: 13000, despesas: 7000 },
  ]

  // Tooltip customizado
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[var(--white)] border border-[var(--gray-200)] rounded-[var(--border-radius-lg)] shadow-[var(--shadow-md)] p-3">
          <p className="text-[var(--font-size-sm)] font-[var(--font-weight-bold)] text-[var(--gray-900)] mb-2">
            {label}
          </p>
          <div className="space-y-1">
            <p className="text-[var(--font-size-sm)] text-[var(--color-success-green)]">
              Receitas: {formatCurrency(payload[0].value)}
            </p>
            <p className="text-[var(--font-size-sm)] text-[var(--black)]">
              Despesas: {formatCurrency(payload[1].value)}
            </p>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-[var(--white)] border border-[var(--gray-200)] rounded-[var(--border-radius-lg)] p-6 shadow-[var(--shadow-sm)]">
      {/* Header com título e legenda */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-[var(--gray-700)]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13l4-4 4 4M3 17l4-4 4 4M13 3l4 4-4 4M13 7l4 4-4 4"
            />
          </svg>
          <h3 className="text-[var(--font-size-h2)] font-[var(--font-weight-bold)] text-[var(--gray-900)]">
            Fluxo Financeiro
          </h3>
        </div>

        {/* Legenda */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[var(--color-lime-green)]" />
            <span className="text-[var(--font-size-sm)] text-[var(--gray-700)]">Receitas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[var(--black)]" />
            <span className="text-[var(--font-size-sm)] text-[var(--gray-700)]">Despesas</span>
          </div>
        </div>
      </div>

      {/* Gráfico */}
      <div className="w-full bg-[var(--gray-50)] rounded-[var(--border-radius-md)] p-4" style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
          >
            <defs>
              {/* Gradiente para área de Receitas */}
              <linearGradient id="colorReceitas" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--color-lime-green)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-lime-green)"
                  stopOpacity={0}
                />
              </linearGradient>
              {/* Gradiente para área de Despesas */}
              <linearGradient id="colorDespesas" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--black)"
                  stopOpacity={0.1}
                />
                <stop
                  offset="100%"
                  stopColor="var(--black)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--gray-200)"
              vertical={false}
              strokeOpacity={0.3}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'var(--gray-500)', fontFamily: 'inherit' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'var(--gray-500)', fontFamily: 'inherit' }}
              tickFormatter={(value) => formatCompactCurrency(value)}
              width={60}
            />
            <Tooltip content={<CustomTooltip />} />
            {/* Área de Receitas */}
            <Area
              type="monotone"
              dataKey="receitas"
              stroke="var(--color-lime-green)"
              strokeWidth={3}
              fill="url(#colorReceitas)"
            />
            {/* Área de Despesas */}
            <Area
              type="monotone"
              dataKey="despesas"
              stroke="var(--black)"
              strokeWidth={3}
              fill="url(#colorDespesas)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default FinancialFlowChart
