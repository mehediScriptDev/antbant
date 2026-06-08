import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 mt-auto">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-6 inline-flex">
            <div className="bg-red-600 text-white p-2 rounded-sm">
              <ShieldAlert size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tight text-white leading-none uppercase">
                Anti-Ragging
              </span>
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1">
                Portal BD
              </span>
            </div>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed font-medium">
            The official, secure, and confidential platform for reporting ragging incidents in universities across Bangladesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-black text-white mb-6 uppercase tracking-wider text-sm">Action Links</h3>
          <ul className="space-y-4 text-sm font-bold text-slate-400">
            <li><Link href="/report" className="hover:text-red-500 transition-colors uppercase">Submit Complaint</Link></li>
            <li><Link href="/track" className="hover:text-red-500 transition-colors uppercase">Track Status</Link></li>
            <li><Link href="/laws" className="hover:text-red-500 transition-colors uppercase">UGC Laws & Acts</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-black text-white mb-6 uppercase tracking-wider text-sm">Authorities</h3>
          <ul className="space-y-4 text-sm font-bold text-slate-400">
            <li><a href="#" className="hover:text-red-500 transition-colors uppercase">University Grants Commission</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors uppercase">Ministry of Education</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors uppercase">Bangladesh Police</a></li>
          </ul>
        </div>

        {/* Emergency Contact */}
        <div>
          <h3 className="font-black text-white mb-6 uppercase tracking-wider text-sm">24/7 Emergency Contacts</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex flex-col border-l-2 border-red-600 pl-3">
              <span className="text-slate-500 text-xs font-bold uppercase mb-1">National Emergency</span>
              <a href="tel:999" className="text-white font-black text-lg hover:text-red-500 transition-colors">999</a>
            </li>
            <li className="flex flex-col border-l-2 border-red-600 pl-3">
              <span className="text-slate-500 text-xs font-bold uppercase mb-1">Anti-Ragging Helpline</span>
              <a href="tel:109" className="text-white font-black text-lg hover:text-red-500 transition-colors">109</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 mt-16 pt-8 border-t border-slate-900 text-center text-xs font-bold uppercase tracking-wider text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Official Anti-Ragging Portal BD.</p>
        <p>ZERO TOLERANCE POLICY IMPLEMENTED.</p>
      </div>
    </footer>
  );
}
