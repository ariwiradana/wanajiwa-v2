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

export default function ContactSection() {
  return (
    <>
      <section id="contact" className="contact section wrap">
        <div className="contactBox">
          <SectionLabel>LET YOUR ESCAPE BEGIN</SectionLabel>
          <h2>
            Your Ubud escape
            <br />
            <em>awaits.</em>
          </h2>
          <p>
            Tell us a little about your stay. We'd be happy to help you plan
            your time at Wana Jiwa.
          </p>
          <div className="contactButtons">
            <a className="button dark" href={whatsappUrl}>
              Enquire via WhatsApp <ArrowUpRight size={16} />
            </a>
            <a className="button outline" href={emailUrl}>
              Send an email <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
