# SEO Implementation pour MlleK

## Vue d'ensemble

Ce document décrit l'implémentation des fonctionnalités SEO avancées pour le site MlleK utilisant Sanity CMS et Next.js. Le système utilise un objet SEO réutilisable pour garantir la cohérence et la maintenabilité.

## Fonctionnalités ajoutées

### 1. Objet SEO réutilisable

Un objet SEO centralisé a été créé (`sanity/schema/object/seo.ts`) et est utilisé par tous les schémas :

- **about.ts** - Page À propos
- **contact.ts** - Page Contact  
- **home.ts** - Page d'accueil
- **service.ts** - Page Services

#### Avantages de l'objet SEO :
- **Cohérence** : Structure identique sur toutes les pages
- **Maintenabilité** : Modifications centralisées
- **Réutilisabilité** : Facilement extensible à d'autres types de contenu
- **Validation** : Règles de validation uniformes

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
- `generateMetadata()` - Fonction utilitaire pour générer les métadonnées complètes

#### Fonctionnalités avancées :
- **Gestion des robots** : Support des meta robots (noindex, nofollow)
- **Open Graph enrichi** : Titres et descriptions personnalisés pour les réseaux sociaux
- **Fallback intelligent** : Utilisation des valeurs par défaut si les données SEO ne sont pas configurées
- **Optimisation des images** : Génération automatique d'URLs optimisées pour les images Open Graph

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
3. Remplissez les champs SEO dans l'onglet "SEO" (premier onglet)
4. Utilisez les validations et avertissements pour optimiser vos métadonnées
5. Sauvegardez les modifications

#### Interface utilisateur améliorée :
- **Onglet SEO en premier** : Accès rapide aux métadonnées
- **Validations en temps réel** : Avertissements pour les titres et descriptions trop longs
- **Layout optimisé** : Interface intuitive pour les mots-clés et images
- **Prévisualisation** : Aperçu des métadonnées dans l'interface Sanity

### 2. Métadonnées générées

Les métadonnées suivantes sont automatiquement générées :

#### Métadonnées de base :
- **Title** : Titre SEO personnalisé ou titre par défaut
- **Description** : Description SEO personnalisée ou description par défaut
- **Keywords** : Mots-clés (si fournis)

#### Open Graph (réseaux sociaux) :
- **og:title** : Titre personnalisé ou titre SEO par défaut
- **og:description** : Description personnalisée ou description SEO par défaut
- **og:image** : Image optimisée (1200x630px)
- **og:type** : Type de contenu (website)

#### Contrôle des robots :
- **robots** : Meta robots pour contrôler l'indexation et le suivi des liens
- **noindex** : Empêcher l'indexation de la page
- **nofollow** : Empêcher le suivi des liens

### 3. Fallback

Si aucune donnée SEO n'est configurée dans Sanity, les métadonnées par défaut sont utilisées.

## Architecture technique

### Structure des données

#### Interface SEOData
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

#### Requête GROQ
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

### Organisation des fichiers

```
sanity/
├── schema/
│   ├── object/
│   │   ├── seo.ts          # Objet SEO réutilisable
│   │   └── index.ts        # Export des objets
│   ├── singletons/
│   │   ├── about.ts        # Utilise l'objet SEO
│   │   ├── contact.ts      # Utilise l'objet SEO
│   │   ├── home.ts         # Utilise l'objet SEO
│   │   └── service.ts      # Utilise l'objet SEO
│   └── index.ts            # Schéma principal
└── lib/
    ├── seo.ts              # Fonctions de récupération SEO
    └── image.ts            # Utilitaires pour les images
```

### Bonnes pratiques

#### Pour les développeurs :
- **Toujours utiliser l'objet SEO** : Ne pas créer de champs SEO inline
- **Tester les métadonnées** : Vérifier les métadonnées générées
- **Optimiser les images** : Utiliser les bonnes dimensions pour Open Graph
- **Gérer les fallbacks** : Toujours fournir des valeurs par défaut

#### Pour les équipes marketing :
- **Respecter les limites** : Titres < 60 caractères, descriptions < 160 caractères
- **Utiliser des mots-clés pertinents** : Éviter le keyword stuffing
- **Optimiser les images** : Utiliser des images 1200x630px pour Open Graph
- **Tester le partage social** : Vérifier l'apparence sur les réseaux sociaux

## Avantages

### Pour les développeurs :
1. **Maintenabilité** : Objet SEO centralisé et réutilisable
2. **Cohérence** : Structure identique sur toutes les pages
3. **Performance** : Récupération côté serveur pour un meilleur SEO
4. **Extensibilité** : Facile d'ajouter de nouveaux champs SEO

### Pour les équipes marketing :
1. **Contrôle total** : Modification des métadonnées sans intervention technique
2. **Interface intuitive** : Onglet SEO en premier avec validations en temps réel
3. **Flexibilité** : Chaque page peut avoir ses propres métadonnées optimisées
4. **Prévisualisation** : Aperçu des métadonnées dans Sanity Studio

### Pour le SEO :
1. **Métadonnées complètes** : Support de tous les standards SEO modernes
2. **Open Graph optimisé** : Partage social parfait sur tous les réseaux
3. **Contrôle des robots** : Gestion fine de l'indexation et du suivi
4. **Fallback intelligent** : Métadonnées par défaut si non configurées

## Prochaines étapes

### Fonctionnalités avancées :
- **Métadonnées structurées** : Implémentation de JSON-LD pour les données structurées
- **Tests automatisés** : Tests unitaires et d'intégration pour les fonctions SEO
- **Prévisualisation avancée** : Outil de prévisualisation des métadonnées en temps réel
- **Analytics SEO** : Intégration avec Google Search Console et autres outils SEO

### Optimisations techniques :
- **Cache intelligent** : Mise en cache des données SEO pour améliorer les performances
- **Validation avancée** : Règles de validation plus sophistiquées (densité de mots-clés, etc.)
- **Génération automatique** : Suggestions automatiques de titres et descriptions SEO
- **Multi-langue** : Support des métadonnées multilingues

### Intégrations :
- **Google Analytics** : Suivi des performances SEO
- **Social Media** : Prévisualisation pour Facebook, Twitter, LinkedIn
- **Schema.org** : Support complet des schémas de données structurées

## Dépannage et FAQ

### Problèmes courants

#### Les métadonnées ne s'affichent pas
- Vérifiez que les données SEO sont configurées dans Sanity Studio
- Assurez-vous que les fonctions `generateMetadata` sont bien appelées
- Vérifiez les logs d'erreur dans la console

#### Images Open Graph non visibles
- Vérifiez que l'image est bien uploadée dans Sanity
- Assurez-vous que l'image a les bonnes dimensions (1200x630px recommandé)
- Vérifiez que la fonction `buildImageUrl` fonctionne correctement

#### Métadonnées par défaut affichées
- C'est normal si aucune donnée SEO n'est configurée
- Configurez les champs SEO dans Sanity Studio
- Les métadonnées par défaut servent de fallback

### FAQ

**Q: Puis-je ajouter d'autres champs SEO ?**
R: Oui, modifiez l'objet SEO dans `sanity/schema/object/seo.ts` et mettez à jour l'interface `SEOData`.

**Q: Comment tester les métadonnées ?**
R: Utilisez les outils de développement de votre navigateur ou des outils en ligne comme Google Rich Results Test.

**Q: Les métadonnées sont-elles mises en cache ?**
R: Oui, Sanity utilise un CDN. Les modifications peuvent prendre quelques minutes à apparaître.

**Q: Puis-je utiliser l'objet SEO pour d'autres types de contenu ?**
R: Oui, l'objet SEO est réutilisable. Ajoutez simplement `type: 'seo'` à vos champs. 