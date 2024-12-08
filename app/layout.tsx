import './globals.css'        // глобальные стили

import '../public/css/main.css'        // подключаем основной стиль

import Script from 'next/script'

export const metadata = {
  title: 'RendeR',
  description: 'Bio aquarelle#1931',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Bio aquarelle#1931" />
        <meta name="keywords" content="vcard, responsive, retina, resume, jquery, css3, bootstrap, Material CV, portfolio" />
        <meta name="author" content="lmpixels" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        {children}

        <Script src="/js/modernizr.custom.js" strategy="beforeInteractive" />
        <Script src="/js/jquery-2.1.3.min.js" strategy="beforeInteractive" />
        <Script src="/js/animating.js" strategy="afterInteractive" />
        <Script src="/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/perfect-scrollbar.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.shuffle.min.js" strategy="afterInteractive" />
        <Script src="/js/masonry.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/validator.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
        <Script src="http://localhost:8097"/>
        <Script src="http://192.168.31.62:8097"/>
      </body>
    </html>
  )
}
