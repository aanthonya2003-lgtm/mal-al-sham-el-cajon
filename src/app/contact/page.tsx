import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { site, telHref, mailtoHref, whatsappHref } from "@/lib/site";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Contact — Visit, Call, or Message Us",
  description:
    "Visit Mal Al Sham at 388 E Main St, El Cajon, CA 92020. Call (619) 401-1055. Open 7 days, 9 AM – 10 PM. WhatsApp ordering available.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-[hsl(25_15%_6%)] pt-32 sm:pt-40 pb-12 border-b border-[hsl(30_15%_18%)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <span className="text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(38_85%_52%)]">
            Contact
          </span>
          <h1 className="mt-5 max-w-3xl font-[var(--font-display)] text-[clamp(2.4rem,6vw,5rem)] leading-[1.02]">
            Stop by,{" "}
            <em className="italic text-[hsl(38_85%_52%)]">say hello</em>.
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[hsl(38_15%_93%/0.78)]">
            We're on East Main Street, seven days a week, from nine in the
            morning until ten at night. Chai is on.
          </p>
        </div>
      </section>

      {/* Map full-width */}
      <section className="bg-[hsl(25_15%_6%)]">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden border-b border-[hsl(30_15%_18%)]">
          <iframe
            title="Mal Al Sham — 388 E Main St, El Cajon"
            src="https://www.google.com/maps?q=388+E+Main+St,+El+Cajon,+CA+92020&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              border: 0,
              filter: "grayscale(0.45) contrast(1.05) brightness(0.9)",
            }}
            allowFullScreen
          />
        </div>
      </section>

      {/* Info + form */}
      <section className="bg-[hsl(25_15%_6%)] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="flex flex-col gap-7">
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
                      Phone
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
                  <Mail
                    size={16}
                    aria-hidden
                    className="mt-0.5 text-[hsl(38_85%_52%)]"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[hsl(35_10%_58%)]">
                      Email
                    </p>
                    <a
                      href={mailtoHref}
                      className="mt-1 block text-base text-[hsl(38_15%_93%)] hover:text-[hsl(38_85%_62%)]"
                    >
                      {site.contact.email}
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
                    <table className="mt-2 text-sm text-[hsl(38_15%_93%/0.85)]">
                      <tbody>
                        {site.hours.days.map((day) => (
                          <tr key={day}>
                            <td className="pr-6 text-[hsl(35_10%_58%)]">
                              {day}
                            </td>
                            <td className="tnum">9:00 AM – 10:00 PM</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[hsl(38_85%_52%)] px-6 py-3.5 text-sm font-medium text-[hsl(25_15%_6%)] transition-all hover:bg-[hsl(38_90%_62%)]"
                >
                  Order on WhatsApp
                  <ArrowUpRight size={14} aria-hidden />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[14px] border border-[hsl(30_15%_18%)] bg-[hsl(25_12%_10%)] p-7 sm:p-9">
              <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-[hsl(35_10%_58%)]">
                For catering, large bookings, or anything else.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
