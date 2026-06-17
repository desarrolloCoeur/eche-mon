"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Oficinas", href: "#ubicaciones" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[80] transition-[background-color,backdrop-filter,box-shadow] duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
        style={{
          animation: "slide-down 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center group"
              style={{
                animation:
                  "fade-in-left 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both",
              }}
            >
              <Image
                src="/images/logo.png"
                alt="Echeagaray | Montes de Oca"
                width={160}
                height={64}
                className={`h-10 sm:h-14 w-auto object-contain transition-all duration-500 group-hover:scale-105 ${
                  isScrolled ? "" : "brightness-0 invert"
                }`}
              />
            </Link>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`nav-item relative text-xs uppercase tracking-widest transition-colors duration-300 cursor-pointer group ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
                  style={{
                    animation: `slide-down 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${0.5 + index * 0.1}s both`,
                  }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ))}

              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "#contacto")}
                className="nav-item relative px-5 py-2 text-xs uppercase tracking-widest bg-accent text-accent-foreground overflow-hidden transition-all duration-300 cursor-pointer group hover:shadow-lg"
                style={{
                  animation: `slide-down 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${0.5 + navItems.length * 0.1}s both`,
                }}
              >
                <span className="relative z-10 group-hover:text-white">
                  Contacto
                </span>
                <span className="absolute inset-0 bg-foreground transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                <span className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Contacto
                </span>
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center transition-colors duration-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block w-full h-[2px] transition-all duration-300 ease-out origin-center ${
                    isMenuOpen
                      ? "bg-foreground rotate-45 translate-y-[7px]"
                      : isScrolled || isMenuOpen
                        ? "bg-foreground"
                        : "bg-primary-foreground"
                  }`}
                />
                <span
                  className={`block w-full h-[2px] transition-all duration-200 ${
                    isMenuOpen
                      ? "bg-foreground opacity-0 scale-x-0"
                      : isScrolled
                        ? "bg-foreground opacity-100"
                        : "bg-primary-foreground opacity-100"
                  }`}
                />
                <span
                  className={`block w-full h-[2px] transition-all duration-300 ease-out origin-center ${
                    isMenuOpen
                      ? "bg-foreground -rotate-45 -translate-y-[7px]"
                      : isScrolled || isMenuOpen
                        ? "bg-foreground"
                        : "bg-primary-foreground"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[70] bg-foreground/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.35,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="fixed top-0 right-0 h-full w-[280px] max-w-[85vw] z-[90] bg-background shadow-2xl md:hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-foreground hover:text-accent transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>

              <div className="flex flex-col h-full px-6 pt-6 pb-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05, duration: 0.3 }}
                  className="mb-8"
                >
                  <Image
                    src="/images/logo.png"
                    alt="Echeagaray | Montes de Oca"
                    width={140}
                    height={56}
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>
                <div className="flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                      className="text-lg font-light text-foreground hover:text-accent py-4 border-b border-border/50 transition-colors duration-200 cursor-pointer"
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.name}
                    </motion.a>
                  ))}

                  <motion.a
                    href="#contacto"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + navItems.length * 0.05,
                      duration: 0.3,
                    }}
                    className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-4 text-sm font-medium text-center transition-colors duration-200 cursor-pointer"
                    onClick={(e) => handleNavClick(e, "#contacto")}
                  >
                    Contacto
                  </motion.a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
