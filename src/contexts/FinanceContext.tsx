import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react'
import {
  Transaction,
  Goal,
  CreditCard,
  BankAccount,
  FamilyMember,
  DateRange,
  ExpenseByCategory,
} from '../types'

/**
 * Interface do contexto Finance
 * Contém todos os estados e funções do sistema financeiro
 */
interface FinanceContextType {
  // Arrays principais
  transactions: Transaction[]
  goals: Goal[]
  creditCards: CreditCard[]
  bankAccounts: BankAccount[]
  familyMembers: FamilyMember[]

  // Filtros globais
  selectedMember: string | null
  dateRange: DateRange
  transactionType: 'all' | 'income' | 'expense'
  searchText: string

  // Funções de filtro
  setSelectedMember: (memberId: string | null) => void
  setDateRange: (range: DateRange) => void
  setTransactionType: (type: 'all' | 'income' | 'expense') => void
  setSearchText: (text: string) => void
  resetFilters: () => void

  // Funções CRUD - Transactions
  addTransaction: (transaction: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateTransaction: (id: string, updates: Partial<Transaction>) => void
  deleteTransaction: (id: string) => void

  // Funções CRUD - Goals
  addGoal: (goal: Omit<Goal, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateGoal: (id: string, updates: Partial<Goal>) => void
  deleteGoal: (id: string) => void

  // Funções CRUD - CreditCards
  addCreditCard: (card: Omit<CreditCard, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateCreditCard: (id: string, updates: Partial<CreditCard>) => void
  deleteCreditCard: (id: string) => void

  // Funções CRUD - BankAccounts
  addBankAccount: (account: Omit<BankAccount, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateBankAccount: (id: string, updates: Partial<BankAccount>) => void
  deleteBankAccount: (id: string) => void

  // Funções CRUD - FamilyMembers
  addFamilyMember: (member: Omit<FamilyMember, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateFamilyMember: (id: string, updates: Partial<FamilyMember>) => void
  deleteFamilyMember: (id: string) => void

  // Funções de cálculo derivadas
  getFilteredTransactions: Transaction[]
  calculateTotalBalance: number
  calculateIncomeForPeriod: number
  calculateExpensesForPeriod: number
  calculateExpensesByCategory: ExpenseByCategory[]
  calculateCategoryPercentage: (category: string) => number
  calculateSavingsRate: number
}

const FinanceContext = createContext<FinanceContextType | undefined>(undefined)

/**
 * Função auxiliar para gerar IDs únicos
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * FinanceProvider - Provider do contexto financeiro
 * Gerencia todo o estado da aplicação usando apenas React state
 * ⚠️ NÃO usa localStorage, sessionStorage ou qualquer browser storage API
 */
export function FinanceProvider({ children }: { children: ReactNode }) {
  // Estados dos arrays principais
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [goals, setGoals] = useState<Goal[]>([])
  const [creditCards, setCreditCards] = useState<CreditCard[]>([])
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([])
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([])

  // Estados dos filtros globais
  const [selectedMember, setSelectedMember] = useState<string | null>(null)
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  })
  const [transactionType, setTransactionType] = useState<'all' | 'income' | 'expense'>('all')
  const [searchText, setSearchText] = useState<string>('')

  // Função para resetar todos os filtros
  const resetFilters = () => {
    setSelectedMember(null)
    setDateRange({ startDate: null, endDate: null })
    setTransactionType('all')
    setSearchText('')
  }

  // ========== FUNÇÕES CRUD - TRANSACTIONS ==========
  const addTransaction = (
    transaction: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>
  ) => {
    const now = new Date()
    const newTransaction: Transaction = {
      ...transaction,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
    }
    setTransactions((prev) => [...prev, newTransaction])
  }

  const updateTransaction = (id: string, updates: Partial<Transaction>) => {
    setTransactions((prev) =>
      prev.map((transaction) =>
        transaction.id === id
          ? { ...transaction, ...updates, updatedAt: new Date() }
          : transaction
      )
    )
  }

  const deleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter((transaction) => transaction.id !== id))
  }

  // ========== FUNÇÕES CRUD - GOALS ==========
  const addGoal = (goal: Omit<Goal, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date()
    const newGoal: Goal = {
      ...goal,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
    }
    setGoals((prev) => [...prev, newGoal])
  }

  const updateGoal = (id: string, updates: Partial<Goal>) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id ? { ...goal, ...updates, updatedAt: new Date() } : goal
      )
    )
  }

  const deleteGoal = (id: string) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id))
  }

  // ========== FUNÇÕES CRUD - CREDIT CARDS ==========
  const addCreditCard = (card: Omit<CreditCard, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date()
    const newCard: CreditCard = {
      ...card,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
    }
    setCreditCards((prev) => [...prev, newCard])
  }

  const updateCreditCard = (id: string, updates: Partial<CreditCard>) => {
    setCreditCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, ...updates, updatedAt: new Date() } : card
      )
    )
  }

  const deleteCreditCard = (id: string) => {
    setCreditCards((prev) => prev.filter((card) => card.id !== id))
  }

  // ========== FUNÇÕES CRUD - BANK ACCOUNTS ==========
  const addBankAccount = (account: Omit<BankAccount, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date()
    const newAccount: BankAccount = {
      ...account,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
    }
    setBankAccounts((prev) => [...prev, newAccount])
  }

  const updateBankAccount = (id: string, updates: Partial<BankAccount>) => {
    setBankAccounts((prev) =>
      prev.map((account) =>
        account.id === id ? { ...account, ...updates, updatedAt: new Date() } : account
      )
    )
  }

  const deleteBankAccount = (id: string) => {
    setBankAccounts((prev) => prev.filter((account) => account.id !== id))
  }

  // ========== FUNÇÕES CRUD - FAMILY MEMBERS ==========
  const addFamilyMember = (member: Omit<FamilyMember, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date()
    const newMember: FamilyMember = {
      ...member,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
    }
    setFamilyMembers((prev) => [...prev, newMember])
  }

  const updateFamilyMember = (id: string, updates: Partial<FamilyMember>) => {
    setFamilyMembers((prev) =>
      prev.map((member) =>
        member.id === id ? { ...member, ...updates, updatedAt: new Date() } : member
      )
    )
  }

  const deleteFamilyMember = (id: string) => {
    setFamilyMembers((prev) => prev.filter((member) => member.id !== id))
  }

  // ========== FUNÇÕES DE CÁLCULO DERIVADAS ==========

  /**
   * Retorna array de transações após aplicar todos os filtros ativos
   */
  const getFilteredTransactions = useMemo(() => {
    let filtered = [...transactions]

    // Filtro por tipo de transação
    if (transactionType !== 'all') {
      filtered = filtered.filter((t) => t.type === transactionType)
    }

    // Filtro por membro
    if (selectedMember) {
      filtered = filtered.filter((t) => t.memberId === selectedMember)
    }

    // Filtro por período
    if (dateRange.startDate) {
      filtered = filtered.filter(
        (t) => t.date >= dateRange.startDate!
      )
    }
    if (dateRange.endDate) {
      filtered = filtered.filter(
        (t) => t.date <= dateRange.endDate!
      )
    }

    // Filtro por busca textual
    if (searchText.trim()) {
      const searchLower = searchText.toLowerCase()
      filtered = filtered.filter(
        (t) =>
          t.description.toLowerCase().includes(searchLower) ||
          t.category.toLowerCase().includes(searchLower)
      )
    }

    // Ordenar por data (mais recente primeiro)
    return filtered.sort((a, b) => b.date.getTime() - a.date.getTime())
  }, [transactions, transactionType, selectedMember, dateRange, searchText])

  /**
   * Calcula o saldo total: soma saldos de contas e subtrai faturas de cartões
   */
  const calculateTotalBalance = useMemo(() => {
    const accountsBalance = bankAccounts.reduce((sum, account) => sum + account.balance, 0)
    const cardsDebt = creditCards.reduce((sum, card) => sum + card.currentBill, 0)
    return accountsBalance - cardsDebt
  }, [bankAccounts, creditCards])

  /**
   * Soma todas as receitas do período filtrado
   */
  const calculateIncomeForPeriod = useMemo(() => {
    return getFilteredTransactions
      .filter((t) => t.type === 'income' && t.status === 'completed')
      .reduce((sum, t) => sum + t.amount, 0)
  }, [getFilteredTransactions])

  /**
   * Soma todas as despesas do período filtrado
   */
  const calculateExpensesForPeriod = useMemo(() => {
    return getFilteredTransactions
      .filter((t) => t.type === 'expense' && t.status === 'completed')
      .reduce((sum, t) => sum + t.amount, 0)
  }, [getFilteredTransactions])

  /**
   * Agrupa despesas por categoria e retorna array ordenado por valor decrescente
   */
  const calculateExpensesByCategory = useMemo(() => {
    const expenses = getFilteredTransactions.filter(
      (t) => t.type === 'expense' && t.status === 'completed'
    )

    const categoryMap = new Map<string, { total: number; count: number }>()

    expenses.forEach((expense) => {
      const current = categoryMap.get(expense.category) || { total: 0, count: 0 }
      categoryMap.set(expense.category, {
        total: current.total + expense.amount,
        count: current.count + 1,
      })
    })

    const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0)

    const result: ExpenseByCategory[] = Array.from(categoryMap.entries()).map(
      ([category, data]) => ({
        category,
        total: data.total,
        percentage: totalExpenses > 0 ? (data.total / totalExpenses) * 100 : 0,
        count: data.count,
      })
    )

    return result.sort((a, b) => b.total - a.total)
  }, [getFilteredTransactions])

  /**
   * Calcula percentual de uma categoria em relação à receita total
   */
  const calculateCategoryPercentage = useMemo(() => {
    const totalIncome = calculateIncomeForPeriod
    const categoryExpenses = calculateExpensesByCategory

    return (category: string) => {
      if (totalIncome === 0) return 0

      const categoryData = categoryExpenses.find((c) => c.category === category)
      if (!categoryData) return 0

      return (categoryData.total / totalIncome) * 100
    }
  }, [calculateIncomeForPeriod, calculateExpensesByCategory])

  /**
   * Calcula taxa de poupança: (receitas - despesas) / receitas × 100
   */
  const calculateSavingsRate = useMemo(() => {
    const income = calculateIncomeForPeriod
    const expenses = calculateExpensesForPeriod
    if (income === 0) return 0
    return ((income - expenses) / income) * 100
  }, [calculateIncomeForPeriod, calculateExpensesForPeriod])

  // Inicializar com dados mock apenas uma vez na montagem do componente
  useEffect(() => {
    // Populando dados mock realistas
    const now = new Date()

    // Membros da família brasileira
    const mockMembers: FamilyMember[] = [
      {
        id: generateId(),
        name: 'Lucas Marte',
        role: 'Pai',
        email: 'lucasmarte@gmail.com',
        avatarUrl: 'https://ui-avatars.com/api/?name=Lucas+Marte&background=random',
        monthlyIncome: 8500,
        isMainUser: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: generateId(),
        name: 'Maria Silva',
        role: 'Mãe',
        email: 'mariasilva@gmail.com',
        avatarUrl: 'https://ui-avatars.com/api/?name=Maria+Silva&background=random',
        monthlyIncome: 6200,
        isMainUser: false,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: generateId(),
        name: 'Pedro Marte',
        role: 'Filho',
        email: 'pedromarte@gmail.com',
        avatarUrl: 'https://ui-avatars.com/api/?name=Pedro+Marte&background=random',
        monthlyIncome: 0,
        isMainUser: false,
        createdAt: now,
        updatedAt: now,
      },
    ]

    const lucasId = mockMembers[0].id
    const mariaId = mockMembers[1].id
    const pedroId = mockMembers[2].id

    // Contas bancárias
    const mockAccounts: BankAccount[] = [
      {
        id: generateId(),
        name: 'Conta Corrente Nubank',
        bank: 'Nubank',
        holderId: lucasId,
        balance: 12500.50,
        accountType: 'corrente',
        accountNumber: '0001-2',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: generateId(),
        name: 'Poupança Itaú',
        bank: 'Itaú',
        holderId: mariaId,
        balance: 8500.00,
        accountType: 'poupança',
        accountNumber: '12345-6',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: generateId(),
        name: 'Conta Corrente Bradesco',
        bank: 'Bradesco',
        holderId: lucasId,
        balance: 3200.75,
        accountType: 'corrente',
        accountNumber: '7890-1',
        createdAt: now,
        updatedAt: now,
      },
    ]

    // Cartões de crédito
    const mockCards: CreditCard[] = [
      {
        id: generateId(),
        name: 'Nubank Roxinho',
        bank: 'Nubank',
        holderId: lucasId,
        limit: 15000,
        currentBill: 3200.50,
        closingDay: 5,
        dueDay: 12,
        theme: 'black',
        lastDigits: '1234',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: generateId(),
        name: 'Itaú Click',
        bank: 'Itaú',
        holderId: mariaId,
        limit: 8000,
        currentBill: 1850.00,
        closingDay: 10,
        dueDay: 17,
        theme: 'lime',
        lastDigits: '5678',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: generateId(),
        name: 'Bradesco Gold',
        bank: 'Bradesco',
        holderId: lucasId,
        limit: 12000,
        currentBill: 4500.25,
        closingDay: 15,
        dueDay: 22,
        theme: 'white',
        lastDigits: '9012',
        createdAt: now,
        updatedAt: now,
      },
    ]

    // Objetivos financeiros
    const mockGoals: Goal[] = [
      {
        id: generateId(),
        title: 'Viagem para Europa',
        description: 'Economizar para viagem de 15 dias pela Europa',
        targetAmount: 50000,
        currentAmount: 18500,
        deadline: new Date(2025, 11, 31), // Dezembro 2025
        category: 'Viagem',
        memberId: null, // Objetivo familiar
        isCompleted: false,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: generateId(),
        title: 'Reserva de Emergência',
        description: '6 meses de despesas',
        targetAmount: 60000,
        currentAmount: 35000,
        deadline: new Date(2025, 5, 30), // Junho 2025
        category: 'Reserva',
        memberId: null,
        isCompleted: false,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: generateId(),
        title: 'Notebook Novo',
        description: 'MacBook Pro para trabalho',
        targetAmount: 12000,
        currentAmount: 7500,
        deadline: new Date(2025, 2, 31), // Março 2025
        category: 'Tecnologia',
        memberId: lucasId,
        isCompleted: false,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: generateId(),
        title: 'Curso de Inglês',
        description: 'Curso online de inglês para Pedro',
        targetAmount: 3000,
        currentAmount: 1200,
        deadline: new Date(2025, 3, 30), // Abril 2025
        category: 'Educação',
        memberId: pedroId,
        isCompleted: false,
        createdAt: now,
        updatedAt: now,
      },
    ]

    // Transações dos últimos 3 meses
    const categories = [
      'Alimentação',
      'Transporte',
      'Moradia',
      'Saúde',
      'Educação',
      'Lazer',
      'Compras',
      'Salário',
      'Freelance',
      'Investimentos',
      'Assinaturas',
      'Impostos',
    ]

    const mockTransactions: Transaction[] = []
    const today = new Date()

    // Gerar transações para os últimos 3 meses
    for (let monthOffset = 0; monthOffset < 3; monthOffset++) {
      const monthDate = new Date(today.getFullYear(), today.getMonth() - monthOffset, 1)
      const daysInMonth = new Date(
        monthDate.getFullYear(),
        monthDate.getMonth() + 1,
        0
      ).getDate()

      // Receitas (salários, freelances)
      const salaryDate = new Date(monthDate.getFullYear(), monthDate.getMonth(), 5)
      mockTransactions.push({
        id: generateId(),
        type: 'income',
        amount: 8500,
        description: 'Salário - Lucas',
        category: 'Salário',
        date: new Date(salaryDate),
        accountId: mockAccounts[0].id,
        memberId: lucasId,
        installments: 1,
        status: 'completed',
        isRecurring: true,
        isPaid: true,
        createdAt: now,
        updatedAt: now,
      })

      const salaryDate2 = new Date(monthDate.getFullYear(), monthDate.getMonth(), 5)
      mockTransactions.push({
        id: generateId(),
        type: 'income',
        amount: 6200,
        description: 'Salário - Maria',
        category: 'Salário',
        date: new Date(salaryDate2),
        accountId: mockAccounts[1].id,
        memberId: mariaId,
        installments: 1,
        status: 'completed',
        isRecurring: true,
        isPaid: true,
        createdAt: now,
        updatedAt: now,
      })

      // Despesas variadas
      const expenseCount = 15 + Math.floor(Math.random() * 10) // 15-25 despesas por mês
      for (let i = 0; i < expenseCount; i++) {
        const day = Math.floor(Math.random() * daysInMonth) + 1
        const expenseDate = new Date(
          monthDate.getFullYear(),
          monthDate.getMonth(),
          day
        )
        const category = categories[Math.floor(Math.random() * categories.length)]
        const amount = Math.floor(Math.random() * 2000) + 50 // R$ 50 a R$ 2050
        const member = [lucasId, mariaId, pedroId][Math.floor(Math.random() * 3)]
        const account =
          mockAccounts[Math.floor(Math.random() * mockAccounts.length)]

        mockTransactions.push({
          id: generateId(),
          type: 'expense',
          amount,
          description: `${category} - ${expenseDate.toLocaleDateString('pt-BR')}`,
          category,
          date: expenseDate,
          accountId: account.id,
          memberId: member,
          installments: Math.random() > 0.7 ? 3 : 1, // 30% parceladas
          currentInstallment: Math.random() > 0.7 ? 1 : undefined,
          status: Math.random() > 0.1 ? 'completed' : 'pending',
          isRecurring: category === 'Assinaturas',
          isPaid: Math.random() > 0.15,
          createdAt: now,
          updatedAt: now,
        })
      }
    }

    // Ordenar transações por data (mais recente primeiro)
    mockTransactions.sort((a, b) => b.date.getTime() - a.date.getTime())

    // Inicializar estados
    setFamilyMembers(mockMembers)
    setBankAccounts(mockAccounts)
    setCreditCards(mockCards)
    setGoals(mockGoals)
    setTransactions(mockTransactions)
  }, []) // Executar apenas uma vez na montagem

  const value: FinanceContextType = {
    // Arrays principais
    transactions,
    goals,
    creditCards,
    bankAccounts,
    familyMembers,

    // Filtros globais
    selectedMember,
    dateRange,
    transactionType,
    searchText,

    // Funções de filtro
    setSelectedMember,
    setDateRange,
    setTransactionType,
    setSearchText,
    resetFilters,

    // Funções CRUD
    addTransaction,
    updateTransaction,
    deleteTransaction,
    addGoal,
    updateGoal,
    deleteGoal,
    addCreditCard,
    updateCreditCard,
    deleteCreditCard,
    addBankAccount,
    updateBankAccount,
    deleteBankAccount,
    addFamilyMember,
    updateFamilyMember,
    deleteFamilyMember,

    // Funções de cálculo
    getFilteredTransactions,
    calculateTotalBalance,
    calculateIncomeForPeriod,
    calculateExpensesForPeriod,
    calculateExpensesByCategory,
    calculateCategoryPercentage,
    calculateSavingsRate,
  }

  return <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>
}

/**
 * Hook customizado useFinance
 * Único ponto de acesso ao contexto financeiro em toda a aplicação
 */
export function useFinance() {
  const context = useContext(FinanceContext)
  if (context === undefined) {
    throw new Error('useFinance deve ser usado dentro de um FinanceProvider')
  }
  return context
}
