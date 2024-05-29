import Link from "next/link";
import { Button } from "./Button";
import { NavbarItem } from "./NavBarItem";

const linksMenu = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Sobre a Connect Eco",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        {linksMenu.map((link) => (
          <NavbarItem key={link.href} href={link.href}>
            {link.label}
          </NavbarItem>
        ))}
        <Button>Faça parte</Button>
      </ul>
    </nav>
  );
}
