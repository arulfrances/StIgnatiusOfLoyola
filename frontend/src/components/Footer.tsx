"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-earthYellow/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight">
              St. Ignatius <span className="text-earthYellow">of Loyola</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Experience the power of worship and community. Join us in our journey of faith, 
              service, and love in Akkaraikodiveri.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-earthYellow hover:text-black transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-earthYellow uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Our Parish', href: '/about' },
                { name: 'Mass Timings', href: '/mass-timings' },
                { name: 'Get Involved', href: '/get-involved' },
                { name: 'Events', href: '/events' },
                { name: 'Giving', href: '/give' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-earthYellow scale-0 group-hover:scale-100 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-earthYellow uppercase tracking-widest">Ministries</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Youth Ministry</li>
              <li>Sunday School</li>
              <li>Choir Ministry</li>
              <li>Community Outreach</li>
              <li>Prayer Group</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold mb-8 text-earthYellow uppercase tracking-widest">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex gap-4 text-gray-400">
                <MapPin className="w-6 h-6 shrink-0 text-earthYellow" />
                <p>Akkarai Kodiveri, Gopi Taluka, Erode District, TN - 638454</p>
              </div>
              <div className="flex gap-4 text-gray-400">
                <Phone className="w-6 h-6 shrink-0 text-earthYellow" />
                <p>+91 94427 64539</p>
              </div>
              <div className="flex gap-4 text-gray-400">
                <Mail className="w-6 h-6 shrink-0 text-earthYellow" />
                <p>contact@stignatiusparish.church</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} St. Ignatius of Loyola Church. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-earthYellow hover:border-earthYellow hover:text-black transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
