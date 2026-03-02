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
    <div className="container mx-auto p-4">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Church Events</h1>
        <p className="text-gray-600">Join us in fellowship and community</p>
      </header>

      {/* List View */}
      <div className="space-y-6">
        {paginatedEvents.map((event) => (
          <Card key={event.id} className="p-4 flex gap-6">
            {/* Event Image */}
            <div className="w-64 h-40 relative flex-shrink-0">
              <Image
                src={event.image}
                alt={event.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </div>
            {/* Event Info */}
            <div className="flex flex-col flex-grow">
              <CardHeader className="flex justify-between items-center mb-2">
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <Badge variant="secondary">{getEventStatus(event.date)}</Badge>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-2 font-semibold">
                  {format(event.date, "MMMM d, yyyy")}
                  {event.endDate &&
                    event.endDate.toDateString() !== event.date.toDateString() && (
                      <> - {format(event.endDate, "MMMM d, yyyy")}</>
                    )}
                </div>
                <p className="mb-2">{event.description}</p>
                <p className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                  <Clock size={16} />
                  {event.time}
                </p>
                <p className="flex items-center gap-2 text-sm text-gray-700">
                  <MapPin size={16} />
                  {event.location}
                </p>
                <div className="mt-3">
                  <strong>Activities:</strong>
                  <ul className="list-disc list-inside">
                    {event.activities.map((activity, idx) => (
                      <li key={idx}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center gap-4">
          <Button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <div className="flex items-center gap-2">
            Page {currentPage} of {totalPages}
          </div>
          <Button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
