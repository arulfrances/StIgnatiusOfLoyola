import React from "react";
import PageHeader from "@/components/sections/PageHeader";

export const metadata = {
  title: "Contact Us | St. Ignatius of Loyola Church",
  description: "Contact information and location of St. Ignatius of Loyola Church",
};

function GoogleMap() {
  return (
    <div className="w-full h-72 sm:h-96 rounded-lg overflow-hidden shadow-lg mb-12">
      <iframe
        title="St. Ignatius of Loyola Church Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.900801825747!2d77.67732431525807!3d11.237564491849802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8590bc78eecf1%3A0x65ff1197e44b6d5!2sSt%20Loyola%20of%20Ignatius%20Church!5e0!3m2!1sen!2sin!4v1682518036857!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default function ContactUsPage() {
  return (
    <main>
      <PageHeader
        title="Contact Us"
        backgroundImage="/assets/icons/new-placeholder.svg"
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Church Location</h2>
        <GoogleMap />
        <div className="text-gray-800 leading-relaxed space-y-3 text-center sm:text-left">
          <p><strong>Church Address:</strong></p>
          <p>St. Loyola of Ignatius Church (A unit of Coimbatore Diocese Society)</p>
          <p>Akkarai Kodiveri</p>
          <p>Gopi Taluka</p>
          <p>Erode District</p>
          <p>Pin code: 638454</p>
          <p><strong>Parish Priest Name:</strong> Rev.Fr. John Paul Vincent</p>
          <p><strong>Parish Priest Mobile:</strong> +91 94427 64539</p>
        </div>
      </section>
    </main>
  );
}
