import { useState } from 'react'
import { useFinance } from '../../contexts/FinanceContext'
import FilterPopover from './FilterPopover'
import DateRangeSelector from './DateRangeSelector'
import FamilyMembersWidget from './FamilyMembersWidget'

/**
 * DashboardHeader - Barra de controles do dashboard
 * Contém busca, filtros, seletor de período, widget de membros e botão de nova transação
 */
function DashboardHeader() {
  const { searchText, setSearchText } = useFinance()
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  return (
    <div className="w-full bg-[var(--white)] border-b border-[var(--gray-200)] px-4 md:px-6 py-4">
      <div className="w-full max-w-[1400px] lg:max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
          {/* Campo de Busca */}
          <div className="relative flex-1 md:flex-initial md:w-64">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-[var(--gray-400)]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Pesquisar"
              value={searchText}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2.5 bg-[var(--white)] border border-[var(--color-neutral-500)] rounded-full text-[var(--font-size-body)] text-[var(--gray-900)] placeholder:text-[var(--gray-400)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] focus:border-transparent transition-all duration-200"
              style={{ borderRadius: '100px' }}
            />
          </div>

          {/* Botão de Filtros */}
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-10 h-10 rounded-[var(--border-radius-md)] bg-[var(--white)] border border-[var(--gray-200)] hover:bg-[var(--gray-50)] flex items-center justify-center transition-colors duration-200"
              aria-label="Abrir filtros"
            >
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
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                />
              </svg>
            </button>
            {isFilterOpen && (
              <FilterPopover onClose={() => setIsFilterOpen(false)} />
            )}
          </div>

          {/* Seletor de Período */}
          <DateRangeSelector />

          {/* Widget de Membros da Família */}
          <FamilyMembersWidget />

          {/* Botão Nova Transação - à direita, alinhado ao canto */}
          <button className="w-full md:w-auto px-6 py-2.5 md:py-2 bg-[var(--black)] text-[var(--white)] rounded-[var(--border-radius-lg)] font-[var(--font-weight-semibold)] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-200 md:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-[var(--font-size-body)]">Nova transação</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
