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
        <div className="min-h-screen bg-[#fafafa]">
            <PageHeader
                title="Parish Stories & Updates"
                description="Discover the journey of our growth through photos and videos."
                backgroundImage="/assets/images/Church-FrontView.jpg"
            />

            <section className="container mx-auto px-4 py-24">
                <div className="max-w-6xl mx-auto mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-earthYellow uppercase bg-earthYellow/10 rounded-full border border-earthYellow/20"
                    >
                        Live Documentation
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-extrabold mb-8 text-gray-900 tracking-tight"
                    >
                        Building the <span className="text-darkMossGreen">Legacy</span>
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-earthYellow mx-auto rounded-full mb-8" />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        From the foundation to the finishing touches, witness the transformation of our sanctuary 
                        and community spaces. Every brick laid is a testament to our collective faith.
                    </motion.p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        {giveConfig.constructionCards?.map((card: ConstructionCard, index: number) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="h-full"
                                onClick={() => setSelectedCard(card)}
                            >
                                <Card
                                    className="group relative h-full flex flex-col cursor-pointer overflow-hidden border-none bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className="relative h-72 w-full overflow-hidden pointer-events-none">
                                        {isVideo(card.imageSrc) ? (
                                            <div className="w-full h-full relative">
                                                <video
                                                    src={card.imageSrc}
                                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                />
                                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-90 group-hover:scale-110 transition-transform duration-500">
                                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="w-full h-full relative">
                                                <Image
                                                    src={card.imageSrc}
                                                    alt={card.title}
                                                    fill
                                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                    priority={index < 3}
                                                />
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                                            </div>
                                        )}
                                        <div className="absolute top-6 left-6">
                                            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/50">
                                                <div className={`w-2 h-2 rounded-full ${isVideo(card.imageSrc) ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
                                                <span className="text-[10px] font-bold text-gray-900 uppercase tracking-widest leading-none">
                                                    {isVideo(card.imageSrc) ? 'Video Update' : 'Photo Daily'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-darkMossGreen">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6">
                                            {card.description}
                                        </p>
                                        <div className="mt-auto flex items-center gap-4">
                                            <div className="h-px flex-grow bg-gray-100" />
                                            <div className="text-darkMossGreen font-bold text-xs uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
                                                Enlarge
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Media Enlargement Modal */}
                    <AnimatePresence>
                        <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
                            <DialogContent className="max-w-[95vw] md:max-w-6xl p-0 overflow-hidden bg-white/95 backdrop-blur-xl border-none shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] rounded-[3rem] outline-none">
                                <DialogHeader className="sr-only">
                                    <DialogTitle>{selectedCard?.title || "Media Details"}</DialogTitle>
                                </DialogHeader>
                                <div className="grid grid-cols-1 lg:grid-cols-3 h-full max-h-[90vh]">
                                    <div className="lg:col-span-2 relative bg-black flex items-center justify-center">
                                        <button 
                                          onClick={() => setSelectedCard(null)}
                                          className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all transform hover:rotate-90"
                                        >
                                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                        {selectedCard && (
                                            isVideo(selectedCard.imageSrc) ? (
                                                <video
                                                    src={selectedCard.imageSrc}
                                                    className="max-w-full max-h-full object-contain"
                                                    controls
                                                    autoPlay
                                                />
                                            ) : (
                                                <div className="relative w-full h-full min-h-[50vh]">
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
                                    
                                    <div className="p-10 lg:p-14 flex flex-col justify-center bg-white border-l border-gray-100 overflow-y-auto">
                                        <div className="mb-10">
                                            <div className="inline-block px-3 py-1 bg-darkMossGreen/5 text-darkMossGreen text-[10px] font-bold uppercase tracking-widest rounded-full border border-darkMossGreen/10 mb-6 font-mono">
                                                Post ID: #{selectedCard?.id?.replace(/\s+/g, '-').toLowerCase()}
                                            </div>
                                            <h4 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
                                                {selectedCard?.title}
                                            </h4>
                                            <div className="w-12 h-1 bg-earthYellow rounded-full mb-8" />
                                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium italic">
                                                &quot;{selectedCard?.description}&quot;
                                            </p>
                                        </div>
                                        
                                        <div className="mt-auto pt-10 grid grid-cols-2 gap-4 border-t border-gray-50">
                                            <button 
                                                onClick={() => setSelectedCard(null)}
                                                className="col-span-2 py-4 bg-darkMossGreen text-white font-bold rounded-2xl hover:bg-pakistanGreen hover:shadow-lg transition-all active:scale-95"
                                            >
                                                Back to Gallery
                                            </button>
                                        </div>
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
