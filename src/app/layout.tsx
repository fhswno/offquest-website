// NEXT
import { Metadata } from 'next';

// METADATA
export const metadata: Metadata = {
  title:
    'OffQuest - Making top technology open-source and freely available to everyone',
  description:
    'OffQuest is a software company that builds and maintains top-tier, mostly open-source software solutions that empowers individuals and transforms communities. Our mission is to make top technology open-source and freely available to everyone. Explore our website to learn more about our products, services, and the team behind them.',
};

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
      <body>{children}</body>
    </html>
  );
}
