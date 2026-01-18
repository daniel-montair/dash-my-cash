import { useState } from 'react'
import { useFinance } from '../../contexts/FinanceContext'
import CreditCardItem from './CreditCardItem'

/**
 * CreditCardsWidget - Widget de cartões de crédito
 * Lista cartões com informações e indicador de uso
 * Suporta paginação se houver mais de 3 cartões
 */
function CreditCardsWidget() {
  const { creditCards } = useFinance()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  // Calcular paginação
  const totalPages = Math.ceil(creditCards.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCards = creditCards.slice(startIndex, endIndex)

  const handleCardClick = (cardId: string) => {
    // TODO: Abrir modal de detalhes do cartão (PROMPT 15)
    console.log('Abrir detalhes do cartão:', cardId)
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="bg-[var(--gray-100)] rounded-[var(--border-radius-lg)] p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
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
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
            />
          </svg>
          <h3 className="text-[var(--font-size-body)] font-[var(--font-weight-semibold)] text-[var(--gray-900)]">
            Cartões
          </h3>
        </div>
        <button
          className="w-8 h-8 rounded-full bg-[var(--white)] hover:bg-[var(--gray-200)] flex items-center justify-center transition-colors duration-200 shadow-[var(--shadow-sm)]"
          aria-label="Adicionar cartão"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5 text-[var(--gray-700)]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>

      {/* Lista de cartões */}
      <div className="space-y-3 mb-4">
        {currentCards.length > 0 ? (
          currentCards.map((card) => (
            <CreditCardItem
              key={card.id}
              card={card}
              onClick={() => handleCardClick(card.id)}
            />
          ))
        ) : (
          <p className="text-[var(--font-size-sm)] text-[var(--gray-500)] text-center py-4">
            Nenhum cartão cadastrado
          </p>
        )}
      </div>

      {/* Paginação (apenas se houver mais de 3 cartões) */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4 border-t border-[var(--gray-200)]">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="w-8 h-8 rounded-full bg-[var(--white)] border border-[var(--gray-200)] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--gray-50)] transition-colors duration-200"
            aria-label="Página anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 text-[var(--gray-700)]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`
                  w-8 h-8 rounded-full text-[var(--font-size-sm)] font-[var(--font-weight-medium)] transition-colors duration-200
                  ${
                    currentPage === page
                      ? 'bg-[var(--black)] text-[var(--white)]'
                      : 'bg-[var(--white)] text-[var(--gray-700)] hover:bg-[var(--gray-100)]'
                  }
                `}
                aria-label={`Página ${page}`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="w-8 h-8 rounded-full bg-[var(--white)] border border-[var(--gray-200)] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--gray-50)] transition-colors duration-200"
            aria-label="Próxima página"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 text-[var(--gray-700)]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default CreditCardsWidget
