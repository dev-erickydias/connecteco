"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavbarItem({ children, href, ...props }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        {...props}
        className={`nav__menu__link
          ${isActive ? "nav__menu__link-active" : "nav__menu__link-inactive"}`
      }
      >
        {children}
      </Link>
    </li>
  );
}
 