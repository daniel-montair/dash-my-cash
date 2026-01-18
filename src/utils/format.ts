/**
 * Utilitários de formatação
 * Funções para formatar valores monetários, datas, etc.
 */

/**
 * Formata número como moeda brasileira
 * Exemplo: 1234.56 -> "R$ 1.234,56"
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

/**
 * Formata número como moeda compacta para gráficos
 * Exemplo: 2500 -> "R$ 2,5k", 1200000 -> "R$ 1,2M"
 */
export function formatCompactCurrency(value: number): string {
  if (value >= 1000000) {
    return `R$ ${(value / 1000000).toFixed(1).replace('.', ',')}M`
  }
  if (value >= 1000) {
    return `R$ ${(value / 1000).toFixed(1).replace('.', ',')}k`
  }
  return formatCurrency(value)
}

/**
 * Formata nome do mês abreviado em português
 */
export function formatMonthAbbreviation(date: Date): string {
  const months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ]
  return months[date.getMonth()]
}
