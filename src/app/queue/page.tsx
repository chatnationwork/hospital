import Header from '@/components/Header';
import Link from 'next/link';

export default function QueuePage() {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <Header />
      
      <div className="p-6 flex flex-col items-center">
        <h2 className="text-xl font-bold text-gray-800 mb-6 w-full">Current Queue Status</h2>
        
        {/* Ticket Card */}
        <div className="bg-white w-full rounded-3xl shadow-sm border border-slate-200 overflow-hidden relative mb-6">
           <div className="bg-primary h-3 w-full"></div>
           <div className="p-8 flex flex-col items-center">
              <span className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-1">Your Ticket</span>
              <h1 className="text-6xl font-black text-primary mb-2">A-04</h1>
              <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                 Confirmed
              </div>
           </div>
           
           {/* Scan Line effect or perforated edge visual could go here */}
           <div className="border-t border-dashed border-gray-200 w-full relative">
             <div className="absolute -left-3 -top-3 w-6 h-6 bg-gray-50 rounded-full"></div>
             <div className="absolute -right-3 -top-3 w-6 h-6 bg-gray-50 rounded-full"></div>
           </div>
           
           <div className="p-6 bg-slate-50 flex justify-between items-center">
              <div className="text-center flex-1 border-r border-gray-200">
                 <div className="text-2xl font-bold text-gray-800">3</div>
                 <div className="text-xs text-gray-400 font-medium uppercase">Ahead of you</div>
              </div>
              <div className="text-center flex-1">
                 <div className="text-2xl font-bold text-gray-800">12<span className="text-sm font-normal text-gray-400 ml-1">min</span></div>
                 <div className="text-xs text-gray-400 font-medium uppercase">Est. Wait</div>
              </div>
           </div>
        </div>

        {/* Current Serving */}
        <div className="w-full bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-6 flex items-center justify-between">
           <div>
             <div className="text-sm text-gray-400">Now Serving</div>
             <div className="font-bold text-xl text-gray-800">A-01</div>
           </div>
           
           <div className="text-right">
              <div className="text-sm text-gray-400">Doctor</div>
              <div className="font-bold text-gray-800 text-sm">Room 4</div>
           </div>
        </div>

      </div>
    </div>
  );
}
