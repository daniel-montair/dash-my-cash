import { useSidebar } from '../../../hooks/useSidebar'
import SidebarItem from './SidebarItem'

// Ícones SVG simples
const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
)

const CardsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
    />
  </svg>
)

const TransactionsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
)

const GoalsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const ProfileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
)

const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
)

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
)

/**
 * Componente Sidebar
 * Navegação lateral com estados expandido e colapsado
 * Conforme Figma MCP: item ativo tem fundo verde-limão neon
 * Apenas visível no desktop (≥1280px)
 */
function Sidebar() {
  const { isExpanded, toggle } = useSidebar()

  // Dados mock do usuário (será substituído pelo contexto no futuro)
  const user = {
    name: 'Lucas Marte',
    email: 'lucasmarte@gmail.com',
    avatar: 'https://ui-avatars.com/api/?name=Lucas+Marte&background=random',
  }

  return (
    <aside
      className={`
        fixed left-0 top-0 h-screen bg-white border-r border-gray-200
        flex flex-col z-40
        transition-all duration-300 ease-in-out
        hidden lg:flex
        ${isExpanded ? 'w-64' : 'w-20'}
      `}
    >
      {/* Header com Logo e Botão Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 relative">
        {isExpanded ? (
          <>
            <h1 className="text-xl font-bold text-black">
              <span className="underline decoration-1">My</span>cash+
            </h1>
            <button
              onClick={toggle}
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              aria-label="Colapsar sidebar"
            >
              <ChevronLeftIcon />
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-col items-start">
              <span className="text-base font-bold text-black underline decoration-1">
                My
              </span>
              <span className="text-sm text-gray-600 leading-tight">cash+</span>
            </div>
            <button
              onClick={toggle}
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              aria-label="Expandir sidebar"
            >
              <ChevronRightIcon />
            </button>
          </>
        )}
      </div>

      {/* Navegação */}
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        <div className="space-y-1">
          <SidebarItem
            to="/"
            icon={<HomeIcon />}
            label="Home"
            isExpanded={isExpanded}
          />
          <SidebarItem
            to="/cards"
            icon={<CardsIcon />}
            label="Cartões"
            isExpanded={isExpanded}
          />
          <SidebarItem
            to="/transactions"
            icon={<TransactionsIcon />}
            label="Transações"
            isExpanded={isExpanded}
          />
          <SidebarItem
            to="/goals"
            icon={<GoalsIcon />}
            label="Objetivos"
            isExpanded={isExpanded}
          />
          <SidebarItem
            to="/profile"
            icon={<ProfileIcon />}
            label="Perfil"
            isExpanded={isExpanded}
          />
        </div>
      </nav>

      {/* Perfil do Usuário */}
      <div className="border-t border-gray-200 p-4">
        {isExpanded ? (
          <div className="flex items-center gap-3">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user.name}
              </p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full"
            />
          </div>
        )}
      </div>
    </aside>
  )
}

export default Sidebar
