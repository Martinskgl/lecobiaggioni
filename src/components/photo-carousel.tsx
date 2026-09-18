"use client";

import { useRef, useState, type PointerEvent } from "react";
import { Photo } from "@/components/photo";

export function PhotoCarousel({ photos }: { photos: readonly string[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });
  const [grabbing, setGrabbing] = useState(false);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const node = scrollerRef.current;
    if (!node) return;
    drag.current = {
      active: true,
      startX: event.clientX,
      startScroll: node.scrollLeft,
    };
    setGrabbing(true);
    node.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const node = scrollerRef.current;
    if (!node || !drag.current.active) return;
    const delta = event.clientX - drag.current.startX;
    node.scrollLeft = drag.current.startScroll - delta;
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const node = scrollerRef.current;
    if (!node) return;
    drag.current.active = false;
    setGrabbing(false);
    if (node.hasPointerCapture(event.pointerId)) {
      node.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section className="bg-cream py-8 md:py-12">
      <div
        ref={scrollerRef}
        className={`carousel-scroller flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:gap-5 md:px-8 ${grabbing ? "cursor-grabbing" : "cursor-grab"}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        {photos.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="carousel-card w-[min(90vw,66rem)] shrink-0 snap-center select-none overflow-hidden"
          >
            <Photo src={src} alt="" className="aspect-[16/10] pointer-events-none md:aspect-[16/9]" sizes="920px" quiet />
          </div>
        ))}
      </div>
    </section>
  );
}
