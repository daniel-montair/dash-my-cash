import { useFinance } from '../../contexts/FinanceContext'
import CategoryDonutCard from './CategoryDonutCard'

/**
 * ExpensesByCategoryGrid - Grid de gastos por categoria
 * Mostra os 4 primeiros cards de categoria em grid fixo
 */
function ExpensesByCategoryGrid() {
  const { calculateExpensesByCategory, calculateCategoryPercentage, calculateIncomeForPeriod } =
    useFinance()

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

  // Pegar apenas os 4 primeiros
  const topCategories = expensesByCategory.slice(0, 4)

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {topCategories.map((item, index) => {
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
  )
}

export default ExpensesByCategoryGrid
