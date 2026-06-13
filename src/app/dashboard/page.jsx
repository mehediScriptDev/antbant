"use client";

import { useState } from "react";
import {
  Search,
  Activity,
  FileText,
  CheckCircle,
  Clock,
} from "lucide-react";
import { useLang } from "@/lib/language";

export default function StudentDashboard() {
  const { t } = useLang();
  const [trackingId, setTrackingId] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (trackingId.trim() !== "") {
      setSearched(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            {t.trackTitle}
          </h1>
          <p className="text-slate-500">{t.trackDesc}</p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder={t.trackPlaceholder}
                className="w-full bg-white border border-slate-200 rounded-sm pl-12 pr-4 py-4 outline-none focus:ring-2 focus:ring-red-500 transition-all text-lg font-mono tracking-wider"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-sm font-bold transition-colors shadow-lg whitespace-nowrap cursor-pointer"
            >
              {t.trackBtn}
            </button>
          </div>
        </form>

        {/* Results Area */}
        {searched && (
          <div className="bg-white rounded-sm shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50">
              <div>
                <p className="text-sm text-slate-500 mb-1">
                  {t.trackIncidentId}
                </p>
                <p className="text-xl font-mono font-bold text-slate-900 uppercase">
                  {trackingId}
                </p>
              </div>
              <div className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-sm text-sm font-bold flex items-center gap-2">
                <Clock className="w-4 h-4" /> {t.trackStatusLabel}
              </div>
            </div>

            <div className="p-8">
              <h3 className="font-semibold text-lg mb-6">
                {t.trackTimeline}
              </h3>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-5 md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
                {/* Timeline Item 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-yellow-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Activity size={16} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-sm border border-slate-200 shadow-sm ml-4 md:ml-0 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-bold text-slate-900">
                        {t.trackCommittee}
                      </div>
                      <time className="text-xs font-medium text-slate-500">
                        Today, 10:45 AM
                      </time>
                    </div>
                    <div className="text-slate-500 text-sm">
                      {t.trackCommitteeDesc}
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-red-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <CheckCircle size={16} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-sm border border-slate-200 shadow-sm ml-4 md:ml-0 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-bold text-slate-900">
                        {t.trackVerified}
                      </div>
                      <time className="text-xs font-medium text-slate-500">
                        Yesterday, 02:30 PM
                      </time>
                    </div>
                    <div className="text-slate-500 text-sm">
                      {t.trackVerifiedDesc}
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-300 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <FileText size={16} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-sm border border-slate-200 shadow-sm ml-4 md:ml-0 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-bold text-slate-900">
                        {t.trackSubmitted}
                      </div>
                      <time className="text-xs font-medium text-slate-500">
                        Oct 24, 2026
                      </time>
                    </div>
                    <div className="text-slate-500 text-sm">
                      {t.trackSubmittedDesc}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50 border-t border-blue-100">
              <p className="text-sm text-blue-800">
                <strong>{t.trackHelp}</strong>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
