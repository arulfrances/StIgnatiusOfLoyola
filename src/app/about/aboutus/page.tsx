import type { Metadata } from "next";
import Aboutus from "./components/Aboutus";

export const metadata: Metadata = {
  title: "About Parish - St. Ignatius of Loyola Catholic Church",
};

export default function AboutUsPage() {
  return <Aboutus />;
}
