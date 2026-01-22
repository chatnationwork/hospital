import Link from 'next/link';

interface ActionCardProps {
  title: string;
  icon: string; // Emoji or SVG path
  href: string;
  color?: string; // Optional accent color
  external?: boolean;
}

export default function ActionCard({ title, icon, href, color, external }: ActionCardProps) {
  const Component = external ? 'a' : Link;
  const props = external ? { href, target: '_blank', rel: 'noopener noreferrer' } : { href };

  return (
    // @ts-ignore - Link and a have slightly different props but compatible here for href
    <Component {...props} className="block group">
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 transition-transform active:scale-95 hover:shadow-md">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${color || 'bg-green-100 text-green-700'}`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{title}</h3>
        </div>
        <div className="text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Component>
  );
}
