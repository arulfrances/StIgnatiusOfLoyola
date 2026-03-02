"use client";

//import Link from "next/link";
import { useEffect, useState } from "react";
import FooterSkeleton from "./skeletons/FooterSkeleton";

export default function Footer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <FooterSkeleton />;
  }

  return (
    <footer
      className="bg-[#1a1a1a] text-white min-h-[150px] flex items-center"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex flex-col md:flex-row justify-center items-center gap-3 w-full">
            <p className="text-white/60 text-sm text-center w-full">
              © {new Date().getFullYear()} St. Ignatius of Loyola Church
            </p>
          </div>
      </div>
    </footer>
  );
}
