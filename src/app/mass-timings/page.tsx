import React from 'react';
import PageHeader from '@/components/sections/PageHeader';

export default function MassTimingsPage() {
  return (
    <main>
      <PageHeader
        title="Mass Timings"
        description="Join us for worship"
        backgroundImage="/assets/icons/new-placeholder.svg"
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto" >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Mass Timings</h2>
              <div className="text-gray-600 mb-6 whitespace-pre-line">
  Mass Timing in the Main Parish:
  {"\n"}
  <b>Weekdays (Monday to Saturday): 6:30 AM</b>{"\n"}
  <b>Sundays: 8:30 AM</b>{"\n\n"}
  Substations:
  {"\n"}1. Elathur: 5:30 AM on Sunday
  {"\n"}2. OG Palayam: 6:45 AM on Sunday
  {"\n"}3. Kurumanthur: 6:00 PM on Thursday
</div>

             
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Church Location</h2>
              <p className="text-gray-600 mb-6">
                <div className="text-gray-800 leading-relaxed space-y-1">
  <p>Church Address:</p>
  <p>St. Loyola of Ignatius Church (A unit of Coimbatore Diocese Society)</p>
  <p>Akkarai Kodiveri</p>
  <p>Gopi Taluka</p>
  <p>Erode District</p>
  <p>Pin code: 638454</p>
  <p>Parish Priest Mobile: +91 94427 64539</p>
</div>

              </p>
              <div>
                <a 
                  href="/get-involved"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition duration-300"
                >
                  Connect With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
