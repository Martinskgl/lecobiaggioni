import type { MetadataRoute } from "next";
import { locales, venueSlugs } from "@/lib/site";

const paths = [
  "",
  "/onde-casar",
  "/hoteis-parceiros",
  "/quem-sou-eu",
  "/contato",
  ...venueSlugs.map((slug) => `/onde-casar/${slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `https://lecobiagioni.com/${locale}${path}`,
      lastModified: new Date(),
    })),
  );
}
