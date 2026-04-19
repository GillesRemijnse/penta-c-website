"use client";

import { usePathname } from "next/navigation";
import {
  activeNavLink,
  dropdownLinks,
  getHeaderState,
  navLink,
} from "./site-nav-data";

function getNavClass(isActive) {
  return isActive ? activeNavLink : navLink;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const { activePrimary, activeDropdown } = getHeaderState(pathname);

  return (
    <header className="sticky top-0 bg-[#F7F5F2]/80 backdrop-blur border-b border-[#EAE6E0] z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center gap-6">
        {/* Preserved current anchor/image behavior during the shell refactor. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="block shrink-0" aria-label="Ga naar home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-clean.jpg"
            alt="Penta-C logo"
            className="w-full max-w-[180px] h-auto object-contain mix-blend-multiply"
          />
        </a>

        <nav className="hidden md:flex gap-10 text-sm items-center">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" className={getNavClass(activePrimary === "/")}>
            Home
          </a>
          <a
            href="/diensten"
            className={getNavClass(activePrimary === "/diensten")}
          >
            Diensten
          </a>

          <div className="relative group">
            <a
              href="/over-ons"
              className={getNavClass(activePrimary === "/over-ons")}
            >
              Over ons
            </a>

            <div className="absolute top-full left-0 w-52 pt-3">
              <div className="bg-white border border-[#EAE6E0] rounded-xl shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                {dropdownLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 hover:bg-[#F7F5F2]${
                      activeDropdown === link.href ? " font-medium" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a
            href="/contact"
            className={getNavClass(activePrimary === "/contact")}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
