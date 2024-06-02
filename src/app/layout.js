import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/footer";
import { UserLocationProvider } from "../context/UserLocationContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="./favicon.ico" />
        <title>ConnectEco</title>
        <meta name="description" content="pagina de ecologia" />
      </head>
      <body className={`pages ${inter.className}`}>
        <UserLocationProvider>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </UserLocationProvider>
      </body>
    </html>
  );
}
