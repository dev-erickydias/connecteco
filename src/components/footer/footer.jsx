"use client";
import "./footer.css";

import Link from "next/link";
import { Logo } from "../../components/header/Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Logo className="footer__logo" />
        <p className="footer__copyright">©2024 ConnectEco</p>
        <Link href="/privacy-policy" className="footer__link-privacy">
          Politica de Privacidade
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
