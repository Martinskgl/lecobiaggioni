import type { Metadata } from "next";
import { Delicious_Handrawn, Instrument_Serif, Montserrat } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
});

const hand = Delicious_Handrawn({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hand",
});

export const metadata: Metadata = {
  title: "Leco Biaggìoni — Celebração com direção",
  description:
    "Planejamento de casamentos no Rio de Janeiro desde 2004. Assessoria, cerimonial e decoração.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      className={`${instrument.variable} ${montserrat.variable} ${hand.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-wine">{children}</body>
    </html>
  );
}
