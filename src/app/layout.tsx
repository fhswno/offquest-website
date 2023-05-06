import './globals.css';

export const metadata = {
  title: 'OffQuest',
  description:
    'On a mission to change entire industries, with a focus on open-source technology and disruptive innovation. We solve real, complex problems, by creating beautiful, intuitive products that are both functional and enjoyable.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
