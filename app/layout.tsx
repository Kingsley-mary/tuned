import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tuned — TV for your interests',
  description: 'A web app that makes YouTube feel like lean-back television.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Tuned',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="orientation" content="landscape" />
        <meta name="screen-orientation" content="landscape" />
        <meta name="x5-orientation" content="landscape" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-orientations" content="landscape" />
        <script src="https://www.youtube.com/iframe_api" async></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
