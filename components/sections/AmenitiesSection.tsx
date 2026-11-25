import { ArrowUpRight, Check, ChevronDown, Instagram, MapPin, Menu, Star, Wifi, Waves, Wind, Utensils, Car, ShieldCheck, BedDouble, Bath, Tv, Trees, X } from "lucide-react";
import { photos, amenities, bookingChannels, socialLinks, whatsappUrl, emailUrl, reviews, faqs, Photo, SectionLabel } from "../../data/site";

export default function AmenitiesSection() { return <>
<section id="amenities" className="amenitySection section"><div className="wrap"><div className="sectionHeading centered"><SectionLabel>THOUGHTFULLY DESIGNED</SectionLabel><h2>Comforts of <em>home.</em></h2><p>The original 16 amenities, grouped into six categories.</p></div><div className="amenityGrid">{amenities.map(({icon:Icon,title,desc})=><article className="amenity" key={title}><Icon size={20} strokeWidth={1.5}/><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
</>; }
