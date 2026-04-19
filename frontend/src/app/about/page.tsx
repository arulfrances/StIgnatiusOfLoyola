import AboutPage from "./components/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | St. Ignatius of Loyola Church",
  description: "Learn about our community united in faith, service, and love",
};

export default function About() {
  return <AboutPage />;
}
