# 📋 PROMPT 0: Análise e Planejamento Inicial - Dashboard MyCash+

**Data:** $(date +%d/%m/%Y)  
**Link Figma:** https://www.figma.com/design/5Hz3dsj4tO8KRBipXQi8OV/Workshop---Do-figma-MCP-ao-Cursor-AI-v.3--Community-?node-id=42-3096&t=1b6gpcmfoOCrZcbF-4

---

## 1. Componentes Visuais e Hierarquia

### 1.1 Layout Geral
O layout é dividido em duas seções principais:
- **Sidebar Esquerda:** Navegação e perfil do usuário
- **Área de Conteúdo Principal:** Dashboard com múltiplas seções

### 1.2 Sidebar (Desktop)
**Estrutura:**
- **Topo:** Logo/texto "Mycash+" em preto
- **Navegação:**
  - Item "Home" (ativo - destacado em amarelo)
  - Item "Cartões" (com ícone de cartão de crédito)
  - Cada item possui ícone + texto
- **Rodapé:** Seção de perfil
  - Avatar circular pequeno
  - Nome: "Lucas Marte"
  - Email: "lucasmarte@gmail.com"

**Estados:**
- **Expandido:** Mostra ícones + texto (estado atual)
- **Colapsado:** Apenas ícones (com tooltips ao hover)

### 1.3 Header Superior
**Elementos:**
- **Esquerda:** Barra de pesquisa ("Pesquisar") com ícone de lupa
- **Meio:** 
  - Ícone de filtro/ordenação
  - Seletor de intervalo de datas ("01 Jan - 31 Jan 2026")
- **Direita:**
  - Três avatares circulares (membros/compartilhamento)
  - Ícone de adição em círculo
  - Botão "Nova transação" (azul escuro) com ícone de adição

### 1.4 Seções do Dashboard

#### A. Cards de Resumo (Linha Superior - 4 cards)
**Componentes:**
- Card com categoria (Aluguel, Alimentação, Mercado, Academia)
- Porcentagem (25%, 15%, 5%, 3%)
- Barra de progresso circular em verde
- Valor monetário (R$ 4.000,00, R$ 2.000,00, R$ 1.500,00, R$ 120,00)

**Layout:** Grid de 4 colunas (desktop), 2 (tablet), 1 (mobile)

#### B. Visão Geral Financeira (Linha do Meio - 3 cards)
**Componentes:**
1. **Saldo total:** R$ 2.000,00 (azul)
2. **Receitas:** R$ 12.000,00 (verde) + ícone seta para baixo
3. **Despesas:** R$ 10.000,00 (vermelho) + ícone seta para cima

**Layout:** Grid de 3 colunas (desktop), 1 coluna (mobile)

#### C. Cards & Contas (Lado Direito)
**Estrutura:**
- Título "Cards & contas" com ícone de cartão
- Lista de contas:
  - Nubank: R$ 120,00 | Vence dia 10 | **** 5897
  - Inter: R$ 2.300,00 | Vence dia 21 | **** 5897
  - Picpay: R$ 17.000,00 | Vence dia 12 | **** 5897

**Componente:** Lista vertical com itens de cartão

#### D. Fluxo Financeiro (Gráfico)
**Estrutura:**
- Título "Fluxo financeiro" com ícone de gráfico
- Gráfico de área:
  - Receitas (área verde/amarela)
  - Despesas (área vermelha/laranja)
  - Eixo X: Meses (JAN a DEZ)
  - Eixo Y: R$ 0,00 a R$ 17.500
- Legenda: "Receitas" (ponto verde), "Despesas" (ponto vermelho)

**Biblioteca sugerida:** Recharts ou Chart.js

#### E. Próximas Despesas (Lado Direito)
**Estrutura:**
- Título "Próximas despesas" com ícone de calendário
- Lista de despesas:
  - Conta de Luz: R$ 154,00
  - Vence: 21/01
  - Cartão: Crédito Nubank **** 5897
  - Ícone de checkmark verde (pago/confirmado)

**Componente:** Lista vertical com itens de despesa

#### F. Extrato Detalhado (Tabela)
**Estrutura:**
- Título "Extrato detalhado" com ícone de documento
- Barra de busca: "Buscar lançamentos"
- Dropdown: "Despesas"
- Tabela com colunas:
  - Membro (Avatares)
  - Datas
  - Descrição (ex: Conta de água, Conta de Luz, Passeio no parque)
  - Categorias (Manutenção, Lazer)
  - Conta/cartão (Conta corrente, Cartão XP)
  - Parcelas
  - Valor (R$ 100,00, R$ 150,00, R$ 750,00)
- Paginação: "Mostrando 1 a 5 de 17" + números "1 2 3 4 5" + setas

**Responsividade:** Tabela no desktop, cards no mobile

---

## 2. Variáveis Semânticas e Primitivas do Design System

### 2.1 Cores

#### Semânticas (Prioridade 1)
- `--color-primary-yellow`: Estado ativo da sidebar, destaque
- `--color-primary-blue`: Botões primários (Nova transação)
- `--color-success-green`: Receitas, indicadores positivos, checkmarks, barras de progresso
- `--color-danger-red`: Despesas, indicadores negativos
- `--color-info-blue`: Saldo total

#### Primitivas (Prioridade 2)
- `--gray-50`: Background muito claro
- `--gray-100`: Background claro
- `--gray-200`: Bordas sutis
- `--gray-500`: Texto secundário
- `--gray-900`: Texto principal, títulos
- `--white`: Fundos de cards

#### Cores de Gráfico
- `--chart-income-light`: Amarelo/verde claro (área de receitas)
- `--chart-expense-light`: Vermelho/laranja claro (área de despesas)

### 2.2 Espaçamento

#### Tokens Semânticos
- `--spacing-container`: Padding do container principal
- `--spacing-section`: Espaçamento entre seções
- `--spacing-card`: Padding interno dos cards

#### Tokens Primitivos
- `--spacing-xs`: 4px (espaçamento mínimo)
- `--spacing-sm`: 8px (espaçamento pequeno)
- `--spacing-md`: 16px (mobile), 24px (tablet), 32px (desktop)
- `--spacing-lg`: 24px (mobile), 32px (tablet), 48px (desktop)
- `--spacing-xl`: 32px (mobile), 48px (tablet), 64px (desktop)

### 2.3 Tipografia

#### Família
- `--font-family-sans`: Fonte sans-serif moderna

#### Tamanhos
- `--font-size-h1`: Valores monetários grandes (Saldo, Receitas, Despesas)
- `--font-size-h2`: Títulos de seção
- `--font-size-body`: Texto principal
- `--font-size-sm`: Informações secundárias
- `--font-size-xs`: Legendas, notas

#### Pesos
- `--font-weight-regular`: 400 (texto corpo)
- `--font-weight-semibold`: 600 (destaques)
- `--font-weight-bold`: 700 (títulos, valores importantes)

### 2.4 Shapes (Formas)

#### Raio de Borda
- `--border-radius-sm`: 4px (cards, botões, inputs)
- `--border-radius-md`: 8px (cards maiores)
- `--border-radius-lg`: 12px
- `--border-radius-full`: 50% (avatares, pontos de legenda)

#### Sombras
- `--shadow-sm`: Sombra sutil sob cards
- `--shadow-md`: Sombra média para elevação

---

## 3. Estrutura de Navegação

### 3.1 Desktop (≥1280px)

**Sidebar:**
- Fixa à esquerda
- Largura expandida: ~240px (estimado)
- Largura colapsada: ~64px (estimado)
- Empurra o conteúdo principal (não sobrepõe)
- Transição suave entre estados

**Navegação:**
- Home (ativo)
- Cartões
- Transações (a adicionar)
- Perfil (a adicionar)

**Perfil:**
- Fixo na parte inferior da sidebar
- Visível em ambos os estados (expandido/colapsado)

### 3.2 Mobile/Tablet (<1280px)

**Header Mobile:**
- Aparece no topo
- Menu hambúrguer (abre drawer)
- Logo "Mycash+"
- Ações principais condensadas

**Drawer:**
- Overlay escuro de fundo
- Menu lateral deslizante
- Mesmos itens da sidebar desktop
- Fecha ao clicar fora ou em um item

**Transições:**
- Suaves (fade, slide)
- Duração: ~300ms

---

## 4. Arquitetura Proposta

### 4.1 Estrutura de Pastas

```
src/
├── assets/                 # Ícones, imagens, fontes
├── components/
│   ├── layout/             # Componentes de layout
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── SidebarItem.tsx
│   │   │   └── useSidebar.ts
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   ├── DateRangePicker.tsx
│   │   │   └── UserAvatars.tsx
│   │   ├── HeaderMobile/
│   │   │   ├── HeaderMobile.tsx
│   │   │   └── Drawer.tsx
│   │   └── Layout.tsx
│   ├── ui/                 # Componentes genéricos
│   │   ├── Card.tsx
│   │   ├── Avatar.tsx
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── Table.tsx
│   │   ├── Pagination.tsx
│   │   └── Badge.tsx
│   ├── dashboard/          # Componentes específicos do Dashboard
│   │   ├── SummaryCard.tsx
│   │   ├── FinancialOverviewCard.tsx
│   │   ├── CardsAndAccountsList.tsx
│   │   ├── CardsAndAccountsItem.tsx
│   │   ├── FinancialFlowChart.tsx
│   │   ├── UpcomingExpensesList.tsx
│   │   ├── UpcomingExpenseItem.tsx
│   │   ├── DetailedStatementTable.tsx
│   │   └── DetailedStatementRow.tsx
│   └── pages/              # Páginas principais
│       ├── Dashboard.tsx
│       ├── Cards.tsx
│       ├── Transactions.tsx
│       └── Profile.tsx
├── hooks/                  # Custom hooks
│   ├── useAuth.ts
│   ├── useNavigation.ts
│   ├── useResponsive.ts
│   ├── useFinancialData.ts
│   └── useSidebar.ts
├── services/               # Integração com APIs
│   ├── supabase.ts
│   └── api.ts
├── styles/                 # Arquivos de estilo
│   ├── globals.css
│   ├── variables.css
│   └── tailwind.config.ts
├── utils/                  # Funções utilitárias
│   ├── formatters.ts
│   ├── dateHelpers.ts
│   └── validators.ts
├── types/                  # Definições de tipos TypeScript
│   └── index.ts
├── App.tsx                 # Componente raiz
├── main.tsx                # Ponto de entrada
└── vite-env.d.ts
```

### 4.2 Hierarquia de Componentes

```
App
└── Layout
    ├── Sidebar (desktop) / HeaderMobile (mobile)
    └── MainContentArea
        ├── Header (desktop)
        └── PageContent
            └── DashboardPage
                ├── SummaryGrid
                │   └── SummaryCard (x4)
                ├── FinancialOverviewGrid
                │   └── FinancialOverviewCard (x3)
                ├── CardsAndAccountsSection
                │   └── CardsAndAccountsItem (x3)
                ├── FinancialFlowSection
                │   └── FinancialFlowChart
                ├── UpcomingExpensesSection
                │   └── UpcomingExpenseItem (x3)
                └── DetailedStatementSection
                    ├── DetailedStatementTable
                    └── Pagination
```

### 4.3 Estratégia de Componentização

**Princípios:**
1. **Atomic Design:** Átomos → Moléculas → Organismos → Templates → Páginas
2. **Reusabilidade:** Componentes genéricos (Card, Button, Input) reutilizáveis
3. **Separação de Responsabilidades:**
   - Componentes de UI: "Burros" (presentational), recebem dados via props
   - Lógica de negócio: Hooks ou componentes containers
4. **Gerenciamento de Estado:**
   - React Context API para dados globais (usuário, dados financeiros)
   - useState/useReducer para estado local
5. **Estilização:**
   - Tailwind CSS com tema personalizado
   - Variáveis CSS mapeadas para tokens do Tailwind
6. **Responsividade:**
   - Mobile-first
   - Breakpoints: md (768px), lg (1280px), xl (1920px)
7. **Acessibilidade:**
   - HTML semântico
   - Atributos ARIA quando necessário
   - Navegação por teclado
8. **TypeScript:**
   - Tipagem forte em todos os componentes
   - Interfaces bem definidas

---

## 5. Tecnologias e Dependências

### 5.1 Core
- React 18+
- TypeScript 5+
- Vite 5+

### 5.2 Estilização
- Tailwind CSS 3+
- PostCSS
- Autoprefixer

### 5.3 Roteamento
- React Router DOM 6+

### 5.4 Backend
- Supabase (autenticação + banco de dados)

### 5.5 Gráficos
- Recharts ou Chart.js (a definir)

### 5.6 Utilitários
- date-fns (manipulação de datas)
- clsx (classes condicionais)

---

## 6. Breakpoints e Responsividade

### 6.1 Breakpoints Oficiais
- **Mobile (base):** < 768px
- **Tablet:** ≥ 768px e < 1280px
- **Desktop:** ≥ 1280px e < 1920px
- **Wide / 4K:** ≥ 1920px

### 6.2 Tailwind Config
```javascript
screens: {
  'md': '768px',   // Tablet
  'lg': '1280px',  // Desktop
  'xl': '1920px',  // Wide / 4K
}
```

### 6.3 Containers e Espaçamentos

**Padding do conteúdo principal:**
- Mobile: px-4 (16px)
- Tablet: px-6 (24px)
- Desktop: px-8 (32px)

**Limites de largura:**
- Desktop: max-w-[1400px]
- Wide / 4K: max-w-[1600px]

---

## 7. Próximos Passos

1. ✅ **PROMPT 0:** Análise completa (este documento)
2. ⏭️ **PROMPT 1:** Estrutura base do projeto
3. ⏭️ **PROMPT 2:** Layout Desktop - Sidebar
4. ⏭️ **PROMPT 3:** Layout Desktop - Header e área principal
5. ⏭️ **PROMPT 4:** Layout Mobile - Header mobile e drawer

---

## 8. Observações Importantes

### 8.1 Regras Críticas
- Layout 100% fluido (width: 100%, nunca fixo)
- Sidebar não existe no mobile (não renderizar, não usar display:none)
- Header mobile não existe no desktop
- Nunca usar valores hardcoded quando existir variável
- Hierarquia: Semântica → Primitiva → Conversão

### 8.2 Validação Obrigatória
Toda feature deve ser validada em:
- 375px (Mobile pequeno - iPhone SE)
- 768px (Tablet - iPad)
- 1280px (Desktop - Laptop)
- 1920px (Wide - Full HD)

---

**Status:** ✅ Análise completa finalizada  
**Próximo:** PROMPT 1 - Estrutura Base do Projeto
