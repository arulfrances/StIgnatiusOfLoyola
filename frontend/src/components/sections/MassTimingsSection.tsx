"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, CalendarDays } from "lucide-react";

const timings = [
  { day: "Weekdays (Mon - Sat)", time: "6:30 AM", type: "Main Parish" },
  { day: "Sundays", time: "8:30 AM", type: "Main Parish" },
];

const substations = [
  { name: "Elathur", time: "5:30 AM", day: "Sunday" },
  { name: "OG Palayam", time: "6:45 AM", day: "Sunday" },
  { name: "Kurumanthur", time: "6:00 PM", day: "Thursday" },
];

export default function MassTimingsSection() {
  return (
    <section className="relative py-8 bg-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cornsilk/30 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pakistanGreen/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-darkMossGreen/5 text-darkMossGreen border border-darkMossGreen/10 text-sm font-semibold mb-6"
          >
            <Clock className="w-4 h-4" />
            Join Us for Worship
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Mass Timings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Experience the sacred liturgy with us at St. Ignatius of Loyola Church and our substations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Main Parish Timings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50/50 backdrop-blur-sm p-8 rounded-[2rem] border border-gray-100 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-darkMossGreen mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-darkMossGreen text-white flex items-center justify-center shadow-lg">
                <MapPin className="w-5 h-5" />
              </span>
              Main Parish
            </h3>
            <div className="space-y-6">
              {timings.map((t, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white shadow-sm border border-gray-50 group hover:border-earthYellow/30 transition-all">
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">{t.day}</p>
                    <p className="text-xl font-bold text-gray-900">{t.time}</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-cornsilk flex items-center justify-center text-earthYellow">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-darkMossGreen rounded-2xl text-white">
              <p className="text-sm opacity-80 mb-2">Location</p>
              <p className="font-semibold">Akkarai Kodiveri, Gopi Taluka, Erode - 638454</p>
            </div>
          </motion.div>

          {/* Substations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Substations</h3>
              <p className="text-gray-600 mb-8">Weekend services in our neighboring communities.</p>
              
              <div className="grid gap-4">
                {substations.map((s, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-pakistanGreen/5 flex items-center justify-center text-pakistanGreen shrink-0 font-bold text-lg">
                      {s.name[0]}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-gray-900">{s.name}</h4>
                      <p className="text-gray-500">{s.day} at {s.time}</p>
                    </div>
                    <div className="group-hover:translate-x-1 transition-transform">
                      <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
