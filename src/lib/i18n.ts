import { es } from "../i18n/es";
import { en } from "../i18n/en";

export const dict = { es, en } as const;
export type Locale = keyof typeof dict;

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith("/en") ? "en" : "es";
}

export function t(locale: Locale) {
  return dict[locale];
}
