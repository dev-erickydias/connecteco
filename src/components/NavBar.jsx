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
    <nav className="hidden md:block">
      <ul className="flex gap-8 items-center">
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
