import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'HV Fashion - Premium Clothing & Fashion Store',
  description: 'Discover premium quality formal and casual wear at HV Fashion. Shop our exclusive collection of shirts, trousers, and accessories crafted for the modern professional.',
  keywords: 'fashion, clothing, premium wear, formal shirts, casual wear, trousers, accessories, HV Fashion',
  authors: [{ name: 'HV Fashion' }],
  creator: 'HV Fashion',
  publisher: 'HV Fashion',
  openGraph: {
    title: 'HV Fashion - Premium Clothing & Fashion Store',
    description: 'Discover premium quality formal and casual wear at HV Fashion. Shop our exclusive collection crafted for the modern professional.',
    url: 'https://hvfashion.com',
    siteName: 'HV Fashion',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HV Fashion - Premium Clothing Store',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HV Fashion - Premium Clothing & Fashion Store',
    description: 'Discover premium quality formal and casual wear at HV Fashion.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
