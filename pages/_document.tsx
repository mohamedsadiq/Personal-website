import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
          
          /* Disable scrolling during page transitions */
          html, body {
            overflow-x: hidden;
          }
          
          /* Reset scroll position on page load */
          html.has-scroll-init {
            height: 100%;
            overflow: hidden;
          }
          
          html.has-scroll-init body {
            height: 100%;
            overflow: hidden;
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
