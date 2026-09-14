import { brand } from "@/lib/site";

export function WhatsappButton({ label }: { label: string }) {
  return (
    <a
      href={`https://wa.me/${brand.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed right-5 bottom-24 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-wine text-cream shadow-[0_12px_40px_rgba(84,39,46,0.28)] transition hover:scale-105 md:bottom-28"
      aria-label={label}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l5.9-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-3.5.7.7-3.4-.2-.3A9 9 0 1 1 12 20.5Zm5-6.7c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.1-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.5-.8-2s-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1 2.6 11.4 11.4 0 0 0 4.4 4 14 14 0 0 0 1.4.5 3.3 3.3 0 0 0 1.5.1 2.5 2.5 0 0 0 1.7-1.1 2 2 0 0 0 .1-1.1c-.1-.1-.3-.2-.6-.3Z" />
      </svg>
    </a>
  );
}
