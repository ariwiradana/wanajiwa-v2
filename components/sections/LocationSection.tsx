import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "../../data/site";

export default function LocationSection() { return <>
<section id="location" className="location section wrap"><div className="locationGrid"><div><SectionLabel>OUR CORNER OF UBUD</SectionLabel><h2>Quiet surroundings,<br/><em>connected to Ubud.</em></h2><p>Located in a peaceful area around Payangan, Wana Jiwa offers a natural escape while keeping Ubud's experiences within reach.</p><div className="locationPin"><MapPin size={18}/><div><strong>Wana Jiwa Ubud</strong><span>Payangan, Ubud, Bali</span></div></div><Link className="button outline" href="https://maps.app.goo.gl/2yM4qgsVhAHVidyG9" target="_blank" rel="noopener noreferrer">Open Google Maps <ArrowUpRight size={15}/></Link></div><div className="mapEmbed"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.523718455727!2d115.25058867608442!3d-8.448341285377614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd223001302dbed%3A0xb097251406f5664d!2sWana%20Jiwa%20Ubud!5e0!3m2!1sen!2sid!4v1795611427096!5m2!1sen!2sid" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" title="Wana Jiwa Ubud Google Maps location" /></div></div></section>
</>; }
