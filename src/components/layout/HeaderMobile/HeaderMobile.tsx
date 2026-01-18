import { useState } from 'react'
import MenuDropdown from './MenuDropdown'

/**
 * HeaderMobile - Header para mobile e tablet
 * Substitui completamente a sidebar em viewports < 1024px
 * Fixo no topo, permanece visível durante scroll
 */
function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Dados mock do usuário (será substituído pelo contexto no futuro)
  const user = {
    name: 'Lucas Marte',
    email: 'lucasmarte@gmail.com',
    avatar: 'https://ui-avatars.com/api/?name=Lucas+Marte&background=random',
  }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 h-16 bg-[var(--white)] border-b border-[var(--gray-200)]
          flex items-center justify-between px-4 z-30
          desktop:hidden
        `}
      >
        {/* Logo à esquerda - mantém consistência com Sidebar */}
        <h1 className="text-lg font-bold text-[var(--black)]">
          <span className="underline decoration-1">My</span>cash+
        </h1>

        {/* Avatar à direita (clicável) */}
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[var(--gray-100)] transition-colors duration-200"
          aria-label="Abrir menu"
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full"
          />
        </button>
      </header>

      {/* Menu Dropdown */}
      <MenuDropdown
        isOpen={isMenuOpen}
        onClose={closeMenu}
        user={user}
      />
    </>
  )
}

export default HeaderMobile
