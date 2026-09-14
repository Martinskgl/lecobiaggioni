"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/site";

export function LocaleSwitcher({
  locale,
  tone = "light",
}: {
  locale: Locale;
  tone?: "light" | "dark";
}) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(pt|en|es)/, "") || "/";
  const idle = tone === "light" ? "text-paper/55" : "text-ink/45";
  const active = tone === "light" ? "text-paper" : "text-wine";

  return (
    <div className="flex items-center gap-2 text-[0.68rem] tracking-[0.18em] uppercase">
      {locales.map((item, index) => (
        <span key={item} className="flex items-center gap-2">
          {index > 0 ? <span className={idle}>/</span> : null}
          <Link
            href={`/${item}${rest === "/" ? "" : rest}`}
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
