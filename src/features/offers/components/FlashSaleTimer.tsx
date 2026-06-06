"use client";

import { useEffect, useState } from "react";

export default function FlashSaleTimer() {
  // Set a fixed 24 hour timer from load for demo purposes
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23; // Loop for demo
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (val: number) => val.toString().padStart(2, "0");

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-white shadow-sm text-lg md:text-xl font-bold text-rose-600 border border-rose-100" style={{ fontFamily: "var(--sl-font-sans)" }}>
          {format(timeLeft.hours)}
        </div>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Hours</span>
      </div>
      <span className="text-xl font-bold text-slate-300 pb-4">:</span>
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-white shadow-sm text-lg md:text-xl font-bold text-rose-600 border border-rose-100" style={{ fontFamily: "var(--sl-font-sans)" }}>
          {format(timeLeft.minutes)}
        </div>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Mins</span>
      </div>
      <span className="text-xl font-bold text-slate-300 pb-4">:</span>
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-white shadow-sm text-lg md:text-xl font-bold text-rose-600 border border-rose-100" style={{ fontFamily: "var(--sl-font-sans)" }}>
          {format(timeLeft.seconds)}
        </div>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Secs</span>
      </div>
    </div>
  );
}
