'use client'; // Keep this if you need client-side rendering

import React from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import localFont from 'next/font/local';
import { ThemeProvider } from 'styled-components';
import { baselightTheme } from '@/style/theme';

// Define local fonts
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// Remove the metadata export if not needed
// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased border-y-green-400`}
      >
        <ThemeProvider theme={baselightTheme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
