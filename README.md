# MlleK - Site Web Professionnel

Site web professionnel de MlleK, développé avec Next.js 14, Sanity CMS et un système SEO avancé.

## 🚀 Technologies utilisées

- **Framework** : [Next.js 14](https://nextjs.org/) (App Router)
- **CMS** : [Sanity](https://www.sanity.io/) - Headless CMS
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Animations** : Framer Motion
- **UI Components** : Radix UI + shadcn/ui
- **Package Manager** : pnpm

## 📁 Structure du projet

```
mlle-k/
├── app/                    # Pages Next.js (App Router)
│   └── (website)/         # Routes du site principal
│       ├── a-propos/      # Page À propos
│       ├── contact/       # Page Contact
│       └── services/      # Page Services
├── components/            # Composants React
│   ├── animation/         # Animations et transitions
│   ├── layout/           # Header, Footer, Navigation
│   ├── shared/           # Composants partagés
│   └── ui/               # Composants UI de base
├── sanity/               # Configuration Sanity CMS
│   ├── schema/           # Schémas de données
│   │   ├── object/       # Objets réutilisables (SEO, etc.)
│   │   ├── singletons/   # Pages uniques (Home, About, etc.)
│   │   └── documents/    # Types de contenu (Témoignages)
│   └── lib/              # Utilitaires Sanity
└── public/               # Assets statiques
```

## 🛠️ Installation et démarrage

### Prérequis

- Node.js 18+ 
- pnpm (recommandé) ou npm

### Installation

1. **Cloner le repository**
```bash
git clone [url-du-repo]
cd mlle-k
```

2. **Installer les dépendances**
```bash
pnpm install
```

3. **Configuration des variables d'environnement**
```bash
cp .env.example .env.local
```

Remplissez les variables suivantes dans `.env.local` :
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-05-25
SANITY_API_TOKEN=your-api-token
```

4. **Démarrer le serveur de développement**
```bash
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le site.

## 📝 Gestion du contenu

### Sanity Studio

Le contenu est géré via Sanity Studio :

```bash
# Accéder à Sanity Studio
pnpm sanity dev
```

Ouvrez [http://localhost:3333](http://localhost:3333) pour accéder au CMS.

### Structure du contenu

- **Home** : Page d'accueil avec hero, services, témoignages
- **About** : Page À propos avec histoire, valeurs, expérience
- **Contact** : Page de contact avec formulaire et informations
- **Services** : Page des services avec détails et tâches
- **Témoignages** : Gestion des avis clients

## 🔍 Système SEO

Le projet intègre un système SEO avancé avec :

- **Objet SEO réutilisable** : Structure cohérente sur toutes les pages
- **Métadonnées dynamiques** : Récupération depuis Sanity CMS
- **Open Graph** : Optimisation pour les réseaux sociaux
- **Contrôle des robots** : Gestion de l'indexation

### Configuration SEO

1. Ouvrez Sanity Studio
2. Accédez à une page (Home, About, Contact, Services)
3. Remplissez les champs SEO dans l'onglet "SEO"
4. Sauvegardez les modifications

### Champs SEO disponibles

- **Titre SEO** : Titre de la page (max 60 caractères)
- **Description SEO** : Description de la page (max 160 caractères)
- **Mots-clés** : Mots-clés pour le référencement
- **Image Open Graph** : Image pour les réseaux sociaux
- **Titre/Description OG** : Personnalisation pour les réseaux sociaux
- **Contrôle robots** : noindex, nofollow

Pour plus de détails, consultez [SEO_README.md](./SEO_README.md).

## 🎨 Composants et animations

### Animations
- **FadeIn** : Apparition en fondu
- **SlideIn** : Glissement depuis les côtés
- **ScaleIn** : Agrandissement progressif
- **StaggerContainer** : Animations en cascade

### Composants UI
- **Button** : Boutons avec variantes
- **Card** : Cartes avec ombres
- **Dialog** : Modales et popups
- **Carousel** : Diaporamas
- **Form** : Formulaires avec validation

## 📱 Responsive Design

Le site est entièrement responsive avec :
- **Mobile First** : Design optimisé mobile
- **Breakpoints** : sm, md, lg, xl, 2xl
- **Flexbox/Grid** : Layouts adaptatifs
- **Images optimisées** : Next.js Image component

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connectez votre repository à Vercel
2. Configurez les variables d'environnement
3. Déployez automatiquement

### Variables d'environnement de production

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-production-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-05-25
SANITY_API_TOKEN=your-production-api-token
```

## 🔧 Scripts disponibles

```bash
# Développement
pnpm dev          # Serveur de développement
pnpm build        # Build de production
pnpm start        # Serveur de production
pnpm lint         # Linting ESLint

# Sanity
pnpm sanity dev   # Sanity Studio
pnpm sanity build # Build Sanity Studio
pnpm sanity deploy # Déployer Sanity Studio
```

## 📚 Documentation

- [SEO_README.md](./SEO_README.md) - Documentation complète du système SEO
- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

MlleK - [contact@mllek.com](mailto:contact@mllek.com)

---

Développé avec ❤️ par MlleK
