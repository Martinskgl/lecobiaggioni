"use client";

import { useEffect, useState } from "react";
import type { UiCopy } from "@/lib/ui";

const START = Date.UTC(2004, 0, 1, 12);

function parts(now: number) {
  const delta = Math.max(0, now - START);
  const totalSeconds = Math.floor(delta / 1000);
  const years = Math.floor(totalSeconds / (60 * 60 * 24 * 365.25));
  const remAfterYears = totalSeconds - Math.floor(years * 60 * 60 * 24 * 365.25);
  const days = Math.floor(remAfterYears / (60 * 60 * 24));
  const remAfterDays = remAfterYears - days * 60 * 60 * 24;
  const hours = Math.floor(remAfterDays / (60 * 60));
  const remAfterHours = remAfterDays - hours * 60 * 60;
  const mins = Math.floor(remAfterHours / 60);
  const secs = remAfterHours - mins * 60;
  return { years, days, hours, mins, secs };
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function SinceClock({
  copy,
  compact,
}: {
  copy: UiCopy;
  compact?: boolean;
}) {
  const [time, setTime] = useState({ years: 0, days: 0, hours: 0, mins: 0, secs: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const tick = () => setTime(parts(Date.now()));
    tick();
    setReady(true);
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const cells = [
    { id: "years", n: ready ? pad(time.years) : "00", label: copy.years },
    { id: "days", n: ready ? pad(time.days) : "00", label: copy.days },
    { id: "hours", n: ready ? pad(time.hours) : "00", label: copy.hours },
    { id: "mins", n: ready ? pad(time.mins) : "00", label: copy.minutes },
    { id: "secs", n: ready ? pad(time.secs) : "00", label: copy.seconds },
  ];

  return (
    <div className="since-clock">
      <div
        className={`clock-grid grid grid-cols-5 items-start text-center ${compact ? "gap-1 md:gap-2" : "gap-1 md:gap-3"}`}
      >
        {cells.map((cell, index) => (
          <div key={cell.id} className="relative">
            {index > 0 ? (
              <span
                className={`pointer-events-none absolute -left-1 top-[0.15em] text-wine/35 md:-left-2 ${compact ? "text-2xl md:text-3xl" : "text-3xl md:text-5xl lg:text-6xl"}`}
                aria-hidden
              >
                |
              </span>
            ) : null}
            <p
              className={`font-display leading-none text-wine ${compact ? "text-3xl md:text-4xl" : "text-4xl md:text-6xl lg:text-7xl"}`}
            >
              {cell.n}
            </p>
            <p className="mt-2 text-[0.62rem] tracking-[0.16em] text-wine/55 uppercase md:text-[0.68rem]">
              {cell.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
