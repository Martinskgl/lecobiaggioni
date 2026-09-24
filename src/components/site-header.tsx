"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LocaleSwitcher } from "@/components/locale-switcher";
import type { Dictionary } from "@/lib/dictionaries";
import { brand, localizedPath, type Locale } from "@/lib/site";
import { homeCopy } from "@/lib/home-copy";
import { ui } from "@/lib/ui";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const home = /^\/(pt|en|es)\/?$/.test(pathname);
  const copy = ui[locale];
  const root = localizedPath(locale);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const light = home && !scrolled && !open;

  const nav = homeCopy[locale].nav;
  const links = [
    { href: `${root}#story`, label: nav.howItWorks },
    { href: `${root}#presentation`, label: nav.civil },
    { href: `${root}#destination`, label: nav.celebration },
    { href: `${root}#details`, label: nav.packages },
    { href: `${root}#about`, label: nav.about },
    { href: `${root}#faq`, label: nav.faq },
  ];

  const ctaClass = light ? "btn-cream !px-5 !py-2.5 text-sm" : "btn-wine !px-5 !py-2.5 text-sm";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        light ? "text-cream" : "bg-cream/90 text-wine shadow-[0_1px_0_rgba(84,39,46,0.08)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-5 md:px-10">
        <Link href={root} className="font-display text-[1.65rem] leading-none md:text-[1.85rem]">
          {brand.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.82rem] tracking-[0.02em] ${light ? "text-cream/88 hover:text-cream" : "text-wine/75 hover:text-wine"}`}
            >
              {link.label}
            </Link>
          ))}
          <LocaleSwitcher locale={locale} tone={light ? "light" : "dark"} />
          <Link href={`${root}#rsvp`} className={ctaClass}>
            {dict.nav.cta}
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? copy.close : copy.menu}
        >
          <span className="sr-only">{open ? copy.close : copy.menu}</span>
          <span className="flex flex-col gap-1.5">
            <span className={`block h-[1.5px] w-6 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-full border-t border-wine/10 bg-cream text-wine lg:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col gap-5 px-6 py-10 md:px-10">
            {links.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="font-display text-3xl md:text-4xl"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-wrap items-center gap-6">
              <LocaleSwitcher locale={locale} tone="dark" />
              <Link href={`${root}#rsvp`} className="btn-wine" onClick={() => setOpen(false)}>
                {dict.nav.cta}
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
