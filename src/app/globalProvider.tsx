"use client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ThemeProvider} from "@/components/Shared/Theme-provider";
import {Toaster} from "@/components/ui/sonner";
import AuthProvider from "@/context/AuthContext";
import {GoogleOAuthProvider} from "@react-oauth/google";

const queryClient = new QueryClient();

export function GlobalProvider({children}: {children: React.ReactNode}) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem={false}
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <GoogleOAuthProvider
            GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
          >
            {children}
          </GoogleOAuthProvider>
        </AuthProvider>
        <Toaster richColors position='bottom-right' />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
