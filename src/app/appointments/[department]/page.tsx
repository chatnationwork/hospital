// using catch-all or dynamic route [department]
import Header from '@/components/Header';
import { DOCTORS, DEPARTMENTS } from '@/data/mock';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function DepartmentPage({ params }: { params: Promise<{ department: string }> }) {
  // Await params in recent Next.js versions
  const { department } = await params;
  const departmentId = department;
  const dept = DEPARTMENTS.find((d) => d.id === departmentId);
  const doctors = DOCTORS[departmentId] || [];

  if (!dept) {
    // In a real app we would generic notFound()
    return <div className="p-10">Department not found. <Link href="/appointments" className="underline">Go back</Link></div>; 
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <Header />
      
      <div className="p-5">
        <div className="mb-4">
          <Link href="/appointments" className="text-secondary text-sm font-medium flex items-center gap-1">
            ← Back to Departments
          </Link>
          <h2 className="text-xl font-bold text-gray-800 mt-2">{dept.name}</h2>
          <p className="text-gray-500 text-sm">Select a doctor</p>
        </div>

        <div className="space-y-3">
            {/* Any Doctor Option */}
            <Link href={`/appointments/${departmentId}/any/schedule`} className="block group">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3 active:scale-95 transition-transform">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-xl">
                  🏥
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800">Any Available Doctor</h3>
                    <p className="text-xs text-green-600 font-medium">Fastest availability</p>
                </div>
              </div>
            </Link>

            {doctors.map((doc) => (
               <Link key={doc.id} href={`/appointments/${departmentId}/${doc.id}/schedule`} className="block group">
               <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3 active:scale-95 transition-transform">
                 <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-xl text-blue-500 font-bold border border-blue-100">
                   {doc.name.charAt(4)}
                 </div>
                 <div>
                     <h3 className="font-semibold text-gray-800">{doc.name}</h3>
                     <p className="text-xs text-gray-500">{doc.title}</p>
                 </div>
               </div>
             </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
