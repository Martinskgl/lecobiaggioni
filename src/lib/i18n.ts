import { dictionaries } from "@/lib/dictionaries";
import { loremizeStrings } from "@/lib/lorem";
import { defaultLocale, isLocale, placeholderContent, type Locale } from "@/lib/site";

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
  const dict = dictionaries[key];
  return placeholderContent ? loremizeStrings(dict) : dict;
}
