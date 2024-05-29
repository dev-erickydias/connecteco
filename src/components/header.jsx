import { Location } from "./Location";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="w-full py-4">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <Logo />
          <Navbar />
        </div>

        <Location />
      </div>
    </header>
  );
}