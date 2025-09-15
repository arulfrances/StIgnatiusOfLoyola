import { Smartphone } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface GivingMethod {
  id: string;
  name: string;
  description: string;
  link?: string;
  icon: LucideIcon;
}

export interface PaymentOption {
  id: string;
  name: string;
  qrCode: string;
  isActive: boolean;
}

export interface ConstructionCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
//  link?: string;
}

export const giveConfig = {
  header: {
    title: "Support Our Church",
    backgroundImage: "/assets/icons/new-placeholder.svg",
  },
  scripture: {
    verse:
      "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.",
    reference: "2 Corinthians 9:7",
  },
  givingMethods: [
    {
      id: "text",
      name: "Reach out to our Parish Priest for the contributions",
      description: "",
      icon: Smartphone,
    },
  ] as GivingMethod[],
  constructionCards: [
    {
      id: "Flag Pole",
      title: "Flag Pole Installation",
      description:
        "The Church Flag Pole has been installed.",
      imageSrc: "/assets/images/construction/foundation.jpg",
     // link: "/construction-updates#foundation",
    },
    {
      id: "roofing",
      title: "Feast Car - Build work",
      description:
        "Feast Car - Fabrication work",
      imageSrc: "/assets/images/construction/Feast Car - Final.jpg",
      //link: "/construction-updates#roofing",
    },
    {
      id: "interior",
      title: "Community Hall Construction Planned",
      description:
        "Community Hall Construction has been planned and would require funding support from Parishioners and well wishers",
      imageSrc: "/assets/images/construction/Church Community Hall1.jpg",
      //link: "/construction-updates#interior",
    },
  ] as ConstructionCard[],
};
