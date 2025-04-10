"use client";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ThemeProvider} from "@/components/Shared/Theme-provider";
import {Toaster} from "@/components/ui/sonner";
import AuthProvider from "@/context/AuthContext";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {useEffect, useState} from "react";
import Loader from "@/components/Shared/Loader";

const queryClient = new QueryClient();

export function GlobalProvider({children}: {children: React.ReactNode}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem={true}
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
          >
            <div
              className={`relative overflow-x-hidden ${
                isLoading ? "!max-h-[100dvh]" : "h-auto"
              }`}
            >
              <div
                className={`absolute inset-0 z-50 transition-opacity duration-500 ease-in-out ${
                  isLoading ? "opacity-100 " : "opacity-0 pointer-events-none"
                }`}
              >
                <Loader />
              </div>

              <div
                className={`transition-opacity duration-500 ease-in-out ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
              >
                {children}
              </div>
            </div>
          </GoogleOAuthProvider>
        </AuthProvider>
        <Toaster richColors position='bottom-right' />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
