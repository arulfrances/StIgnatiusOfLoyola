import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export const footerConfig = {
  sections: [
    
  ],
  contactInfo: {
    address: "7305 Afton Rd, Woodbury, MN 55125",
    phone: "(651) 204-3333",
  },
  socialMedia: [
    { icon: YoutubeIcon, label: "YouTube", href: "#" },
    { icon: FacebookIcon, label: "Facebook", href: "#" },
    { icon: InstagramIcon, label: "Instagram", href: "#" },
    { icon: TwitterIcon, label: "Twitter", href: "#" },
  ],
  legalInfo: {
    copyright: "2025 St. Ignatius of Loyola Church. All Rights Reserved",
    links: [
      { label: "Terms Of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Preferences", href: "/cookie" },
    ],
    additionalText:
      "This site is protected by reCAPTCHA and the Google Privacy Policy & Terms Of Service apply.",
  },
};
