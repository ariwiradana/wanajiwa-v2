import { ArrowUpRight, Check, ChevronDown, Instagram, MapPin, Menu, Star, Wifi, Waves, Wind, Utensils, Car, ShieldCheck, BedDouble, Bath, Tv, Trees, X } from "lucide-react";
import { photos, amenities, bookingChannels, socialLinks, whatsappUrl, emailUrl, reviews, faqs, Photo, SectionLabel } from "../../data/site";

export default function FAQSection() { return <>
<section id="faq" className="faq section"><div className="wrap faqGrid"><div><SectionLabel>NEED TO KNOW</SectionLabel><h2>Frequently<br/><em>asked questions.</em></h2><p>Everything you might want to know before your stay.</p><a className="textLink" href="#contact">Still have questions? Contact us <ArrowUpRight size={15}/></a></div><div className="faqList">{faqs.map(([q,a],i)=><details key={q} className="faqItem"><summary>{q}<ChevronDown size={17}/></summary><p>{a}</p></details>)}</div></div></section>
</>; }
