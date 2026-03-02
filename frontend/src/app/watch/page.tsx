import WatchComponent from "./components/WatchComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch | St. Ignatius of Loyola Church",
  description: "Watch our live services and previous messages",
};

export default function Watch() {
  return <WatchComponent />;
}
