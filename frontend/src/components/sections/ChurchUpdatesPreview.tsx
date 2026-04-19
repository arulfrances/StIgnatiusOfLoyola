"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PlayCircle, Image as ImageIcon, ArrowRight } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const updates = [
    {
        id: 1,
        title: "Main Church Restoration",
        category: "Construction",
        type: "video",
        media: "/assets/videos/Construction-Restoration.mp4",
        description: "Witness the progress of our interior restoration work.",
    },
    {
        id: 2,
        title: "New Parish Hall Foundation",
        category: "Development",
        type: "image",
        media: "/assets/images/Church-FrontView.jpg",
        description: "The foundation of our community hall is now complete.",
    },
    {
        id: 3,
        title: "Grotto Beautification",
        category: "Maintenance",
        type: "image",
        media: "/assets/images/ChurchView.jpg",
        description: "Enhancing the prayer garden and Our Lady's Grotto.",
    },
];

export default function ChurchUpdatesPreview() {
    const [selectedMedia, setSelectedMedia] = useState<typeof updates[0] | null>(null);

    return (
        <section className="py-8 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            Church Updates
                        </h2>
                        <p className="text-lg text-gray-600">
                            Stay informed about the life and growth of our parish through recent news and progress.
                        </p>
                    </div>
                    <Link
                        href="/construction-updates"
                        className="group inline-flex items-center gap-2 text-darkMossGreen font-bold hover:gap-3 transition-all"
                    >
                        View All Media Updates
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {updates.map((update, idx) => (
                        <motion.div
                            key={update.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedMedia(update)}
                        >
                            <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-lg shadow-pakistanGreen/5">
                                {update.type === 'video' ? (
                                    <div className="relative w-full h-full">
                                        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                                            <Image
                                                src="/assets/images/ChurchView.jpg"
                                                alt={update.title}
                                                fill
                                                className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <PlayCircle className="w-16 h-16 text-white absolute z-10 opacity-80 group-hover:scale-110 transition-transform" />
                                        </div>
                                    </div>
                                ) : (
                                    <Image
                                        src={update.media}
                                        alt={update.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                )}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-darkMossGreen uppercase tracking-widest border border-white">
                                        {update.category}
                                    </span>
                                </div>
                                {update.type === 'video' && (
                                    <div className="absolute top-4 right-4">
                                        <div className="w-8 h-8 rounded-full bg-earthYellow flex items-center justify-center text-white">
                                            <PlayCircle className="w-5 h-5" />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-darkMossGreen transition-colors line-clamp-1">
                                {update.title}
                            </h3>
                            <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                                {update.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Media Pop-out Modal */}
            <AnimatePresence>
                <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
                    <DialogContent className="max-w-[95vw] md:max-w-5xl p-0 overflow-hidden bg-white/95 backdrop-blur-xl border-none shadow-2xl rounded-[2.5rem] outline-none">
                        <DialogHeader className="sr-only p-0">
                            <DialogTitle>{selectedMedia?.title || "Update Media"}</DialogTitle>
                        </DialogHeader>
                        <div className="relative aspect-video bg-black flex items-center justify-center">
                            {selectedMedia && (
                                selectedMedia.type === 'video' ? (
                                    <video
                                        src={selectedMedia.media}
                                        className="w-full h-full object-contain"
                                        controls
                                        autoPlay
                                    />
                                ) : (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={selectedMedia.media}
                                            alt={selectedMedia.title}
                                            fill
                                            className="object-contain"
                                            quality={100}
                                        />
                                    </div>
                                )
                            )}
                            <button
                                onClick={() => setSelectedMedia(null)}
                                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <div className="p-8 md:p-12">
                            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{selectedMedia?.title}</h4>
                            <p className="text-gray-600 text-lg leading-relaxed">{selectedMedia?.description}</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </AnimatePresence>
        </section>
    );
}
