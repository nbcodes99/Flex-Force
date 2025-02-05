"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import classnames from "classnames";

export default function Navbar() {
  const currentPath = usePathname();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Book", href: "/book" },
    { label: "Plans", href: "/plans" },
    { label: "Programs", href: "/plans" },
    { label: "Contact", href: "/plans" },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleNavbar() {
    setIsOpen(!false);
  }
  return (
    <>
      <nav className="flex items-center justify-between gap-4 p-6 z-100 top-0 w-full">
        <Link href="/" className="text-zinc-300 font-light text-2xl">
          Flex<span className="font-bold text-red-800">Force</span>
        </Link>
        <ul className={isOpen ? "open" : "flex gap-x-6"}>
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
