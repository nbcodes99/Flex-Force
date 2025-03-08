"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import classnames from "classnames";
import "./globals.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export default function Navbar() {
  const currentPath = usePathname();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Book", href: "/book" },
    { label: "Plans", href: "/plans" },
    { label: "Programs", href: "/programs" },
    { label: "Contact", href: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <nav className="flex items-center justify-between sticky top-0 z-50 gap-4 p-10 w-full">
        <Link href="/" className="font-bold text-zinc-300 text-2xl">
          Flex<span className="text-red-600">Force</span>
        </Link>
        <div className="hamburger" onClick={toggleNavbar}>
          {isOpen ? (
            <ImCross className="transition-colors text-xl" />
          ) : (
            <GiHamburgerMenu className="transition-colors text-3xl" />
          )}
        </div>
        <ul className={isOpen ? "open" : ""}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={classnames({
                  "text-zinc-50": link.href === currentPath,
                  "text-zinc-600": link.href !== currentPath,
                  "no-underline link hover:text-zinc-400 transition-colors":
                    true,
                })}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
