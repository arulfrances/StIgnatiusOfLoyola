import type { Metadata } from "next";
import HeroSection from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";

export const metadata: Metadata = {
  title: 'Welcome to the St. Ignatius Parish Website',
  description: 'Experience the power of worship and community at the St. Ignatius Parish. Join us for inspiring services, meaningful fellowship, and impactful outreach programs.',
  openGraph: {
    title: 'Welcome to the St. Ignatius Parish Website',
    description: 'Experience the power of worship and community at the St. Ignatius Parish',
    images: [
      {
        url: '/assets/icons/new-placeholder.svg',
        width: 800,
        height: 600,
        alt: ' St. Ignatius Parish Website',
      },
    ],
  },
  twitter: {
    title: 'Welcome to the St. Ignatius Parish Website',
    description: 'Experience the power of worship and community at the St. Ignatius Parish',
    images: ['/assets/icons/new-placeholder.svg'],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
}
