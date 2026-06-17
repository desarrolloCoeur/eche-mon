"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero2.jpg"
          alt="Echeagaray | Montes de Oca - Despacho jurídico"
          fill
          priority
          className="object-cover animate-img-fade-in"
          sizes="100vw"
        />
        {/* Side-weighted gradient for a left-anchored read */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 sm:pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-7">
            <div className="w-10 h-px bg-white/40" />
            <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/90 font-medium">
              Asesoría Legal · Litigio
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light text-white leading-[0.95] tracking-tight">
            Echeagaray
            <br />
            <span className="text-accent">Montes de Oca</span>
          </h1>

          {/* Tagline */}
          <p className="mt-7 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
            Asesoría legal patrimonial, inmobiliaria y comercial. Litigio civil,
            mercantil y corporativo.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-9">
            <a
              href="#contacto"
              onClick={(e) => scrollToSection(e, "#contacto")}
              className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-accent text-accent-foreground text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              Agendar Consulta
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
            <a
              href="#servicios"
              onClick={(e) => scrollToSection(e, "#servicios")}
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 border border-white/35 text-white text-sm tracking-wide hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
