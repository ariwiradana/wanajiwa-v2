import { ArrowUpRight, Check, ChevronDown, Instagram, MapPin, Menu, Star, Wifi, Waves, Wind, Utensils, Car, ShieldCheck, BedDouble, Bath, Tv, Trees, X } from "lucide-react";
import { photos, amenities, bookingChannels, socialLinks, whatsappUrl, emailUrl, reviews, faqs, Photo, SectionLabel } from "../../data/site";

export default function FooterSection() { return <>
<footer className="footer wrap"><div><a className="brand" href="#home">WANA <span>JIWA</span></a><p>A serene ricefield sanctuary in Ubud, Bali.</p></div><div className="footerLinks"><a href="#villa">Villa</a><a href="#gallery">Gallery</a><a href="#location">Location</a><a href="#faq">FAQ</a><a href={socialLinks[0].href}>Instagram <Instagram size={14}/></a><a href={socialLinks[1].href}>Facebook <ArrowUpRight size={14}/></a><a href={socialLinks[2].href}>TikTok <ArrowUpRight size={14}/></a></div><small>© 2026 Wana Jiwa Ubud. All rights reserved.</small></footer>
</>; }
