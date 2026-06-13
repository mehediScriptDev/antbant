"use client";

import Link from "next/link";
import Image from "next/image";
import { AlertTriangle, Menu, Globe, X } from "lucide-react";
import { useLang } from "@/lib/language";
import { useState } from "react";

export default function Header() {
  const { t, toggleLang } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top Emergency Bar */}
      <div className="bg-red-600 text-white py-1.5 px-4 text-center text-xs font-bold uppercase tracking-widest border-b border-red-700">
        {t.headerHelpline}
      </div>

      <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/sahosh-logo.png"
              alt="সাহস Logo"
              width={56}
              height={56}
              className="rounded-sm"
            />
            <div className="flex flex-col">
              <span className="font-black text-2xl tracking-tight text-slate-900 leading-none">
                {t.siteNameBn}
              </span>
              <span className="text-[11px] font-bold text-red-600 uppercase tracking-widest mt-0.5">
                {t.siteTagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-bold text-slate-600 hover:text-red-600 uppercase tracking-wider transition-colors"
            >
              {t.navHome}
            </Link>
            <Link
              href="/laws"
              className="text-sm font-bold text-slate-600 hover:text-red-600 uppercase tracking-wider transition-colors"
            >
              {t.navLaws}
            </Link>
            <Link
              href="/cases"
              className="text-sm font-bold text-slate-600 hover:text-red-600 uppercase tracking-wider transition-colors"
            >
              {t.navCases}
            </Link>
            <Link
              href="/report"
              className="text-sm font-bold text-slate-600 hover:text-red-600 uppercase tracking-wider transition-colors"
            >
              {t.navReport}
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-2 border border-slate-300 rounded-sm text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Switch Language"
            >
              <Globe size={16} />
              <span>{t.langToggle}</span>
            </button>

            <Link
              href="/report"
              className="hidden sm:flex bg-red-600 hover:bg-red-500 text-white px-6 py-2.5 rounded-sm font-bold text-sm uppercase tracking-wide transition-colors items-center gap-2"
            >
              <AlertTriangle size={18} />
              <span>{t.reportNow}</span>
            </Link>

            <button
              className="md:hidden p-2 text-slate-600 cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-4 py-6 space-y-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-bold text-slate-700 uppercase tracking-wider py-2"
            >
              {t.navHome}
            </Link>
            <Link
              href="/laws"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-bold text-slate-700 uppercase tracking-wider py-2"
            >
              {t.navLaws}
            </Link>
            <Link
              href="/cases"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-bold text-slate-700 uppercase tracking-wider py-2"
            >
              {t.navCases}
            </Link>
            <Link
              href="/report"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-bold text-slate-700 uppercase tracking-wider py-2"
            >
              {t.navReport}
            </Link>
            <Link
              href="/report"
              onClick={() => setMobileOpen(false)}
              className="block bg-red-600 text-white text-center px-6 py-3 rounded-sm font-bold text-sm uppercase tracking-wide mt-4"
            >
              {t.reportNow}
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
