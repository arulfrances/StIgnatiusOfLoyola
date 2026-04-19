import React from 'react';
import PageHeader from '@/components/sections/PageHeader';
import { Clock, MapPin, Phone, MessageSquare } from "lucide-react";
import Link from 'next/link';

export default function MassTimingsPage() {
  const sections = [
    {
      title: "Main Parish Services",
      subtitle: "Join our main congregation at Akkarai Kodiveri",
      times: [
        { label: "Daily Mass (Mon - Sat)", time: "6:30 AM", icon: Clock },
        { label: "Sunday Solemn Mass", time: "8:30 AM", icon: Clock },
      ],
      location: "St. Ignatius of Loyola Church, Akkarai Kodiveri"
    },
    {
      title: "Substation Services",
      subtitle: "Worship in our neighboring villages",
      times: [
        { label: "Sunday Service (Elathur)", time: "5:30 AM", icon: Clock },
        { label: "Sunday Service (OG Palayam)", time: "6:45 AM", icon: Clock },
        { label: "Thursday Service (Kurumanthur)", time: "6:00 PM", icon: Clock },
      ],
      location: "Various Sub-stations"
    }
  ];

  return (
    <main className="bg-[#fafafa] min-h-screen pb-24">
      <PageHeader
        title="Worship Moments"
        description="Daily and Sunday Mass timings for our Parish and Substations."
        backgroundImage="/assets/images/Church-FrontView.jpg"
      />
      
      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Timings Column */}
          <div className="lg:col-span-2 space-y-8">
            {sections.map((section, idx) => (
              <div key={idx} className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{section.title}</h2>
                  <p className="text-gray-500 font-medium">{section.subtitle}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.times.map((t, tidx) => (
                    <div key={tidx} className="group flex items-center gap-6 p-6 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-100">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-darkMossGreen group-hover:bg-darkMossGreen group-hover:text-white transition-all">
                        <t.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-earthYellow uppercase tracking-widest mb-1">{t.label}</p>
                        <p className="text-2xl font-black text-gray-900">{t.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact & Location Column */}
          <div className="space-y-8">
            <div className="bg-darkMossGreen rounded-[2.5rem] p-10 text-white shadow-2xl shadow-darkMossGreen/20">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                <MapPin className="w-6 h-6 text-earthYellow" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Visit Our Parish</h3>
              <div className="space-y-4 text-white/80 leading-relaxed mb-10">
                <p className="font-bold text-white">St. Ignatius of Loyola Church</p>
                <p>Akkarai Kodiveri, Gopi Taluka</p>
                <p>Erode District, Tamil Nadu</p>
                <p>Pin code: 638454</p>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank"
                className="block w-full py-4 text-center bg-white text-darkMossGreen font-bold rounded-2xl hover:bg-earthYellow hover:text-black transition-all"
              >
                Get Directions
              </a>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Need Assistance?</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-darkMossGreen">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Parish Priest</p>
                    <p className="font-bold">+91 94427 64539</p>
                  </div>
                </div>
                <Link 
                  href="/contact"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-earthYellow/10 flex items-center justify-center text-earthYellow group-hover:bg-earthYellow group-hover:text-white transition-all">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-gray-700 group-hover:text-darkMossGreen transition-colors">Send a Message</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
