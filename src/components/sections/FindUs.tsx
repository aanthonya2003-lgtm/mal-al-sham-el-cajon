import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { site, telHref, whatsappHref } from "@/lib/site";
import { Reveal } from "@/components/animations/Reveal";

export function FindUs() {
  return (
    <section className="relative bg-[hsl(25_15%_6%)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
            Visit us
          </span>
          <h2 className="mt-4 font-[var(--font-display)] text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.04]">
            388 East Main Street, <br />
            <em className="italic text-[hsl(38_85%_52%)]">El Cajon</em>.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden rounded-[14px] border border-[hsl(30_15%_18%)]">
              <iframe
                title="Mal Al Sham on Google Maps"
                src="https://www.google.com/maps?q=388+E+Main+St,+El+Cajon,+CA+92020&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  border: 0,
                  filter: "grayscale(0.4) contrast(1.05) brightness(0.92)",
                  minHeight: 360,
                }}
                allowFullScreen
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full flex flex-col gap-7 rounded-[14px] border border-[hsl(30_15%_18%)] bg-[hsl(25_12%_10%)] p-8">
              <div>
                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    aria-hidden
                    className="mt-0.5 text-[hsl(38_85%_52%)]"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[hsl(35_10%_58%)]">
                      Address
                    </p>
                    <a
                      href={site.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-base text-[hsl(38_15%_93%)] hover:text-[hsl(38_85%_62%)]"
                    >
                      {site.address.full}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <Phone
                    size={16}
                    aria-hidden
                    className="mt-0.5 text-[hsl(38_85%_52%)]"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[hsl(35_10%_58%)]">
                      Call us
                    </p>
                    <a
                      href={telHref}
                      className="tnum mt-1 block text-base text-[hsl(38_15%_93%)] hover:text-[hsl(38_85%_62%)]"
                    >
                      {site.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    aria-hidden
                    className="mt-0.5 text-[hsl(38_85%_52%)]"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[hsl(35_10%_58%)]">
                      Hours
                    </p>
                    <p className="mt-1 text-base text-[hsl(38_15%_93%)]">
                      Open 7 days
                    </p>
                    <p className="text-sm text-[hsl(35_10%_58%)]">
                      9:00 AM – 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-2 rounded-full bg-[hsl(38_85%_52%)] px-6 py-3.5 text-sm font-medium text-[hsl(25_15%_6%)] transition-all hover:bg-[hsl(38_90%_62%)]"
                >
                  <span>Order via WhatsApp</span>
                  <ArrowUpRight size={16} aria-hidden />
                </a>
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-2 rounded-full border border-[hsl(38_60%_35%)] px-6 py-3.5 text-sm text-[hsl(38_15%_93%)] transition-all hover:border-[hsl(38_85%_52%)]"
                >
                  <span>Get directions</span>
                  <ArrowUpRight size={16} aria-hidden />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
