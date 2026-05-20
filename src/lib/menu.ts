/**
 * Mal Al Sham menu — VERIFIED from malalsham.com/our-menu/
 * Do NOT add, alter, or invent items. Source: brief Phase 3.
 */

import { assets } from "./site";

export type MenuItem = {
  name: string;
  arabicName?: string;
  description: string;
  price?: string;
  image?: string;
  weekendOnly?: boolean;
  servesNote?: string;
};

export type MenuCategory = {
  id:
    | "breakfast"
    | "salads"
    | "kibbeh"
    | "entrees"
    | "specials"
    | "platters";
  label: string;
  eyebrow: string;
  blurb: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    eyebrow: "Served daily",
    blurb:
      "Wake up the Damascus way — slow-cooked legumes, warm tahina, fresh herbs.",
    items: [
      {
        name: "Fool",
        description:
          "Fava beans, tomato, parsley, lemon, garlic, olive oil — choice of tahina or tahina with yogurt.",
      },
      {
        name: "Fool with Vinegar",
        description:
          "Our Fool brightened with a splash of vinegar — a Damascene table staple.",
      },
      {
        name: "Msabaha",
        description:
          "Crushed fava beans folded into tahina and yogurt, finished with lemon.",
      },
      {
        name: "Fatteh",
        description:
          "Chickpeas spooned over baked bread chips, lemon, garlic, tahina, yogurt, sautéed nuts.",
      },
      {
        name: "Manakish",
        description:
          "Stone-baked flatbread crowned with za'atar, cheese, or minced meat.",
      },
      {
        name: "Mal Al Sham Falafel",
        description:
          "Twelve hand-rolled chickpea fritters in our signature spice blend.",
        price: "$10.99",
        image: assets.falafel,
      },
    ],
  },
  {
    id: "salads",
    label: "Salads",
    eyebrow: "Cold, herbaceous, alive",
    blurb:
      "Cut from the garden, dressed in lemon and olive oil — the Levantine palate cleanser.",
    items: [
      {
        name: "Home Salad",
        description:
          "Tomato, cucumber, lettuce, red onion, red cabbage, parsley, lemon, olive oil.",
      },
      {
        name: "Chicken Salad",
        description:
          "Lettuce, tomato, olive oil and vinegar with grilled or shawarma chicken.",
      },
      {
        name: "Fattoush",
        description:
          "Tomato, cucumber, lettuce, parsley, baked pita chips, pomegranate paste.",
      },
      {
        name: "Tabbouleh",
        description:
          "Finely chopped parsley, fine bulgur, lemon, green mint, virgin olive oil.",
      },
      {
        name: "Yogurt & Cucumber",
        description:
          "House-made yogurt with garlic and dried mint — the cooling counterpoint to grills.",
      },
      {
        name: "Greek Salad",
        description:
          "Feta, croutons, vibrant veggies tossed in Greek dressing.",
      },
    ],
  },
  {
    id: "kibbeh",
    label: "Syrian Kibbeh",
    eyebrow: "Signature",
    blurb:
      "Bulgur and minced meat folded around a spiced heart — fried or wood-grilled.",
    items: [
      {
        name: "Fried Kibbeh",
        description:
          "Bulgur shells, minced meat, aromatic spices — golden, crisp, hand-formed.",
      },
      {
        name: "Grilled Kibbeh",
        description:
          "Same heritage blend, finished over an open flame.",
      },
    ],
  },
  {
    id: "entrees",
    label: "Entrees",
    eyebrow: "From the rotisserie & grill",
    blurb:
      "Tender, marinated, generously portioned — the dishes our regulars drive across the county for.",
    items: [
      {
        name: "Chicken Shawarma",
        description:
          "Rotisserie chicken, slow-turned and shaved to order, dressed in our tahina sauce.",
      },
      {
        name: "Beef Shawarma",
        description:
          "Marinated thinly sliced beef from the rotisserie, served with tahina sauce.",
        price: "$17.99",
        image: assets.shawarma,
      },
      {
        name: "Chicken Shawarma Sandwich",
        description:
          "Wrapped with fries and house sauce — the everyday favorite.",
        price: "$12.00",
      },
      {
        name: "Beef Tikka",
        description: "Charcoal-grilled cubes with rice and salad.",
      },
      {
        name: "Chicken Tikka",
        description: "Marinated chicken pieces, grilled, with rice and salad.",
      },
      {
        name: "Lamb Tikka",
        description:
          "Hand-cut lamb seared over open flame, with rice and salad.",
      },
      {
        name: "Mixed Grill — Special",
        description:
          "One skewer each: beef kabob, chicken kabob, beef tikka, chicken tikka.",
        price: "$23.99",
        image: assets.kebab,
      },
      {
        name: "Hummus",
        description:
          "Stone-milled chickpeas, tahina, lemon, olive oil — pooled and warm.",
        image: assets.hummus,
      },
    ],
  },
  {
    id: "specials",
    label: "Weekend Specials",
    eyebrow: "Friday – Sunday & holidays only",
    blurb:
      "Two dishes we only serve at the weekend — slow, ceremonial, gone by Sunday night.",
    items: [
      {
        name: "Mansaf",
        description:
          "Slow-cooked lamb over short rice, parsley, sautéed nuts, jameed yogurt sauce — Jordan's national dish, made the Damascene way.",
        weekendOnly: true,
      },
      {
        name: "Ghouzi (Ouzi)",
        description:
          "Whole slow-roasted lamb seasoned to perfection, presented over rice — built for occasions.",
        weekendOnly: true,
      },
    ],
  },
  {
    id: "platters",
    label: "Family & Party Platters",
    eyebrow: "Catering · Large groups",
    blurb:
      "From dinner-for-six to a feast-for-ten. Call (619) 401-1055 to order ahead.",
    items: [
      {
        name: "Al Sham Basmati Chicken Tray",
        description:
          "Seasoned basmati rice with six large chicken chunks, peas and carrots, sautéed nuts.",
        servesNote: "Serves 6",
      },
      {
        name: "Al Sham Basmati Lamb Tray",
        description:
          "Seasoned basmati with slow-cooked lamb, ground lamb, sautéed nuts.",
        servesNote: "Serves 6",
      },
      {
        name: "Mansaf Chicken Platter",
        description:
          "Short rice, ten chicken chunks, parsley, nuts, jameed sauce.",
        servesNote: "Serves 10",
      },
      {
        name: "Mansaf Lamb Platter",
        description:
          "Short rice, ten slow-cooked lamb chunks, parsley, nuts, jameed sauce.",
        servesNote: "Serves 10",
      },
      {
        name: "Family Combo for 5",
        description:
          "Beef kabob, chicken kabob, chicken tikka, beef shawarma, chicken shawarma, rice and salad.",
        servesNote: "Serves 5",
      },
      {
        name: "Combo Platter",
        description: "Beef & chicken kabobs, tikka, shawarma sampler.",
        servesNote: "Serves 2",
      },
      {
        name: "Large Combo",
        description:
          "Generous mixed grill with rice, hummus, and salads.",
        servesNote: "Serves 3 – 4",
      },
      {
        name: "Mega Combo",
        description:
          "Beef + chicken kabobs, tikka, a pound of shawarma each, hummus, baba ghanoush, falafel.",
        servesNote: "Serves 5 – 6",
      },
    ],
  },
];

export const featuredDishes: MenuItem[] = [
  menu[3].items.find((i) => i.name === "Beef Shawarma")!,
  menu[3].items.find((i) => i.name === "Mixed Grill — Special")!,
  menu[5].items.find((i) => i.name === "Mansaf Lamb Platter")!,
];
