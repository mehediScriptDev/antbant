"use client";

import { useState } from "react";
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
  ChevronDown,
  HelpCircle,
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
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
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
              Whether you are a madrasha student, high-school girl facing
              eve-teasing, or a university fresher being bullied — this is your
              safe, anonymous portal to report ragging, harassment, and
              intimidation directly to the authorities.
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

      {/* FAQ SECTION */}
      <FAQSection />

      {/* BOTTOM CTA */}
      <section className="py-20 bg-red-700 text-white text-center">
        <div className="container mx-auto px-4">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">
            Don't Suffer in Silence.
          </h2>
          <p className="text-xl mb-10 text-red-100 max-w-2xl mx-auto font-medium">
            Whether it's ragging, eve-teasing, or any form of harassment — your
            identity is safe and the law is on your side. Every student deserves
            a fear-free education.
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

/* ── FAQ Accordion Component ── */
const faqData = [
  {
    question: "What is ragging and how can I identify it?",
    answer:
      "Ragging includes any act — verbal, physical, or psychological — that humiliates, intimidates, or harms a student. This covers forcing freshers to perform tasks, verbal abuse, physical assault, cyberbullying, and any conduct that creates fear or shame. If you feel unsafe or humiliated, it is ragging.",
  },
  {
    question: "I am a girl facing eve-teasing on my way to school/college. Can I report here?",
    answer:
      "Absolutely. Eve-teasing, catcalling, stalking, and any form of sexual harassment — whether on campus, on the road, or online — can be reported through this portal. Your complaint will be forwarded to the relevant law enforcement and institutional authorities immediately.",
  },
  {
    question: "Can madrasha students use this portal?",
    answer:
      "Yes. This portal is for every student in Bangladesh — madrasha, high school, college, and university. No matter where you study, you have the right to a safe learning environment and can report any form of ragging or harassment here.",
  },
  {
    question: "Will my identity be kept confidential?",
    answer:
      "100% yes. Your identity is fully encrypted and never shared with the accused or any third party. You are protected under the Whistleblower Protection Act. Only authorized investigating officers can access complaint details.",
  },
  {
    question: "What happens after I submit a complaint?",
    answer:
      "You receive a unique Tracking ID immediately. Your complaint is forwarded to the Anti-Ragging Cell of the relevant institution and the UGC. An investigation is initiated within 72 hours. You can track the status anytime using your Tracking ID.",
  },
  {
    question: "What kind of punishment do perpetrators face?",
    answer:
      "Depending on severity: suspension or expulsion from the institution, FIR with local police, criminal prosecution under the Penal Code of Bangladesh, and a permanent mark on academic records. Repeat offenders face enhanced penalties.",
  },
  {
    question: "I am being harassed by a teacher or staff member. Can I report that too?",
    answer:
      "Yes. Harassment by anyone — students, teachers, staff, or outsiders — can be reported. The portal handles complaints against all individuals associated with educational institutions.",
  },
  {
    question: "Can I report an incident that happened to someone else?",
    answer:
      "Yes. If you have witnessed ragging, harassment, or eve-teasing happening to a fellow student, you can file a report as a witness. Bystander reports are equally important and are investigated with the same urgency.",
  },
  {
    question: "Is there a helpline I can call instead of filing online?",
    answer:
      "Yes. You can call the National Emergency number 999 or the Anti-Harassment Helpline 109 (available 24/7). Both lines are free, confidential, and staffed by trained counselors who can guide you.",
  },
  {
    question: "I'm scared of retaliation. What protection do I have?",
    answer:
      "The law strictly prohibits any retaliation against complainants. If you face threats or intimidation after filing a report, immediately update your complaint — additional protective measures including campus security orders and legal injunctions will be enforced.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600 text-white font-bold text-xs tracking-widest uppercase mb-6 rounded-sm">
            <HelpCircle className="w-4 h-4" />
            <span>Have Questions?</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-red-600 mt-6 mx-auto"></div>
          <p className="text-lg text-slate-600 mt-6 font-medium max-w-2xl mx-auto">
            Answers for students from madrashas, schools, colleges and
            universities — and for every girl who deserves to feel safe.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-sm transition-all duration-200 ${
                openIndex === index
                  ? "border-red-600 bg-red-50/40 shadow-sm"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
              >
                <span
                  className={`font-bold text-base ${
                    openIndex === index ? "text-red-700" : "text-slate-800"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                    openIndex === index
                      ? "rotate-180 text-red-600"
                      : "text-slate-400"
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 -mt-1">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
