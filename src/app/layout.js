import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Somriures Dental | Clínica dental en Gavà",
  description:
    "La mejor Clínica dental en Gavà. Grandes profesionales, trato familiar y cercano. 1a visita gratuita y sin compromiso. Financiación.",
  keywords:
    "clinica dental, dentista, gava, barcelona, implantes, ortodoncia, invisalign, blanqueamiento, estetica dental, endodoncia, periodoncia, odontopediatria, odontologia, dentista gava, dentista barcelona, dentista gava mar, dentista castelldefels, dentista viladecans, dentista sitges, dentista sant boi, dentista sant climent, dentista begues, dentista vilafranca, dentista vilanova,",

  // Open Graph
  ogTitle: "Somriures Dental | Clínica dental en Gavà",
  ogDescription:
    "La mejor Clínica dental en Gavà. Grandes profesionales, trato familiar y cercano. 1a visita gratuita y sin compromiso. Financiación.",
  ogImage: "https://somriuresdental.com/og-image.jpg",
  ogUrl: "https://somriuresdental.com",

  // Google
  googleTitle: "Somriures Dental | Clínica dental en Gavà",
  googleDescription:
    "La mejor Clínica dental en Gavà. Grandes profesionales, trato familiar y cercano. 1a visita gratuita y sin compromiso. Financiación.",
  googleImage: "https://somriuresdental.com/og-image.jpg",
  googleUrl: "https://somriuresdental.com",

  // Facebook
  facebookTitle: "Somriures Dental | Clínica dental en Gavà",
  facebookDescription:
    "La mejor Clínica dental en Gavà. Grandes profesionales, trato familiar y cercano. 1a visita gratuita y sin compromiso. Financiación.",
  facebookImage: "https://somriuresdental.com/og-image.jpg",
  facebookUrl: "https://somriuresdental.com",

  // Instagram
  instagramTitle: "Somriures Dental | Clínica dental en Gavà",
  instagramDescription:
    "La mejor Clínica dental en Gavà. Grandes profesionales, trato familiar y cercano. 1a visita gratuita y sin compromiso. Financiación.",
  instagramImage: "https://somriuresdental.com/og-image.jpg",
  instagramUrl: "https://somriuresdental.com",

  // WhatsApp
  whatsappTitle: "Somriures Dental | Clínica dental en Gavà",
  whatsappDescription:
    "La mejor Clínica dental en Gavà. Grandes profesionales, trato familiar y cercano. 1a visita gratuita y sin compromiso. Financiación.",
  whatsappImage: "https://somriuresdental.com/og-image.jpg",
  whatsappUrl: "https://somriuresdental.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
