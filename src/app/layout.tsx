import { ThemeProvider } from '@/Component/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Farah Naz - MERN Stack Developer | Portfolio',
  description: 'Full-stack MERN developer specializing in modern web applications. Explore my projects, skills, and experience in MongoDB, Express.js, React, and Node.js.',
  keywords: 'MERN Stack Developer, Full Stack Developer, React, Node.js, MongoDB, Express.js, JavaScript, TypeScript, Portfolio',
  authors: [{ name: 'Farah Naz' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Farah Naz - MERN Stack Developer',
    description: 'Full-stack MERN developer specializing in modern web applications.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
            <Toaster />
        </ThemeProvider>
      
      </body>
    </html>
  );
}