"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, X, Hotel } from "lucide-react";
import { site } from "@/lib/site";

type BookingLinksProps = {
  compact?: boolean;
  label?: string;
  className?: string;
};

export function BookingLinks({
  compact = false,
  label = "Book on OTA",
  className = "",
}: BookingLinksProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#183b2a] px-6 py-3 text-xs font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#315541] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315541] ${compact ? "px-4 py-2.5" : ""} ${className}`}
      >
        {label}
        <ArrowUpRight size={14} />
      </button>

      {open && mounted && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101a14]/65 p-4 backdrop-blur-sm animate-overlay-in"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-dialog-title"
            className="relative max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-[28px] border border-white/70 bg-[#faf8f2] p-6 text-[#1d2921] shadow-2xl sm:p-8 animate-modal-in"
          >
            <button
              type="button"
              aria-label="Close booking options"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 rounded-full p-2 text-[#59645a] transition hover:bg-[#ece8df]"
            >
              <X size={18} />
            </button>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#eae7dc] text-[#183b2a]">
              <Hotel size={22} strokeWidth={1.5} />
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#78816f]">
              Plan your stay
            </p>
            <h2 id="booking-dialog-title" className="mt-2 font-display text-3xl">
              Book Wana Jiwa
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-6 text-[#72786f]">
              Choose your preferred booking platform. You’ll continue on their website.
            </p>
            <div className="mt-7 grid gap-3">
              {site.bookingLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-2xl border border-[#e2ded4] bg-white px-5 py-4 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-[#9eaa98] hover:shadow-md"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-[#6d796b] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
            <p className="mt-5 text-center text-[11px] text-[#92958c]">
              Secure reservations are handled by the booking platforms.
            </p>
          </section>
        </div>,
        document.body,
      )}
    </>
  );
}
