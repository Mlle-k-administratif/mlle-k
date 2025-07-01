# Guide de dépannage - MlleK

## Erreurs courantes et solutions

### 1. Erreur de requête Sanity

**Erreur :** `Request error while attempting to reach https://...apicdn.sanity.io`

**Causes possibles :**
- Variables d'environnement manquantes ou incorrectes
- Données manquantes dans Sanity
- Problème de configuration de l'API

**Solutions :**

#### A. Vérifier les variables d'environnement
```bash
# Vérifiez que ces variables sont définies dans .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-05-25
SANITY_API_TOKEN=your-api-token
```

#### B. Initialiser les données par défaut
```bash
pnpm init-sanity
```

#### C. Vérifier la configuration Sanity
```bash
# Ouvrir Sanity Studio
pnpm sanity dev
```

### 2. Erreur de build TypeScript

**Erreur :** `Property 'width' does not exist on type 'string'`

**Solution :** Cette erreur a été corrigée dans `sanity/lib/image.ts`. Assurez-vous d'utiliser la dernière version.

### 3. Métadonnées SEO non visibles

**Problème :** Les métadonnées SEO ne s'affichent pas dans les résultats de recherche

**Solutions :**
1. Vérifier que les données SEO sont configurées dans Sanity Studio
2. Attendre quelques minutes (cache CDN)
3. Utiliser des outils de test :
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### 4. Images non visibles

**Problème :** Les images Sanity ne s'affichent pas

**Solutions :**
1. Vérifier que les images sont uploadées dans Sanity Studio
2. Vérifier la configuration des domaines autorisés dans `next.config.ts`
3. Vérifier les variables d'environnement Sanity

### 5. Erreur de compilation Next.js

**Erreur :** `Failed to compile`

**Solutions :**
1. Nettoyer le cache :
```bash
rm -rf .next
pnpm build
```

2. Réinstaller les dépendances :
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

3. Vérifier les types TypeScript :
```bash
pnpm sanity typegen generate
```

### 6. Problèmes de déploiement Vercel

**Erreur :** Build échoue sur Vercel

**Solutions :**
1. Vérifier les variables d'environnement dans Vercel
2. Vérifier que le projet Sanity est accessible
3. Vérifier les permissions de l'API token

### 7. Problèmes de performance

**Problème :** Site lent à charger

**Solutions :**
1. Optimiser les images avec les bonnes dimensions
2. Utiliser le cache Sanity CDN
3. Vérifier les requêtes GROQ (éviter les requêtes inutiles)

## Commandes utiles

```bash
# Nettoyer et reconstruire
rm -rf .next && pnpm build

# Régénérer les types Sanity
pnpm sanity typegen generate

# Initialiser les données par défaut
pnpm init-sanity

# Vérifier la configuration Sanity
pnpm sanity config check

# Ouvrir Sanity Studio
pnpm sanity dev
```

## Logs et débogage

### Activer les logs détaillés
```bash
# Pour Next.js
DEBUG=* pnpm dev

# Pour Sanity
SANITY_DEBUG=true pnpm sanity dev
```

### Vérifier les requêtes Sanity
Utilisez [Sanity Vision](https://www.sanity.io/docs/sanity-vision) pour tester vos requêtes GROQ :
```bash
pnpm sanity dev
# Puis aller sur http://localhost:3333/vision
```

## Support

Si vous rencontrez des problèmes non résolus :

1. Vérifiez les logs d'erreur dans la console
2. Consultez la [documentation Sanity](https://www.sanity.io/docs)
3. Consultez la [documentation Next.js](https://nextjs.org/docs)
4. Créez une issue sur le repository avec les détails de l'erreur 