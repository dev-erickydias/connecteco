import Link from "next/link";
import  CustomButton  from "../CustomButton";
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
        <CustomButton className={"button"}><Link href={"/faca-parte"}>Faça parte</Link></CustomButton>
      </ul>
    </nav>
  );
}
