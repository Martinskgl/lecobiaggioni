"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Photo } from "@/components/photo";

const GAP = 20;
const SIDE_PAD = 20;

export function PhotoCarousel({ photos }: { photos: readonly string[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const slideWidthRef = useRef(0);
  const dragRef = useRef({
    active: false,
    startX: 0,
    startOffset: 0,
    lastX: 0,
    lastT: 0,
  });
  const rafRef = useRef(0);
  const [grabbing, setGrabbing] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);

  const count = photos.length;
  const loop = [...photos, ...photos, ...photos];

  const setWidth = () => (slideWidthRef.current + GAP) * count;

  const apply = (offset: number, withTransition = false) => {
    const track = trackRef.current;
    if (!track) return;
    offsetRef.current = offset;
    track.style.transition = withTransition ? "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)" : "none";
    track.style.transform = `translate3d(${offset}px, 0, 0)`;
  };

  const normalize = (offset: number) => {
    const width = setWidth();
    if (width <= 0) return offset;
    while (offset > -width) offset -= width;
    while (offset < -width * 2) offset += width;
    return offset;
  };

  const measure = () => {
    const viewport = viewportRef.current;
    if (!viewport || count === 0) return;
    const next = Math.min(viewport.clientWidth - SIDE_PAD * 2, 1100);
    slideWidthRef.current = next;
    setSlideWidth(next);
    const pad = (viewport.clientWidth - next) / 2;
    apply(-setWidth() + pad, false);
  };

  useEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    if (slideWidth <= 0) return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    const pad = (viewport.clientWidth - slideWidth) / 2;
    apply(-setWidth() + pad, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideWidth]);

  const stopInertia = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
  };

  const settleNearest = () => {
    const viewport = viewportRef.current;
    const slide = slideWidthRef.current;
    if (!viewport || slide <= 0) return;
    const pad = (viewport.clientWidth - slide) / 2;
    const stride = slide + GAP;
    const nearest = Math.round((-offsetRef.current - pad) / stride);
    apply(normalize(-nearest * stride + pad), true);
  };

  const runInertia = () => {
    stopInertia();
    const step = () => {
      velocityRef.current *= 0.94;
      if (Math.abs(velocityRef.current) < 0.2) {
        velocityRef.current = 0;
        settleNearest();
        return;
      }
      apply(normalize(offsetRef.current + velocityRef.current));
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const node = viewportRef.current;
    if (!node) return;
    stopInertia();
    apply(offsetRef.current, false);
    dragRef.current = {
      active: true,
      startX: event.clientX,
      startOffset: offsetRef.current,
      lastX: event.clientX,
      lastT: performance.now(),
    };
    velocityRef.current = 0;
    setGrabbing(true);
    node.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const now = performance.now();
    const dx = event.clientX - dragRef.current.startX;
    apply(normalize(dragRef.current.startOffset + dx), false);

    const dt = now - dragRef.current.lastT;
    if (dt > 0) {
      velocityRef.current = ((event.clientX - dragRef.current.lastX) / dt) * 16;
    }
    dragRef.current.lastX = event.clientX;
    dragRef.current.lastT = now;
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const node = viewportRef.current;
    if (!node || !dragRef.current.active) return;
    dragRef.current.active = false;
    setGrabbing(false);
    if (node.hasPointerCapture(event.pointerId)) {
      node.releasePointerCapture(event.pointerId);
    }
    if (Math.abs(velocityRef.current) > 0.45) {
      runInertia();
    } else {
      settleNearest();
    }
  };

  return (
    <section className="bg-cream py-8 md:py-12">
      <div
        ref={viewportRef}
        className={`carousel-scroller relative overflow-hidden select-none ${grabbing ? "cursor-grabbing" : "cursor-grab"}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        style={{ touchAction: "pan-y" }}
      >
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ gap: GAP, opacity: slideWidth ? 1 : 0 }}
        >
          {loop.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="carousel-card shrink-0 overflow-hidden"
              style={{ width: slideWidth || "min(100% - 2.5rem, 68rem)" }}
            >
              <Photo src={src} alt="" className="aspect-[16/10] pointer-events-none md:aspect-[16/9]" sizes="1100px" quiet />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
