"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { giveConfig, ConstructionCard } from "@/app/give/config/GiveConfig";
import PageHeader from "@/components/sections/PageHeader";

const isVideo = (src: string) => {
    const videoExtensions = [".mp4", ".webm", ".ogg"];
    return videoExtensions.some((ext) => src.toLowerCase().endsWith(ext));
};

export default function ConstructionUpdatesComponent() {
    const [mounted, setMounted] = useState(false);
    const [selectedCard, setSelectedCard] = useState<ConstructionCard | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-background">
            <PageHeader
                title="Church Construction Updates"
                backgroundImage="/assets/images/Church-FrontView.jpg"
            />

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-darkMossGreen"
                    >
                        Building Our Future Together
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                    >
                        Stay updated with the latest progress of our church construction projects.
                        We are grateful for your continued support and prayers as we enhance our
                        place of worship for generations to come.
                    </motion.p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {giveConfig.constructionCards?.map((card: ConstructionCard, index: number) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <Card
                                    className="group hover:shadow-2xl transition-all duration-500 flex flex-col cursor-pointer overflow-hidden border-none bg-white rounded-2xl shadow-lg h-full"
                                    onClick={() => setSelectedCard(card)}
                                >
                                    <div className="relative h-64 w-full overflow-hidden">
                                        {isVideo(card.imageSrc) ? (
                                            <div className="w-full h-full relative">
                                                <video
                                                    src={card.imageSrc}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                                            </div>
                                        ) : (
                                            <div className="w-full h-full relative">
                                                <Image
                                                    src={card.imageSrc}
                                                    alt={card.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    priority={index < 3}
                                                />
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                                            </div>
                                        )}
                                        <div className="absolute bottom-4 left-4">
                                            <span className="px-3 py-1 bg-earthYellow text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                                                Update
                                            </span>
                                        </div>
                                    </div>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-darkMossGreen">
                                            {card.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-gray-600 leading-relaxed italic">
                                            &quot;{card.description}&quot;
                                        </p>
                                        <div className="mt-6 flex items-center text-darkMossGreen font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                                            View Details
                                            <svg
                                                className="ml-2 w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Media Enlargement Modal */}
                    <AnimatePresence>
                        <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
                            <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/95 border-none shadow-2xl">
                                <DialogHeader className="p-6 absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent text-white">
                                    <DialogTitle className="text-2xl font-bold tracking-tight">
                                        {selectedCard?.title}
                                    </DialogTitle>
                                </DialogHeader>

                                <div className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center p-4">
                                    {selectedCard && (
                                        isVideo(selectedCard.imageSrc) ? (
                                            <video
                                                src={selectedCard.imageSrc}
                                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                                controls
                                                autoPlay
                                            />
                                        ) : (
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={selectedCard.imageSrc}
                                                    alt={selectedCard.title}
                                                    fill
                                                    className="object-contain"
                                                    quality={100}
                                                />
                                            </div>
                                        )
                                    )}
                                </div>

                                <div className="p-8 bg-gradient-to-t from-black/90 to-black/40 text-white backdrop-blur-sm">
                                    <h4 className="text-earthYellow font-semibold uppercase tracking-widest text-xs mb-2">Description</h4>
                                    <p className="text-lg md:text-xl leading-relaxed font-medium">
                                        {selectedCard?.description}
                                    </p>
                                    <div className="mt-6 flex justify-end">
                                        <button
                                            onClick={() => setSelectedCard(null)}
                                            className="px-6 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-sm font-medium border border-white/20"
                                        >
                                            Close Gallery
                                        </button>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
}
