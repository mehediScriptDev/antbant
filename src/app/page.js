"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ShieldAlert,
  Scale,
  Gavel,
  ArrowRight,
  CheckCircle,
  Search,
  FileWarning,
  EyeOff,
} from "lucide-react";

export default function Home() {
  const laws = [
    {
      icon: <Scale className="w-8 h-8 text-white" />,
      title: "UGC Guidelines 2010",
      description:
        "Strict regulations implemented by the University Grants Commission of Bangladesh making ragging a punishable offense.",
    },
    {
      icon: <Gavel className="w-8 h-8 text-white" />,
      title: "Criminal Offense",
      description:
        "Severe cases of physical or mental harassment are prosecutable under the Penal Code of Bangladesh.",
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-white" />,
      title: "Zero Tolerance Policy",
      description:
        "Immediate suspension and potential expulsion for any student found guilty of organizing or participating in ragging.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* AUTHORITATIVE HERO SECTION */}
      <section className="relative bg-slate-950 pt-20 pb-24 overflow-hidden border-b-4 border-red-600">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2070&auto=format&fit=crop"
            alt="Student in distress"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600 text-white font-bold text-xs tracking-widest uppercase mb-6 rounded-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Official National Portal</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6 uppercase tracking-tight">
              Ragging is a <span className="text-red-600">Crime.</span>
              <br />
              Report it Now.
            </h1>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium">
              This is the official, secure, and 100% anonymous portal for
              students in Bangladesh to report incidents of ragging, harassment,
              and bullying directly to the University Grants Commission and Law
              Enforcement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/report"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-red-600 hover:bg-red-500 text-white rounded-sm font-black text-lg uppercase tracking-wide transition-colors"
              >
                <FileWarning className="w-6 h-6" /> Submit Complaint
              </Link>
              <Link
                href="/track"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-transparent hover:bg-white/10 text-white border-2 border-slate-500 rounded-sm font-bold text-lg uppercase tracking-wide transition-colors"
              >
                <Search className="w-6 h-6" /> Track Status
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WARNING NOTICES BAR */}
      <div className="bg-slate-100 border-b border-slate-200 py-6">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-slate-800 font-bold">
            <EyeOff className="w-6 h-6 text-red-600" />
            <span>YOUR IDENTITY REMAINS 100% ANONYMOUS.</span>
          </div>
          <div className="flex items-center gap-4 text-slate-800 font-bold">
            <ShieldAlert className="w-6 h-6 text-red-600" />
            <span>PROTECTED BY THE WHISTLEBLOWER ACT.</span>
          </div>
        </div>
      </div>

      {/* DEFINITION & LAWS SECTION */}
      <section id="laws" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                What Constitutes Ragging?
              </h2>
              <div className="h-1 w-20 bg-red-600 mb-8"></div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                According to the Honorable Supreme Court and UGC Guidelines,
                ragging constitutes one or more of any of the following acts:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 bg-slate-50 p-4 border-l-4 border-red-600 rounded-sm">
                  <span className="text-slate-800 font-semibold">
                    Any conduct by any student or students whether by words
                    spoken or written or by an act which has the effect of
                    teasing, treating or handling with rudeness a fresher or any
                    other student.
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-slate-50 p-4 border-l-4 border-red-600 rounded-sm">
                  <span className="text-slate-800 font-semibold">
                    Indulging in rowdy or undisciplined activities causing
                    annoyance, hardship, physical or psychological harm or to
                    raise fear or apprehension.
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-slate-50 p-4 border-l-4 border-red-600 rounded-sm">
                  <span className="text-slate-800 font-semibold">
                    Asking any student to do any act which such student will not
                    in the ordinary course do and which has the effect of
                    causing or generating a sense of shame, or torment.
                  </span>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2 bg-slate-900 p-10 rounded-sm text-white">
              <h2 className="text-2xl font-black mb-8 uppercase tracking-tight text-red-500">
                Legal Framework & Consequences
              </h2>
              <div className="space-y-8">
                {laws.map((law, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="p-3 bg-slate-800 rounded-sm shrink-0 border border-slate-700">
                      {law.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{law.title}</h3>
                      <p className="text-slate-400 leading-relaxed">
                        {law.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            How The Reporting Process Works
          </h2>
          <div className="h-1 w-20 bg-red-600 mb-12 mx-auto"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-t-4 border-slate-800 shadow-sm">
              <div className="text-5xl font-black text-slate-200 mb-4">01</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                File Complaint
              </h3>
              <p className="text-slate-600">
                Submit your incident details securely. You will receive a unique
                Tracking ID.
              </p>
            </div>
            <div className="bg-white p-8 border-t-4 border-red-600 shadow-sm relative transform md:-translate-y-4">
              <div className="text-5xl font-black text-red-100 mb-4">02</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Investigation
              </h3>
              <p className="text-slate-600">
                The UGC Anti-Ragging Cell and University Authority are
                immediately notified to take action.
              </p>
            </div>
            <div className="bg-white p-8 border-t-4 border-slate-800 shadow-sm">
              <div className="text-5xl font-black text-slate-200 mb-4">03</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Resolution
              </h3>
              <p className="text-slate-600">
                Strict disciplinary action is taken against the perpetrators.
                You can track progress anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-red-700 text-white text-center">
        <div className="container mx-auto px-4">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">
            Don't Suffer in Silence.
          </h2>
          <p className="text-xl mb-10 text-red-100 max-w-2xl mx-auto font-medium">
            Your identity is safe. The law is on your side. Step forward to stop
            ragging in your university today.
          </p>
          <Link
            href="/report"
            className="inline-block px-12 py-5 bg-white text-red-700 hover:bg-slate-100 rounded-sm font-black text-xl uppercase tracking-widest transition-colors shadow-2xl"
          >
            File a Complaint Now
          </Link>
        </div>
      </section>
    </div>
  );
}
