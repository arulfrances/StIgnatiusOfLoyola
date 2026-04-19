"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Clock,
  MapPin,
} from "lucide-react";
import { format, isPast, isFuture, compareDesc } from "date-fns";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import PageHeader from "@/components/sections/PageHeader";

const events = [
  {
    id: 2,
    title: "Parish Feast",
    date: new Date(2025, 6, 31), // July 31, 2025 (month is 0-indexed)
    endDate: new Date(2025, 6, 31),
    time: "9:00 AM - 4:00 PM",
    location: "Akarai Kodiveri",
    description:
      "A great event for the parishioners and families to dedicate the festival for Patron Saint.",
    image: "/assets/images/ChurchView.jpg",
    activities: ["Holy Mass", "Prayers", "Festival Car"],
  },
  {
    id: 1,
    title: "Mother Mary - Feast of nativity 2025",
    date: new Date(2025, 8, 8), // September 8, 2025
    endDate: new Date(2025, 8, 8),
    time: "9:00 AM - 4:00 PM",
    location: "Akarai Kodiveri",
    description: "Togetherness with Mother Mary on her Feast of nativity",
    image: "/assets/images/events/Mother Mary - Car Procession 2025.jpg",
    activities: ["Holy Mass", "Prayers", "Festival Car"],
  },
];

const EVENTS_PER_PAGE = 10;

export default function EventPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => compareDesc(a.date, b.date));
  }, []);

  const paginatedEvents = useMemo(() => {
    const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
    return sortedEvents.slice(startIndex, startIndex + EVENTS_PER_PAGE);
  }, [sortedEvents, currentPage]);

  const totalPages = Math.ceil(sortedEvents.length / EVENTS_PER_PAGE);

  const getEventStatus = (eventDate: Date) => {
    if (isPast(eventDate)) return "Past";
    if (isFuture(eventDate)) return "Upcoming";
    return "Today";
  };

  return (
    <div className="bg-[#fafafa] min-h-screen pb-24 font-sans">
      <PageHeader 
        title="Parish Events"
        subtitle="Join us in fellowship and community"
        description="Stay connected through our upcoming services, festivals, and gatherings."
        backgroundImage="/assets/images/ChurchView.jpg"
      />

      <div className="container mx-auto px-4 mt-12 mb-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {paginatedEvents.map((event) => (
            <Card key={event.id} className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2rem] bg-white">
              <div className="flex flex-col lg:flex-row">
                {/* Event Image */}
                <div className="w-full lg:w-80 h-64 lg:h-auto relative flex-shrink-0 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-md text-darkMossGreen font-bold border-none shadow-sm capitalize">
                      {getEventStatus(event.date)}
                    </Badge>
                  </div>
                </div>

                {/* Event Info */}
                <div className="flex flex-col flex-grow p-8">
                  <div className="mb-4">
                    <div className="text-earthYellow font-bold text-sm tracking-widest uppercase mb-2">
                      {format(event.date, "MMMM d, yyyy")}
                      {event.endDate &&
                        event.endDate.toDateString() !== event.date.toDateString() && (
                          <> - {format(event.endDate, "MMMM d, yyyy")}</>
                        )}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 group-hover:text-darkMossGreen transition-colors">
                      {event.title}
                    </h3>
                  </div>
                  
                  <div className="flex-grow">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3 text-sm text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <Clock className="w-4 h-4 text-darkMossGreen" />
                        <span className="font-medium text-gray-700">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <MapPin className="w-4 h-4 text-darkMossGreen" />
                        <span className="font-medium text-gray-700">{event.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                       {event.activities.map((activity, idx) => (
                         <span key={idx} className="px-3 py-1 bg-pakistanGreen/5 text-pakistanGreen text-[10px] font-bold uppercase tracking-widest rounded-full border border-pakistanGreen/10">
                           {activity}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-6">
            <Button
              className="rounded-full bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-sm transition-all px-8 h-12 font-bold"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <div className="flex items-center gap-2 font-bold text-gray-500">
              <span className="text-darkMossGreen">{currentPage}</span> / {totalPages}
            </div>
            <Button
              className="rounded-full bg-darkMossGreen text-white hover:bg-pakistanGreen shadow-md transition-all px-8 h-12 font-bold"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
