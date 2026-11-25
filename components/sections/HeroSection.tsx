import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Instagram,
  MapPin,
  Menu,
  Star,
  Wifi,
  Waves,
  Wind,
  Utensils,
  Car,
  ShieldCheck,
  BedDouble,
  Bath,
  Tv,
  Trees,
  X,
} from "lucide-react";
import {
  photos,
  amenities,
  bookingChannels,
  socialLinks,
  whatsappUrl,
  emailUrl,
  reviews,
  faqs,
  Photo,
  SectionLabel,
} from "../../data/site";

export default function HeroSection() {
  return (
    <>
      <section id="home" className="hero wrap">
        <div className="heroText">
          <div className="rating">
            <Star size={13} fill="currentColor" /> 5.0{" "}
            <span>· A peaceful stay in Ubud</span>
          </div>
          <SectionLabel>PRIVATE VILLA · UBUD, BALI</SectionLabel>
          <h1>
            Your private escape,
            <br />
            <em>close to nature.</em>
          </h1>
          <p className="lead">
            A serene ricefield sanctuary where comfort, privacy and tropical
            greenery come together.
          </p>
          <div className="heroButtons">
            <a className="button dark" href="#villa">
              Explore the villa <ArrowUpRight size={16} />
            </a>
            <a className="button outline" href="#ota">
              Enquire now
            </a>
          </div>
          <div className="trusted">
            <span>MADE FOR SLOW LIVING</span>
            <div>
              <b>PRIVATE</b>
              <b>2 BEDROOMS</b>
              <b>UBUD</b>
            </div>
          </div>
        </div>
        <Photo
          src={photos.hero}
          alt="Dummy photo of a tropical private villa"
          className="heroPhoto"
        />
      </section>
    </>
  );
}
