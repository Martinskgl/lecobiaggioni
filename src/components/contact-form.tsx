"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/dictionaries";
import { brand, venueSlugs } from "@/lib/site";

export function ContactForm({
  dict,
  venueDefault,
}: {
  dict: Dictionary;
  venueDefault?: string;
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `Olá, gostaria de consultar disponibilidade da data.`,
      `${dict.form.name}: ${data.get("name")}`,
      `${dict.form.whatsapp}: ${data.get("whatsapp")}`,
      `${dict.form.email}: ${data.get("email")}`,
      `${dict.form.date}: ${data.get("date")}`,
      `${dict.form.venue}: ${data.get("venue")}`,
      `${dict.form.guests}: ${data.get("guests")}`,
      `${dict.form.city}: ${data.get("city")}`,
    ];
    const url = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <Field name="name" label={dict.form.name} required />
      <div className="grid gap-6 md:grid-cols-2">
        <Field name="whatsapp" label={dict.form.whatsapp} required />
        <Field name="email" type="email" label={dict.form.email} required />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field name="date" type="date" label={dict.form.date} required />
        <label className="field-line block">
          <span className="text-[0.72rem] tracking-[0.08em] text-wine/55 uppercase">{dict.form.venue}</span>
          <select name="venue" defaultValue={venueDefault ?? dict.form.venueOpen}>
            <option>{dict.form.venueOpen}</option>
            {venueSlugs.map((slug) => (
              <option key={slug} value={dict.venuesHome.cards[slug].title}>
                {dict.venuesHome.cards[slug].title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field name="guests" label={dict.form.guests} />
        <Field name="city" label={dict.form.city} />
      </div>
      <button type="submit" className="btn-wine mt-2 w-full md:w-auto">
        {dict.form.submit}
      </button>
      <p className="text-xs leading-6 text-wine/55">{dict.finalCta.micro}</p>
      {sent ? <p className="text-sm">{dict.form.success}</p> : null}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="field-line block">
      <span className="text-[0.72rem] tracking-[0.08em] text-wine/55 uppercase">{label}</span>
      <input name={name} type={type} required={required} />
    </label>
  );
}
