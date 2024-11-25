import type { Metadata } from "next";
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ApiProvider } from "@/helpers/apiContext"; // Capitalized for standard convention
import Canonical from "@/components/Canonical";
import { Toaster } from 'react-hot-toast';
import { Inter } from 'next/font/google'
import Script from "next/script";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
// export const config = { amp: true }

export const metadata: Metadata = {
  title: "W3era® | Performance Driven Digital Marketing Company",
  description: "A premier Digital Marketing Company, W3era® offer comprehensive services like SEO, PPC, and Web development. Schedule a free marketing consultation today.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" > 
      <head>
        <Canonical />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />

        <Script type="text/javascript"
         defer async src="https://www.googletagmanager.com/gtag/js?id=G-SQ89MG760K" id="google_gtagjs-js"></Script>
        <Script
          defer
          id="gtag"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
              gtag("set","linker",{"domains":["www.w3era.com"]});
              gtag("js", new Date());
              gtag("set", "developer_id.dZTNiMT", true);
              gtag("config", "G-SQ89MG760K");
          `,
          }}
        />
        <Script
          id="gtm"
          type="text/javascript"
          defer
          dangerouslySetInnerHTML={{
            __html: `( function( w, d, s, l, i ) {
                w[l] = w[l] || [];
                w[l].push( {'gtm.start': new Date().getTime(), event: 'gtm.js'} );
                var f = d.getElementsByTagName( s )[0],
                    j = d.createElement( s ), dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore( j, f );
            } )( window, document, 'script', 'dataLayer', 'GTM-WJW2WL3' );`,
          }}
        />
      
      </head>
      <body
        className={`${inter.variable} `}>
        <Toaster />
        <ApiProvider> {/* Wrap the provider around children */}
          {children}
        </ApiProvider>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WJW2WL3"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
          }}
        />
      </body>

    </html>
  );
}
