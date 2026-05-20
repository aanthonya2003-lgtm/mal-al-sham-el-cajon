/**
 * Mal Al Sham — central, verified business data.
 * Every fact is sourced from malalsham.com or verified review platforms.
 * Do NOT modify without updating CLAUDE.md.
 */

export const site = {
  name: "Mal Al Sham",
  fullName: "Mal Al Sham — The Taste of Damascus",
  arabicName: "مال الشام",
  tagline: "The Taste of Damascus, Served in El Cajon",
  description:
    "Authentic Syrian & Mediterranean cuisine in El Cajon, CA. 100% Halal. 1,500+ five-star reviews. Family-owned since 2018. Open daily 9 AM – 10 PM.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://malalsham.com",
  founded: 2018,
  founder: "Ahmed Abu Ali",

  contact: {
    phone: "(619) 401-1055",
    phoneRaw: "+16194011055",
    email: "info@malalsham.com",
    whatsappMessage: "Hello, I'd like to place an order with Mal Al Sham.",
  },

  address: {
    street: "388 E Main St",
    city: "El Cajon",
    region: "CA",
    postal: "92020",
    country: "US",
    full: "388 E Main St, El Cajon, CA 92020",
    mapsUrl: "https://maps.app.goo.gl/949HEDQLCDX1aAtu7",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.5!2d-116.9625!3d32.7948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzg4IEUgTWFpbiBTdCwgRWwgQ2Fqb24sIENBIDkyMDIw!5e0!3m2!1sen!2sus!4v1700000000000",
    lat: 32.7948,
    lng: -116.9625,
  },

  hours: {
    label: "Mon – Sun · 9:00 AM – 10:00 PM",
    open: "09:00",
    close: "22:00",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ] as const,
  },

  socials: {
    instagram: "https://www.instagram.com/malalsham.usa/",
    facebook: "https://www.facebook.com/MalAlSham.USA/",
    yelp: "https://www.yelp.com/biz/mal-al-sham-the-taste-of-damascus-el-cajon",
  },

  reviewStats: {
    fiveStar: "1,500+",
    aggregate: "3,131",
    averageRating: 4.4,
  },

  press: [
    "Featured on Eater San Diego",
    "Minnesota Tours: Best Arab Restaurant in America",
    "The Nexus · 5/5",
  ],
} as const;

/** Verified image URLs from malalsham.com — never substitute or fabricate. */
export const assets = {
  logo: "https://malalsham.com/wp-content/uploads/2024/09/mal-logo@4x-scaled.webp",
  logoIcon:
    "https://malalsham.com/wp-content/uploads/2024/09/cropped-icon-logo-270x270.png",
  logoBanner:
    "https://malalsham.com/wp-content/uploads/2024/09/w-logo@4x-768x117.webp",
  interior:
    "https://malalsham.com/wp-content/uploads/2024/09/IMG_2061-1536x1152-1-768x576.jpg",
  hummus:
    "https://malalsham.com/wp-content/uploads/2024/09/mal-al-sham-hummus-768x432.jpg",
  falafel:
    "https://malalsham.com/wp-content/uploads/elementor/thumbs/malalsham_falafels-qu7um7xasb0okoh06n6h5zsqgsa9rf5ksj71emz25c.jpg",
  kebab:
    "https://malalsham.com/wp-content/uploads/elementor/thumbs/mal-al-sham-kebab_-qu7uml31fzip37xw1sv94wh6s6her6lticbu4ifjq8.jpg",
  shawarma:
    "https://malalsham.com/wp-content/uploads/elementor/thumbs/SHAWARMA-MALALSHAM-kouzi-qu7umvf9j5wumxivdfc5ebv9bf2g3uqv7ri6ek07ts.jpg",
} as const;

/** Build a tel: href from the raw phone number. */
export const telHref = `tel:${site.contact.phoneRaw}`;

/** Build a WhatsApp deep link with pre-filled message. */
export const whatsappHref = `https://wa.me/${site.contact.phoneRaw.replace(
  "+",
  "",
)}?text=${encodeURIComponent(site.contact.whatsappMessage)}`;

/** Build a mailto: href. */
export const mailtoHref = `mailto:${site.contact.email}`;
