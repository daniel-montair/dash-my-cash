import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

/**
 * Layout principal da aplicação
 * Envolve todo o conteúdo e mantém a estrutura de navegação visível
 */
function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* TODO: Sidebar e Header serão adicionados nos próximos prompts */}
      <main className="w-full">
        {children}
      </main>
    </div>
  )
}

export default Layout
