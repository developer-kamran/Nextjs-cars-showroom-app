import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/partials/Header';
import Footer from '@/components/partials/Footer';

export const metadata: Metadata = {
  title: 'Book Your Car | Explore & Drive',
  description: 'Discover the best cars in the world.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
