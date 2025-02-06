import { SessionProvider } from 'next-auth/react';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';

import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://learnersamigo.com'),
  title: 'Learners Amigo - Your Personal Course Recommendation Assistant',
  description: 'Get personalized course recommendations with AI-powered assistance. Find the perfect learning path tailored to your goals and interests.',
  keywords: ['course recommendations', 'AI learning assistant', 'education', 'online courses', 'personalized learning'],
  authors: [{ name: 'Learners Amigo Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://learnersamigo.com',
    title: 'Learners Amigo - Your Personal Course Recommendation Assistant',
    description: 'Get personalized course recommendations with AI-powered assistance. Find the perfect learning path tailored to your goals and interests.',
    siteName: 'Learners Amigo',
    images: [{
      url: '/icons/android-chrome-512x512.png',
      width: 512,
      height: 512,
      alt: 'Learners Amigo Logo',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learners Amigo - Your Personal Course Recommendation Assistant',
    description: 'Get personalized course recommendations with AI-powered assistance.',
    images: [{
      url: '/icons/android-chrome-512x512.png',
      width: 512,
      height: 512,
      alt: 'Learners Amigo Logo',
      type: 'image/png',
    }],
    creator: '@learnersamigo',
    site: '@learnersamigo',
  },
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon.ico', sizes: '48x48' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/icons/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/icons/android-chrome-512x512.png',
      },
      {
        rel: 'manifest',
        url: '/icons/site.webmanifest',
      },
    ],
  },
  manifest: '/icons/site.webmanifest',
};

export const viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
};

const LIGHT_THEME_COLOR = 'hsl(0 0% 100%)';
const DARK_THEME_COLOR = 'hsl(240deg 10% 3.92%)';
const THEME_COLOR_SCRIPT = `\
(function() {
  var html = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color');
    document.head.appendChild(meta);
  }
  function updateThemeColor() {
    var isDark = html.classList.contains('dark');
    meta.setAttribute('content', isDark ? '${DARK_THEME_COLOR}' : '${LIGHT_THEME_COLOR}');
  }
  var observer = new MutationObserver(updateThemeColor);
  observer.observe(html, { attributes: true, attributeFilter: ['class'] });
  updateThemeColor();
})();`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // `next-themes` injects an extra classname to the body element to avoid
      // visual flicker before hydration. Hence the `suppressHydrationWarning`
      // prop is necessary to avoid the React hydration mismatch warning.
      // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: THEME_COLOR_SCRIPT,
          }}
        />
      </head>
      <body className="antialiased">
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster position="top-center" />
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
