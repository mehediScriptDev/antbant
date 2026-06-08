import Link from "next/link";
import { AlertTriangle, Menu, ShieldAlert } from "lucide-react";

export default function Header() {
  return (
    <>
      {/* Top Emergency Bar */}
      <div className="bg-red-700 text-white py-1.5 px-4 text-center text-xs font-bold uppercase tracking-widest border-b border-red-800">
        National Anti-Ragging Helpline: 109 | Emergency: 999
      </div>
      
      <header className="sticky top-0 z-50 w-full bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-red-600 text-white p-2.5 rounded-sm">
              <ShieldAlert size={28} />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight text-white leading-none uppercase">
                Anti-Ragging
              </span>
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest mt-1">
                Portal BD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-bold text-slate-300 hover:text-white uppercase tracking-wider transition-colors">
              Home
            </Link>
            <Link href="/laws" className="text-sm font-bold text-slate-300 hover:text-white uppercase tracking-wider transition-colors">
              Laws & Acts
            </Link>
            <Link href="/cases" className="text-sm font-bold text-slate-300 hover:text-white uppercase tracking-wider transition-colors">
              Action Report
            </Link>
            <Link href="/report" className="text-sm font-bold text-slate-300 hover:text-white uppercase tracking-wider transition-colors">
              Submit Complaint
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Link 
              href="/report" 
              className="bg-red-600 hover:bg-red-500 text-white px-6 py-2.5 rounded-sm font-bold text-sm uppercase tracking-wide transition-colors flex items-center gap-2"
            >
              <AlertTriangle size={18} />
              <span>Report Now</span>
            </Link>
            
            <button className="md:hidden p-2 text-slate-300">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
