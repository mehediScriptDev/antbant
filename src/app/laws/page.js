"use client";

import {
  Scale,
  FileText,
  Gavel,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/language";

export default function LawsPage() {
  const { t } = useLang();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 pt-20 pb-16 border-b-4 border-red-600">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <Scale className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            {t.lawsHeroTitle}
          </h1>
          <p className="text-xl text-slate-300 font-medium leading-relaxed">
            {t.lawsHeroDesc}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar / Index */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 p-6 rounded-sm shadow-sm border border-slate-200 sticky top-28">
                <h3 className="font-black text-slate-900 uppercase tracking-widest text-sm mb-6 border-b border-slate-200 pb-4">
                  {t.lawsContents}
                </h3>
                <ul className="space-y-4 font-bold text-slate-600">
                  <li>
                    <a
                      href="#ugc"
                      className="hover:text-red-600 transition-colors block"
                    >
                      {t.lawsUgcTitle}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#penal"
                      className="hover:text-red-600 transition-colors block"
                    >
                      {t.lawsPenalTitle}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#cyber"
                      className="hover:text-red-600 transition-colors block"
                    >
                      {t.lawsCyberTitle}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Laws Details */}
            <div className="lg:col-span-2 space-y-16">
              <div id="ugc" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-slate-900 p-3 rounded-sm text-white">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
                    {t.lawsUgcTitle}
                  </h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-700 font-medium">
                  <p>
                    The University Grants Commission (UGC) of Bangladesh has
                    established strict anti-ragging guidelines mandating a
                    &quot;Zero Tolerance&quot; policy across all public and
                    private universities.
                  </p>
                  <ul className="space-y-2 mt-4 list-disc pl-5">
                    <li>
                      <strong>Definition:</strong> Any act of physical or mental
                      abuse, including teasing or forcing a student to perform
                      humiliating tasks.
                    </li>
                    <li>
                      <strong>Institutional Responsibility:</strong> Universities
                      must form an Anti-Ragging Committee and Anti-Ragging Squad.
                    </li>
                    <li>
                      <strong>Punishment:</strong> Institutions are empowered to
                      immediately suspend or permanently expel students found
                      guilty without waiting for a police investigation.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full h-px bg-slate-200"></div>

              <div id="penal" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-slate-900 p-3 rounded-sm text-white">
                    <Gavel className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
                    {t.lawsPenalTitle}
                  </h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-700 font-medium">
                  <p>
                    Severe forms of ragging transcend university rules and become
                    matters of criminal law. Depending on the nature of the
                    incident, perpetrators can be charged under several sections
                    of the Penal Code of 1860:
                  </p>
                  <ul className="space-y-2 mt-4 list-disc pl-5">
                    <li>
                      <strong>Section 319-322:</strong> Voluntarily causing hurt
                      or grievous hurt.
                    </li>
                    <li>
                      <strong>Section 339-340:</strong> Wrongful restraint and
                      wrongful confinement.
                    </li>
                    <li>
                      <strong>Section 354:</strong> Assault or criminal force
                      with intent to outrage modesty.
                    </li>
                    <li>
                      <strong>Section 506:</strong> Criminal intimidation.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full h-px bg-slate-200"></div>

              <div id="cyber" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-slate-900 p-3 rounded-sm text-white">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
                    {t.lawsCyberTitle}
                  </h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-700 font-medium">
                  <p>
                    Ragging is not confined to physical spaces. Online
                    harassment, non-consensual sharing of images, and digital
                    bullying are prosecuted severely.
                  </p>
                  <p className="mt-4">
                    Students caught harassing peers via Facebook groups,
                    WhatsApp, or messenger can face up to 3 to 5 years of
                    imprisonment under the latest Cyber Security regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-16 mt-auto">
        <div className="container mx-auto px-4 lg:px-8 text-center text-white">
          <ShieldCheck className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
            {t.lawsCtaTitle}
          </h2>
          <p className="text-lg text-red-100 max-w-2xl mx-auto mb-8 font-medium">
            {t.lawsCtaDesc}
          </p>
          <Link
            href="/report"
            className="inline-block px-10 py-4 bg-white text-red-700 hover:bg-slate-100 rounded-sm font-black text-lg uppercase tracking-widest transition-colors shadow-xl"
          >
            {t.lawsCtaBtn}
          </Link>
        </div>
      </section>
    </div>
  );
}
