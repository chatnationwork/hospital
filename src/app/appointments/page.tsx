import Header from '@/components/Header';
import ActionCard from '@/components/ActionCard';
import { DEPARTMENTS } from '@/data/mock';
import Link from 'next/link';

export default function AppointmentsPage() {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <Header />
      
      <div className="p-5">
        <div className="mb-4">
          <Link href="/" className="text-secondary text-sm font-medium flex items-center gap-1">
            ← Back to Home
          </Link>
          <h2 className="text-xl font-bold text-gray-800 mt-2">Select Department</h2>
          <p className="text-gray-500 text-sm">Choose the department for your visit</p>
        </div>

        <div className="space-y-3">
          {DEPARTMENTS.map((dept) => (
            <ActionCard
              key={dept.id}
              title={dept.name}
              icon={dept.icon}
              href={`/appointments/${dept.id}`}
            />
          ))}
        </div>

        </div>
    </div>
  );
}
