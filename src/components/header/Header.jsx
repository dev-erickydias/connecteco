"use client";

import "./header.css";
import React, { useState } from "react";
import { Location } from "./Location";
import { Logo } from "./Logo";
import { Navbar } from "./NavBar";
import UseWindowWidth from "../UseWindowWidth";

export function Header() {
  const windowWidth = UseWindowWidth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header__container_content">
        {isOpen && <Navbar />}
        <div className="header__menu">
          <div className="header__menu-logo">
            <Logo />
            {windowWidth > 768 && <Navbar />}
          </div>
          {windowWidth > 530 && <Location />}
          {windowWidth < 768 && (
            <button
              className={`hamburger-menu__button ${
                isOpen ? "hamburger-menu__button--white" : ""
              }`}
              onClick={toggleMenu}
            ></button>
          )}
        </div>
      </div>
    </header>
  );
}
