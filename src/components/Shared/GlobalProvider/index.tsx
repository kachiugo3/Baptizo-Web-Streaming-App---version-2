"use client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ThemeProvider} from "@/components/Shared/Theme-provider";
import {Toaster} from "@/components/ui/sonner";
import AuthProvider from "@/context/AuthContext";

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
        <AuthProvider>{children}</AuthProvider>
        <Toaster richColors position='bottom-right' />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
