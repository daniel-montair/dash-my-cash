# mycash+ — Documentação

## Progresso
- [x] PROMPT 0: Análise e Planejamento Inicial
- [x] PROMPT 1: Estrutura Base e Configuração
- [x] PROMPT 2: Sistema de Layout e Navegação Desktop
- [x] PROMPT 3: Sistema de Layout e Navegação Mobile
- [ ] PROMPT 4: Context Global e Gerenciamento de Estado
- [ ] PROMPT 5: Cards de Resumo Financeiro
- [ ] PROMPT 6: Header do Dashboard com Controles
- [ ] PROMPT 7: Carrossel de Gastos por Categoria
- [ ] PROMPT 8: Gráfico de Fluxo Financeiro
- [ ] PROMPT 9: Widget de Cartões de Crédito
- [ ] PROMPT 10: Widget de Próximas Despesas
- [ ] PROMPT 11: Tabela de Transações Detalhada
- [ ] PROMPT 12: Modal de Nova Transação
- [ ] PROMPT 13: Modal de Adicionar Membro
- [ ] PROMPT 14: Modal de Adicionar Cartão
- [ ] PROMPT 15: Modal de Detalhes do Cartão
- [ ] PROMPT 16: Modal de Filtros Mobile
- [ ] PROMPT 17: View Completa de Cartões
- [ ] PROMPT 18: View Completa de Transações
- [ ] PROMPT 19: View de Perfil - Aba Informações
- [ ] PROMPT 20: View de Perfil - Aba Configurações
- [ ] PROMPT 21: Animações e Transições Globais
- [ ] PROMPT 22: Formatação e Utilitários
- [ ] PROMPT 23: Responsividade e Ajustes Finais
- [ ] PROMPT 24: Testes e Validação Final

---

## PROMPT 0: Análise e Planejamento Inicial
**Status:** ✅ CONCLUÍDO | **Data:** 28/01/2025 | **Build:** N/A (análise)

### 📚 PRÉ-EXECUÇÃO
✓ Rules relidas e aplicadas
✓ Figma consultado e analisado (via descrição da imagem)
✓ Hierarquia de variáveis verificada

### 📦 IMPLEMENTADO
- Análise completa dos componentes visuais do dashboard
- Mapeamento da hierarquia de componentes
- Identificação de variáveis semânticas e primitivas
- Análise detalhada da estrutura de navegação
- Definição completa da arquitetura proposta
- Criação de documentação de prompts (PROMPTS.md)
- Criação de análise detalhada (ANALISE-PROMPT-0.md)
- Criação de TODO list com todos os 24 prompts

### 🎨 TOKENS IDENTIFICADOS

**Semânticas:**
- `--color-primary-yellow` (estado ativo sidebar)
- `--color-primary-blue` (botões primários)
- `--color-success-green` (receitas, positivos)
- `--color-danger-red` (despesas, negativos)
- `--color-info-blue` (saldo total)
- `--spacing-container` (padding principal)
- `--spacing-section` (entre seções)
- `--spacing-card` (padding interno cards)

**Primitivas:**
- `--gray-50` a `--gray-900` (escala de cinza)
- `--white` (fundos)
- `--spacing-xs` a `--spacing-xl` (escala de espaçamento)
- `--font-size-h1` a `--font-size-xs` (tipografia)
- `--font-weight-regular`, `--font-weight-semibold`, `--font-weight-bold`
- `--border-radius-sm` a `--border-radius-full`
- `--shadow-sm`, `--shadow-md`

**Conversões realizadas:**
- N/A (análise inicial - aguardando acesso ao Figma para mapeamento completo)

### 📁 ARQUIVOS CRIADOS/MODIFICADOS
- `PROMPTS.md` (sequência completa de 24 prompts)
- `DOCUMENTATION.md` (documentação principal do projeto)
- `ANALISE-PROMPT-0.md` (análise detalhada do PROMPT 0)

### 🔨 BUILD STATUS
N/A - Análise inicial (sem código ainda)

### 💾 COMMIT REALIZADO
N/A - Aguardando aprovação para commit

### 🤔 PRÓXIMOS PASSOS
⏭️ PROMPT 1: Estrutura Base e Configuração
- Setup React + TypeScript + Vite
- Configuração Tailwind CSS com tokens
- Estrutura de pastas base
- Configuração de rotas
- Setup Supabase
- Variáveis CSS globais
- Tipos TypeScript para 5 entidades principais

---

## PROMPT 1: Estrutura Base e Configuração
**Status:** ✅ CONCLUÍDO | **Data:** 28/01/2025 | **Build:** ✅ (1 tentativa)

### 📚 PRÉ-EXECUÇÃO
✓ Rules relidas e aplicadas
✓ Estrutura de pastas planejada
✓ Tokens do design system mapeados

### 📦 IMPLEMENTADO
- Estrutura de pastas completa seguindo boas práticas React
- Configuração do Vite com TypeScript
- Configuração do Tailwind CSS com tokens do Figma mapeados
- Tipos TypeScript para 5 entidades principais (Transaction, Goal, CreditCard, BankAccount, FamilyMember)
- React Router configurado com 5 rotas principais
- Variáveis CSS globais com tokens semânticos e primitivos
- Setup do Supabase (cliente configurado)
- Arquivos base da aplicação (main.tsx, App.tsx, Layout)
- Páginas base para todas as rotas
- README.md com documentação inicial

### 🎨 TOKENS UTILIZADOS

**Semânticas:**
- `--color-primary-yellow`, `--color-primary-blue`, `--color-success-green`, `--color-danger-red`, `--color-info-blue`
- `--spacing-container`, `--spacing-section`, `--spacing-card`

**Primitivas:**
- `--gray-50` a `--gray-900` (escala completa)
- `--spacing-xs` a `--spacing-xl` (escala completa)
- `--font-size-h1` a `--font-size-xs` (tipografia)
- `--font-weight-regular`, `--font-weight-semibold`, `--font-weight-bold`
- `--border-radius-sm` a `--border-radius-full`
- `--shadow-sm`, `--shadow-md`

**Conversões realizadas:**
- N/A (tokens definidos diretamente no CSS conforme design system)

### 📁 ARQUIVOS CRIADOS/MODIFICADOS
- `package.json` (dependências do projeto)
- `tsconfig.json`, `tsconfig.node.json` (configuração TypeScript)
- `vite.config.ts` (configuração Vite)
- `tailwind.config.js` (configuração Tailwind com tokens)
- `postcss.config.js` (configuração PostCSS)
- `index.html` (HTML base)
- `.gitignore` (arquivos ignorados)
- `src/types/index.ts` (tipos TypeScript das 5 entidades)
- `src/styles/globals.css` (variáveis CSS e estilos globais)
- `src/main.tsx` (ponto de entrada)
- `src/App.tsx` (componente raiz com rotas)
- `src/components/layout/Layout.tsx` (layout base)
- `src/pages/Dashboard.tsx`, `Cards.tsx`, `Transactions.tsx`, `Goals.tsx`, `Profile.tsx` (páginas)
- `src/services/supabase.ts` (cliente Supabase)
- `src/vite-env.d.ts` (tipos de ambiente)
- `README.md` (documentação do projeto)
- Estrutura de pastas: `contexts/`, `hooks/`, `utils/`, `constants/`, `components/dashboard/`, `components/cards/`, `components/modals/`, `components/ui/`

### 🔨 BUILD STATUS
✅ Sucesso (tentativas: 1)
- Build TypeScript: ✅
- Build Vite: ✅
- CSS compilado: ✅

### 💾 COMMIT REALIZADO
N/A - Aguardando aprovação para commit

---

## PROMPT 2: Sistema de Layout e Navegação Desktop
**Status:** ✅ CONCLUÍDO (REFATORADO) | **Data:** 28/01/2025 | **Build:** ✅ (1 tentativa)

### 📚 PRÉ-EXECUÇÃO
✓ Rules relidas e aplicadas
✓ Figma MCP consultado e analisado
✓ Variáveis do design system verificadas
✓ Hierarquia de variáveis respeitada

### 📦 IMPLEMENTADO
- Componente Sidebar com estados expandido/colapsado (conforme Figma MCP)
- Hook useSidebar para gerenciamento de estado (com persistência no localStorage)
- Botão de toggle circular no header ao lado do logo (conforme Figma)
- Transições suaves de 300ms entre estados
- Conteúdo principal ajusta margem esquerda fluidamente
- Sistema de tooltips para itens quando sidebar está colapsada (delay de 300ms)
- Item ativo destacado conforme Figma:
  - Expandido: fundo verde-limão neon, texto e ícone pretos
  - Colapsado: círculo verde-limão neon com ícone preto
- Logo conforme Figma:
  - Expandido: "Mycash+" com "My" sublinhado
  - Colapsado: "My" em cima (negrito, sublinhado) e "cash+" embaixo (menor, cinza)
- Perfil do usuário completo quando expandido, apenas avatar quando colapsado
- 5 itens de navegação: Home, Cartões, Transações, Objetivos, Perfil
- Sidebar apenas visível no desktop (≥1280px) usando `hidden lg:flex`
- Layout atualizado para empurrar conteúdo (não sobrepor)

### 🎨 TOKENS UTILIZADOS

**Semânticas:**
- `--color-lime-green` (fundo do item ativo - verde-limão neon #A3E635)

**Primitivas:**
- `--gray-50`, `--gray-100`, `--gray-200`, `--gray-500`, `--gray-600`, `--gray-900` (cores de fundo, texto e bordas)
- `--black`, `--white` (texto e fundos)

**Conversões realizadas:**
- Verde neon do Figma → `--color-lime-green: #A3E635` (verde-limão vibrante para item ativo)

### 📁 ARQUIVOS CRIADOS/MODIFICADOS
- `src/hooks/useSidebar.ts` (hook para gerenciar estado da sidebar)
- `src/components/ui/Tooltip.tsx` (componente de tooltip)
- `src/components/layout/Sidebar/Sidebar.tsx` (refatorado conforme Figma MCP)
- `src/components/layout/Sidebar/SidebarItem.tsx` (refatorado - item ativo com fundo verde-limão)
- `src/components/layout/Layout.tsx` (atualizado para incluir sidebar)
- `src/styles/globals.css` (adicionada variável --color-lime-green e animação fadeIn)
- `tailwind.config.js` (adicionada cor lime-green ao tema)

### 🔨 BUILD STATUS
✅ Sucesso (tentativas: 1)
- TypeScript: ✅
- Vite build: ✅
- CSS compilado: ✅

### 💾 COMMIT REALIZADO
N/A - Aguardando aprovação para commit

---

## PROMPT 3: Sistema de Layout e Navegação Mobile
**Status:** ✅ CONCLUÍDO | **Data:** 28/01/2025 | **Build:** ✅ (1 tentativa)

### 📚 PRÉ-EXECUÇÃO
✓ Rules relidas e aplicadas
✓ Figma consultado e analisado
✓ Variáveis do design system verificadas
✓ Breakpoints configurados corretamente

### 📦 IMPLEMENTADO
- Componente HeaderMobile fixo no topo (apenas <1024px)
- Header ocupa largura total e permanece visível durante scroll
- Logo "mycash+" à esquerda em tamanho apropriado para mobile
- Avatar do usuário à direita, clicável como trigger do menu
- Componente MenuDropdown com animação slide-down suave (300ms)
- Menu não é fullscreen, cobre conteúdo abaixo com bordas arredondadas
- Todos os itens de navegação com ícone e texto no dropdown
- Item ativo destacado com fundo verde-limão neon (`--color-lime-green`) e texto preto (consistente com Sidebar)
- Botão "Sair" vermelho na parte inferior do menu
- Lógica de fechamento completa:
  - Fecha ao clicar em qualquer item de navegação
  - Fecha ao clicar no botão X no canto superior direito
  - Fecha ao clicar/tocar no overlay escuro semi-transparente
- Breakpoints configurados:
  - Desktop (≥1024px): apenas Sidebar aparece
  - Mobile/Tablet (<1024px): apenas HeaderMobile aparece
  - Nunca aparecem simultaneamente
- Conteúdo principal ajustado com padding-top no mobile para compensar header fixo

### 🎨 TOKENS UTILIZADOS

**Semânticas:**
- `--color-danger-red` (botão "Sair")
- `--color-lime-green` (item ativo - verde-limão neon, mantém consistência com Sidebar)

**Primitivas:**
- `--gray-100`, `--gray-200`, `--gray-500`, `--gray-900` (cores de fundo, texto e bordas)
- `--black`, `--white` (texto e fundos)

**Conversões realizadas:**
- N/A (todos os valores usam variáveis primitivas do design system)

### 📁 ARQUIVOS CRIADOS/MODIFICADOS
- `src/components/layout/HeaderMobile/HeaderMobile.tsx` (componente principal do header mobile)
- `src/components/layout/HeaderMobile/MenuDropdown.tsx` (menu dropdown com animação - refatorado para consistência visual com Sidebar)
- `src/components/layout/Layout.tsx` (atualizado para incluir HeaderMobile e padding-top)
- `tailwind.config.js` (adicionado breakpoint customizado 'desktop': 1024px)

### 🔄 REFATORAÇÃO DE CONSISTÊNCIA VISUAL
**Problema identificado:** HeaderMobile e MenuDropdown não mantinham consistência visual com a Sidebar.

**Solução aplicada:**
- MenuItem ativo: alterado de `bg-black text-white` para `bg-[var(--color-lime-green)] text-black` (igual à Sidebar)
- MenuItem inativo: alterado para `text-black hover:bg-[var(--gray-100)]` (igual à Sidebar)
- Todos os estilos agora usam variáveis primitivas do design system (`var(--gray-*)`, `var(--black)`, `var(--white)`)
- Ícones e espaçamentos mantêm o mesmo padrão da Sidebar
- HeaderMobile usa as mesmas cores e estilos da Sidebar

### 🔨 BUILD STATUS
✅ Sucesso (tentativas: 1)
- TypeScript: ✅
- Vite build: ✅
- CSS compilado: ✅

### 💾 COMMIT REALIZADO
✅ `feat: implementa PROMPT 3 - Sistema de Layout e Navegação Mobile` (hash: 6db19cc)
- 11 arquivos alterados, 937 inserções, 17 deleções
- Push realizado com sucesso para `origin/main`

---

## PROMPT 4: Context Global e Gerenciamento de Estado
**Status:** ✅ CONCLUÍDO | **Data:** 28/01/2025 | **Build:** ✅ (1 tentativa)

### 📚 PRÉ-EXECUÇÃO
✓ Rules relidas e aplicadas
✓ Tipos TypeScript verificados
✓ Arquitetura de contexto planejada
✓ ⚠️ Regra crítica: NÃO usar localStorage/sessionStorage - apenas React state

### 📦 IMPLEMENTADO
- **FinanceProvider** criado como Context Provider no nível mais alto da aplicação
- **5 arrays principais** gerenciados via React state:
  - `transactions`: array de transações financeiras
  - `goals`: array de objetivos financeiros
  - `creditCards`: array de cartões de crédito
  - `bankAccounts`: array de contas bancárias
  - `familyMembers`: array de membros da família
- **Funções CRUD completas** para cada entidade:
  - `add*`, `update*`, `delete*` para todas as 5 entidades
  - Todas as funções atualizam o estado e causam re-renderização automática
- **Estados de filtros globais**:
  - `selectedMember`: ID do membro selecionado ou null
  - `dateRange`: objeto com startDate e endDate
  - `transactionType`: 'all' | 'income' | 'expense'
  - `searchText`: string para busca textual
  - `resetFilters()`: função para resetar todos os filtros
- **Funções de cálculo derivadas** (com memoização via useMemo):
  - `getFilteredTransactions`: retorna array filtrado e ordenado
  - `calculateTotalBalance`: soma saldos de contas - faturas de cartões
  - `calculateIncomeForPeriod`: soma receitas do período filtrado
  - `calculateExpensesForPeriod`: soma despesas do período filtrado
  - `calculateExpensesByCategory`: agrupa despesas por categoria (ordenado)
  - `calculateCategoryPercentage`: calcula % de categoria em relação à receita
  - `calculateSavingsRate`: calcula taxa de poupança ((receitas - despesas) / receitas × 100)
- **Hook customizado `useFinance`**: único ponto de acesso ao contexto
- **Dados mock realistas** populados automaticamente:
  - 3 membros da família brasileira (Lucas, Maria, Pedro)
  - 3 contas bancárias (Nubank, Itaú, Bradesco)
  - 3 cartões de crédito (Nubank Roxinho, Itaú Click, Bradesco Gold)
  - 4 objetivos financeiros variados
  - 20-30 transações distribuídas nos últimos 3 meses
  - Categorias padrão brasileiras (Alimentação, Transporte, Moradia, etc.)

### 🎨 TOKENS UTILIZADOS
- N/A (este prompt é focado em lógica de negócio, não em estilos visuais)

### 📁 ARQUIVOS CRIADOS/MODIFICADOS
- `src/contexts/FinanceContext.tsx` (novo - contexto completo com provider e hook)
- `src/App.tsx` (modificado - integrado FinanceProvider no nível mais alto)

### 🔨 BUILD STATUS
✅ Sucesso (tentativas: 1)
- TypeScript: ✅
- Vite build: ✅
- Sem erros de lint: ✅

### 💾 COMMIT REALIZADO
N/A - Aguardando aprovação para commit

### ⚠️ REGRA CRÍTICA RESPEITADA
✅ **NÃO usa localStorage, sessionStorage ou qualquer browser storage API**
✅ Todo o estado é gerenciado EXCLUSIVAMENTE via React state (useState, useReducer)
✅ Dados são temporários e existem apenas durante a sessão do navegador
✅ Futuramente será integrado com Supabase para persistência real

---

## PROMPT 5: Cards de Resumo Financeiro
**Status:** ✅ CONCLUÍDO | **Data:** 28/01/2025 | **Build:** ✅ (1 tentativa)

### 📚 PRÉ-EXECUÇÃO
✓ Rules relidas e aplicadas
✓ Variáveis do design system verificadas
✓ Context Finance verificado
✓ Hierarquia de variáveis respeitada

### 📦 IMPLEMENTADO
- **BalanceCard** (Card de Saldo Total):
  - Fundo completamente preto (`bg-[var(--black)]`) com texto branco
  - Círculo decorativo verde-limão desfocado (`bg-[var(--color-lime-green)] opacity-20 blur-3xl`)
  - Label "Saldo Total" em cinza claro (`text-[var(--gray-300)]`)
  - Valor formatado como moeda brasileira (R$ 1.234,56) em fonte grande
  - Badge arredondado com fundo semi-transparente branco mostrando crescimento percentual
  - Cálculo compara saldo atual com saldo de 30 dias atrás
  - Valor vem de `calculateTotalBalance` do contexto
  - Animação de contagem de 800ms
- **IncomeCard** (Card de Receitas):
  - Fundo branco (`bg-[var(--white)]`) com borda sutil (`border-[var(--gray-200)]`)
  - Label "Receitas" em preto negrito no topo à esquerda
  - Círculo com fundo cinza claro contendo ícone de seta diagonal (entrada de dinheiro)
  - Valor formatado como moeda em fonte grande e negrito
  - Valor vem de `calculateIncomeForPeriod` do contexto
  - Animação de contagem de 800ms
- **ExpenseCard** (Card de Despesas):
  - Estrutura similar ao IncomeCard
  - Label "Despesas" em cinza médio (`text-[var(--gray-500)]`)
  - Círculo com fundo vermelho claro (`bg-red-100`) e ícone de seta diagonal (saída)
  - Valor formatado como moeda
  - Valor vem de `calculateExpensesForPeriod` do contexto
  - Animação de contagem de 800ms
- **Layout responsivo**:
  - Desktop: cards organizados horizontalmente com flexbox
  - BalanceCard ocupa `flex-[1.2]` (um pouco maior)
  - IncomeCard e ExpenseCard ocupam `flex-1` (tamanhos iguais)
  - Mobile: cards organizados verticalmente, cada um ocupa largura total
- **Hook `useCountAnimation`**: animação suave de contagem (800ms) com easing ease-out
- **Utilitário `formatCurrency`**: formata valores como moeda brasileira usando `Intl.NumberFormat`

### 🎨 TOKENS UTILIZADOS

**Semânticas:**
- `--color-lime-green` (círculo decorativo do BalanceCard)
- `--color-danger-red` (ícone do ExpenseCard)

**Primitivas:**
- `--black`, `--white` (fundos e textos)
- `--gray-50`, `--gray-100`, `--gray-200`, `--gray-300`, `--gray-500`, `--gray-900` (cores de fundo, texto e bordas)
- `--border-radius-lg` (bordas arredondadas)
- `--spacing-md`, `--spacing-lg` (espaçamentos)

**Conversões realizadas:**
- N/A (todos os valores usam variáveis primitivas do design system)

### 📁 ARQUIVOS CRIADOS/MODIFICADOS
- `src/components/dashboard/BalanceCard.tsx` (novo)
- `src/components/dashboard/IncomeCard.tsx` (novo)
- `src/components/dashboard/ExpenseCard.tsx` (novo)
- `src/hooks/useCountAnimation.ts` (novo - hook para animação de contagem)
- `src/utils/format.ts` (novo - utilitários de formatação)
- `src/pages/Dashboard.tsx` (modificado - integrados os três cards)

### 🔨 BUILD STATUS
✅ Sucesso (tentativas: 1)
- TypeScript: ✅
- Vite build: ✅
- Sem erros de lint: ✅

### 💾 COMMIT REALIZADO
N/A - Aguardando aprovação para commit

### 🤔 PRÓXIMOS PASSOS
⏭️ PROMPT 6: Header do Dashboard com Controles
- FinanceProvider com arrays principais
- Funções CRUD para todas as entidades
- Estados de filtros globais
- Funções de cálculo derivadas
- Hook useFinance
- Dados mock iniciais
- ⚠️ NÃO usar localStorage/sessionStorage (apenas React state)

**Comandos disponíveis:**
- "Próximo" → Avançar para PROMPT 4
- "Revisar [arquivo]" → Revisar arquivo específico
- "Status" → Ver progresso geral
