"use client";

import { useState } from "react";
import { Shield, Upload, AlertCircle, CheckCircle2, FileWarning, EyeOff } from "lucide-react";

export default function ReportIncident() {
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3); // Success step
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 border-t-4 border-red-600">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-sm mb-6 border border-red-200">
            <FileWarning className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Official Complaint Form
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            <EyeOff className="w-5 h-5 inline-block mr-2 text-red-600" />
            Your identity is fully protected. Please provide as much detail as
            possible to help authorities take immediate action.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-sm shadow-xl border-t-4 border-slate-900 overflow-hidden">
          {step === 1 && (
            <form onSubmit={() => setStep(2)} className="p-8 md:p-12">
              <h2 className="text-2xl font-black mb-8 border-b-2 border-slate-200 pb-4 uppercase text-slate-800 tracking-tight">
                Step 1: Incident Details
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                    University Name <span className="text-red-600">*</span>
                  </label>
                  <select
                    required
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-sm px-4 py-3 outline-none focus:border-red-600 focus:ring-0 transition-colors font-medium text-slate-800"
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
                    <label className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                      Date of Incident <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-sm px-4 py-3 outline-none focus:border-red-600 focus:ring-0 transition-colors font-medium text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                      Approximate Time
                    </label>
                    <input
                      type="time"
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-sm px-4 py-3 outline-none focus:border-red-600 focus:ring-0 transition-colors font-medium text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                    Location (Specific Building/Area) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Science Faculty, Room 302 or Cafeteria"
                    required
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-sm px-4 py-3 outline-none focus:border-red-600 focus:ring-0 transition-colors font-medium text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                    Description of the Incident <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Please describe exactly what happened. State the facts clearly..."
                    required
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-sm px-4 py-3 outline-none focus:border-red-600 focus:ring-0 transition-colors font-medium text-slate-800 resize-none"
                  ></textarea>
                </div>

                <div className="pt-6 flex justify-end border-t-2 border-slate-100 mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-10 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-sm font-black uppercase tracking-widest transition-colors"
                  >
                    Proceed to Step 2
                  </button>
                </div>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              <h2 className="text-2xl font-black mb-8 border-b-2 border-slate-200 pb-4 uppercase text-slate-800 tracking-tight">
                Step 2: Evidence & Identity
              </h2>

              <div className="space-y-8">
                <div className="bg-red-50 border-l-4 border-red-600 p-4 flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-900 font-medium">
                    <strong className="block mb-1 text-red-700">CRITICAL: Provide Evidence if Possible</strong>
                    Uploading audio, video, or images drastically increases the chances of a successful investigation and strict punitive action.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                    Upload Evidence (Optional)
                  </label>
                  <div className="border-2 border-dashed border-slate-300 bg-slate-50 rounded-sm p-10 text-center hover:bg-slate-100 transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-base font-bold text-slate-600 mb-2">
                      Drag and drop files here, or click to browse
                    </p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">
                      Max file size: 50MB
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t-2 border-slate-200">
                  <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-wide">
                    Contact Information (Optional)
                  </h3>
                  <p className="text-sm font-bold text-slate-500 mb-6 uppercase tracking-wider flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary-600" /> Strictly Confidential. Leave blank to remain anonymous.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+880 1XX XXX XXXX"
                        className="w-full bg-slate-50 border-2 border-slate-200 rounded-sm px-4 py-3 outline-none focus:border-red-600 focus:ring-0 transition-colors font-medium text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full bg-slate-50 border-2 border-slate-200 rounded-sm px-4 py-3 outline-none focus:border-red-600 focus:ring-0 transition-colors font-medium text-slate-800"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t-2 border-slate-200 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-8 py-4 text-slate-600 hover:text-slate-900 font-bold uppercase tracking-wider transition-colors"
                  >
                    Go Back
                  </button>
                  <button
                    type="submit"
                    className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-sm font-black uppercase tracking-widest transition-colors shadow-xl"
                  >
                    Submit Securely
                  </button>
                </div>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="p-12 text-center bg-white">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 border-[6px] border-green-50">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                Complaint Registered Successfully
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-lg mx-auto font-medium">
                Your report has been securely transmitted to the UGC Anti-Ragging Cell. Law enforcement will be engaged if required.
              </p>

              <div className="bg-slate-900 rounded-sm p-8 mb-10 inline-block min-w-[350px] border-b-4 border-red-600 shadow-2xl">
                <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-3">
                  Your Secure Tracking ID
                </p>
                <p className="text-4xl font-mono font-black tracking-widest text-white">
                  RAG-8472B
                </p>
                <p className="text-xs text-red-400 font-bold mt-4 tracking-wide uppercase">
                  Please save this ID. It will not be shown again.
                </p>
              </div>

              <div>
                <button
                  onClick={() => (window.location.href = "/track")}
                  className="px-10 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-sm font-black uppercase tracking-widest transition-colors"
                >
                  Go To Tracking Portal
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
