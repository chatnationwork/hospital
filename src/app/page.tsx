import Header from '@/components/Header';
import ActionCard from '@/components/ActionCard';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col bg-gray-50">
      <Header />
      
      <div className="p-5 space-y-6">
        {/* Dynamic Greeting */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Hello, Sarah 👋</h2>
          <p className="text-gray-500 text-sm">How can we help you today?</p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 gap-3">
           <ActionCard 
             title="Book" 
             icon="📅" 
             href="/appointments" 
             color="bg-blue-100 text-blue-600"
           />
           <ActionCard 
             title="Queue" 
             icon="⏳" 
             href="/queue" 
             color="bg-orange-100 text-orange-600"
           />
           <ActionCard 
             title="Billing" 
             icon="💳" 
             href="/billing" 
             color="bg-purple-100 text-purple-600"
           />
           <ActionCard 
             title="My Care" 
             icon="💊" 
             href="/care/dashboard" 
             color="bg-red-100 text-red-600"
           />
           <ActionCard 
             title="Info" 
             icon="ℹ️" 
             href="/info" 
             color="bg-indigo-100 text-indigo-600"
           />
           <ActionCard 
             title="Agent" 
             icon="💬" 
             href="https://wa.me/+254708427694" 
             external
             color="bg-green-100 text-green-600"
           />
        </div>
      </div>
    </main>
  );
}
