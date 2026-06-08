import { BarChart3, Users, ShieldAlert, CheckCircle, TrendingDown, Building } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Action Report | National Anti-Ragging Portal BD",
  description: "Live statistics and action report of resolved ragging cases in Bangladesh universities.",
};

export default function CasesPage() {
  const stats = [
    {
      label: "Total Complaints Received (2025)",
      value: "412",
      icon: <ShieldAlert className="w-8 h-8 text-red-500" />,
      color: "border-red-600"
    },
    {
      label: "Cases Investigated & Resolved",
      value: "385",
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      color: "border-green-500"
    },
    {
      label: "Students Expelled/Suspended",
      value: "89",
      icon: <Users className="w-8 h-8 text-slate-800" />,
      color: "border-slate-800"
    },
    {
      label: "Reduction in Incidents (YoY)",
      value: "42%",
      icon: <TrendingDown className="w-8 h-8 text-blue-500" />,
      color: "border-blue-500"
    }
  ];

  const recentActions = [
    {
      date: "August 2025",
      university: "Public Engineering University, Dhaka",
      action: "3 students permanently expelled, 5 suspended for 2 semesters.",
      category: "Severe Physical Harassment"
    },
    {
      date: "July 2025",
      university: "Private University, Bashundhara",
      action: "Cyber Security Act filed against 2 students for online intimidation.",
      category: "Cyber Bullying"
    },
    {
      date: "June 2025",
      university: "Public University, Rajshahi",
      action: "Hall allocation cancelled for 12 students involved in midnight ragging.",
      category: "Mental Harassment & Intimidation"
    },
    {
      date: "May 2025",
      university: "Medical College, Chattogram",
      action: "Strict disciplinary warning and mandatory counseling for 4 seniors.",
      category: "Verbal Abuse"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-950 pt-20 pb-20 border-b-4 border-red-600">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <BarChart3 className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            National Action Report
          </h1>
          <p className="text-xl text-slate-300 font-medium leading-relaxed">
            We don't just record complaints; we ensure strict disciplinary action is taken. Here is the transparency report of cases handled across Bangladesh.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tight text-center">
            2025 Impact Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`bg-slate-50 p-8 rounded-sm shadow-sm border-t-4 ${stat.color} text-center`}>
                <div className="flex justify-center mb-6">
                  {stat.icon}
                </div>
                <div className="text-5xl font-black text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Actions List */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tight">
            Recent Punitive Actions Taken
          </h2>
          
          <div className="space-y-6">
            {recentActions.map((action, index) => (
              <div key={index} className="bg-white border-l-4 border-red-600 p-6 md:p-8 rounded-sm shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div className="flex items-center gap-2 text-slate-800 font-bold">
                    <Building className="w-5 h-5 text-slate-400" />
                    <span className="text-lg">{action.university}</span>
                  </div>
                  <div className="inline-block bg-slate-100 text-slate-600 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                    {action.date}
                  </div>
                </div>
                
                <h4 className="text-red-600 font-bold uppercase tracking-wide text-sm mb-2">
                  Offense: {action.category}
                </h4>
                <p className="text-slate-700 text-lg font-medium leading-relaxed">
                  <strong>Action Taken:</strong> {action.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 mt-auto border-t-4 border-red-600">
        <div className="container mx-auto px-4 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
            Help Us Drop The Number to Zero.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 font-medium">
            Every report brings us one step closer to a ragging-free campus. If you see something, say something.
          </p>
          <Link 
            href="/report" 
            className="inline-block px-10 py-4 bg-red-600 hover:bg-red-500 text-white rounded-sm font-black text-lg uppercase tracking-widest transition-colors shadow-xl"
          >
            File a New Complaint
          </Link>
        </div>
      </section>
    </div>
  );
}
