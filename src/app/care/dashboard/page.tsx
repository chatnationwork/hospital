'use client';

import Header from '@/components/Header';
import Link from 'next/link';

export default function CareDashboardPage() {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <Header />
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-4">
           <Link href="/" className="px-4 py-2 bg-white rounded-lg text-sm font-semibold text-gray-600 shadow-sm border border-gray-200">
             ← Home
           </Link>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-2">My Care Dashboard</h2>
        <p className="text-gray-500 text-sm mb-6">Recovery plan & medications</p>

        {/* Discharge Note Snippet */}
        <div className="bg-indigo-50 p-5 rounded-2xl border border-indigo-100 mb-6">
           <h3 className="font-bold text-indigo-900 mb-2">Doctor's Note</h3>
           <p className="text-sm text-indigo-800 italic">
             "Patient is recovering well. Keep the wound dry and avoid heavy lifting for 3 days."
           </p>
           <div className="mt-3 text-xs text-indigo-600 font-semibold">
             Dr. Smith • 12 Oct
           </div>
        </div>

        {/* Medication Timeline */}
        <h3 className="font-bold text-gray-800 mb-4">Medications Today</h3>
        <div className="space-y-4 mb-8">
           <div className="flex gap-4">
              <div className="flex flex-col items-center">
                 <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">08:00</div>
                 <div className="flex-1 w-0.5 bg-gray-200 my-1"></div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex-1">
                 <div className="font-bold text-gray-800">Amoxicillin (500mg)</div>
                 <div className="text-xs text-gray-500">Take with food</div>
              </div>
           </div>

           <div className="flex gap-4">
              <div className="flex flex-col items-center">
                 <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">14:00</div>
                 <div className="flex-1 w-0.5 bg-gray-200 my-1"></div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex-1">
                 <div className="font-bold text-gray-800">Paracetamol</div>
                 <div className="text-xs text-gray-500">For pain management</div>
              </div>
           </div>
        </div>

       

        {/* Quick Actions */}
        <div className="space-y-3">
           <Link href="/appointments" className="block bg-white p-4 rounded-xl shadow-sm border border-slate-100 active:scale-95 transition-transform">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg">📅</div>
                 <div>
                    <div className="font-bold text-gray-800">Book Follow-Up</div>
                    <div className="text-xs text-gray-500">Schedule your next visit</div>
                 </div>
              </div>
           </Link>
           <Link href="https://wa.me/+254708427694" className="block bg-white p-4 rounded-xl shadow-sm border border-slate-100 active:scale-95 transition-transform">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-lg">💬</div>
                 <div>
                    <div className="font-bold text-gray-800">Talk to a Nurse</div>
                    <div className="text-xs text-gray-500">Get help with recovery</div>
                 </div>
              </div>
           </Link>
        </div>

         {/* Post-Visit Check-In */}
        <div className="bg-teal-50 p-5 rounded-2xl border border-teal-100 mb-6">
           <h3 className="font-bold text-teal-900 mb-3">How are you feeling?</h3>
           <p className="text-sm text-teal-700 mb-4">Help us track your recovery</p>
           <Link 
             href="/feedback"
             className="block w-full py-3 bg-teal-600 text-white font-bold rounded-xl text-center active:scale-95 transition-transform shadow-sm"
           >
             Share Feedback
           </Link>
        </div>

      </div>
    </div>
  );
}
