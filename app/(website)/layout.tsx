import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { DM_Sans, Epilogue } from 'next/font/google';

import { Footer, Header } from '@/components/layout';

import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

const epilogue = Epilogue({
  variable: '--font-epilogue',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} ${epilogue.variable} antialiased md:pb-10`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
