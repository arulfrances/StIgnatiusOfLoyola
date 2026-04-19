"use client";

import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  description?: string;
}

export default function PageHeader({
  title,
  subtitle,
  backgroundImage,
  description,
}: PageHeaderProps) {
  return (
    <div className="relative bg-gray-900 -mt-[112px]">
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover object-center opacity-70"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
      )}
      <div className="relative min-h-[45vh] md:min-h-[50vh] flex items-center">
        <div className="container mx-auto px-4 pt-[112px] pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-xl sm:text-2xl text-white/90 font-medium">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="mt-4 text-lg text-white/80">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
