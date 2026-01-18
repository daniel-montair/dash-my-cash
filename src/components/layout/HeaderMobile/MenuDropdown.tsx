import { Link, useLocation } from 'react-router-dom'
import { ReactNode } from 'react'

interface MenuDropdownProps {
  isOpen: boolean
  onClose: () => void
  user: {
    name: string
    email: string
    avatar: string
  }
}

// Ícones SVG (reutilizando os mesmos da Sidebar)
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

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
)

interface MenuItemProps {
  to: string
  icon: ReactNode
  label: string
  isActive: boolean
  onClick: () => void
}

/**
 * MenuItem - Item de navegação do menu dropdown
 * Conforme Figma: item ativo tem fundo verde-limão neon com ícone e texto pretos
 * Item inativo tem fundo transparente com ícone e texto pretos
 * Mantém consistência visual com SidebarItem
 */
function MenuItem({ to, icon, label, isActive, onClick }: MenuItemProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
        ${
          isActive
            ? 'bg-[var(--color-lime-green)] text-black'
            : 'text-black hover:bg-[var(--gray-100)]'
        }
      `}
    >
      <span
        className="flex-shrink-0 transition-colors duration-200 text-black"
        style={{
          width: '20px',
          height: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </span>
      <span className="font-medium whitespace-nowrap text-black">{label}</span>
    </Link>
  )
}

/**
 * MenuDropdown - Menu de navegação mobile
 * Desliza de cima para baixo quando o avatar é tocado
 * Não é fullscreen, cobre o conteúdo abaixo
 */
function MenuDropdown({ isOpen, onClose, user }: MenuDropdownProps) {
  const location = useLocation()

  const menuItems = [
    { to: '/', icon: <HomeIcon />, label: 'Home' },
    { to: '/cards', icon: <CardsIcon />, label: 'Cartões' },
    { to: '/transactions', icon: <TransactionsIcon />, label: 'Transações' },
    { to: '/goals', icon: <GoalsIcon />, label: 'Objetivos' },
    { to: '/profile', icon: <ProfileIcon />, label: 'Perfil' },
  ]

  if (!isOpen) return null

  return (
    <>
      {/* Overlay escuro semi-transparente */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 desktop:hidden"
        onClick={onClose}
      />

      {/* Menu Dropdown */}
      <div
        className={`
          fixed top-16 left-0 right-0 bg-[var(--white)] rounded-b-lg shadow-lg z-50
          desktop:hidden
          transition-all duration-300 ease-out
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        `}
        style={{
          maxHeight: 'calc(100vh - 4rem)',
          overflowY: 'auto',
        }}
      >
        {/* Header do Menu */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--gray-200)]">
          <div className="flex items-center gap-3">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-[var(--gray-900)]">{user.name}</p>
              <p className="text-xs text-[var(--gray-500)]">{user.email}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-[var(--gray-500)] hover:text-[var(--gray-900)] hover:bg-[var(--gray-100)] rounded-full transition-colors duration-200"
            aria-label="Fechar menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Itens de Navegação */}
        <nav className="p-2">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <MenuItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                isActive={location.pathname === item.to}
                onClick={onClose}
              />
            ))}
          </div>
        </nav>

        {/* Botão Sair */}
        <div className="p-4 border-t border-[var(--gray-200)]">
          <button
            onClick={() => {
              // TODO: Implementar logout
              onClose()
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[var(--color-danger-red)] text-[var(--white)] rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
          >
            <span>Sair</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default MenuDropdown
