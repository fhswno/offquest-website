// NEXT
import { Metadata } from 'next';

// METADATA
export const metadata: Metadata = {
  title: "OffQuest - We're making top-tier Software accessible to everyone.",
  description:
    'OffQuest is a software company that builds and maintains top-tier, mostly open-source software solutions that empowers individuals and transforms communities. Our mission is to make top technology open-source and freely available to everyone. Explore our website to learn more about our products, services, and the team behind them.',
};

// ANALYTICS
import { Analytics } from '@vercel/analytics/react';

// TOAST
import { Toaster } from 'react-hot-toast';

// STYLES
import './globals.css';

// FONTS
import { Work_Sans } from 'next/font/google';
const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={workSans.className}>
      <body>
        <Toaster />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
