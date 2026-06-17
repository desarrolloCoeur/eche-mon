import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title:
    "Echeagaray | Montes de Oca — Asesoría Legal Patrimonial, Inmobiliaria y Comercial",
  description:
    "Despacho jurídico orientado a resultados que brinda asesoría y representación legal a clientes nacionales y extranjeros en México. Corporativo, banca y finanzas, inmobiliario, laboral y litigio. Oficinas en Guadalajara, Tepic y Punta de Mita.",
};

export const viewport = {
  themeColor: "#212C46",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
