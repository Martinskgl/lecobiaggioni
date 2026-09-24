import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import { FormatsDressCode } from "@/components/formats-dress-code";
import { GatheringSplit } from "@/components/gathering-split";
import { HeroIntro } from "@/components/hero-intro";
import { MethodTimeline } from "@/components/method-timeline";
import { Photo } from "@/components/photo";
import { PolaroidStack } from "@/components/polaroid-stack";
import { SaveSince } from "@/components/save-since";
import type { Dictionary } from "@/lib/dictionaries";
import { chapterPhotos, photos, venuePhotos } from "@/lib/photos";
import { brand, type Locale } from "@/lib/site";
import { ui } from "@/lib/ui";

export function WeddedHome({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const copy = ui[locale];
  const cards = [dict.venuesHome.cards.xian, dict.venuesHome.cards["cristo-redentor"], dict.venuesHome.cards.zefira];
  const cardImages = [venuePhotos.xian, venuePhotos["cristo-redentor"], venuePhotos.zefira];

  return (
    <div className="bg-white text-wine">
      <HeroIntro src={photos.hero} kicker={dict.hero.line} name={dict.hero.title} lead={dict.hero.lead} cta={dict.hero.cta} />
      <div className="site-shell mx-auto bg-cream">
        <section className="grid grid-cols-2 border-b border-wine/10 bg-cream md:grid-cols-5">
          {copy.stats.map((stat) => <div key={`${stat.value}-${stat.label}`} className="border-r border-wine/10 px-4 py-7 text-center last:border-r-0"><strong className="font-display text-3xl md:text-4xl">{stat.value}</strong><span className="mt-2 block text-[0.65rem] tracking-[0.12em] text-wine/60 uppercase">{stat.label}</span></div>)}
        </section>

        <section id="presentation" className="scroll-mt-24">
          <SaveSince copy={copy} body={dict.editorial.body} />
        </section>

        <section id="story" className="scroll-mt-24">
          <PolaroidStack kicker={copy.storyKicker} title={copy.storyTitle} how="" lead="" body="" items={copy.chapters.map((chapter, index) => ({ ...chapter, src: chapterPhotos[index] }))} />
        </section>

        <section id="destination" className="scroll-mt-24 bg-cream px-6 py-20 md:px-10 md:py-28">
          <div className="page-frame mx-auto max-w-[720px] text-center"><p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">Rio de Janeiro</p><h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-6xl">{dict.destination.title}</h2><p className="mx-auto mt-6 max-w-xl text-base leading-8 text-wine/75">{dict.destination.body}</p><a href="#rsvp" className="mt-8 inline-flex rounded-full bg-wine px-7 py-3 text-sm tracking-wide text-cream">{dict.destination.cta}</a></div>
        </section>

        <GatheringSplit caption={copy.lookingForward} kicker={copy.gatheringKicker} title={copy.gatheringTitle} body={copy.gatheringBody} meta={copy.gatheringMeta} photo={photos.dinner} />

        <section id="formas" className="scroll-mt-24 bg-white px-6 py-24 md:px-10 md:py-32"><div className="page-frame mx-auto max-w-[1100px]"><div className="mx-auto max-w-2xl text-center"><p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{copy.formatsKicker}</p><h2 className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl">{copy.formatsTitle}</h2></div><div className="mt-14 grid gap-8 md:grid-cols-3">{cards.map((card, index) => <article key={card.title} className="border border-wine/10 bg-cream p-4"><Photo src={cardImages[index]} alt="" className="aspect-[4/3]" sizes="(min-width: 768px) 33vw, 100vw" /><h3 className="mt-6 font-display text-3xl">{card.title}</h3><p className="mt-3 text-sm leading-7 text-wine/75">{card.text}</p><a href="#rsvp" className="mt-5 inline-block text-sm underline underline-offset-4">{card.action}</a></article>)}</div></div></section>

        <section id="about" className="scroll-mt-24"><GatheringSplit caption={copy.aboutCaption} kicker={copy.aboutKicker} title={copy.aboutTitle} body={copy.aboutBody} meta={copy.aboutMeta} photo={photos.dinner} /></section>
        <MethodTimeline kicker={copy.dayKicker} title={dict.method.title} lead="" steps={dict.method.steps} photos={[photos.vows, photos.table, photos.flowers]} />
        <section className="scroll-mt-24"><GatheringSplit caption={copy.giftsKicker} kicker={copy.giftsKicker} title={copy.giftsTitle} body={copy.giftsBody} meta={copy.giftsMeta.map((value) => ({ label: value, value: "" }))} photo={photos.vows} /></section>

        <section id="details" className="scroll-mt-24"><FormatsDressCode kicker={copy.detailsKicker} title={dict.included.title} lead="" packATitle={copy.packATitle} packABody={copy.packABody} packBTitle={copy.packBTitle} packBBody={copy.packBBody} /></section>
        <section id="rsvp" className="scroll-mt-24 grid md:grid-cols-2"><Photo src={photos.vows} alt="" className="min-h-[70vh]" sizes="50vw" /><div className="flex items-center px-6 py-16 md:px-12"><div className="w-full max-w-md"><p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{copy.rsvpKicker}</p><h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{dict.finalCta.title}</h2><div className="mt-5 space-y-4 text-base leading-8 text-wine/75">{dict.finalCta.body.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="mt-6 flex flex-col gap-2 text-sm"><a href={`mailto:${brand.email}`} className="underline">{brand.email}</a><a href={`https://wa.me/${brand.whatsapp}`} className="underline">{brand.whatsappDisplay}</a></div><div className="mt-10"><ContactForm dict={dict} /></div></div></div></section>
        <section id="faq" className="scroll-mt-24 bg-cream px-6 py-24 md:px-10 md:py-32"><div className="page-frame mx-auto grid max-w-[1100px] gap-12 md:grid-cols-2 md:gap-16 lg:gap-20"><div className="md:sticky md:top-28 md:self-start"><p className="text-[0.72rem] font-medium tracking-[0.18em] text-wine uppercase">{copy.faqKicker}</p><h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl lg:text-6xl">{dict.faq.title}</h2><p className="mt-6 max-w-md text-base leading-8 text-wine/75">{dict.faq.lead}</p></div><FaqList items={dict.faq.items} /></div></section>
      </div>
    </div>
  );
}
warning: this is a partial implementation and may have type errors until the dictionary fields are updated.
