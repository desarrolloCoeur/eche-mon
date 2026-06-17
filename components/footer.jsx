"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex mb-4 sm:mb-6">
              <Image
                src="/images/logo.png"
                alt="Echeagaray | Montes de Oca"
                width={160}
                height={64}
                className="h-10 sm:h-20 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-xs">
              Asesoría legal patrimonial, inmobiliaria y comercial. Litigio
              civil, mercantil y corporativo.
            </p>
            <p className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-primary-foreground/50">
              Guadalajara · Punta de Mita · Tepic
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] sm:text-xs font-medium tracking-[0.15em] uppercase mb-4 sm:mb-6">
              Navegación
            </h4>
            <nav className="flex flex-col gap-2 sm:gap-3">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Servicios", href: "#servicios" },
                { label: "Oficinas", href: "#ubicaciones" },
                { label: "Contacto", href: "#contacto" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-xs sm:text-sm text-primary-foreground/70 hover:text-accent transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-2">
            <h4 className="text-[10px] sm:text-xs font-medium tracking-[0.15em] uppercase mb-4 sm:mb-6">
              Contacto
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex gap-2 sm:gap-3">
                <Phone
                  size={14}
                  className="text-accent flex-shrink-0 mt-0.5 sm:w-4 sm:h-4"
                />
                <a
                  href="tel:+523292981098"
                  className="text-xs sm:text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  (+52) 329 298 10 98
                </a>
              </div>
              <div className="flex gap-2 sm:gap-3">
                <MessageCircle
                  size={14}
                  className="text-accent flex-shrink-0 mt-0.5 sm:w-4 sm:h-4"
                />
                <div className="text-xs sm:text-sm text-primary-foreground/70 space-x-2">
                  <a
                    href="https://wa.me/523336764573"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    (+52) 33 36 76 45 73
                  </a>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3">
                <Mail
                  size={14}
                  className="text-accent flex-shrink-0 mt-0.5 sm:w-4 sm:h-4"
                />
                <a
                  href="mailto:juan@emabogados.com.mx"
                  className="text-xs sm:text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  juan@emabogados.com.mx
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-[10px] sm:text-xs text-primary-foreground/50 text-center sm:text-left">
              © {currentYear} Echeagaray | Montes de Oca. Todos los derechos
              reservados.
            </p>
            <Link
              href="/aviso-de-privacidad"
              className="text-[10px] sm:text-xs text-primary-foreground/40 hover:text-accent transition-colors"
            >
              Aviso de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
