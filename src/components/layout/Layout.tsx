import { ReactNode } from 'react'
import Sidebar from './Sidebar/Sidebar'
import HeaderMobile from './HeaderMobile/HeaderMobile'
import { useSidebar } from '../../hooks/useSidebar'

interface LayoutProps {
  children: ReactNode
}

/**
 * Layout principal da aplicação
 * Envolve todo o conteúdo e mantém a estrutura de navegação visível
 * Sidebar empurra o conteúdo principal (não sobrepõe)
 * Header Mobile substitui sidebar em < 1024px
 */
function Layout({ children }: LayoutProps) {
  const { isExpanded } = useSidebar()

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - apenas no desktop (≥1280px / lg) */}
      <Sidebar />

      {/* Header Mobile - apenas em mobile/tablet (< 1024px) */}
      <HeaderMobile />

      {/* Conteúdo Principal */}
      <main
        className={`
          flex-1 w-full transition-all duration-300 ease-in-out
          ${isExpanded ? 'lg:ml-64' : 'lg:ml-20'}
          pt-16 desktop:pt-0
        `}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
