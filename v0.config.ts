const config = {
  $schema: "https://static.v0.dev/schema/v0-config.json",
  project: "postcards-ui",
  appPath: "./src/app",
  componentsPath: "./src/components",
  shadcnConfig: "./components.json",
  tailwind: {
    config: "./tailwind.config.ts",
    css: "./src/app/globals.css",
    baseColor: "zinc",
    cssVariables: true,
  },
  prompts: {
    landing: "./prompts/v0/landing.md",
    dashboard: "./prompts/v0/dashboard.md",
  },
  routes: [
    {
      name: "landing",
      description: "Page marketing principale affichée à la racine du site",
      pattern: "/",
      output: "./src/app/(marketing)",
      layout: "./src/app/(marketing)/layout.tsx",
    },
    {
      name: "dashboard",
      description: "Espace app protégé pour les utilisateurs",
      pattern: "/dashboard",
      output: "./src/app/dashboard",
      layout: "./src/app/dashboard/layout.tsx",
    },
  ],
} as const;

export default config;
