import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Pavan Kumar - Full Stack Developer',
  description: 'Professional portfolio of Pavan Kumar, a passionate full-stack developer with 2+ years of experience building modern web applications.',
  keywords: ['developer', 'full-stack', 'react', 'nextjs', 'typescript', 'portfolio'],
  authors: [{ name: 'Pavan Kumar' }],
  openGraph: {
    title: 'Pavan Kumar - Full Stack Developer',
    description: 'Professional portfolio showcasing modern web development projects and expertise.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}