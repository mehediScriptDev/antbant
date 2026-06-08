"use client";

import { useState } from "react";
import { Search, Activity, FileText, CheckCircle, Clock } from "lucide-react";

export default function StudentDashboard() {
  const [trackingId, setTrackingId] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if(trackingId.trim() !== "") {
      setSearched(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-foreground mb-4">Track Your Incident</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Enter your secure tracking ID to check the real-time status of your report.
          </p>
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
                placeholder="Enter Tracking ID (e.g. RAG-8472B)" 
                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-12 pr-4 py-4 outline-none focus:ring-2 focus:ring-primary-500 transition-all text-lg font-mono tracking-wider"
              />
            </div>
            <button type="submit" className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold transition-colors shadow-lg shadow-primary-500/20 whitespace-nowrap">
              Track Status
            </button>
          </div>
        </form>

        {/* Results Area */}
        {searched && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden animate-fade-in-up">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
              <div>
                <p className="text-sm text-slate-500 mb-1">Incident ID</p>
                <p className="text-xl font-mono font-bold text-foreground uppercase">{trackingId}</p>
              </div>
              <div className="px-4 py-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full text-sm font-bold flex items-center gap-2">
                <Clock className="w-4 h-4" /> Under Investigation
              </div>
            </div>

            <div className="p-8">
              <h3 className="font-semibold text-lg mb-6">Investigation Timeline</h3>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[1.25rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
                
                {/* Timeline Item 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-yellow-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Activity size={16} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm ml-4 md:ml-0 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-bold text-slate-900 dark:text-slate-100">Committee Assigned</div>
                      <time className="text-xs font-medium text-slate-500">Today, 10:45 AM</time>
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 text-sm">
                      The university anti-ragging cell has assigned an investigating officer to your case.
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-primary-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <CheckCircle size={16} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm ml-4 md:ml-0 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-bold text-slate-900 dark:text-slate-100">Report Verified</div>
                      <time className="text-xs font-medium text-slate-500">Yesterday, 02:30 PM</time>
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 text-sm">
                      Initial review completed. Evidence has been verified and securely stored.
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-slate-300 dark:bg-slate-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <FileText size={16} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm ml-4 md:ml-0 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-bold text-slate-900 dark:text-slate-100">Report Submitted</div>
                      <time className="text-xs font-medium text-slate-500">Oct 24, 2026</time>
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 text-sm">
                      Your anonymous report was successfully received by the system.
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="p-6 bg-blue-50 dark:bg-blue-900/10 border-t border-blue-100 dark:border-blue-900">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>Need immediate assistance?</strong> If you feel unsafe, please click the SOS Panic button or call the national emergency hotline at 999. You can also request a confidential counselling session from this dashboard.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
