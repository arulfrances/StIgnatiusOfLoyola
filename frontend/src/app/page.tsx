import type { Metadata } from "next";
import HeroSection from "@/components/Hero";
import MassTimingsSection from "@/components/sections/MassTimingsSection";
import ParishPriestSection from "@/components/sections/ParishPriestSection";
import ChurchUpdatesPreview from "@/components/sections/ChurchUpdatesPreview";
import FeaturesSection from "@/components/FeaturesSection";

export const metadata: Metadata = {
  title: 'St. Ignatius of Loyola Church, Akkaraikodiveri',
  description: 'Welcome to St. Ignatius of Loyola Church. Experience powerful worship, inspiring community, and our beautiful heritage at Akkaraikodiveri.',
  openGraph: {
    title: 'St. Ignatius of Loyola Church, Akkaraikodiveri',
    description: 'Welcome to our Parish community united in faith and service.',
    images: [{ url: '/assets/images/Church-FrontView.jpg', width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-x-hidden">
      <HeroSection />
      
      {/* Quick Info & Mass Timings */}
      <MassTimingsSection />

      {/* Parish Priest Introduction */}
      <ParishPriestSection />

      {/* Features & Highlights */}
      <FeaturesSection />

      {/* Latest Updates from Church */}
      <ChurchUpdatesPreview />
    </div>
  );
}
