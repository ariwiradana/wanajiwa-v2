"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BookingLinks } from "@/components/booking-links";

const links = [{ label: "Home", href: "#home" }, { label: "The Villa", href: "#villa" }, { label: "Amenities", href: "#amenities" }, { label: "Gallery", href: "#gallery" }, { label: "Location", href: "#location" }];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="absolute z-30 w-full border-b border-white/30 text-white">
    <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 md:px-10 xl:px-16">
      <Link href="#home" className="leading-none text-white"><span className="font-display text-[25px] tracking-[.18em]">WANA JIWA</span><span className="mt-2 block text-center text-[9px] tracking-[.55em]">UBUD</span></Link>
      <nav className="hidden items-center gap-9 text-[13px] md:flex">{links.map((link) => <Link key={link.href} href={link.href} className="transition hover:text-white/70">{link.label}</Link>)}</nav>
      <div className="hidden md:block"><BookingLinks label="Book on OTA"/></div>
      <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="rounded-full border border-white/40 p-2 md:hidden">{open ? <X size={20}/> : <Menu size={20}/>}</button>
    </div>
    {open && <nav className="mobile-nav flex flex-col gap-1 bg-[#183b2a] px-6 pb-5 pt-2 md:hidden">{links.map((link) => <Link onClick={() => setOpen(false)} key={link.href} href={link.href} className="py-3 text-sm">{link.label}</Link>)}<BookingLinks label="Book on OTA" className="mt-2 w-full bg-white !text-[#183b2a] hover:!bg-[#e9e5da]"/></nav>}
  </header>;
}
