import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Photo } from "@/components/photo";
import { getDictionary, localeFromParam } from "@/lib/i18n";
import { photos } from "@/lib/photos";
import { brand } from "@/lib/site";
import { ui } from "@/lib/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const dict = await getDictionary((await params).locale);
  return { title: `${dict.nav.contact} — Leco Biaggìoni`, description: dict.contactPage.meta };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const copy = ui[localeFromParam(locale)];

  return (
    <article className="bg-cream text-wine">
      <section className="grid min-h-[100svh] md:grid-cols-2">
        <Photo src={photos.vows} alt="" className="min-h-[50vh] md:min-h-screen" sizes="50vw" priority />
        <div className="flex items-center px-6 py-28 md:px-12">
          <div className="w-full max-w-md">
            <p className="font-script text-2xl text-rose">{copy.rsvpKicker}</p>
            <h1 className="mt-3 font-display text-5xl leading-tight">{dict.contactPage.title}</h1>
            <p className="mt-5 text-base leading-8 text-wine/75">{dict.contactPage.lead}</p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a href={`https://wa.me/${brand.whatsapp}`} className="underline">
                {dict.contactPage.whatsapp}
              </a>
              <a href={`mailto:${brand.email}`} className="underline">
                {brand.email}
              </a>
            </div>
            <div className="mt-12">
              <ContactForm dict={dict} />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
