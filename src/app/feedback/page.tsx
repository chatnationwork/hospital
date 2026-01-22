'use client';

import Header from '@/components/Header';
import Link from 'next/link';
import { useState } from 'react';

export default function FeedbackPage() {
  const [sentiment, setSentiment] = useState<string | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);

  const [negativeReasons, setNegativeReasons] = useState<string[]>([]);

  const toggleReason = (reason: string) => {
    if (negativeReasons.includes(reason)) {
      setNegativeReasons(negativeReasons.filter(r => r !== reason));
    } else {
      setNegativeReasons([...negativeReasons, reason]);
    }
  };

  const isPositive = rating > 3;

  if (submitted) {
    return (
      <div className="flex-1 flex flex-col bg-white">
        <Header />
        <div className="p-10 flex flex-col items-center justify-center flex-1 text-center">
          <div className="text-6xl mb-4">{isPositive ? '🙏' : '🙇'}</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{isPositive ? 'Thank you!' : 'We are sorry.'}</h2>
          <p className="text-gray-500 mb-6">
            {isPositive ? 'Your feedback helps us improve.' : 'A service officer will contact you shortly.'}
          </p>
          <Link href="/" className="px-6 py-3 bg-gray-100 rounded-xl text-gray-800 font-bold">Return to Main Menu</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <Header />
      
      <div className="p-6 flex-1 flex flex-col h-full overflow-y-auto">
        <div className="mb-4">
           <Link href="/" className="px-4 py-2 bg-white rounded-lg text-sm font-semibold text-gray-600 shadow-sm border border-gray-200">
             ← Home
           </Link>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-6">How was your visit?</h2>
        
        {/* Sentiment */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-3">How are you feeling?</label>
          <div className="flex justify-between gap-2">
            {[
              { label: 'Better', emoji: '🙂', val: 'better' },
              { label: 'Same', emoji: '😐', val: 'same' },
              { label: 'Worse', emoji: '☹️', val: 'worse' }
            ].map((opt) => (
              <button
                key={opt.val}
                onClick={() => setSentiment(opt.val)}
                className={`flex-1 py-4 rounded-xl border flex flex-col items-center transition-all ${
                  sentiment === opt.val 
                    ? 'bg-secondary/10 border-secondary ring-1 ring-secondary' 
                    : 'bg-white border-slate-200 hover:bg-gray-50'
                }`}
              >
                <div className="text-3xl mb-1">{opt.emoji}</div>
                <div className="text-xs font-semibold text-gray-600">{opt.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Star Rating */}
        <div className="mb-8">
           <label className="block text-sm font-medium text-gray-700 mb-3">Rate your experience</label>
           <div className="flex justify-center gap-2 bg-white p-4 rounded-2xl border border-slate-100">
             {[1, 2, 3, 4, 5].map((star) => (
               <button
                 key={star}
                 onClick={() => setRating(star)}
                 className="text-3xl focus:outline-none transition-transform active:scale-125"
               >
                 {star <= rating ? '⭐' : '⬜'}
               </button>
             ))}
           </div>
        </div>

        {/* Conditional Negative Feedback Section */}
        {rating > 0 && rating <= 3 && (
            <div className="mb-8 animate-fade-in">
               <label className="block text-sm font-medium text-gray-700 mb-3">What went wrong?</label>
               <div className="flex flex-wrap gap-2">
                 {['Waiting Time', 'Staff Behavior', 'Billing Issue', 'Facilities', 'Other'].map((tag) => (
                   <button
                      key={tag}
                      onClick={() => toggleReason(tag)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                        negativeReasons.includes(tag)
                          ? 'bg-red-50 text-red-600 border-red-200'
                          : 'bg-white text-gray-600 border-slate-200'
                      }`}
                   >
                     {tag}
                   </button>
                 ))}
               </div>
            </div>
        )}
        
        <div className="mt-8">
          <button 
            onClick={() => setSubmitted(true)}
            disabled={!sentiment || rating === 0}
            className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all ${
              (!sentiment || rating === 0)
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-primary active:scale-95'
            }`}
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}
