"use client";

import { useState, useRef } from "react";
import {
  Shield,
  Upload,
  AlertCircle,
  CheckCircle2,
  FileWarning,
  EyeOff,
  FileCheck,
  X,
  ChevronRight,
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  Building,
} from "lucide-react";
import { useLang } from "@/lib/language";
import Swal from "sweetalert2";

export default function ReportIncident() {
  const { t, lang } = useLang();
  const [step, setStep] = useState(1);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const [isHoveringDropzone, setIsHoveringDropzone] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsHoveringDropzone(true);
  };

  const handleDragLeave = () => {
    setIsHoveringDropzone(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsHoveringDropzone(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: lang === "bn" ? "অভিযোগ গৃহীত হয়েছে!" : "Complaint Received!",
      text:
        lang === "bn"
          ? "আপনার অভিযোগ সফলভাবে আমাদের সিস্টেমে জমা হয়েছে।"
          : "Your complaint has been successfully submitted to our system.",
      icon: "success",
      confirmButtonColor: "#ef4444",
      confirmButtonText: lang === "bn" ? "ঠিক আছে" : "OK",
      backdrop: `rgba(15, 23, 42, 0.7)`,
      customClass: {
        popup: "rounded-3xl shadow-2xl border border-slate-100",
        confirmButton:
          "rounded-xl font-bold uppercase tracking-widest px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 shadow-lg shadow-red-500/30 transition-all",
        title: "font-black text-slate-900 text-2xl",
      },
    }).then(() => {
      setStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden py-16">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-slate-900 z-0 skew-y-[-4deg] origin-top-left shadow-2xl"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-md rounded-2xl mb-6 shadow-[0_0_40px_rgba(239,68,68,0.3)] border border-white/20 text-red-500">
            <Shield className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-md">
            {t.reportTitle}
          </h1>
          <div className="items-center justify-center gap-2 text-slate-300 font-medium bg-slate-800/50 backdrop-blur-md px-6 py-2 rounded-full inline-flex border border-slate-700/50 shadow-inner">
            <EyeOff className="w-4 h-4 text-red-400" />
            <p>{t.reportSubtitle}</p>
          </div>
        </div>

        {/* Premium Form Card */}
        <div className="bg-white/95 backdrop-blur-2xl rounded-4xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden transition-all duration-500 relative">
          {/* Top Progress Bar */}
          {step < 3 && (
            <div className="bg-slate-50/80 border-b border-slate-100 px-8 py-5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm transition-all duration-500 ${step >= 1 ? "bg-red-600 text-white shadow-md shadow-red-500/30 scale-110" : "bg-slate-200 text-slate-500"}`}
                >
                  1
                </div>
                <span
                  className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${step >= 1 ? "text-slate-900" : "text-slate-400"}`}
                >
                  {t.reportStep1}
                </span>
              </div>
              <div className="flex-1 h-px bg-slate-200 mx-6">
                <div
                  className={`h-full bg-red-600 transition-all duration-700 ease-out ${step === 2 ? "w-full" : "w-0"}`}
                ></div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 hidden sm:block ${step >= 2 ? "text-slate-900" : "text-slate-400"}`}
                >
                  {t.reportStep2}
                </span>
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm transition-all duration-500 ${step >= 2 ? "bg-red-600 text-white shadow-md shadow-red-500/30 scale-110" : "bg-slate-100 text-slate-400 border border-slate-200"}`}
                >
                  2
                </div>
              </div>
            </div>
          )}

          <div className="p-8 md:p-12 relative">
            {step === 1 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(2);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-both"
              >
                <div className="space-y-8">
                  {/* Field: University */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide mb-3 ml-1 group-focus-within:text-red-600 transition-colors">
                      <Building className="w-4 h-4" />
                      {t.reportUniversity}{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 hover:bg-slate-100/50 transition-all font-medium text-slate-800 appearance-none shadow-sm cursor-pointer"
                      >
                        <option value="">{t.selectUniversity}</option>
                        <option value="du">{t.optDu}</option>
                        <option value="buet">{t.optBuet}</option>
                        <option value="nsu">{t.optNsu}</option>
                        <option value="brac">{t.optBrac}</option>
                        <option value="other">{t.optOther}</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronRight className="w-5 h-5 rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Field: Date */}
                    <div className="group">
                      <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide mb-3 ml-1 group-focus-within:text-red-600 transition-colors">
                        <Calendar className="w-4 h-4" />
                        {t.reportDate} <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 hover:bg-slate-100/50 transition-all font-medium text-slate-800 shadow-sm"
                      />
                    </div>

                    {/* Field: Time */}
                    <div className="group">
                      <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide mb-3 ml-1 group-focus-within:text-red-600 transition-colors">
                        <Clock className="w-4 h-4" />
                        {t.reportTime}
                      </label>
                      <input
                        type="time"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 hover:bg-slate-100/50 transition-all font-medium text-slate-800 shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Field: Location */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide mb-3 ml-1 group-focus-within:text-red-600 transition-colors">
                      <MapPin className="w-4 h-4" />
                      {t.reportLocation} <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder={t.reportLocationPlaceholder}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 hover:bg-slate-100/50 transition-all font-medium text-slate-800 shadow-sm placeholder-slate-400"
                    />
                  </div>

                  {/* Field: Description */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide mb-3 ml-1 group-focus-within:text-red-600 transition-colors">
                      <FileWarning className="w-4 h-4" />
                      {t.reportDescription}{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      rows={6}
                      placeholder={t.reportDescPlaceholder}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 hover:bg-slate-100/50 transition-all font-medium text-slate-800 resize-none shadow-sm placeholder-slate-400"
                    ></textarea>
                  </div>

                  {/* Next Button */}
                  <div className="pt-4 flex justify-end mt-4">
                    <button
                      type="submit"
                      className="flex items-center gap-3 px-10 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold uppercase tracking-widest transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-slate-900/20 active:scale-95 cursor-pointer"
                    >
                      <span>{t.reportProceed}</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </form>
            )}

            {step === 2 && (
              <form
                onSubmit={handleSubmit}
                className="animate-in fade-in slide-in-from-right-12 duration-700 ease-out fill-mode-both"
              >
                <div className="space-y-10">
                  {/* Info Alert */}
                  <div className="bg-linear-to-r from-red-50 to-orange-50 border border-red-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none">
                      <AlertCircle className="w-32 h-32 text-red-900" />
                    </div>
                    <div className="p-2 bg-red-100 rounded-xl shrink-0 mt-0.5">
                      <AlertCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="relative z-10">
                      <strong className="block mb-1 text-red-800 text-base font-black uppercase tracking-wide">
                        {t.reportEvidence}
                      </strong>
                      <p className="text-sm text-red-900/80 font-medium leading-relaxed">
                        {t.reportEvidenceDesc}
                      </p>
                    </div>
                  </div>

                  {/* Upload Dropzone */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3 ml-1">
                      {t.reportUpload}
                    </label>

                    <input
                      type="file"
                      className="hidden"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*,video/*,audio/*,.pdf,.doc,.docx"
                    />

                    {!file ? (
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 cursor-pointer group
                          ${
                            isHoveringDropzone
                              ? "border-red-400 bg-red-50 shadow-inner"
                              : "border-slate-300 bg-slate-50 hover:bg-slate-100 hover:border-red-300"
                          }`}
                      >
                        <div
                          className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${isHoveringDropzone ? "bg-red-100 text-red-600 scale-110" : "bg-white text-slate-400 shadow-sm group-hover:bg-red-50 group-hover:text-red-500"}`}
                        >
                          <Upload className="w-8 h-8" />
                        </div>
                        <p
                          className={`text-lg font-bold mb-2 transition-colors ${isHoveringDropzone ? "text-red-700" : "text-slate-700 group-hover:text-slate-900"}`}
                        >
                          {t.reportDragDrop}
                        </p>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">
                          {t.reportMaxFile}
                        </p>
                      </div>
                    ) : (
                      <div className="border border-green-200 bg-linear-to-r from-green-50 to-emerald-50 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm relative overflow-hidden group">
                        <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-5 transition-opacity"></div>
                        <div className="flex items-center gap-6 relative z-10 w-full">
                          <div className="p-4 bg-white text-green-600 rounded-2xl shadow-sm shrink-0 border border-green-100">
                            <FileCheck className="w-8 h-8" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-green-900 text-lg truncate pr-4">
                              {file.name}
                            </p>
                            <div className="flex items-center gap-3 mt-1.5">
                              <span className="text-xs font-bold text-white bg-green-500 px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                                Ready
                              </span>
                              <span className="text-sm font-semibold text-green-700 opacity-80">
                                {(file.size / (1024 * 1024)).toFixed(2)} MB
                              </span>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="shrink-0 p-3 text-red-500 hover:bg-white bg-red-50 rounded-full transition-all hover:scale-110 hover:shadow-sm cursor-pointer border border-red-100 relative z-10"
                          title="Remove file"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Optional Contact Section */}
                  <div className="pt-8 border-t border-slate-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <h3 className="text-xl font-black text-slate-900 uppercase tracking-wide">
                        {t.reportContact}
                      </h3>
                      <div className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-4 py-2 rounded-full uppercase tracking-wider flex items-center gap-2 w-fit">
                        <Shield className="w-4 h-4" />
                        {t.reportContactNote}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3 ml-1 group-focus-within:text-red-600 transition-colors">
                          {t.reportPhone}
                        </label>
                        <input
                          type="tel"
                          placeholder="+880 1XX XXX XXXX"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 hover:bg-slate-100/50 transition-all font-medium text-slate-800 shadow-sm placeholder-slate-400"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3 ml-1 group-focus-within:text-red-600 transition-colors">
                          {t.reportEmail}
                        </label>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 hover:bg-slate-100/50 transition-all font-medium text-slate-800 shadow-sm placeholder-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-8 mt-4 border-t border-slate-100 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setStep(1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-slate-500 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-2xl font-bold uppercase tracking-wider transition-all cursor-pointer hover:shadow-sm"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>{t.reportGoBack}</span>
                    </button>
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-4 bg-linear-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg hover:shadow-red-500/30 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
                    >
                      <Shield className="w-5 h-5" />
                      <span>{t.reportSubmit}</span>
                    </button>
                  </div>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="py-12 text-center animate-in zoom-in-95 duration-700 ease-out fill-mode-both">
                <div className="relative inline-block mb-10">
                  <div className="absolute inset-0 bg-green-400 blur-2xl opacity-20 rounded-full animate-pulse"></div>
                  <div className="w-28 h-28 bg-linear-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto border-8 border-white shadow-xl relative z-10">
                    <CheckCircle2 className="w-14 h-14 text-white" />
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                  {t.reportSuccess}
                </h2>
                <p className="text-lg text-slate-600 mb-12 max-w-lg mx-auto font-medium leading-relaxed">
                  {t.reportSuccessDesc}
                </p>

                <div className="bg-slate-900 rounded-4xl p-10 mb-12 inline-block w-full max-w-sm border-b-[6px] border-red-500 shadow-2xl relative overflow-hidden group">
                  <div className="absolute -right-6 -top-6 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <Shield className="w-48 h-48 text-white" />
                  </div>
                  <div className="relative z-10 text-left">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <p className="text-xs text-red-200 uppercase tracking-widest font-black">
                        {t.reportTrackingId}
                      </p>
                    </div>
                    <p className="text-4xl md:text-5xl font-mono font-black tracking-wider text-white mb-6">
                      RAG-8472B
                    </p>
                    <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 p-3 rounded-xl inline-flex">
                      <p className="text-[11px] text-red-200 font-bold uppercase tracking-widest flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        {t.reportSaveWarning}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => (window.location.href = "/dashboard")}
                    className="px-10 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 rounded-2xl font-black uppercase tracking-widest transition-all cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {t.reportGoToTrack}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
