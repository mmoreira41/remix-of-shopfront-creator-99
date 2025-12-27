# Componentes de Bloco Refatorados

Este diretório contém componentes de UI avançados refatorados seguindo as melhores práticas do projeto.

## 📋 Princípios de Design

### 1. **Data Binding**
Todos os dados vêm de `@/config/site-config.ts`. Nada de hardcoded.

### 2. **Theming**
Usa variáveis CSS semânticas:
- `bg-background` / `text-foreground`
- `bg-primary` / `bg-secondary` / `bg-accent`
- `border-border` / `bg-muted`
- `text-card-foreground` / `text-muted-foreground`

### 3. **Dependências Padronizadas**
- `framer-motion` (não `motion/react`)
- `lucide-react` para ícones
- `@/lib/utils` para `cn()`

---

## 🎨 Componentes Disponíveis

### HeroGeometric

Hero section com formas geométricas animadas e gradientes fluidos.

**Uso básico:**
```tsx
import { HeroGeometric } from "@/components/blocks/hero";

<HeroGeometric />
```

**Props customizadas:**
```tsx
<HeroGeometric
  badge="Novo Design"
  title="Seu Título Aqui"
  subtitle="Subtítulo Impactante"
  description="Descrição detalhada do seu produto"
/>
```

**Fonte de dados padrão:**
- `siteConfig.hero.badge`
- `siteConfig.hero.title`
- `siteConfig.hero.subtitle`
- `siteConfig.hero.description`

---

### AnimatedTestimonials

Seção de testimonials com scroll infinito em múltiplas colunas.

**Uso básico:**
```tsx
import { AnimatedTestimonials } from "@/components/blocks/testimonials";

<AnimatedTestimonials />
```

**Props customizadas:**
```tsx
<AnimatedTestimonials
  badge="Depoimentos"
  title="O que dizem nossos clientes"
  description="Veja os resultados reais"
  items={customTestimonials}
/>
```

**Fonte de dados padrão:**
- `siteConfig.testimonials.badge`
- `siteConfig.testimonials.title`
- `siteConfig.testimonials.description`
- `siteConfig.testimonials.items`

---

## 🎯 Exemplo de Uso Completo

Veja `src/pages/Demo.tsx` para um exemplo completo de integração.

Para adicionar a rota de demo no seu app:

```tsx
// src/App.tsx
import Demo from "./pages/Demo";

<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/demo" element={<Demo />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

Depois acesse: `http://localhost:5173/demo`

---

## 🎨 Customização de Dados

Edite `src/config/site-config.ts`:

```ts
export const siteConfig = {
  hero: {
    badge: "Seu Badge",
    title: "Seu Título Principal",
    subtitle: "Subtítulo Impactante",
    description: "Descrição completa...",
  },
  testimonials: {
    badge: "Testimonials",
    title: "O que dizem",
    description: "Veja os depoimentos",
    items: [
      {
        text: "Depoimento aqui...",
        image: "https://...",
        name: "Nome",
        role: "Cargo",
      },
      // ...
    ],
  },
};
```

---

## 🎨 Customização de Tema

Os componentes respeitam automaticamente as variáveis CSS do projeto.

Para alterar cores, edite `src/index.css`:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  --accent: 210 40% 96.1%;
  /* ... */
}
```

---

## 🚀 Features

### HeroGeometric
- ✅ Animações fluidas com Framer Motion
- ✅ Formas geométricas em movimento
- ✅ Gradientes adaptativos ao tema
- ✅ Responsivo (mobile-first)
- ✅ Performance otimizada

### AnimatedTestimonials
- ✅ Scroll infinito suave
- ✅ 3 colunas responsivas
- ✅ Velocidades diferentes por coluna
- ✅ Mask gradient para efeito de fade
- ✅ Cards com sombra e border semânticos

---

## 📦 Estrutura de Arquivos

```
src/components/blocks/
├── hero/
│   ├── hero-geometric.tsx
│   └── index.ts
├── testimonials/
│   ├── animated-testimonials.tsx
│   ├── testimonials-column.tsx
│   └── index.ts
└── README.md
```

---

## 🔧 Manutenção

Para adicionar novos componentes de bloco:

1. Crie uma nova pasta em `src/components/blocks/[nome]/`
2. Adicione os dados necessários em `site-config.ts`
3. Use cores semânticas (nunca hexadecimais hardcoded)
4. Exporte via `index.ts`
5. Documente aqui no README
