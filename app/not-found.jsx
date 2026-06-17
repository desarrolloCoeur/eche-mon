import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Página no encontrada | Echeagaray | Montes de Oca",
  description:
    "La página que buscas no existe. Regresa al inicio de Echeagaray | Montes de Oca.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-primary px-4 py-32">
        <div className="max-w-xl w-full text-center">
          {/* Decorative line */}
          <div
            className="w-12 h-px bg-accent mx-auto mb-10 animate-line-expand"
            style={{ animationDelay: "0.1s" }}
          />

          {/* 404 numeral */}
          <p
            className="text-[9rem] sm:text-[12rem] leading-none font-light text-accent opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            404
          </p>

          {/* Heading */}
          <h1
            className="text-2xl sm:text-3xl font-light text-primary-foreground mt-2 mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            Página no encontrada
          </h1>

          {/* Sub-copy */}
          <p
            className="text-sm text-primary-foreground/60 leading-relaxed mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            La dirección que ingresaste no existe o fue movida.
            <br />
            Regresa al inicio para continuar.
          </p>

          {/* CTA */}
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
          >
            <Link
              href="/"
              className="relative inline-block px-8 py-3 text-xs uppercase tracking-widest bg-accent text-accent-foreground overflow-hidden transition-all duration-300 group hover:shadow-lg"
            >
              <span className="relative z-10 group-hover:text-white">
                Volver al inicio
              </span>
              <span className="absolute inset-0 bg-primary-foreground transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              <span className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                Volver al inicio
              </span>
            </Link>
          </div>

          {/* Bottom decorative line */}
          <div
            className="w-12 h-px bg-primary-foreground/20 mx-auto mt-16 animate-line-expand"
            style={{ animationDelay: "0.8s" }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
