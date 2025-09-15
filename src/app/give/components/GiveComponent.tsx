"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
//import { Button } from "@/components/ui/button";
import Image from "next/image";
//import { useRouter } from "next/navigation";
import { giveConfig } from "../config/GiveConfig";
import type { GivingMethod, ConstructionCard } from "../config/GiveConfig";
import PageHeader from "@/components/sections/PageHeader";
import { CreditCard} from "lucide-react";

// Map icon string keys to React components
// const iconMap: Record<string, React.ComponentType<any>> = {
//   creditcard: CreditCard,
//   smartphone: Smartphone,
//   gift: Gift,
// };

export default function GiveComponent() {
  const [mounted, setMounted] = useState(false);
  const [givingMethods, setGivingMethods] = useState<GivingMethod[]>([]);
  // const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fetchGivingData = async () => {
      try {
        const response = await fetch("/api/giving-methods");
        const data = await response.json();
        setGivingMethods(data.givingMethods);
      } catch (error) {
        console.error("Failed to fetch giving methods:", error);
      }
    };

    fetchGivingData();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background">
      <PageHeader {...giveConfig.header} />

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Scripture Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <blockquote className="text-xl italic text-gray-700">
              &quot;{giveConfig.scripture.verse}&quot;
              <footer className="mt-2 text-gray-600">
                - {giveConfig.scripture.reference}
              </footer>
            </blockquote>
          </motion.div>

          {/* Giving Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {givingMethods.map((method) => {
              // Icon key: string name of icon in lowercase, or empty string
         //     const iconKey =
          //      typeof method.icon === "string";

              // Get Icon component from map or fallback to CreditCard icon
              const IconComponent = CreditCard;

              return (
                <Card
                  key={method.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <IconComponent className="h-5 w-5 text-earthYellow" />
                      {method.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {method.description ? (
                      <p>{method.description}</p>
                    ) : (
                      <>
                        <p>Rev.Fr. John Paul Vincent</p>
                        <p>Mobile: +91 94427 64539</p>
                      </>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>

          {/* Construction Cards Section */}
          <h3 className="text-2xl font-semibold mb-6">Church Construction Updates</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {giveConfig.constructionCards?.map((card: ConstructionCard) => (
              <Card
                key={card.id}
                className="hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    className="object-cover rounded-t-lg"
                    priority={false}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{card.description}</p>
                  {/* {card.link && (
                    <Button
                      variant="link"
                      className="mt-2 p-0 text-earthYellow"
                      onClick={() => router.push(card.link!)}
                    >
                      Learn More
                    </Button>
                  )} */}
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
