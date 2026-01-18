# mycash+ - Dashboard de Gestão Financeira Familiar

Sistema de gestão financeira familiar desenvolvido com React, TypeScript, Vite e Tailwind CSS.

## 🚀 Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **React Router** - Roteamento SPA
- **Supabase** - Backend e autenticação
- **Recharts** - Gráficos e visualizações
- **date-fns** - Manipulação de datas

## 📦 Instalação

```bash
npm install
```

## 🏃 Executar em Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 🏗️ Build para Produção

```bash
npm run build
```

## 📁 Estrutura de Pastas

```
src/
├── components/          # Componentes React
│   ├── layout/         # Componentes de layout (Sidebar, Header)
│   ├── dashboard/      # Componentes específicos do dashboard
│   ├── cards/          # Componentes relacionados a cartões
│   ├── modals/         # Modais da aplicação
│   └── ui/             # Componentes UI genéricos
├── contexts/           # Contexts React (FinanceProvider, etc)
├── hooks/              # Custom hooks
├── pages/              # Páginas principais (rotas)
├── services/           # Serviços (Supabase, APIs)
├── styles/             # Estilos globais e CSS
├── types/              # Definições TypeScript
├── utils/              # Funções utilitárias
└── constants/          # Constantes da aplicação
```

## 🎨 Design System

O projeto utiliza variáveis CSS customizadas mapeadas do Figma:

- **Tokens Semânticos**: Cores, espaçamentos e tipografia com significado
- **Tokens Primitivos**: Valores base reutilizáveis
- **Breakpoints**: Mobile (<768px), Tablet (768-1279px), Desktop (≥1280px)

## 📱 Responsividade

O projeto é 100% mobile-first:
- **Mobile (base)**: < 768px
- **Tablet**: ≥ 768px e < 1280px
- **Desktop**: ≥ 1280px e < 1920px
- **Wide / 4K**: ≥ 1920px

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_SUPABASE_URL=sua_url_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima
```

## 📝 Licença

Este projeto é privado e de uso interno.
