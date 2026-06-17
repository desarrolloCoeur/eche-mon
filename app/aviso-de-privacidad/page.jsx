import Link from "next/link";

export const metadata = {
  title: "Aviso de Privacidad — Echeagaray | Montes de Oca",
  description: "Aviso de privacidad del despacho Echeagaray | Montes de Oca, Guadalajara, Jalisco.",
};

export default function AvisoDePrivacidad() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.25em] uppercase text-accent mb-4">
          Legal
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4">
          Aviso de Privacidad
        </h1>
        <div className="w-12 h-0.5 bg-accent mb-10" />

        <div className="prose prose-sm sm:prose-base max-w-none space-y-8 text-muted-foreground">

          <section>
            <h2 className="text-lg sm:text-xl text-foreground font-light mb-3">
              1. Responsable del tratamiento
            </h2>
            <p className="leading-relaxed">
              El despacho{" "}
              <strong className="text-foreground font-medium">Echeagaray | Montes de Oca</strong>, con domicilio en
              Colimán 156, Colonia Ciudad del Sol, C.P. 45050, Guadalajara, Jalisco, México, es responsable del tratamiento de los datos
              personales que usted proporcione a través del formulario de contacto de este sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl text-foreground font-light mb-3">
              2. Datos personales recabados
            </h2>
            <p className="leading-relaxed mb-3">
              Únicamente se recaban los datos que usted ingresa voluntariamente en el formulario de contacto:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Nombre y apellidos</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Mensaje o consulta</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl text-foreground font-light mb-3">
              3. Finalidad del tratamiento
            </h2>
            <p className="leading-relaxed">
              Los datos recabados se utilizan exclusivamente para <strong className="text-foreground font-medium">atender
              y responder su solicitud de contacto o consulta</strong>. No se almacenan en ninguna base de datos propia
              de este sitio web ni se utilizan para fines de mercadotecnia, publicidad o cualquier otro propósito
              distinto al señalado.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl text-foreground font-light mb-3">
              4. Transferencia de datos
            </h2>
            <p className="leading-relaxed">
              Sus datos no son compartidos, vendidos ni cedidos a terceros. El mensaje enviado a través del formulario
              se transmite directamente al equipo del despacho mediante WhatsApp con el único fin de darle respuesta.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl text-foreground font-light mb-3">
              5. Derechos ARCO
            </h2>
            <p className="leading-relaxed">
              Usted tiene derecho a <strong className="text-foreground font-medium">Acceder, Rectificar, Cancelar u
              Oponerse</strong> al tratamiento de sus datos personales (derechos ARCO). Para ejercerlos, puede
              contactarnos directamente al teléfono{" "}
              <a href="tel:+523292981098" className="text-accent hover:underline">(+52) 329 298 10 98</a> o
              vía WhatsApp al <a href="https://wa.me/523336764573" className="text-accent hover:underline">(+52) 33 36 76 45 73</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl text-foreground font-light mb-3">
              6. Cambios al aviso de privacidad
            </h2>
            <p className="leading-relaxed">
              Cualquier modificación a este aviso será publicada en esta misma página. Se recomienda revisarlo
              periódicamente.
            </p>
          </section>

          <p className="text-xs text-muted-foreground/60 pt-4 border-t border-border">
            Última actualización: junio 2026
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
