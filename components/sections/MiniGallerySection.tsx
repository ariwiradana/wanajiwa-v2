import { ArrowUpRight, Check, ChevronDown, Instagram, MapPin, Menu, Star, Wifi, Waves, Wind, Utensils, Car, ShieldCheck, BedDouble, Bath, Tv, Trees, X } from "lucide-react";
import { photos, amenities, bookingChannels, socialLinks, whatsappUrl, emailUrl, reviews, faqs, Photo, SectionLabel } from "../../data/site";

export default function MiniGallerySection() { return <>
<section className="miniGallery wrap">
    <Photo src={photos.pool} alt="Dummy private pool"/>
    <Photo src={photos.bedroom} alt="Dummy bedroom"/>
    <div className="miniCopy"><SectionLabel>DISCOVER WANA JIWA</SectionLabel><h3>Space to slow down<br/>and reconnect.</h3><a href="#gallery" className="textLink">Explore photos <ArrowUpRight size={15}/></a></div>
    <Photo src={photos.garden} alt="Dummy tropical garden"/>
  </section>
</>; }
