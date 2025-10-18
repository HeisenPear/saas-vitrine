# Renaissance - Site Vitrine Professionnel

Site vitrine moderne et performant pour **Renaissance**, agence spécialisée en création de sites web et SEO local pour artisans et PME.

## ✨ Fonctionnalités

- **7 pages complètes** : Accueil, Services, Tarifs, Portfolio, À propos, Blog, Contact
- **Design moderne** inspiré de The Shift Tokyo avec animations Framer Motion
- **Dark mode** par défaut avec toggle light/dark
- **Blog intégré** avec 3 articles SEO complets
- **Formulaire de contact** avec validation complète (React Hook Form + Zod)
- **Calculateur de prix** interactif
- **Slider de portfolio** avec navigation touch
- **100% Responsive** - Mobile first
- **SEO optimisé** - Sitemap, robots.txt, meta tags, schema markup
- **Performance optimale** - Score Lighthouse 95+

## 🚀 Technologies

- **Astro 4.x** - Framework principal (SSG)
- **React 18+** - Composants interactifs
- **Tailwind CSS 4.x** - Styling
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes
- **React Hook Form + Zod** - Validation formulaires
- **TypeScript** - Typage fort

## 📁 Structure du Projet

```
/
├── public/
│   ├── images/
│   ├── robots.txt
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── react/              # Composants React interactifs
│   │   │   ├── ContactForm.tsx
│   │   │   ├── PricingCalculator.tsx
│   │   │   ├── PortfolioSlider.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   ├── AnimatedCounter.tsx
│   │   │   └── Accordion.tsx
│   │   ├── Layout.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   └── ServiceCard.astro
│   ├── content/
│   │   ├── blog/               # Articles blog (Markdown)
│   │   └── config.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── services.astro
│   │   ├── tarifs.astro
│   │   ├── realisations.astro
│   │   ├── a-propos.astro
│   │   ├── contact.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🧞 Commandes

Toutes les commandes se lancent depuis la racine du projet :

| Commande | Action |
| --- | --- |
| `npm install` | Installer les dépendances |
| `npm run dev` | Lancer le serveur de dev sur `localhost:4321` |
| `npm run build` | Build de production dans `./dist/` |
| `npm run preview` | Prévisualiser le build en local |

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `tailwind.config.mjs` et `src/styles/global.css` :

- **Primary** : Bleu moderne (#3b82f6)
- **Accent** : Vert (#10b981)
- **Dark** : Noir profond (#0a0a0a)

### Contenu

- **Textes** : Modifiez directement dans les fichiers `.astro`
- **Articles blog** : Ajoutez des fichiers `.md` dans `src/content/blog/`
- **Images** : Placez vos images dans `public/images/`

### SEO

Configurez le site dans `astro.config.mjs` :
```js
site: 'https://votre-domaine.fr'
```

## 🚀 Déploiement

### Vercel (Recommandé)

1. Push votre code sur GitHub
2. Importez le projet sur [Vercel](https://vercel.com)
3. Déployez automatiquement

### Netlify

1. Push votre code sur GitHub
2. Connectez votre repo sur [Netlify](https://netlify.com)
3. Build command : `npm run build`
4. Publish directory : `dist`

## 📊 Performance

Score Lighthouse attendu :
- **Performance** : 95+
- **Accessibilité** : 95+
- **Best Practices** : 95+
- **SEO** : 100

## 📝 Licence

Projet créé pour Renaissance. Tous droits réservés.
