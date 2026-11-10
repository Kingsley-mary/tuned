import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tuned — TV for your interests',
  description: 'A web app that makes YouTube feel like lean-back television.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://www.youtube.com/iframe_api" async></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
