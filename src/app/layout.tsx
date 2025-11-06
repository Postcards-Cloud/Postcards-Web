import type { Metadata } from "next";
import { Inter, Montserrat, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PostCards - Partage de Photos Événements",
  description: "Plateforme moderne pour créer et partager des galeries photos d'événements avec support P2P et reconnaissance faciale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, montserrat.className, lato.className)}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
