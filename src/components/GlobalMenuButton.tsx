'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function GlobalMenuButton() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  return (
    <div className="sticky bottom-0 p-4 bg-white/80 backdrop-blur-md border-t border-slate-100 z-50">
      <Link href="/" className="block w-full py-3 text-center rounded-xl bg-slate-200 text-slate-700 font-bold shadow-sm active:scale-95 transition-transform">
        Back to Main Menu
      </Link>
    </div>
  );
}
