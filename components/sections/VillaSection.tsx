import { ArrowUpRight, Check, ChevronDown, Instagram, MapPin, Menu, Star, Wifi, Waves, Wind, Utensils, Car, ShieldCheck, BedDouble, Bath, Tv, Trees, X } from "lucide-react";
import { photos, amenities, bookingChannels, socialLinks, whatsappUrl, emailUrl, reviews, faqs, Photo, SectionLabel } from "../../data/site";

export default function VillaSection() { return <>
<section id="villa" className="villa section wrap">
   <div className="sectionHeading"><SectionLabel>YOUR PRIVATE SANCTUARY</SectionLabel><h2>Welcome to<br/><em>Wana Jiwa.</em></h2></div>
   <div className="villaGrid"><Photo src={photos.living} alt="Dummy villa living area" className="villaPhoto"/><div className="villaCopy"><p>Hidden among the greenery of Ubud, Wana Jiwa invites you to embrace the beauty of a slower pace. Enjoy a private space, peaceful surroundings and thoughtful comforts for a memorable island stay.</p><p>Whether you're unwinding beside the pool, sharing a meal or simply taking in the landscape, let the days unfold at your own rhythm.</p><div className="facts"><div><strong>02</strong><span>Bedrooms</span></div><div><strong>01</strong><span>Private pool</span></div><div><strong>UBUD</strong><span>Bali, Indonesia</span></div></div><a className="textLink" href="#amenities">Discover the amenities <ArrowUpRight size={15}/></a></div></div>
  </section>
</>; }
