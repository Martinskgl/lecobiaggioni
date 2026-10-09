import Image from "next/image";
import { photoPositions } from "@/lib/photos";

const TONES = [
  ["#6b3844", "#3d1c22"],
  ["#8a5a62", "#54272e"],
  ["#c4a8ad", "#6b3844"],
  ["#db465d", "#54272e"],
  ["#4a3034", "#2a1418"],
  ["#a67c73", "#54272e"],
];

function tone(src: string) {
  let hash = 0;
  for (let index = 0; index < src.length; index += 1) {
    hash = (hash * 31 + src.charCodeAt(index)) >>> 0;
  }
  return TONES[hash % TONES.length];
}

/** Fotos locais (public/) são reais; as demais continuam como placeholder. */
const isReal = (src: string) => src.startsWith("/");

export function Photo({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority,
  zoom,
  kenburns,
  position,
  fillParent,
  quiet,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  zoom?: boolean;
  kenburns?: boolean;
  position?: string;
  fillParent?: boolean;
  quiet?: boolean;
}) {
  const [from, to] = tone(src);
  const wrapper = `${fillParent ? "absolute inset-0" : "relative min-h-[12rem]"} overflow-hidden ${zoom ? "photo-zoom" : ""} ${kenburns ? "kenburns" : ""} ${className}`;

  if (isReal(src)) {
    return (
      <div className={wrapper}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={priority}
          loading={priority ? undefined : "lazy"}
          className="object-cover"
          style={{ objectPosition: position ?? photoPositions[src] ?? "50% 50%" }}
        />
      </div>
    );
  }

  return (
    <div className={wrapper} role="img" aria-label={alt || "Placeholder"}>
      <div
        className="placeholder-fill absolute inset-0"
        style={{
          background: `linear-gradient(145deg, ${from} 0%, ${to} 100%)`,
        }}
      />
      {quiet ? null : (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[0.62rem] font-medium tracking-[0.22em] text-cream/70 uppercase">
          Placeholder
        </span>
      )}
    </div>
  );
}
