"use client";

import Image from "next/image";
import MenuButton from "./MenuButton";
import { useState, useEffect } from "react";
import Menu from "./Menu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`text-white fixed w-full z-30 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-[#D940C0]" : ""
      }`}
    >
      <nav
        className={`flex px-[4vw] justify-center items-center transition-all duration-300 ease-in-out ${
          scrolled ? "py-1" : "py-6"
        }`}
      >
        <a href="/" className={`mr-auto ${menuOpen ? "opacity-0" : ""}`}>
          {!scrolled && (
            <Image
              src="/images/logo_header.png"
              alt="logo"
              width={2563}
              height={614}
              className={`w-[15rem] ${!scrolled ? "opacity-1" : "opacity-0"}`}
            />
          )}
          {scrolled && <h1 className="text-4xl font-bold">WebLab</h1>}
        </a>
        <MenuButton isOpen={menuOpen} toggleMenu={toggleMenu} />
        <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
}

export default Header;
