import { ipsum } from "@/lib/ipsum";
import type { Locale } from "@/lib/site";

export type UiCopy = {
  menu: string;
  close: string;
  years: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  storyLead: string;
  rsvpKicker: string;
  hotelExtra: { title: string; body: string }[];
};

export const ui: Record<Locale, UiCopy> = {
  pt: {
    menu: "Menu",
    close: "Fechar",
    years: "Anos",
    days: "Dias",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    storyLead: "Análise · Documentos · Traduções · Cartório · O sim · Rio",
    rsvpKicker: "Contato",
    hotelExtra: [
      {
        title: "Zona Sul",
        body: ipsum,
      },
      {
        title: "Santa Teresa & mais",
        body: ipsum,
      },
    ],
  },
  en: {
    menu: "Menu",
    close: "Close",
    years: "Years",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    storyLead: "Meeting the right direction at exactly the right time.",
    rsvpKicker: "RSVP",
    hotelExtra: [
      {
        title: "South Zone",
        body: ipsum,
      },
      {
        title: "Santa Teresa & more",
        body: ipsum,
      },
    ],
  },
  es: {
    menu: "Menú",
    close: "Cerrar",
    years: "Años",
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    storyLead: "Encontrar la dirección correcta en el momento exacto.",
    rsvpKicker: "Contacto",
    hotelExtra: [
      {
        title: "Zona Sur",
        body: ipsum,
      },
      {
        title: "Santa Teresa y más",
        body: ipsum,
      },
    ],
  },
};
