# SEO Implementation pour MlleK

## Vue d'ensemble

Ce document décrit l'implémentation des fonctionnalités SEO pour le site MlleK utilisant Sanity CMS et Next.js.

## Fonctionnalités ajoutées

### 1. Champs SEO dans Sanity

Les schémas suivants ont été mis à jour avec des champs SEO :

- **about.ts** - Page À propos
- **contact.ts** - Page Contact  
- **home.ts** - Page d'accueil
- **service.ts** - Page Services

#### Champs SEO disponibles :
- `title` - Titre SEO (requis, max 60 caractères recommandés)
- `description` - Description SEO (requis, max 160 caractères recommandés)
- `keywords` - Mots-clés (optionnel, tableau de strings)
- `ogImage` - Image Open Graph (optionnel, 1200x630px recommandé)
- `ogTitle` - Titre Open Graph personnalisé (optionnel)
- `ogDescription` - Description Open Graph personnalisée (optionnel)
- `noIndex` - Empêcher l'indexation (optionnel, booléen)
- `noFollow` - Empêcher le suivi des liens (optionnel, booléen)

### 2. Fonctions de récupération des données

#### Fichier : `sanity/lib/seo.ts`

Fonctions disponibles :
- `getHomeSEO()` - Récupère les données SEO de la page d'accueil
- `getAboutSEO()` - Récupère les données SEO de la page À propos
- `getContactSEO()` - Récupère les données SEO de la page Contact
- `getServiceSEO()` - Récupère les données SEO de la page Services
- `generateMetadata()` - Fonction utilitaire pour générer les métadonnées

### 3. Métadonnées dynamiques

Chaque page utilise maintenant des métadonnées dynamiques :

#### Page d'accueil (`app/(website)/page.tsx`)
```typescript
export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getHomeSEO();
  return generateSEOMetadata(seoData, 'MlleK - Accueil', 'Description par défaut...');
}
```

#### Page À propos (`app/(website)/a-propos/page.tsx`)
```typescript
export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getAboutSEO();
  return generateSEOMetadata(seoData, 'MlleK - À propos', 'Description par défaut...');
}
```

#### Page Contact (`app/(website)/contact/page.tsx`)
```typescript
export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getContactSEO();
  return generateSEOMetadata(seoData, 'MlleK - Contact', 'Description par défaut...');
}
```

#### Page Services (`app/(website)/services/page.tsx`)
```typescript
export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getServiceSEO();
  return generateSEOMetadata(seoData, 'MlleK - Services', 'Description par défaut...');
}
```

## Utilisation

### 1. Configuration dans Sanity Studio

1. Ouvrez Sanity Studio
2. Accédez à l'une des pages (Home, About, Contact, Service)
3. Remplissez les champs SEO dans l'onglet "SEO"
4. Sauvegardez les modifications

### 2. Métadonnées générées

Les métadonnées suivantes sont automatiquement générées :

- **Title** : Titre SEO personnalisé ou titre par défaut
- **Description** : Description SEO personnalisée ou description par défaut
- **Keywords** : Mots-clés (si fournis)
- **Open Graph** : Titre, description et image personnalisés pour les réseaux sociaux
- **Robots** : Contrôle de l'indexation et du suivi des liens

### 3. Fallback

Si aucune donnée SEO n'est configurée dans Sanity, les métadonnées par défaut sont utilisées.

## Structure des données

### Interface SEOData
```typescript
interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: {
    asset: {
      _ref: string;
    };
  };
  ogTitle?: string;
  ogDescription?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}
```

### Requête GROQ
```groq
*[_type == "home"][0] {
  seo {
    title,
    description,
    keywords,
    ogImage,
    ogTitle,
    ogDescription,
    noIndex,
    noFollow
  }
}
```

## Avantages

1. **Contrôle total** : Les équipes marketing peuvent modifier les métadonnées sans intervention technique
2. **Flexibilité** : Chaque page peut avoir ses propres métadonnées optimisées
3. **Performance** : Les données sont récupérées côté serveur pour un meilleur SEO
4. **Maintenabilité** : Centralisation des logiques SEO dans des fonctions réutilisables

## Prochaines étapes

- Implémenter des métadonnées structurées (JSON-LD)
- Ajouter des tests pour les fonctions SEO
- Optimiser les images Open Graph avec des dimensions spécifiques
- Ajouter des validations avancées pour les champs SEO
- Implémenter un système de prévisualisation des métadonnées 