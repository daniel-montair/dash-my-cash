/**
 * Tipos TypeScript fundamentais para o sistema mycash+
 * Representam as cinco entidades principais do sistema
 */

export type TransactionType = 'income' | 'expense';
export type TransactionStatus = 'completed' | 'pending' | 'cancelled';
export type CreditCardTheme = 'black' | 'lime' | 'white';

/**
 * Transaction - Representa uma transação financeira
 */
export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  description: string;
  category: string;
  date: Date;
  accountId: string; // ID da conta bancária ou cartão de crédito
  memberId: string | null; // ID do membro responsável, null se for geral
  installments: number; // Número de parcelas (1 = à vista)
  currentInstallment?: number; // Parcela atual (para transações parceladas)
  status: TransactionStatus;
  isRecurring: boolean; // Se é uma despesa recorrente (ex: assinatura mensal)
  isPaid: boolean; // Se foi paga (para despesas)
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Goal - Representa um objetivo financeiro
 */
export interface Goal {
  id: string;
  title: string;
  description?: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date;
  category?: string;
  memberId: string | null; // ID do membro responsável, null se for familiar
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * CreditCard - Representa um cartão de crédito
 */
export interface CreditCard {
  id: string;
  name: string;
  bank?: string;
  holderId: string; // ID do membro titular do cartão
  limit: number; // Limite total do cartão
  currentBill: number; // Fatura atual
  closingDay: number; // Dia de fechamento (1-31)
  dueDay: number; // Dia de vencimento (1-31)
  theme: CreditCardTheme; // Tema visual do cartão
  lastDigits?: string; // Últimos 4 dígitos do cartão
  createdAt: Date;
  updatedAt: Date;
}

/**
 * BankAccount - Representa uma conta bancária
 */
export interface BankAccount {
  id: string;
  name: string;
  bank?: string;
  holderId: string; // ID do membro titular da conta
  balance: number; // Saldo atual
  accountType?: string; // Tipo de conta (corrente, poupança, etc)
  accountNumber?: string; // Número da conta (opcional)
  createdAt: Date;
  updatedAt: Date;
}

/**
 * FamilyMember - Representa um membro da família
 */
export interface FamilyMember {
  id: string;
  name: string;
  role: string; // Função na família (Pai, Mãe, Filho, etc)
  email?: string;
  avatarUrl?: string; // URL do avatar
  monthlyIncome?: number; // Renda mensal estimada
  isMainUser?: boolean; // Se é o usuário principal
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Tipos auxiliares para filtros e estados
 */
export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export interface FinanceFilters {
  selectedMember: string | null;
  dateRange: DateRange;
  transactionType: 'all' | 'income' | 'expense';
  searchText: string;
}

/**
 * Tipo para agrupar despesas por categoria
 */
export interface ExpenseByCategory {
  category: string;
  total: number;
  percentage: number;
  count: number;
}
