import { Hero } from "@/components/hero/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Story } from "@/components/sections/Story";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { WeekendSpecials } from "@/components/sections/WeekendSpecials";
import { Testimonials } from "@/components/sections/Testimonials";
import { CateringCTA } from "@/components/sections/CateringCTA";
import { FindUs } from "@/components/sections/FindUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Story />
      <SignatureDishes />
      <MenuPreview />
      <WeekendSpecials />
      <Testimonials />
      <CateringCTA />
      <FindUs />
    </>
  );
}
