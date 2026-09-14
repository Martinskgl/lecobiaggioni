import Image from "next/image";

export function Photo({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority,
  zoom,
  kenburns,
  position = "center",
  fillParent,
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
}) {
  return (
    <div
      className={`${fillParent ? "absolute inset-0" : "relative"} overflow-hidden ${zoom ? "photo-zoom" : ""} ${kenburns ? "kenburns" : ""} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ objectPosition: position }}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
