import Footer from '@/components/parts/Footer';
import Navbar from '@/components/parts/Navbar';
import Providers from '@/components/parts/Providers';
import generateMetadata from '@/lib/metadata';

import '@/assets/styles/globals.css';

export const metadata = generateMetadata();

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Providers>
          <header>
            <Navbar />
          </header>

          <main className="flex-1 bg-rect-pattern">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
