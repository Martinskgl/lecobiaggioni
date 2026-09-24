"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/dictionaries";
import { brand } from "@/lib/site";

export function ContactForm({ dict }: { dict: Dictionary; venueDefault?: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `Olá, gostaria de solicitar uma análise inicial.`,
      `${dict.form.name}: ${data.get("name")}`,
      `${dict.form.whatsapp}: ${data.get("whatsapp")}`,
      `${dict.form.email}: ${data.get("email")}`,
      `${dict.form.country}: ${data.get("country")}`,
      `${dict.form.nationality}: ${data.get("nationality")}`,
      `${dict.form.maritalStatus}: ${data.get("maritalStatus")}`,
      `${dict.form.date}: ${data.get("date")}`,
      `${dict.form.experience}: ${data.get("experience")}`,
      `${dict.form.message}: ${data.get("message")}`,
    ];
    window.open(`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return <form onSubmit={onSubmit} className="grid gap-6">
    <Field name="name" label={dict.form.name} required />
    <div className="grid gap-6 md:grid-cols-2"><Field name="whatsapp" label={dict.form.whatsapp} required /><Field name="email" type="email" label={dict.form.email} required /></div>
    <div className="grid gap-6 md:grid-cols-2"><Field name="country" label={dict.form.country} required /><Field name="nationality" label={dict.form.nationality} required /></div>
    <div className="grid gap-6 md:grid-cols-2"><Field name="maritalStatus" label={dict.form.maritalStatus} required /><Field name="date" label={dict.form.date} required /></div>
    <label className="field-line block"><span className="text-[0.72rem] tracking-[0.08em] text-wine/55 uppercase">{dict.form.experience}</span><select name="experience" defaultValue={(dict.form.experienceOptions ?? [dict.form.venueOpen ?? ""])[0]}>{(dict.form.experienceOptions ?? [dict.form.venueOpen ?? ""]).map((option) => <option key={option}>{option}</option>)}</select></label>
    <label className="field-line block"><span className="text-[0.72rem] tracking-[0.08em] text-wine/55 uppercase">{dict.form.message}</span><textarea name="message" rows={4} /></label>
    <button type="submit" className="btn-wine mt-2 w-full md:w-auto">{dict.form.submit}</button>
    <p className="text-xs leading-6 text-wine/55">{dict.finalCta.micro}</p>{sent ? <p className="text-sm">{dict.form.success}</p> : null}
  </form>;
}

function Field({ name, label, type = "text", required }: { name: string; label?: string; type?: string; required?: boolean }) {
  return <label className="field-line block"><span className="text-[0.72rem] tracking-[0.08em] text-wine/55 uppercase">{label}</span><input name={name} type={type} required={required} /></label>;
}
