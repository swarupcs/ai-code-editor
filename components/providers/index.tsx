'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@/components/providers/theme-providers';
import { Toaster } from '@/components/ui/sonner';

export function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
