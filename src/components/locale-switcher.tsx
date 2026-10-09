"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale, locales, pageKeyFromSlug, pages, type Locale } from "@/lib/site";

/** Mesma página em outro idioma: troca o prefixo e traduz o slug das páginas internas. */
function translatePath(pathname: string, from: Locale, to: Locale) {
  const [first, slug, ...rest] = pathname.split("/").filter(Boolean);
  const current = first && isLocale(first) ? first : from;
  if (!slug) return `/${to}`;
  const key = pageKeyFromSlug(current, slug);
  const target = key ? pages[key][to] : slug;
  return `/${[to, target, ...rest].join("/")}`;
}

export function LocaleSwitcher({
  locale,
  tone = "light",
}: {
  locale: Locale;
  tone?: "light" | "dark";
}) {
  const pathname = usePathname();
  const idle = tone === "light" ? "text-cream/55" : "text-wine/45";
  const active = tone === "light" ? "text-cream" : "text-wine";

  return (
    <div className="flex items-center gap-2 text-[0.68rem] tracking-[0.18em] uppercase">
      {locales.map((item, index) => (
        <span key={item} className="flex items-center gap-2">
          {index > 0 ? <span className={idle}>/</span> : null}
          <Link
            href={translatePath(pathname, locale, item)}
            hrefLang={item}
            className={item === locale ? active : idle}
          >
            {item}
          </Link>
        </span>
      ))}
    </div>
  );
}
