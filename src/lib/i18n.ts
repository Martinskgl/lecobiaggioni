import { dictionaries } from "@/lib/dictionaries";
import { defaultLocale, isLocale, type Locale } from "@/lib/site";

export {
  defaultLocale,
  isLocale,
  localeFromParam,
  locales,
  localizedPath,
  type Locale,
} from "@/lib/site";

export async function getDictionary(locale: string) {
  const key: Locale = isLocale(locale) ? locale : defaultLocale;
  return dictionaries[key];
}
