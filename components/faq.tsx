"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site";
export function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return <div className="divide-y divide-[#ded9ce]">{faqs.map((item, index) => <div key={item.q} className="py-5"><button onClick={() => setActive(active === index ? null : index)} className="flex w-full items-center justify-between gap-5 text-left"><span className="font-display text-lg md:text-xl">{item.q}</span><ChevronDown size={18} className={`shrink-0 transition ${active === index ? "rotate-180" : ""}`}/></button>{active === index && <p className="max-w-3xl pt-4 text-sm leading-7 text-[#697168]">{item.a}</p>}</div>)}</div>;
}
