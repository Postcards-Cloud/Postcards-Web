## Aperçu

Ce dépôt fournit une base Next.js 15 prête pour :

- déployer sur Vercel une landing page marketing (`src/app/(marketing)`),
- construire un tableau de bord applicatif (`src/app/dashboard`),
- exploiter les composants ShadCN déjà installés,
- itérer avec l’assistant visuel [v0](https://v0.dev/) de Vercel.

## Prérequis

- Node.js 18.18+ ou 20+ (même version que l’environnement Vercel).
- Un compte Vercel avec accès au projet v0.
- Optionnel : un compte Clerk et un déploiement Convex (les providers se désactivent automatiquement si les variables d’environnement sont absentes).

## Installation locale

```bash
npm install
npm run dev
```

La landing page est servie sur `http://localhost:3000`, le dashboard sur `http://localhost:3000/dashboard`.

## Structure des dossiers

- `src/app/(marketing)`: landing page et sections marketing.
- `src/app/dashboard`: application authentifiée et widgets ShadCN.
- `src/components`: bibliothèque de composants (ShadCN + surcouche projet).
- `prompts/v0`: briefs utilisés par v0 pour générer/itérer le contenu.
- `v0.config.ts`: configuration centrale pour le CLI v0 (routes, prompts, Tailwind, ShadCN).

## Déploiement Vercel

1. Créez un nouveau projet sur Vercel en pointant vers ce dépôt.
2. Laissez les commandes par défaut (`npm install`, `npm run build`). Elles sont également renseignées dans `vercel.json`.
3. Ajoutez les variables d’environnement nécessaires (`NEXT_PUBLIC_CONVEX_URL`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, etc.). En leur absence, l’application reste fonctionnelle mais sans intégration Clerk/Convex.
4. Déployez : Vercel activera automatiquement [Analytics](https://vercel.com/docs/observability/analytics) et [Speed Insights](https://vercel.com/docs/observability/speed-insights) déjà importés dans `src/app/layout.tsx`.

## Utiliser v0

1. **Installer le CLI** : `npm i -g v0` (ou `npx v0@latest ...`).
2. **Authentifier** : `v0 login` puis `v0 link` afin d’associer le projet GitHub/Vercel.
3. **Configurer** : le fichier `v0.config.ts` référence les prompts (`prompts/v0`) et les emplacements de sortie :
   - `/` → `src/app/(marketing)`
   - `/dashboard` → `src/app/dashboard`
4. **Générer** :
   ```bash
   v0 generate landing
   v0 generate dashboard
   ```
   Les composants produits respecteront Tailwind (`tailwind.config.ts`) et ShadCN (`components.json`).
5. **Valider** les modifications avant commit (lint, test visuel, etc.).

## ShadCN UI

- `components.json` est prêt pour `npx shadcn@latest add <component>`.
- Les styles globaux sont définis dans `src/app/globals.css` avec tokens CSS variables.
- Les nouveaux composants générés par v0 doivent réutiliser les primitives existantes (boutons, cards, tabs, etc.) pour garantir la cohérence.

## Qualité & lint

```bash
npm run lint
```

L’exécution est conseillée avant tout `git push` ou `vercel deploy`.
