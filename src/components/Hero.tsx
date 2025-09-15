"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#1a1a1a] -mt-[120px] sm:-mt-[140px]">
      {/* Full width hero image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/StIgantiusChurchView.jpg"
          alt="Church Community"
          fill
          className="object-cover object-center opacity-60"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative min-h-screen flex items-end">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 pb-24 pt-[140px] sm:pt-[160px]">
          <div className="max-w-4xl space-y-8">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wide text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Welcome to the St. Ignatius Parish Website
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium tracking-wide leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Love God | Love People | Serve People
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-5 pt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/mass-timings"
                className="px-10 py-4 text-base font-semibold bg-earthYellow text-black rounded-full
                             hover:bg-earthYellow/90 transition-all duration-300 
                             inline-flex items-center justify-center sm:w-auto w-full
                             border border-earthYellow shadow-md hover:shadow-lg"
              >
                Visit In-Person
              </Link>
              {/* Uncomment if "Watch Online" needed
              <Link
                href="/watch"
                className="px-10 py-4 text-base font-semibold text-white bg-darkMossGreen/90 rounded-full
                             hover:bg-darkMossGreen transition-all duration-300 
                             inline-flex items-center justify-center sm:w-auto w-full
                             border border-earthYellow/30 shadow-md hover:shadow-lg"
              >
                Watch Online
              </Link>
              */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

