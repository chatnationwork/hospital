import Header from '@/components/Header';
import Link from 'next/link';

export default function ConfirmationPage() {
  return (
    <div className="flex-1 flex flex-col bg-white">
      <Header />
      
      <div className="p-8 flex flex-col items-center justify-center flex-1 text-center">
        
        {/* Animated Checkmark Circle */}
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
           <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
             </svg>
           </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-500 mb-8 max-w-[260px]">
          Your appointment has been successfully scheduled. We have sent a confirmation to your WhatsApp.
        </p>

        <div className="bg-gray-50 w-full p-4 rounded-xl border border-dashed border-gray-300 mb-8 text-left">
           <div className="flex justify-between mb-2">
             <span className="text-gray-400 text-sm">Date</span>
             <span className="text-gray-800 font-semibold text-sm">Tue, 13 Oct</span>
           </div>
           <div className="flex justify-between mb-2">
             <span className="text-gray-400 text-sm">Time</span>
             <span className="text-gray-800 font-semibold text-sm">09:30 AM</span>
           </div>
           <div className="flex justify-between">
             <span className="text-gray-400 text-sm">Doctor</span>
             <span className="text-gray-800 font-semibold text-sm">Dr. John Smith</span>
           </div>
        </div>

        <Link href="/" className="w-full py-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
