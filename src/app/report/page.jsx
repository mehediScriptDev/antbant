"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Upload, AlertCircle, CheckCircle2 } from "lucide-react";

export default function ReportIncident() {
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3); // Success step
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4"
          >
            <Shield className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </motion.div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Report an Incident Anonymously
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Your identity is fully protected. Please provide as much detail as
            possible to help us take appropriate action.
          </p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden"
        >
          {step === 1 && (
            <form onSubmit={() => setStep(2)} className="p-8">
              <h2 className="text-xl font-semibold mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                Step 1: Incident Details
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    University Name
                  </label>
                  <select
                    required
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  >
                    <option value="">Select University</option>
                    <option value="du">Dhaka University</option>
                    <option value="buet">BUET</option>
                    <option value="nsu">North South University</option>
                    <option value="brac">BRAC University</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Date of Incident
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Approximate Time
                    </label>
                    <input
                      type="time"
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Location (Specific Building/Area)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Science Faculty, Room 302 or Cafeteria"
                    required
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Description of the Incident
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Please describe what happened in detail..."
                    required
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-semibold transition-colors shadow-md shadow-primary-500/20"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="p-8">
              <h2 className="text-xl font-semibold mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                Step 2: Evidence & Optional Info
              </h2>

              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    Providing evidence drastically increases the chances of a
                    successful investigation. You can upload audio, video, or
                    images.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Upload Evidence (Optional)
                  </label>
                  <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-8 text-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                    <Upload className="w-10 h-10 text-slate-400 mx-auto mb-4" />
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Drag and drop files here, or click to browse
                    </p>
                    <p className="text-xs text-slate-400 mt-2">
                      Max file size: 50MB
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-700">
                  <h3 className="font-medium text-slate-800 dark:text-slate-200 mb-4">
                    Contact Information (Strictly Confidential - Optional)
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">
                    Leave this blank if you wish to remain 100% anonymous.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+880 1XX XXX XXXX"
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-semibold transition-colors shadow-md shadow-primary-500/20"
                  >
                    Submit Report Securely
                  </button>
                </div>
              </div>
            </form>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 text-center"
            >
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Report Submitted Successfully
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                Your report has been securely transmitted to the relevant
                authorities. Please save your unique tracking ID below to check
                the status.
              </p>

              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-8 inline-block min-w-[300px]">
                <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-2">
                  Tracking ID
                </p>
                <p className="text-3xl font-mono font-bold tracking-widest text-primary-600 dark:text-primary-400">
                  RAG-8472B
                </p>
              </div>

              <div>
                <button
                  onClick={() => (window.location.href = "/dashboard")}
                  className="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-semibold transition-colors"
                >
                  Track Status
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
