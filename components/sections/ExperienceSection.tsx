import { ArrowUpRight, Check, ChevronDown, Instagram, MapPin, Menu, Star, Wifi, Waves, Wind, Utensils, Car, ShieldCheck, BedDouble, Bath, Tv, Trees, X } from "lucide-react";
import { photos, amenities, bookingChannels, socialLinks, whatsappUrl, emailUrl, reviews, faqs, Photo, SectionLabel } from "../../data/site";

export default function ExperienceSection() { return <>
<section className="experience section"><div className="wrap experienceGrid"><Photo src={photos.detail} alt="Dummy tropical villa details"/><div><SectionLabel>A LITTLE CLOSER TO NATURE</SectionLabel><h2>Find your own<br/><em>quiet moment.</em></h2><p>Let the greenery, open skies and peaceful surroundings become part of your stay. Wana Jiwa is a place to pause, breathe and feel at ease.</p><a className="textLink" href="#location">Explore our location <ArrowUpRight size={15}/></a></div></div></section>
</>; }
