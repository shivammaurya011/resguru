import "../styles/globals.css";
import { Providers } from "@/components/common/Providers";

export const metadata = {
  title: "Sarkari Result - Latest Government Jobs & Results",
  description: "Find latest government jobs, sarkari results, admit cards, and employment news. Updated daily with new government job notifications across India.",
  keywords: "sarkari result, government jobs, sarkari naukri, latest jobs, exam results, admit cards",
  metadataBase: new URL('https://sarkariresult.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sarkari Result - Latest Government Jobs & Results',
    description: 'Find latest government jobs, sarkari results, admit cards, and employment news. Updated daily with new government job notifications across India.',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sarkari Result',
      },
    ],
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
  icons: {
    icon: {
      url: '/favicon.ico',
      sizes: 'any',
    },
    apple: {
      url: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
