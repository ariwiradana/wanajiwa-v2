import { ArrowUpRight } from "lucide-react";
import { bookingChannels } from "../../data/site";

export default function BookingSection() {
  return (
    <>
      <section id="ota" className="booking section wrap">
        <div className="sectionHeading centered">
          <h2>
            Choose how to
            <br />
            <em>book your stay.</em>
          </h2>
          <p>
            Booking partner URLs are placeholders until the verified links are
            supplied.
          </p>
        </div>
        <div className="bookingGrid">
          {bookingChannels.map((channel) => (
            <a
              key={channel.label}
              className="bookingCard"
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>{channel.label}</strong>
              <span>
                Visit booking page <ArrowUpRight size={15} />
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
