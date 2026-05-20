import { Playfair_Display, DM_Sans, Amiri } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-ui",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["400", "700"],
  display: "swap",
});
