import ConstructionUpdatesComponent from "./components/ConstructionUpdatesComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Construction Updates | St. Ignatius of Loyola Church",
    description: "Recent updates and media from our ongoing church construction projects.",
};

export default function ConstructionUpdates() {
    return <ConstructionUpdatesComponent />;
}
