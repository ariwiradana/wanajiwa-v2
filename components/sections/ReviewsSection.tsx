import { ArrowUpRight, Check, ChevronDown, Instagram, MapPin, Menu, Star, Wifi, Waves, Wind, Utensils, Car, ShieldCheck, BedDouble, Bath, Tv, Trees, X } from "lucide-react";
import { photos, amenities, bookingChannels, socialLinks, whatsappUrl, emailUrl, reviews, faqs, Photo, SectionLabel } from "../../data/site";

export default function ReviewsSection() { return <>
<section id="reviews" className="reviews section wrap"><div className="sectionHeading centered"><SectionLabel>GUEST EXPERIENCES</SectionLabel><h2>Kind words from<br/><em>our guests.</em></h2><div className="overall"><span>★★★★★</span><strong>5.0</strong><small>Guest experience</small></div></div><div className="reviewGrid">{reviews.map(r=><article className="review" key={r.name}><div className="stars">★★★★★</div><p>“{r.text}”</p><span>{r.name}</span></article>)}</div></section>
</>; }
