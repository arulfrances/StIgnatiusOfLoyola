"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format, isPast, isFuture, compareDesc } from "date-fns";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: 1,
    title: "Parish Feast",
    date: new Date(2025, 7, 31), // July 31, 2025
    endDate: new Date(2025, 7, 31), // July 20, 2023
    time: "9:00 AM - 4:00 PM",
    location: "Akarai Kodiveri",
    description:
      "A great event for the parishioners and families to dedicate the festival for Patron Saint.",
    image: "/assets/images/ChurchView.jpg",
    activities: [
      "Holy Mass",
      "Prayers",
      "Festival Car"
    ],
  },
   {
    id: 1,
    title: "Mother Mary - Feast of nativity 2025",
    date: new Date(2025, 9, 8), // September 8, 2025
    endDate: new Date(2025, 9, 8), // September 8, 2025
    time: "9:00 AM - 4:00 PM",
    location: "Akarai Kodiveri",
    description:
      "Togetherness with Mother Mary on her Feast of nativity",
    image: "/events/Mother Mary - Car Procession 2025.jpg",
    activities: [
      "Holy Mass",
      "Prayers",
      "Festival Car"
    ],
  }
  
];

const EVENTS_PER_PAGE = 10;

export default function EventPage() {
  const [view, setView] = useState<"list" | "calendar">("list");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [currentPage, setCurrentPage] = useState(1);

  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => compareDesc(a.date, b.date));
  }, []);

  const paginatedEvents = useMemo(() => {
    const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
    return sortedEvents.slice(startIndex, startIndex + EVENTS_PER_PAGE);
  }, [sortedEvents, currentPage]);

  const totalPages = Math.ceil(sortedEvents.length / EVENTS_PER_PAGE);

  const filteredEvents = selectedDate
    ? events.filter(
        (event) =>
          event.date.toDateString() === selectedDate.toDateString() ||
          (event.endDate &&
            selectedDate >= event.date &&
            selectedDate <= event.endDate)
      )
    : events;

  const getEventStatus = (eventDate: Date) => {
    if (isPast(eventDate)) {
      return <Badge variant="destructive">Past</Badge>;
    } else if (isFuture(eventDate)) {
      return <Badge variant="default">Upcoming</Badge>;
    }
    return <Badge variant="default">Today</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gray-900 -mt-[104px] md:-mt-[112px]">
        <div className="absolute inset-0">
          <Image
            src="/assets/placeholder.svg"
            alt="Events"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
        </div>

        <div className="relative min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4 pt-[104px] md:pt-[112px]">
            <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                Church Events
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-white/90 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                Join us in fellowship and community
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* View Toggle Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4 mb-8">
            <Button
              variant={view === "list" ? "default" : "outline"}
              onClick={() => setView("list")}>
              List View
            </Button>
            <Button
              variant={view === "calendar" ? "default" : "outline"}
              onClick={() => setView("calendar")}>
              Calendar View
            </Button>
          </motion.div>

          {view === "list" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}>
                  <Card className="h-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-semibold text-gray-800">
                          {event.title}
                        </CardTitle>
                        {getEventStatus(event.date)}
                      </div>
                      <CardDescription className="text-sm text-gray-600">
                        {format(event.date, "MMMM d, yyyy")}{" "}
                        {event.endDate &&
                          `- ${format(event.endDate, "MMMM d, yyyy")}`}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 line-clamp-2">
                        {event.description}
                      </p>
                    </CardContent>
                    <CardContent>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full">
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>{event.title}</DialogTitle>
                            <DialogDescription>
                              {event.date.toLocaleDateString()}{" "}
                              {event.endDate &&
                                `- ${event.endDate.toLocaleDateString()}`}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="flex items-center gap-4">
                              <Image
                                src={event.image}
                                alt={event.title}
                                width={150}
                                height={150}
                                className="rounded-md object-cover"
                              />
                              <p className="text-sm text-gray-700">
                                {event.description}
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4 text-blue-500" />
                                {event.time}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="mr-2 h-4 w-4 text-blue-500" />
                                {event.location}
                              </div>
                            
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Activities:</h4>
                              <ul className="list-disc list-inside text-sm">
                                {event.activities.map((activity, index) => (
                                  <li key={index}>{activity}</li>
                                ))}
                              </ul>
                            </div>
        
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="md:w-1/2">
                <Card>
                  <CardHeader>
                    <CardTitle>Event Calendar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CalendarComponent
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:w-1/2">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Events on {selectedDate?.toLocaleDateString()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {filteredEvents.length > 0 ? (
                      <ul className="space-y-4">
                        {filteredEvents.map((event) => (
                          <li
                            key={event.id}
                            className="border-b pb-4 last:border-b-0">
                            <div className="flex justify-between items-start">
                              <h3 className="font-semibold">{event.title}</h3>
                              {getEventStatus(event.date)}
                            </div>
                            <p className="text-sm text-gray-600">{event.time}</p>
                            <p className="text-sm text-gray-600">
                              {event.location}
                            </p>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" className="mt-2">
                                  View Details
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                  <DialogTitle>{event.title}</DialogTitle>
                                  <DialogDescription>
                                    {event.date.toLocaleDateString()}{" "}
                                    {event.endDate &&
                                      `- ${event.endDate.toLocaleDateString()}`}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                  <div className="flex items-center gap-4">
                                    <Image
                                      src={event.image}
                                      alt={event.title}
                                      width={150}
                                      height={150}
                                      className="rounded-md object-cover"
                                    />
                                    <p className="text-sm text-gray-700">
                                      {event.description}
                                    </p>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center">
                                      <Clock className="mr-2 h-4 w-4 text-blue-500" />
                                      {event.time}
                                    </div>
                                    <div className="flex items-center">
                                      <MapPin className="mr-2 h-4 w-4 text-blue-500" />
                                      {event.location}
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold mb-2">
                                      Activities:
                                    </h4>
                                    <ul className="list-disc list-inside text-sm">
                                      {event.activities.map((activity, index) => (
                                        <li key={index}>{activity}</li>
                                      ))}
                                    </ul>
                                  </div>
                        
                                </div>
                              </DialogContent>
                            </Dialog>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No events on this date.</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Add pagination controls at the bottom */}
      {view === "list" && totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}>
            Previous
          </Button>
          <span className="flex items-center px-4">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}>
            Next
          </Button>
        </motion.div>
      )}
    </div>
  );
}
