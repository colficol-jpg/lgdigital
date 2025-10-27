// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Fuente LG (Noto Sans) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Iconos Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <meta name="theme-color" content="#A50034" />
      </Head>
      <body className="font-sans bg-white text-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
