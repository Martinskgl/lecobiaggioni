"use client";

import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/site";
import { ui } from "@/lib/ui";

export function BottomNav({ locale }: { locale: Locale }) {
  const copy = ui[locale];
  const home = localizedPath(locale);

  const items = [
    { href: `${home}#location`, label: copy.anchors.location },
    { href: `${home}#hotels`, label: copy.anchors.hotels },
    { href: `${home}#theday`, label: copy.anchors.day },
    { href: `${home}#faq`, label: copy.anchors.faq },
  ];

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-3 md:bottom-6">
      <nav className="bottom-nav pointer-events-auto flex items-center gap-1 rounded-full border border-wine/10 px-2 py-2 shadow-[0_12px_40px_rgba(84,39,46,0.12)] md:gap-2 md:px-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hidden rounded-full px-3 py-2 text-[0.72rem] tracking-[0.04em] text-wine/80 hover:text-wine sm:block md:px-4"
          >
            {item.label}
          </Link>
        ))}
        <Link href={`${home}#rsvp`} className="btn-wine !px-5 !py-2.5 text-sm">
          {copy.anchors.rsvp}
        </Link>
      </nav>
    </div>
  );
}
