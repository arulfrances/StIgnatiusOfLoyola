import ChurchLocation from "./components/ChurchLocation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location | St. Ignatius of Loyola Church",
  description: "Find our church location and service times",
};

export default function Location() {
  return <ChurchLocation />;
}
