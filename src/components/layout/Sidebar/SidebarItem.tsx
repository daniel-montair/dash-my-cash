import { Link, useLocation } from 'react-router-dom'
import { ReactNode } from 'react'
import Tooltip from '../../ui/Tooltip'

interface SidebarItemProps {
  to: string
  icon: ReactNode
  label: string
  isExpanded: boolean
}

/**
 * Item de navegação da Sidebar
 * Conforme Figma: item ativo tem fundo verde-limão neon com ícone e texto pretos
 * Item inativo tem fundo transparente com ícone e texto pretos
 */
function SidebarItem({ to, icon, label, isExpanded }: SidebarItemProps) {
  const location = useLocation()
  const isActive = location.pathname === to

  const itemContent = (
    <Link
      to={to}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
        ${
          isActive
            ? 'bg-[var(--color-lime-green)] text-black'
            : 'text-black hover:bg-gray-100'
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
      {isExpanded && (
        <span className="font-medium whitespace-nowrap text-black">
          {label}
        </span>
      )}
    </Link>
  )

  if (isExpanded) {
    return itemContent
  }

  // Quando colapsado, item ativo vira círculo verde-limão
  if (!isExpanded && isActive) {
    return (
      <Tooltip content={label}>
        <Link
          to={to}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-lime-green)] transition-all duration-200"
        >
          <span
            className="text-black"
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
        </Link>
      </Tooltip>
    )
  }

  return <Tooltip content={label}>{itemContent}</Tooltip>
}

export default SidebarItem
