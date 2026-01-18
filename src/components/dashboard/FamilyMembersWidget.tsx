import { useFinance } from '../../contexts/FinanceContext'

/**
 * FamilyMembersWidget - Widget de membros da família
 * Mostra avatares sobrepostos com efeito de pilha
 */
function FamilyMembersWidget() {
  const { familyMembers, selectedMember, setSelectedMember } = useFinance()

  const handleMemberClick = (memberId: string) => {
    if (selectedMember === memberId) {
      setSelectedMember(null)
    } else {
      setSelectedMember(memberId)
    }
  }

  return (
    <div className="flex items-center gap-2">
      {/* Avatares sobrepostos */}
      <div className="flex items-center -space-x-2">
        {familyMembers.slice(0, 3).map((member, index) => (
          <button
            key={member.id}
            onClick={() => handleMemberClick(member.id)}
            className={`
              relative w-10 h-10 rounded-full border-2 transition-all duration-200 hover:scale-110 hover:z-10
              ${
                selectedMember === member.id
                  ? 'border-[var(--black)] border-[3px] z-10'
                  : 'border-[var(--white)]'
              }
            `}
            style={{ marginLeft: index > 0 ? '-8px' : '0' }}
          >
            <img
              src={member.avatarUrl || `https://ui-avatars.com/api/?name=${member.name}&background=random`}
              alt={member.name}
              className="w-full h-full rounded-full object-cover"
            />
            {selectedMember === member.id && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[var(--color-success-green)] rounded-full border-2 border-[var(--white)] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-2.5 h-2.5 text-[var(--white)]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Botão adicionar membro */}
      <button
        className="w-10 h-10 rounded-full bg-[var(--gray-100)] hover:bg-[var(--gray-200)] border-2 border-[var(--white)] flex items-center justify-center transition-colors duration-200"
        aria-label="Adicionar membro"
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
  )
}

export default FamilyMembersWidget
