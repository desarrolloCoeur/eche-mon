"use client";

import { useState } from "react";
import {
  Banknote,
  Building2,
  HardHat,
  Landmark,
  Briefcase,
  Gavel,
  MessageCircle,
  Check,
  ChevronRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "523336764573";

const services = [
  {
    icon: Banknote,
    title: "Banca y Finanzas",
    description:
      "Asesoramos en una amplia gama de operaciones de financiamiento y controversias relacionadas. Representamos a acreedores, inversionistas, fondos, aseguradoras, administradores de activos y acreditados corporativos en estructuración, documentación, cumplimiento regulatorio y ejecución.",
    items: [
      "Financiamiento inmobiliario y de construcción",
      "Litigio bancario y financiero",
      "Productos bancarios y de crédito",
      "Financiamiento con activos y bursatilización",
      "Financiamiento de proyectos y financiamiento estructurado",
      "Crédito garantizado y paquetes de garantías",
      "Controles cambiarios, licencias y cumplimiento regulatorio",
      "Negociación de deuda en distress, reestructura e insolvencia",
      "Estrategia y resolución de reclamaciones de seguros y fianzas",
    ],
  },
  {
    icon: Building2,
    title: "Derecho Corporativo",
    description:
      "Asesoramos a empresas e inversionistas a lo largo de todo el ciclo corporativo: constitución, gobierno corporativo, operación cotidiana, reestructuras y estrategias de salida. También negociamos y elaboramos contratos comerciales que sostienen la operación del negocio.",
    items: [
      "Constitución de sociedades y estructuración óptima para inversionistas nacionales y extranjeros",
      "Joint ventures, alianzas y acuerdos de socios/accionistas",
      "Estatutos, políticas corporativas, cumplimiento y mantenimiento corporativo",
      "Asambleas de socios o accionistas y resoluciones corporativas",
      "Reestructuras corporativas, disoluciones y coordinación en insolvencia",
      "Controversias corporativas y litigio entre socios/accionistas",
      "Contratos comerciales (distribución, suministro, franquicia, agencia, licencias, outsourcing)",
      "Due diligence y documentación transaccional (acciones y activos)",
      "Apoyo en permisos y registros cuando legalmente sean necesarios",
    ],
  },
  {
    icon: HardHat,
    title: "Inmobiliario y Construcción",
    description:
      "Práctica central del despacho. Brindamos acompañamiento legal integral para operaciones y proyectos, desde due diligence y estructuración hasta negociación, cierre, registro y solución de controversias.",
    items: [
      "Due diligence legal y mapeo de riesgos",
      "Estructuración de la operación, negociación y documentación de cierre",
      "Coordinación de financiamiento inmobiliario",
      "Transmisión de propiedad y registros obligatorios",
      "Acompañamiento operativo y administración de inmuebles",
      "Instrumentos de garantía (prendas, hipotecas, garantías)",
      "Estrategia de contratación (EPC, diseño, supervisión, suministro y subcontratación)",
      "Permisos y autorizaciones (proyecto, obra, ambiental)",
      "Acompañamiento durante la ejecución y gestión de reclamaciones",
      "Terminación, aceptación y registro de activos en construcción",
      "Solución de controversias inmobiliarias y de construcción",
    ],
  },
  {
    icon: Landmark,
    title: "Financiamiento de Proyectos e Infraestructura",
    description:
      "Asesoramos a patrocinadores, acreedores y participantes en infraestructura y financiamiento de proyectos, incluyendo esquemas de recurso limitado. Nuestro trabajo abarca desarrollo, financiamiento, implementación, operación y solución de controversias.",
    items: [
      "Due diligence legal",
      "Estructuración del proyecto y constitución/operación/liquidación de SPV",
      "Negociación de documentación de financiamiento, garantías e inter-acreedores",
      "Negociación de contratos del proyecto (JV, inversión, offtake, suministro, O&M, servicios técnicos)",
      "Asesoría regulatoria y administrativa; permisos y licencias",
      "Solución de controversias",
    ],
  },
  {
    icon: Briefcase,
    title: "Derecho Laboral",
    description:
      "Asesoramos a empleadores en la estructuración de relaciones laborales, documentación y prevención de conflictos; y representamos a nuestros clientes en controversias y procedimientos ante autoridades laborales.",
    items: [
      "Elaboración, modificación y terminación de contratos de trabajo",
      "Políticas internas, reglamentos, manuales y procedimientos disciplinarios",
      "Soporte en negociación y cumplimiento de contratos colectivos",
      "Asesoría en compensación, finiquitos, liquidaciones y cumplimiento",
      "Due diligence y documentación laboral y migratoria (permisos/visas)",
      "Acuerdos de confidencialidad y no competencia",
      "Cumplimiento de protección de datos personales en el contexto laboral",
    ],
  },
  {
    icon: Gavel,
    title: "Litigio",
    description:
      "Representamos a nuestros clientes en controversias civiles y mercantiles complejas, incluyendo estrategia precontenciosa, litigio, apoyo en arbitraje cuando aplique y ejecución de sentencias.",
    items: [
      "Análisis de riesgo y diseño de estrategia litigiosa",
      "Preparación de demandas, contestaciones, incidentes, recursos y escritos judiciales",
      "Estrategia probatoria y gestión del caso",
      "Ejecución y cumplimiento forzoso de sentencias",
      "Negociación de acuerdos y redacción de convenios",
      "Cobranza judicial, controversias contractuales, disputas corporativas y litigio inmobiliario",
      "Controversias administrativas con autoridades públicas",
    ],
  },
];

function ServiceDetail({ service }) {
  return (
    <div className="bg-card border border-border p-6 sm:p-8 lg:p-10">
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-7">
        {service.description}
      </p>

      <p className="text-xs tracking-[0.18em] uppercase text-foreground/70 font-medium mb-4">
        Servicios clave
      </p>
      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
        {service.items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm sm:text-[15px] text-muted-foreground leading-relaxed"
          >
            <Check
              size={16}
              className="mt-0.5 flex-shrink-0 text-accent"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Quisiera saber más información sobre el área de ${service.title} por favor`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-8 px-5 py-3 text-sm bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-200"
      >
        <MessageCircle size={16} />
        Más información
      </a>
    </div>
  );
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="servicios"
      className="py-20 sm:py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-accent mb-3 sm:mb-4">
            Áreas de Práctica
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-foreground text-balance max-w-3xl mx-auto">
            Servicios legales para operar con claridad
          </h2>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,320px)_1fr] gap-6 lg:gap-10 items-start">
          {/* Navegación de áreas */}
          <div className="flex flex-col gap-2.5 lg:sticky lg:top-28">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeIndex === index;

              return (
                <div key={index}>
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    aria-expanded={isActive}
                    className={`w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left border transition-all duration-300 group ${
                      isActive
                        ? "bg-card border-accent"
                        : "bg-card/50 border-border hover:border-accent/40"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-foreground group-hover:bg-accent/10"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <h3
                      className={`flex-1 min-w-0 text-base sm:text-lg font-light transition-colors duration-200 ${
                        isActive
                          ? "text-accent"
                          : "text-foreground group-hover:text-accent"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <ChevronRight
                      size={18}
                      className={`flex-shrink-0 transition-all duration-300 ${
                        isActive
                          ? "text-accent rotate-90 lg:rotate-0"
                          : "text-muted-foreground lg:opacity-0 lg:group-hover:opacity-100"
                      }`}
                    />
                  </button>

                  {/* Detalle en línea (móvil / tablet) */}
                  {isActive && (
                    <div className="lg:hidden mt-2.5">
                      <ServiceDetail service={service} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Panel de detalle (escritorio) */}
          <div className="hidden lg:block">
            {activeIndex !== null && (
              <ServiceDetail service={services[activeIndex]} />
            )}
          </div>
        </div>

        <p className="text-center text-sm sm:text-base text-muted-foreground mt-10 sm:mt-12">
          ¿Tiene un asunto específico?{" "}
          <a href="#contacto" className="text-accent hover:underline">
            Contáctenos
          </a>{" "}
          para conversar sobre su caso.
        </p>
      </div>
    </section>
  );
}
