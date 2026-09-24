import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import { FormatsDressCode } from "@/components/formats-dress-code";
import { GatheringSplit } from "@/components/gathering-split";
import { HeroIntro } from "@/components/hero-intro";
import { MethodTimeline } from "@/components/method-timeline";
import { Photo } from "@/components/photo";
import { SaveSince } from "@/components/save-since";
import type { Dictionary } from "@/lib/dictionaries";
import { chapterPhotos, photos } from "@/lib/photos";
import { brand, type Locale } from "@/lib/site";
import { ui } from "@/lib/ui";

const stats = [
  ["20+", "Anos de experiência"],
  ["3", "Idiomas"],
  ["1", "Equipe local"],
  ["2013", "Marco nacional"],
  ["1", "Caso de cada vez"],
] as const;

export function WeddedHome({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const copy = ui[locale];
  return (
    <div className="bg-white text-wine">
      <HeroIntro src={photos.hero} kicker={copy.heartLine} name={dict.hero.title} />
      <div className="site-shell mx-auto bg-cream">
        <section className="grid grid-cols-2 border-y border-wine/10 bg-cream md:grid-cols-5">
          {stats.map(([number, label]) => <div key={label} className="border-wine/10 px-4 py-7 text-center last:col-span-2 md:border-r md:last:col-span-1"><strong className="block font-display text-3xl">{number}</strong><span className="mt-1 block text-[0.68rem] tracking-[0.12em] text-wine/65 uppercase">{label}</span></div>)}
        </section>

        <SaveSince copy={copy} body={dict.editorial.body} />

        <section id="theday" className="scroll-mt-24 bg-cream px-6 py-20 md:px-10 md:py-28">
          <div className="page-frame mx-auto max-w-[720px] text-center">
            <p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{dict.editorial.title}</p>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-6xl">{dict.editorial.title}</h2>
            <p className="mt-7 text-base leading-8 text-wine/75">{dict.editorial.subtitle}</p>
            <p className="mt-4 text-base leading-8 text-wine/75">{dict.editorial.body}</p>
          </div>
        </section>

        <MethodTimeline kicker={copy.dayKicker} title={dict.method.title} lead="" steps={dict.method.steps} photos={chapterPhotos} />

        <section id="details" className="bg-cream px-6 py-20 md:px-10 md:py-28"><div className="page-frame mx-auto max-w-[1100px] text-center"><p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{dict.destination.title}</p><h2 className="mt-4 font-display text-4xl md:text-6xl">{dict.venuesHome.title}</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-wine/75">{dict.venuesHome.lead}</p><a href="#packages" className="btn-wine mt-8 inline-flex">{dict.venuesHome.cta}</a></div></section>

        <section id="packages"><FormatsDressCode kicker={copy.detailsKicker} title={dict.included.title} lead="" packATitle={copy.packATitle} packABody={copy.packABody} packBTitle={copy.packBTitle} packBBody={copy.packBBody} /></section>

        <GatheringSplit caption="Aqui, a história de vocês é recebida com respeito." kicker={copy.gatheringKicker} title={copy.gatheringTitle} body={copy.gatheringBody} meta={copy.gatheringMeta} photo={photos.dinner} />

        <section className="bg-cream px-6 py-24 md:px-10 md:py-32"><div className="page-frame mx-auto max-w-[720px] text-center"><p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{copy.giftsKicker}</p><h2 className="mt-4 font-display text-4xl md:text-6xl">{copy.giftsTitle}</h2><p className="mt-6 text-base leading-8 text-wine/75">{copy.giftsNote}</p></div></section>

        <section id="rsvp" className="scroll-mt-24 grid md:grid-cols-2"><Photo src={photos.vows} alt="" className="min-h-[70vh]" sizes="50vw" /><div className="flex items-center px-6 py-16 md:px-12"><div className="w-full max-w-md"><p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{copy.rsvpKicker}</p><h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{dict.finalCta.title}</h2><p className="mt-5 text-base leading-8 text-wine/75">{dict.finalCta.body}</p><div className="mt-6 flex flex-col gap-2 text-sm"><a href={`mailto:${brand.email}`} className="underline">{brand.email}</a><a href={`https://wa.me/${brand.whatsapp}`} className="underline">{brand.whatsappDisplay}</a></div><div className="mt-10"><ContactForm dict={dict} /></div></div></div></section>

        <section id="faq" className="scroll-mt-24 bg-cream px-6 py-24 md:px-10 md:py-32"><div className="page-frame mx-auto grid max-w-[1100px] gap-12 md:grid-cols-2"><div><p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{copy.faqKicker}</p><h2 className="mt-4 font-display text-4xl md:text-6xl">{dict.faq.title}</h2><p className="mt-6 text-base leading-8 text-wine/75">{dict.editorial.subtitle}</p></div><FaqList items={dict.faq.items} /></div></section>
      </div>
    </div>
  );
}
