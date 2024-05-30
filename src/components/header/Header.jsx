import "./header.css"
import { Location } from "./Location";
import { Logo } from "./Logo";
import { Navbar } from "./NavBar";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container__content">
          <Logo />
          <Navbar />
        </div>

        <Location />
      </div>
    </header>
  );
}