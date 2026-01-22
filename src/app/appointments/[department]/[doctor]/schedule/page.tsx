'use client';

import { use, useState } from 'react';
import Header from '@/components/Header';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Mock availability
const DATES = [
  { day: 'Mon', date: '12' },
  { day: 'Tue', date: '13', active: true },
  { day: 'Wed', date: '14' },
  { day: 'Thu', date: '15' },
  { day: 'Fri', date: '16' },
  { day: 'Sat', date: '17' },
];

const SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM',
  '02:00 PM', '02:30 PM', '04:00 PM'
];

export default function SchedulePage({ params }: { params: Promise<{ department: string; doctor: string }> }) {
  const { department, doctor } = use(params);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const router = useRouter();

  const handleConfirm = () => {
    // In a real app, post data here
    router.push('/appointments/confirmation');
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <Header />
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-6">
          <Link href={`/appointments/${department}`} className="text-secondary text-sm font-medium flex items-center gap-1">
            ← Back to Doctors
          </Link>
          <h2 className="text-xl font-bold text-gray-800 mt-2">Select Date & Time</h2>
          <p className="text-gray-500 text-sm">Doctor availability</p>
        </div>

        {/* Date Horizontal Scroll */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {DATES.map((d, i) => (
            <button 
              key={i} 
              className={`flex-shrink-0 w-16 h-20 rounded-2xl flex flex-col items-center justify-center border transition-all ${
                d.active 
                  ? 'bg-primary text-white border-primary shadow-lg scale-105' 
                  : 'bg-white text-gray-400 border-slate-100'
              }`}
            >
              <div className="text-xs font-medium uppercase">{d.day}</div>
              <div className="text-xl font-bold">{d.date}</div>
            </button>
          ))}
        </div>

        {/* Time Grid */}
        <div className="mb-8">
           <h3 className="font-semibold text-gray-800 mb-3">Available Slots</h3>
           <div className="grid grid-cols-3 gap-3">
             {SLOTS.map((slot) => (
               <button
                 key={slot}
                 onClick={() => setSelectedSlot(slot)}
                 className={`py-3 px-2 rounded-xl text-sm font-medium border transition-colors ${
                   selectedSlot === slot 
                     ? 'bg-secondary text-white border-secondary' 
                     : 'bg-white text-gray-600 border-slate-200 hover:border-secondary'
                 }`}
               >
                 {slot}
               </button>
             ))}
           </div>
        </div>
        
        <div className="mt-auto">
          <button 
            disabled={!selectedSlot}
            onClick={handleConfirm}
            className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-transform ${
              selectedSlot 
                ? 'bg-primary active:scale-95' 
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Confirm Appointment
          </button>
        </div>
        
      </div>
    </div>
  );
}
