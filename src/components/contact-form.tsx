"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/dictionaries";
import type { ContactFormCopy } from "@/lib/home-copy";
import { brand } from "@/lib/site";

export function ContactForm({ dict, form }: { dict: Dictionary; form: ContactFormCopy; venueDefault?: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `${form.names}: ${data.get("names")}`,
      `${form.email}: ${data.get("email")}`,
      `${form.whatsapp}: ${data.get("whatsapp")}`,
      `${form.country}: ${data.get("country")}`,
      `${form.experience}: ${data.get("experience")}`,
      `${form.date}: ${data.get("date")}`,
      `${form.guests}: ${data.get("guests")}`,
      `${form.message}: ${data.get("message")}`,
    ];
    window.open(`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return <form onSubmit={onSubmit} className="grid gap-6">
    <Field name="names" label={form.names} required />
    <div className="grid gap-6 md:grid-cols-2"><Field name="email" type="email" label={form.email} required /><Field name="whatsapp" label={form.whatsapp} required /></div>
    <div className="grid gap-6 md:grid-cols-2"><Field name="country" label={form.country} required /><label className="field-line block"><span className="text-[0.72rem] tracking-[0.08em] text-wine/55 uppercase">{form.experience}</span><select name="experience" defaultValue={form.experienceOptions[0]}>{form.experienceOptions.map((option) => <option key={option}>{option}</option>)}</select></label></div>
    <div className="grid gap-6 md:grid-cols-2"><Field name="date" label={form.date} required /><Field name="guests" label={form.guests} /></div>
    <label className="field-line block"><span className="text-[0.72rem] tracking-[0.08em] text-wine/55 uppercase">{form.message}</span><textarea name="message" rows={4} /></label>
    <button type="submit" className="btn-wine mt-2 w-full md:w-auto">{form.submit}</button>
    <p className="text-xs leading-6 text-wine/55">{form.note}</p>{sent ? <p className="text-sm">{dict.form.success}</p> : null}
  </form>;
}

function Field({ name, label, type = "text", required }: { name: string; label?: string; type?: string; required?: boolean }) {
  return <label className="field-line block"><span className="text-[0.72rem] tracking-[0.08em] text-wine/55 uppercase">{label}</span><input name={name} type={type} required={required} /></label>;
}
