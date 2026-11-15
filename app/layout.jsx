import './globals.css';
import CustomCursor from '@/components/CustomCursor';

export const metadata = {
  title: 'Md. Rifatul Islam | Full-Stack Web Developer Portfolio',
  description:
    'Full-Stack Web Developer portfolio of Md. Rifatul Islam. Crafting high-performance web applications, responsive user interfaces, and modern digital experiences.',
  keywords: [
    'Md. Rifatul Islam',
    'Full-Stack Developer',
    'MERN Stack',
    'Next.js',
    'React',
    'Tailwind CSS',
    'Portfolio',
  ],
  authors: [{ name: 'Md. Rifatul Islam' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#090a0f' },
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        {/* Google Fonts: Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome 6 CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="bg-lightBg dark:bg-darkBg text-slate-900 dark:text-white min-h-screen flex flex-col items-center relative selection:bg-cyan-500 selection:text-white font-sans antialiased overflow-x-hidden w-full max-w-full">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
