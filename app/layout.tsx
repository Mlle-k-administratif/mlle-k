import { PropsWithChildren } from 'react';
import { DM_Sans, Epilogue } from 'next/font/google';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

const epilogue = Epilogue({
  variable: '--font-epilogue',
  subsets: ['latin'],
});




export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} ${epilogue.variable} antialiased md:pb-10`}>
        {children}
      </body>
    </html>
  );
}
