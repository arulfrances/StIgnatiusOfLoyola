"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, Award } from "lucide-react";

export default function ParishPriestSection() {
  return (
    <section className="py-8 bg-cornsilk/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-xl shadow-pakistanGreen/5 p-8 md:p-16 lg:p-20 border border-white relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-earthYellow/5 rounded-full blur-3xl" />
          
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative mb-10"
            >
              {/* Outer ring */}
              <div className="absolute inset-0 -m-4 rounded-full border-2 border-dashed border-earthYellow/30 animate-[spin_20s_linear_infinite]" />
              
              {/* Profile Image */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/assets/images/father-john-paul-vincent.jpg"
                  alt="Rev. Fr. John Paul Vincent"
                  fill
                  className="object-cover object-top transition-transform duration-700"
                />
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-darkMossGreen text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                Parish Priest
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Rev. Fr. John Paul Vincent
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed mb-12 text-lg">
                <p>
                  "Greetings in the name of our Lord Jesus Christ. Since my ordination on May 7th, 1995, 
                  I have been dedicated to serving the faithful and spreading the Gospel. My mission is to 
                  lead this parish as a vibrant, loving community that reflects the light of Christ."
                </p>
                <p className="font-serif italic text-darkMossGreen/60 text-base">
                  — Serving the St. Ignatius community with faith and devotion.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="tel:+919442764539" 
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-gray-100 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-darkMossGreen text-white flex items-center justify-center shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Mobile Number</p>
                    <p className="font-bold text-gray-900">+91 94427 64539</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-transparent">
                  <div className="w-12 h-12 rounded-xl bg-earthYellow text-white flex items-center justify-center shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Office Hours</p>
                    <p className="font-bold text-gray-900">Tue - Sun: 9AM - 1PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
