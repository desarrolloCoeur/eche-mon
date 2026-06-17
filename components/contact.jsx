"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hola, mi nombre es ${formData.nombre} ${formData.apellidos}. ${formData.mensaje}`;
    window.open(
      `https://wa.me/523336764573?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Teléfono",
      value: "(+52) 329 298 10 98",
      link: "tel:+523292981098",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "(+52) 33 36 76 45 73",
      link: "https://wa.me/523336764573",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "(+52) 322 139 95 15",
      link: "https://wa.me/523221399515",
    },
    {
      icon: Mail,
      label: "Correo electrónico",
      value: "contacto@emabogados.com.mx",
      link: "mailto:contacto@emabogados.com.mx",
    },
    {
      icon: MapPin,
      label: "Guadalajara",
      value: "Colimán 156, Colonia Ciudad del Sol, Guadalajara, Jalisco. C.P. 45050",
    },
  ];

  return (
    <section
      id="contacto"
      className="py-20 sm:py-24 lg:py-32 bg-card overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-accent mb-3 sm:mb-4">
            Contacto
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground text-balance max-w-2xl mx-auto">
            Hablemos de su asunto
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          <div>
            <div className="space-y-5 sm:space-y-6 mb-8 sm:mb-10">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-primary text-primary-foreground flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                    <info.icon size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-foreground hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-foreground whitespace-pre-line">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="aspect-video sm:aspect-[4/3] w-full bg-muted overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Colim%C3%A1n%20156%2C%20Ciudad%20del%20Sol%2C%2045050%20Guadalajara%2C%20Jalisco&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oficina Guadalajara — Echeagaray | Montes de Oca"
              />
            </div>
          </div>

          <div className="bg-background p-5 sm:p-8 lg:p-10 border border-border">
            <h3 className="text-xl sm:text-2xl text-foreground mb-2">
              Envíenos un mensaje
            </h3>
            <p className="text-muted-foreground text-sm mb-6 sm:mb-8">
              Complete el formulario y nos pondremos en contacto.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs sm:text-sm text-foreground mb-2 font-medium">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm"
                    placeholder="Juan"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm text-foreground mb-2 font-medium">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm"
                    placeholder="Pérez"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm text-foreground mb-2 font-medium">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm text-foreground mb-2 font-medium">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm"
                  placeholder="322 123 4567"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm text-foreground mb-2 font-medium">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none text-sm"
                  placeholder="¿En qué podemos ayudarle?"
                />
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Enviar por WhatsApp
                <MessageCircle
                  size={16}
                  className="group-hover:scale-110 transition-transform sm:w-[18px] sm:h-[18px]"
                />
              </button>
            </form>

            <p className="text-[10px] sm:text-xs text-muted-foreground mt-5 sm:mt-6 text-center">
              Al enviar, será redirigido a WhatsApp para continuar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
