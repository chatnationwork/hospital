'use client';

import Header from '@/components/Header';
import Link from 'next/link';
import { useState } from 'react';

export default function BillingPage() {
  const [activeTab, setActiveTab] = useState<'bill' | 'insurance'>('bill');
  const [policyNumber, setPolicyNumber] = useState('');
  const [checking, setChecking] = useState(false);
  const [insuranceStatus, setInsuranceStatus] = useState<'none' | 'valid' | 'invalid'>('none');

  const checkInsurance = () => {
    setChecking(true);
    setTimeout(() => {
      setChecking(false);
      setInsuranceStatus(Math.random() > 0.3 ? 'valid' : 'invalid');
    }, 1500);
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <Header />
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-4">
           <Link href="/" className="px-4 py-2 bg-white rounded-lg text-sm font-semibold text-gray-600 shadow-sm border border-gray-200">
             ← Home
           </Link>
        </div>

        {/* Tabs */}
        <div className="flex bg-white p-1 rounded-xl mb-6 shadow-sm">
          <button 
            onClick={() => setActiveTab('bill')}
            className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all ${
              activeTab === 'bill' ? 'bg-primary text-white shadow-md' : 'text-gray-500'
            }`}
          >
            My Bill
          </button>
          <button 
             onClick={() => setActiveTab('insurance')}
             className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all ${
              activeTab === 'insurance' ? 'bg-primary text-white shadow-md' : 'text-gray-500'
            }`}
          >
            Insurance
          </button>
        </div>

        {activeTab === 'bill' ? (
          <div className="animate-fade-in flex-1">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400 font-medium text-sm">Total Due</span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold">Unpaid</span>
                </div>
                <h1 className="text-4xl font-black text-gray-800 mb-1">$ 150.00</h1>
                <p className="text-gray-400 text-xs">Consultation + Lab Tests</p>
                
                <hr className="my-6 border-slate-100"/>
                
                <div className="space-y-3">
                   <div className="flex justify-between text-sm">
                     <span className="text-gray-500">Consultation</span>
                     <span className="font-semibold text-gray-800">$ 50.00</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span className="text-gray-500">Blood Work</span>
                     <span className="font-semibold text-gray-800">$ 100.00</span>
                   </div>
                </div>
             </div>
             
             <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2 mb-3">
               Pay Now
             </button>
             
             <button className="w-full py-3 bg-white text-gray-600 font-semibold rounded-xl border border-gray-200 flex items-center justify-center gap-2">
               Get Receipt on WhatsApp
             </button>
          </div>
        ) : (
          <div className="animate-fade-in flex-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
               <h3 className="font-bold text-gray-800 mb-4">Verify Coverage</h3>
               <div className="mb-4">
                 <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Policy Number</label>
                 <input 
                   type="text" 
                   value={policyNumber}
                   onChange={(e) => setPolicyNumber(e.target.value)}
                   className="w-full p-4 bg-gray-50 rounded-xl font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                   placeholder="Enter policy ID"
                 />
               </div>
               
               <button 
                 onClick={checkInsurance}
                 disabled={checking || !policyNumber}
                 className={`w-full py-4 rounded-xl font-bold text-white shadow-md transition-all mb-6 ${
                    checking || !policyNumber ? 'bg-gray-300' : 'bg-secondary'
                 }`}
               >
                 {checking ? 'Verifying...' : 'Check Status'}
               </button>

               {insuranceStatus === 'valid' && (
                 <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-center gap-3">
                   <div className="w-8 h-8 bg-green-200 text-green-700 rounded-full flex items-center justify-center">✓</div>
                   <div>
                     <div className="font-bold text-green-800">Coverage Active</div>
                     <div className="text-xs text-green-600">Jubilee Insurance • Gold Plan</div>
                   </div>
                 </div>
               )}
               
               {insuranceStatus === 'invalid' && (
                 <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex items-center gap-3">
                   <div className="w-8 h-8 bg-red-200 text-red-700 rounded-full flex items-center justify-center">✕</div>
                   <div>
                     <div className="font-bold text-red-800">Invalid Policy</div>
                     <div className="text-xs text-red-600">Please check the number</div>
                   </div>
                 </div>
               )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
