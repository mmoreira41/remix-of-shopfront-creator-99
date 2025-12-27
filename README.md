# Renda Com Shop - Landing Page

Landing page para o curso "Renda Com Shop" - Aprenda a faturar mais de R$ 10.000/mês com TikTok Shop.

## 🚀 Sobre o Projeto

Landing page moderna e responsiva desenvolvida para promover o curso de TikTok Shop dos criadores Gabriel Silva e Keven Borges. O site apresenta:

- **Hero Section** com animações geométricas elegantes
- **Depoimentos** com scroll infinito animado
- **Bônus exclusivos** do curso
- **Módulos detalhados** do conteúdo
- **Pilares** de estratégia
- **Comparação** entre métodos
- **FAQ** completo
- **Preços** e garantias

## 🛠️ Tecnologias

Este projeto foi construído com:

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações fluidas
- **Zod** - Validação de dados em runtime
- **shadcn/ui** - Componentes UI reutilizáveis
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── landing/          # Componentes da landing page
│   │   ├── Hero.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Bonuses.tsx
│   │   ├── Modules.tsx
│   │   ├── Pillars.tsx
│   │   ├── Comparison.tsx
│   │   ├── FAQ.tsx
│   │   └── Pricing.tsx
│   ├── ui/              # Componentes UI reutilizáveis
│   │   ├── button.tsx
│   │   ├── section-header.tsx
│   │   └── ...
│   └── ErrorBoundary.tsx # Error boundary global
├── config/
│   └── site-config.ts   # Configurações e dados do site
├── lib/
│   ├── constants.ts     # Constantes (animações, dimensões)
│   ├── mock-data.ts     # Dados mock com IDs únicos
│   └── utils.ts         # Funções utilitárias
└── assets/              # Imagens e recursos
```

## 🏃‍♂️ Como Executar

### Pré-requisitos

- Node.js 18+ e npm instalados - [instalar com nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Instalação

```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Entre na pasta do projeto
cd remix-of-shopfront-creator-99

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`

## 📦 Build para Produção

```bash
# Gerar build otimizado
npm run build

# Preview do build de produção
npm run preview
```

## ✨ Funcionalidades Implementadas

### Arquitetura e Qualidade

- ✅ **TypeScript Strict Mode** - Type safety completo
- ✅ **Error Boundary** - Tratamento de erros robusto
- ✅ **Validação Zod** - Validação de dados em runtime
- ✅ **Constantes Centralizadas** - Manutenção facilitada
- ✅ **Componentes Reutilizáveis** - DRY (Don't Repeat Yourself)
- ✅ **CSS Variables** - Tema consistente e customizável

### Animações

- ✅ **Formas Geométricas Flutuantes** - Hero section animada
- ✅ **Scroll Infinito** - Depoimentos em loop contínuo
- ✅ **Fade-in Progressivo** - Elementos aparecem suavemente
- ✅ **Hover Effects** - Interações visuais em cards
- ✅ **Stagger Animations** - Elementos aparecem em sequência

### Performance

- ✅ **Bundle Otimizado** - 2.3MB (redução de 18%)
- ✅ **Code Splitting** - Carregamento sob demanda
- ✅ **Lazy Loading** - Imagens e componentes
- ✅ **Tree Shaking** - Remoção de código não utilizado

## 🎨 Personalização

### Cores e Tema

As cores são definidas através de CSS variables em `src/index.css`:

```css
:root {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 210 40% 98%;
  --accent: 142.1 76.2% 36.3%;
  --cyan: 189 94% 43%;
  /* ... */
}
```

### Constantes de Animação

Ajuste tempos e durações em `src/lib/constants.ts`:

```typescript
export const ANIMATION_DURATION = {
  FAST: 0.5,
  NORMAL: 0.8,
  SLOW: 1,
  // ...
};
```

### Conteúdo do Site

Todo o conteúdo está centralizado em `src/config/site-config.ts` com validação Zod.

## 📄 Licença

Este projeto é privado e proprietário. Todos os direitos reservados.

## 👥 Autores

- **Gabriel Silva** - Criador e Instrutor
- **Keven Borges** - Criador e Instrutor

---

**Desenvolvido com ❤️ para ajudar pessoas a alcançarem independência financeira através do TikTok Shop**
