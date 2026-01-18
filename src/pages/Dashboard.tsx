import DashboardHeader from '../components/dashboard/DashboardHeader'
import BalanceCard from '../components/dashboard/BalanceCard'
import IncomeCard from '../components/dashboard/IncomeCard'
import ExpenseCard from '../components/dashboard/ExpenseCard'
import ExpensesByCategoryGrid from '../components/dashboard/ExpensesByCategoryGrid'
import FinancialFlowChart from '../components/dashboard/FinancialFlowChart'
import CreditCardsWidget from '../components/dashboard/CreditCardsWidget'

/**
 * Página principal do Dashboard
 * Exibe visão geral financeira e widgets principais
 */
function Dashboard() {
  return (
    <div className="w-full bg-[var(--gray-50)]">
      {/* Header com controles */}
      <DashboardHeader />

      {/* Conteúdo principal */}
      <div className="w-full px-4 md:px-6 lg:px-8 py-6">
        <div className="w-full max-w-[1400px] lg:max-w-[1600px] mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[var(--gray-900)]">
            Dashboard
          </h1>

          {/* Grid de 4 Cards de Categorias - Primeira Linha */}
          <div className="mb-6 md:mb-8">
            <ExpensesByCategoryGrid />
          </div>

          {/* Grid com Cards de Resumo e Widget de Cartões - Segunda Linha */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            {/* Cards de Resumo Financeiro - ocupam 2/3 no desktop */}
            <div className="lg:col-span-2">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* BalanceCard - um pouco maior no desktop */}
                <div className="flex-1 md:flex-[1.2]">
                  <BalanceCard />
                </div>
                
                {/* IncomeCard e ExpenseCard - tamanhos iguais */}
                <div className="flex-1">
                  <IncomeCard />
                </div>
                
                <div className="flex-1">
                  <ExpenseCard />
                </div>
              </div>
            </div>

            {/* Widget de Cartões - ocupa 1/3 no desktop, largura total no mobile */}
            <div className="lg:col-span-1">
              <CreditCardsWidget />
            </div>
          </div>

          {/* Gráfico de Fluxo Financeiro */}
          <div className="mb-8">
            <FinancialFlowChart />
          </div>

          {/* Conteúdo adicional será implementado nos próximos prompts */}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
