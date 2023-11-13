'use client';

import { ThemeProvider } from 'next-themes';

import { ProvidersProps } from './types';

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider enableSystem={false} enableColorScheme={false} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
