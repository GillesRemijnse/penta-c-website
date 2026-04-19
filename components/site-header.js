"use client";

import { useState, useSyncExternalStore } from "react";
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

function subscribeToMobileViewport(callback) {
  const mediaQuery = window.matchMedia("(max-width: 767px)");
  mediaQuery.addEventListener("change", callback);

  return () => {
    mediaQuery.removeEventListener("change", callback);
  };
}

function getMobileViewportSnapshot() {
  return window.matchMedia("(max-width: 767px)").matches;
}

function getMobileViewportServerSnapshot() {
  return false;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const isMobileViewport = useSyncExternalStore(
    subscribeToMobileViewport,
    getMobileViewportSnapshot,
    getMobileViewportServerSnapshot
  );
  const { activePrimary, activeDropdown } = getHeaderState(pathname);

  function toggleMobileMenu() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  function toggleMobileAbout() {
    setIsMobileAboutOpen((prev) => !prev);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
    setIsMobileAboutOpen(false);
  }

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

        {isMobileViewport ? (
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? "Sluit menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#2F3A4C] transition duration-200 hover:bg-white/60"
          >
            <span className="sr-only">
              {isMobileMenuOpen ? "Sluit menu" : "Open menu"}
            </span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-[1.5px] w-[18px] rounded-full bg-current" />
              <span className="block h-[1.5px] w-[18px] rounded-full bg-current" />
              <span className="block h-[1.5px] w-[18px] rounded-full bg-current" />
            </span>
          </button>
        ) : null}
      </div>

      {isMobileViewport && isMobileMenuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-[#EAE6E0] bg-[#F7F5F2]"
        >
          <nav className="max-w-6xl mx-auto px-6 py-3">
            <div className="ml-auto w-full max-w-[280px] rounded-2xl border border-[#EAE6E0] bg-[#F7F5F2] shadow-sm overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a
                href="/"
                onClick={closeMobileMenu}
                className={`block px-5 py-4 text-sm border-b border-[#EAE6E0] ${getNavClass(
                  activePrimary === "/"
                )}`}
              >
                Home
              </a>
              <a
                href="/diensten"
                onClick={closeMobileMenu}
                className={`block px-5 py-4 text-sm border-b border-[#EAE6E0] ${getNavClass(
                  activePrimary === "/diensten"
                )}`}
              >
                Diensten
              </a>

              <div className="border-b border-[#EAE6E0]">
                <div className="flex items-center justify-between">
                  <a
                    href="/over-ons"
                    onClick={closeMobileMenu}
                    className={`block px-5 py-4 text-sm ${getNavClass(
                      activePrimary === "/over-ons"
                    )}`}
                  >
                    Over ons
                  </a>
                  <button
                    type="button"
                    onClick={toggleMobileAbout}
                    aria-expanded={isMobileAboutOpen}
                    aria-label={
                      isMobileAboutOpen
                        ? "Sluit teamnavigatie"
                        : "Open teamnavigatie"
                    }
                    className="px-5 py-4 text-sm text-[#2F3A4C] hover:opacity-60 transition duration-200"
                  >
                    {isMobileAboutOpen ? "−" : "+"}
                  </button>
                </div>

                {isMobileAboutOpen ? (
                  <div className="bg-[rgba(255,255,255,0.35)] border-t border-[#EAE6E0]">
                    {dropdownLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={`block px-8 py-3 text-sm hover:bg-[rgba(255,255,255,0.5)] transition duration-200${
                          activeDropdown === link.href ? " font-medium" : ""
                        }`}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>

              <a
                href="/contact"
                onClick={closeMobileMenu}
                className={`block px-5 py-4 text-sm ${getNavClass(
                  activePrimary === "/contact"
                )}`}
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
