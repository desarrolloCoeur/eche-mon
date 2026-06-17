import { MapPin } from "lucide-react";

const offices = [
  {
    city: "Guadalajara",
    state: "Jalisco",
    address: "Colimán 156, Colonia Ciudad del Sol",
    locality: "Guadalajara, Jalisco",
    cp: "45050",
  },
  {
    city: "Punta de Mita",
    state: "Nayarit",
    address: "Héroes de Nacozari 128-B, Planta Alta, Flamingos",
    locality: "Bahía de Banderas, Nayarit",
    cp: "63737",
  },
  {
    city: "Tepic",
    state: "Nayarit",
    address: "Calle Miñón 54 Poniente, Centro",
    locality: "Tepic, Nayarit",
    cp: "63000",
  },
];

export default function Ubicaciones() {
  return (
    <section
      id="ubicaciones"
      className="py-20 sm:py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-accent mb-3 sm:mb-4">
            Ubicaciones
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-balance max-w-3xl mx-auto">
            Tres oficinas para acompañarle
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {offices.map((office) => (
            <div
              key={office.city}
              className="group p-6 sm:p-8 bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/40 transition-all duration-500"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-accent/20 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 mb-5 sm:mb-6">
                <MapPin size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl mb-1">
                {office.city}
              </h3>
              <p className="text-xs tracking-[0.2em] uppercase text-accent mb-4">
                {office.state}
              </p>
              <p className="text-sm sm:text-base text-primary-foreground/75 leading-relaxed">
                {office.address}
                <br />
                {office.locality}
                <br />
                C.P. {office.cp}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
