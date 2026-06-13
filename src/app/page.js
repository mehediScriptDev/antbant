"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ShieldAlert,
  Scale,
  Gavel,
  Search,
  FileWarning,
  EyeOff,
  ChevronDown,
  HelpCircle,
  Handshake,
  Building2,
} from "lucide-react";
import { useLang } from "@/lib/language";

export default function Home() {
  const { t } = useLang();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* AUTHORITATIVE HERO SECTION */}
      <section className="relative bg-slate-900 pt-20 pb-24 overflow-hidden border-b-4 border-red-600">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="A student seeking help"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/80 to-slate-900/40"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600 text-white font-bold text-xs tracking-widest uppercase mb-6 rounded-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>{t.heroBadge}</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6 uppercase tracking-tight">
              {t.heroTitle1}{" "}
              <span className="text-red-500">{t.heroTitleHighlight}</span>
              <br />
              {t.heroTitle2}
            </h1>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium">
              {t.heroDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/report"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-red-600 hover:bg-red-500 text-white rounded-sm font-black text-lg uppercase tracking-wide transition-colors"
              >
                <FileWarning className="w-6 h-6" /> {t.btnSubmitComplaint}
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-transparent hover:bg-white/10 text-white border-2 border-slate-500 rounded-sm font-bold text-lg uppercase tracking-wide transition-colors"
              >
                <Search className="w-6 h-6" /> {t.btnTrackStatus}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WARNING NOTICES BAR */}
      <div className="bg-red-50 border-b border-red-100 py-6">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-slate-800 font-bold">
            <EyeOff className="w-6 h-6 text-red-600" />
            <span>{t.noticeAnonymous}</span>
          </div>
          <div className="flex items-center gap-4 text-slate-800 font-bold">
            <ShieldAlert className="w-6 h-6 text-red-600" />
            <span>{t.noticeProtected}</span>
          </div>
        </div>
      </div>

      {/* PARTNERSHIP SECTION */}
      <PartnerSection />

      {/* DEFINITION & LAWS SECTION */}
      <section id="laws" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                {t.whatTitle}
              </h2>
              <div className="h-1 w-20 bg-red-600 mb-8"></div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                {t.whatDesc}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 bg-slate-50 p-4 border-l-4 border-red-600 rounded-sm">
                  <span className="text-slate-800 font-semibold">
                    {t.whatItem1}
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-slate-50 p-4 border-l-4 border-red-600 rounded-sm">
                  <span className="text-slate-800 font-semibold">
                    {t.whatItem2}
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-slate-50 p-4 border-l-4 border-red-600 rounded-sm">
                  <span className="text-slate-800 font-semibold">
                    {t.whatItem3}
                  </span>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2 bg-slate-900 p-10 rounded-sm text-white">
              <h2 className="text-2xl font-black mb-8 uppercase tracking-tight text-red-500">
                {t.legalTitle}
              </h2>
              <div className="space-y-8">
                {[
                  {
                    icon: <Scale className="w-8 h-8 text-white" />,
                    title: t.law1Title,
                    desc: t.law1Desc,
                  },
                  {
                    icon: <Gavel className="w-8 h-8 text-white" />,
                    title: t.law2Title,
                    desc: t.law2Desc,
                  },
                  {
                    icon: <ShieldAlert className="w-8 h-8 text-white" />,
                    title: t.law3Title,
                    desc: t.law3Desc,
                  },
                ].map((law, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="p-3 bg-slate-800 rounded-sm shrink-0 border border-slate-700">
                      {law.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{law.title}</h3>
                      <p className="text-slate-400 leading-relaxed">
                        {law.desc}
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
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            {t.howTitle}
          </h2>
          <div className="h-1 w-20 bg-red-600 mb-12 mx-auto"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-t-4 border-slate-800 shadow-sm rounded-sm">
              <div className="text-5xl font-black text-slate-200 mb-4">01</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {t.step1Title}
              </h3>
              <p className="text-slate-600">{t.step1Desc}</p>
            </div>
            <div className="bg-white p-8 border-t-4 border-red-600 shadow-sm relative transform md:-translate-y-4 rounded-sm">
              <div className="text-5xl font-black text-red-100 mb-4">02</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {t.step2Title}
              </h3>
              <p className="text-slate-600">{t.step2Desc}</p>
            </div>
            <div className="bg-white p-8 border-t-4 border-slate-800 shadow-sm rounded-sm">
              <div className="text-5xl font-black text-slate-200 mb-4">03</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {t.step3Title}
              </h3>
              <p className="text-slate-600">{t.step3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQSection />

      {/* BOTTOM CTA */}
      <section className="py-20 bg-red-600 text-white text-center">
        <div className="container mx-auto px-4">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">
            {t.ctaTitle}
          </h2>
          <p className="text-xl mb-10 text-red-100 max-w-2xl mx-auto font-medium">
            {t.ctaDesc}
          </p>
          <Link
            href="/report"
            className="inline-block px-12 py-5 bg-white text-red-700 hover:bg-slate-100 rounded-sm font-black text-xl uppercase tracking-widest transition-colors shadow-2xl"
          >
            {t.ctaBtn}
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ── FAQ Accordion Component ── */
function FAQSection() {
  const { t } = useLang();
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
            <span>{t.faqBadge}</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
            {t.faqTitle}
          </h2>
          <div className="h-1 w-20 bg-red-600 mt-6 mx-auto"></div>
          <p className="text-lg text-slate-600 mt-6 font-medium max-w-2xl mx-auto">
            {t.faqSubtitle}
          </p>
        </div>

        <div className="space-y-3">
          {t.faq.map((faq, index) => (
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
                  {faq.q}
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
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Partnership Section ── */
const partners = [
  {
    name: "Bangladesh UGC",
    nameBn: "বাংলাদেশ ইউজিসি",
    desc: "University Grants Commission — oversight body for all higher education institutions.",
    descBn: "বিশ্ববিদ্যালয় মঞ্জুরি কমিশন — সকল উচ্চশিক্ষা প্রতিষ্ঠানের তত্ত্বাবধায়ক সংস্থা।",
    cases: 185,
  },
  {
    name: "Ministry of Education",
    nameBn: "শিক্ষা মন্ত্রণালয়",
    desc: "Government ministry responsible for education policy and student welfare.",
    descBn: "শিক্ষা নীতি ও শিক্ষার্থী কল্যাণের জন্য দায়ী সরকারি মন্ত্রণালয়।",
    cases: 142,
  },
  {
    name: "Bangladesh Police",
    nameBn: "বাংলাদেশ পুলিশ",
    desc: "Law enforcement partner for criminal investigation and student protection.",
    descBn: "ফৌজদারি তদন্ত ও শিক্ষার্থী সুরক্ষায় আইন প্রয়োগকারী অংশীদার।",
    cases: 97,
  },
  {
    name: "BLAST",
    nameBn: "ব্লাস্ট",
    desc: "Bangladesh Legal Aid and Services Trust — free legal support for victims.",
    descBn: "বাংলাদেশ লিগ্যাল এইড অ্যান্ড সার্ভিসেস ট্রাস্ট — ভিকটিমদের বিনামূল্যে আইনি সহায়তা।",
    cases: 63,
  },
  {
    name: "Manusher Jonno Foundation",
    nameBn: "মানুষের জন্য ফাউন্ডেশন",
    desc: "Leading human rights organization advocating for student safety.",
    descBn: "শিক্ষার্থীদের নিরাপত্তার পক্ষে কাজ করা শীর্ষ মানবাধিকার সংস্থা।",
    cases: 54,
  },
  {
    name: "Ain o Salish Kendra",
    nameBn: "আইন ও সালিশ কেন্দ্র",
    desc: "National legal rights and mediation center for harassment cases.",
    descBn: "হয়রানি মামলায় জাতীয় আইনি অধিকার ও মধ্যস্থতা কেন্দ্র।",
    cases: 41,
  },
];

function PartnerSection() {
  const { t, lang } = useLang();

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900 text-white font-bold text-xs tracking-widest uppercase mb-4 rounded-sm">
            <Handshake className="w-4 h-4" />
            <span>{t.partnerTitle}</span>
          </div>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            {t.partnerSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-sm p-6 hover:border-red-300 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-sm group-hover:bg-red-50 transition-colors shrink-0">
                  <Building2 className="w-6 h-6 text-slate-600 group-hover:text-red-600 transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-slate-900 text-base mb-1 leading-snug">
                    {lang === "bn" ? p.nameBn : p.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">
                    {lang === "bn" ? p.descBn : p.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-black text-red-600 text-lg">{p.cases}</span>
                    <span className="text-slate-400 font-bold text-xs uppercase tracking-wider">
                      {t.partnerCasesResolved}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
