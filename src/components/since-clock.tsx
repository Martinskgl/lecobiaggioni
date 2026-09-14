"use client";

import { useEffect, useState } from "react";
import type { UiCopy } from "@/lib/ui";

const START = Date.UTC(2004, 0, 1, 12);

function parts(now: number) {
  const delta = Math.max(0, now - START);
  const minutes = Math.floor(delta / 60000);
  const years = Math.floor(minutes / (60 * 24 * 365.25));
  const remAfterYears = minutes - Math.floor(years * 60 * 24 * 365.25);
  const days = Math.floor(remAfterYears / (60 * 24));
  const hours = Math.floor((remAfterYears - days * 60 * 24) / 60);
  const mins = remAfterYears - days * 60 * 24 - hours * 60;
  return { years, days, hours, mins };
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function SinceClock({ copy }: { copy: UiCopy }) {
  const [time, setTime] = useState({ years: 0, days: 0, hours: 0, mins: 0 });
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
  ];

  return (
    <div>
      <p className="font-script text-center text-2xl text-rose md:text-left">{copy.countdownLabel}</p>
      <div className="mt-6 grid grid-cols-4 gap-3 text-center md:gap-8">
        {cells.map((cell) => (
          <div key={cell.id}>
            <p className="font-display text-4xl leading-none text-wine md:text-6xl">{cell.n}</p>
            <p className="mt-2 text-[0.68rem] tracking-[0.16em] text-wine/55 uppercase">{cell.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
