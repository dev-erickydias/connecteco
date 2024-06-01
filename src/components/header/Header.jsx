"use client";

import "./header.css";
import React, { useState, useEffect } from "react";
import { Location } from "./Location";
import { Logo } from "./Logo";
import { Navbar } from "./NavBar";

function HamburgerMenu({ toggleMenu, isOpen }) {
  return (
    <button
      className={`hamburger-menu__button ${isOpen ? 'hamburger-menu__button--white' : ''}`}
      onClick={toggleMenu}
    >
    </button>
  );
}

export function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <header className="header">
      <div className="header__container_content">
        <Logo />
        {windowWidth < 768 ? (
          <HamburgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
        ) : (
          <Navbar />
        )}
        {isOpen && <Navbar />}        
        {windowWidth > 530 && (
          <div>
            <Location />
          </div>
        )}
      </div>
    </header>
  );
}
