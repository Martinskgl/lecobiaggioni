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

export function Photo({
  src,
  alt,
  className = "",
  sizes: _sizes = "100vw",
  priority: _priority,
  zoom,
  kenburns,
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

  return (
    <div
      className={`${fillParent ? "absolute inset-0" : "relative min-h-[12rem]"} overflow-hidden ${zoom ? "photo-zoom" : ""} ${kenburns ? "kenburns" : ""} ${className}`}
      role="img"
      aria-label={alt || ""}
    >
      <div
        className="placeholder-fill absolute inset-0"
        style={{
          background: `linear-gradient(145deg, ${from} 0%, ${to} 100%)`,
        }}
      />
      {quiet ? null : null}
    </div>
  );
}
