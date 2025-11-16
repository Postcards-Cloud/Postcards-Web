# Configuration AWS Amplify pour Postcards Web

## ⚠️ Message "No backend environment association found"

Ce message est **normal** et ne doit pas vous inquiéter. Convex est un backend externe (BaaS - Backend as a Service), pas un backend AWS Amplify traditionnel.

Amplify cherche un backend Amplify (AppSync, Lambda, etc.) mais ne trouve rien car nous utilisons Convex. C'est attendu.

## ✅ Configuration requise

### 1. Variables d'environnement dans Amplify Console

Allez dans **AWS Amplify Console** → Votre app → **App settings** → **Environment variables** et ajoutez :

```
NEXT_PUBLIC_CONVEX_URL=https://votre-projet.convex.cloud
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_... (ou pk_test_... pour dev)
```

**Important** : Les variables doivent commencer par `NEXT_PUBLIC_` pour être accessibles côté client dans Next.js.

### 2. Fichier amplify.yml

Le fichier `amplify.yml` est déjà créé dans le projet. Il configure :
- L'installation des dépendances (`npm ci`)
- Le build Next.js (`npm run build`)
- Les artefacts à déployer (dossier `.next`)
- Le cache pour accélérer les builds suivants

### 3. Build Settings dans Amplify Console

Si vous configurez manuellement dans Amplify Console, utilisez :

**App location** : `/apps/web` (si monorepo) ou `/` (si repo dédié)

**Build settings** :
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

### 4. Vérification du déploiement

Après le déploiement, vérifiez :

1. **Console Amplify** : Le build doit réussir
2. **URL de déploiement** : L'application doit être accessible
3. **Console du navigateur** : Vérifiez qu'il n'y a pas d'erreurs liées à Convex/Clerk
4. **Variables d'environnement** : Vérifiez qu'elles sont bien injectées

### 5. Dépannage

#### Problème : "NEXT_PUBLIC_CONVEX_URL is not defined"

**Solution** : Ajoutez la variable dans Amplify Console → App settings → Environment variables

#### Problème : Build échoue avec erreur de dépendances

**Solution** : 
```bash
# Vérifiez que package.json est correct
cd apps/web
npm install
npm run build
```

#### Problème : L'app se charge mais Convex ne fonctionne pas

**Solution** :
1. Vérifiez que `NEXT_PUBLIC_CONVEX_URL` est bien configurée
2. Vérifiez que l'URL Convex est accessible depuis le navigateur
3. Vérifiez les CORS dans Convex Dashboard

## 📚 Documentation

- [AWS Amplify Build Settings](https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html)
- [Amplify Environment Variables](https://docs.aws.amazon.com/amplify/latest/userguide/environment-variables.html)
- [Next.js on Amplify](https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs-app.html)

