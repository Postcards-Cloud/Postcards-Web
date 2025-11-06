"use client";

import { ReactNode, useMemo } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ErrorBoundary } from "./ErrorBoundary";

type ConvexClientProviderProps = {
  children: ReactNode;
};

export default function ConvexClientProvider({
  children,
}: ConvexClientProviderProps) {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!convexUrl || !clerkPublishableKey) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "ConvexClientProvider: NEXT_PUBLIC_CONVEX_URL ou NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY manquant. Les providers Convex/Clerk sont désactivés.",
      );
    }

    return <>{children}</>;
  }

  const convex = useMemo(() => new ConvexReactClient(convexUrl), [convexUrl]);

  return (
    // NOTE: Once you get Clerk working you can remove this error boundary
    <ErrorBoundary>
      <ClerkProvider publishableKey={clerkPublishableKey}>
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          {children}
        </ConvexProviderWithClerk>
      </ClerkProvider>
    </ErrorBoundary>
  );
}
