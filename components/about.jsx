"use client";

import Image from "next/image";
import { Scale, Lightbulb, UserCheck, Users, ArrowRight } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Scale,
      title: "Excelencia en Ejecución",
      description:
        "Redacción clara, estrategia disciplinada y seguimiento confiable, combinando perspectiva de negocio con preparación litigiosa.",
    },
    {
      icon: Lightbulb,
      title: "Soluciones Creativas y Pragmáticas",
      description:
        "Diseñamos soluciones alineadas a los objetivos comerciales de cada cliente, priorizando eficiencia y costo-beneficio.",
    },
    {
      icon: UserCheck,
      title: "Enfoque Personalizado",
      description:
        "Comprendemos el modelo de negocio, la gobernanza y el contexto operativo para anticipar cuellos de botella legales.",
    },
    {
      icon: Users,
      title: "Equipo Profesional",
      description:
        "Capacitación continua para mantener un trabajo actualizado, técnicamente sólido y útil para el negocio.",
    },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="nosotros"
      className="py-20 sm:py-24 lg:py-32 bg-card overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/nosotros.jpg"
                alt="Despacho Echeagaray | Montes de Oca"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-6 lg:-right-8 bg-primary text-primary-foreground p-5 sm:p-6 lg:p-8 shadow-2xl">
              <p className="text-3xl sm:text-4xl lg:text-5xl text-accent">
                3
              </p>
              <p className="text-xs sm:text-sm text-primary-foreground/80 mt-1">
                Oficinas
                <br />
                en México
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-4">
            <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-accent mb-3 sm:mb-4">
              Sobre Nosotros
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-foreground text-balance mb-5 sm:mb-6">
              Excelencia en ejecución, perspectiva de negocio
            </h2>
            <div className="w-12 sm:w-16 h-0.5 bg-accent mb-6 sm:mb-8" />

            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">
                  Echeagaray | Montes de Oca
                </span>{" "}
                es un despacho orientado a resultados que brinda asesoría y
                representación legal a clientes nacionales y extranjeros que
                realizan negocios en México. Nuestra práctica se centra en
                materia corporativa, banca y finanzas, inmobiliario y
                construcción, laboral, financiamiento de proyectos y litigio
                civil y mercantil.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Ayudamos a nuestros clientes a operar con claridad en un entorno
                jurídico que puede cambiar con rapidez. Como asesoría local,
                buscamos ser la primera llamada cuando se requiere decidir con
                agilidad, administrar riesgos y defender posiciones frente a
                contrapartes, autoridades o tribunales.
              </p>
            </div>

            <a
              href="#contacto"
              onClick={(e) => scrollToSection(e, "#contacto")}
              className="group inline-flex items-center gap-3 text-foreground font-medium hover:text-accent transition-colors text-sm sm:text-base"
            >
              Agendar una consulta
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        {/* Why choose us */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24 mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-accent mb-3 sm:mb-4">
            ¿Por qué elegirnos?
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight text-foreground text-balance max-w-2xl mx-auto">
            Un servicio jurídico práctico y de alta calidad
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-4 sm:p-6 lg:p-8 bg-background border border-border hover:border-accent/40 transition-all duration-500 cursor-default flex flex-col items-center text-center"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 mb-4 sm:mb-5 lg:mb-6">
                <value.icon size={20} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl text-foreground mb-2 sm:mb-3">
                {value.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
