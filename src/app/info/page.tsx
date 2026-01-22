'use client';

import Header from '@/components/Header';
import Link from 'next/link';
import { useState } from 'react';

export default function InfoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Do you accept NHIF?", a: "Yes, we accept NHIF and all major private insurance covers." },
    { q: "What are the visiting hours?", a: "General Ward: 6AM-8AM, 1PM-2PM, 4PM-6PM. ICU: Family only, 12PM-1PM." },
    { q: "Where is the pharmacy?", a: "The pharmacy is located on the Ground Floor, next to Casualty." },
  ];

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <Header />
      
      <div className="p-5 flex-1 pb-10">
        <div className="mb-4 flex gap-2">
           <Link href="/" className="px-4 py-2 bg-white rounded-lg text-sm font-semibold text-gray-600 shadow-sm border border-gray-200">
             ← Home
           </Link>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-6">Hospital Info</h2>

        {/* Status Card */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 mb-6">
           <div className="flex items-center gap-3 mb-3">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="font-bold text-gray-800">Open Now</span>
           </div>
           <p className="text-sm text-gray-500 mb-4">
             Casualty & Emergency services are open 24/7.
             <br/>
             Outpatient Clinics close at 5:00 PM.
           </p>
           <button className="w-full py-3 bg-gray-50 rounded-xl text-primary font-bold text-sm">
             Get Directions (Map)
           </button>
        </div>

        {/* FAQs */}
        <h3 className="font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-4 flex justify-between items-center text-left"
              >
                <span className="font-semibold text-gray-700 text-sm">{faq.q}</span>
                <span className="text-gray-400">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4 text-sm text-gray-500 animate-fade-in bg-gray-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
