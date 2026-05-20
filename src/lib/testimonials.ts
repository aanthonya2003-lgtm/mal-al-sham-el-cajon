/**
 * Verified testimonials only — sourced from review platforms in brief Phase 4.
 * Do not invent or paraphrase.
 */

export type Testimonial = {
  quote: string;
  author: string;
  source: string;
  rating: 5;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The best Middle Eastern food I've ever had. The Qouzi special comes with salad or soup — both are so good.",
    author: "Bahaareh M.",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "Best Arab restaurant in America. Large portions and standout food.",
    author: "Minnesota Tours",
    source: "Press",
    rating: 5,
  },
  {
    quote:
      "We were all blown away. The flavor of the rice in the beef shawarma plate blew our minds. The cup of chai made the experience a 10/10.",
    author: "Verified Google review",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "I drive from Chula Vista to El Cajon just to grab some of their food. Always delicious. The owner — dad — always welcoming and friendly.",
    author: "Verified Google review",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "My go-to spot in El Cajon. The manakish is great, the chicken shawarma, the rice is so flavorful. If you've never had Syrian food, you can't go wrong.",
    author: "Verified Google review",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "Amazing shawarma — the best ever, at a very affordable price. This family-owned business is the real Syrian deal.",
    author: "Verified Google review",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "The chicken shawarma is not dry, and the kebab is as tender as butter. The lamb tikka with rice and salad is fresh and flavorful.",
    author: "Restaurantji",
    source: "Restaurantji",
    rating: 5,
  },
  {
    quote:
      "Lebanese / Syrian food at its best — 100% Halal, 10/10 food, hospitality, and service at this incredible spot.",
    author: "@_thegourmetguru_",
    source: "Instagram",
    rating: 5,
  },
  {
    quote:
      "For delicious Mediterranean food, look no further than Mal Al Sham. The menu offers shawarma, kibbeh, and pleeeenty of hummus.",
    author: "Grace Cassidy",
    source: "Eater San Diego",
    rating: 5,
  },
  {
    quote:
      "Great service, well-priced options, incomparable flavor — all of it.",
    author: "Victoria F.",
    source: "Postcard",
    rating: 5,
  },
];
