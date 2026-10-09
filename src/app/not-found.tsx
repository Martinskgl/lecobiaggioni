"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const COPY = {
  pt: { title: "Página não encontrada", back: "Voltar à home" },
  en: { title: "Page not found", back: "Back to home" },
  es: { title: "Página no encontrada", back: "Volver al inicio" },
} as const;

export default function NotFound() {
  const pathname = usePathname() ?? "";
  const first = pathname.split("/").filter(Boolean)[0];
  const locale = first === "en" || first === "es" ? first : "pt";
  const copy = COPY[locale];

  return (
    <div lang={locale} className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center text-wine">
      <p className="font-script text-2xl text-rose">Leco Biaggìoni</p>
      <h1 className="mt-4 font-display text-5xl">{copy.title}</h1>
      <Link href={`/${locale}`} className="btn-wine mt-8">
        {copy.back}
      </Link>
    </div>
  );
}
