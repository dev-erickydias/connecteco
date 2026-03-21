import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/footer";
import { UserLocationProvider } from "../context/UserLocationContext";
import Script from "next/script";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: "ConnectEco - Sustentabilidade e Reciclagem no Brasil",
  description:
    "ConnectEco e a plataforma lider em sustentabilidade e reciclagem no Brasil. Descubra ecopontos, aprenda sobre praticas sustentaveis e seja parte da mudanca ambiental.",
  keywords:
    "sustentabilidade, reciclagem, ecologia, ecoponto, Brasil, ambiente, coleta seletiva, pontos de recolha",
  authors: [{ name: "ConnectEco" }],
  creator: "ConnectEco",
  publisher: "ConnectEco",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://connecteco.com.br",
    siteName: "ConnectEco",
    title: "ConnectEco - Sustentabilidade e Reciclagem no Brasil",
    description:
      "Plataforma de sustentabilidade e reciclagem com foco em ecopontos e praticas sustentaveis.",
    images: [
      {
        url: "https://connecteco.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ConnectEco - Sustentabilidade e Reciclagem",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@connecteco",
    title: "ConnectEco - Sustentabilidade e Reciclagem",
    description:
      "Descubra ecopontos e praticas sustentaveis com ConnectEco",
    image: "https://connecteco.com.br/og-image.jpg",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://connecteco.com.br",
  },
};

export default function RootLayout({ children }) {
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_ID || "";

  return (
    <html lang="pt-BR" className={dmSans.variable}>
      <head>
        <link rel="icon" href="./favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {publisherId && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ConnectEco",
              url: "https://connecteco.com.br",
              logo: "https://connecteco.com.br/logo.svg",
              description:
                "Plataforma de sustentabilidade e reciclagem no Brasil",
              sameAs: ["https://github.com/connecteco"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                availableLanguage: ["pt-BR"],
              },
              location: {
                "@type": "Country",
                name: "Brazil",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${dmSans.className} flex flex-col min-h-screen`}
        style={{ backgroundColor: "#FDFCF8" }}
      >
        <UserLocationProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </UserLocationProvider>
      </body>
    </html>
  );
}
