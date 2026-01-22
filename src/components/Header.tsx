import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white p-4 sticky top-0 z-50 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-3">
        {/* Simple Hospital Icon Placeholder or Back Arrow if not home? For now just Logo */}
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm">
          H
        </div>
        <h1 className="font-semibold text-lg">iHeal Hospital</h1>
      </div>
      
      {/* Optional: Profile or Help icon */}
    </header>
  );
}
