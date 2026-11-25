"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "The Villa", href: "#villa" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav${menuOpen ? " navMenuOpen" : ""}`}>
      <Link className="brand" href="#home" onClick={closeMenu}>
        WANA <span>JIWA</span>
      </Link>

      <nav className="desktopNav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="navCta" href="#ota">
        Book your stay <ArrowUpRight size={15} />
      </Link>

      <button
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        className="mobileMenu"
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>

      <div
        id="mobile-navigation"
        className={`mobileNavPanel${menuOpen ? " isOpen" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobileNavLinks" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              {item.label} <ArrowUpRight size={16} />
            </Link>
          ))}
          <Link className="mobileNavBooking" href="#ota" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
            Book your stay <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
