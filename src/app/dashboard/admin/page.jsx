"use client";

import { motion } from "framer-motion";
import { Users, AlertTriangle, CheckCircle, Clock, FileText, Search, MoreVertical } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Reports", value: "124", icon: <FileText className="w-6 h-6 text-blue-500" />, trend: "+12% this month" },
    { label: "Pending Review", value: "18", icon: <Clock className="w-6 h-6 text-yellow-500" />, trend: "Requires attention" },
    { label: "Under Investigation", value: "32", icon: <Search className="w-6 h-6 text-purple-500" />, trend: "Active cases" },
    { label: "Resolved", value: "74", icon: <CheckCircle className="w-6 h-6 text-green-500" />, trend: "+5 this week" },
  ];

  const recentIncidents = [
    { id: "RAG-8472B", date: "Oct 24, 2026", type: "Physical Harassment", status: "Under Investigation", severity: "High" },
    { id: "RAG-8471A", date: "Oct 23, 2026", type: "Cyberbullying", status: "Pending", severity: "Medium" },
    { id: "RAG-8470X", date: "Oct 21, 2026", type: "Verbal Abuse", status: "Resolved", severity: "Low" },
    { id: "RAG-8469C", date: "Oct 20, 2026", type: "Extortion", status: "Under Investigation", severity: "High" },
    { id: "RAG-8468F", date: "Oct 18, 2026", type: "Physical Harassment", status: "Resolved", severity: "Medium" },
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Pending': return <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full text-xs font-semibold">Pending</span>;
      case 'Under Investigation': return <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 rounded-full text-xs font-semibold">Investigating</span>;
      case 'Resolved': return <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-semibold">Resolved</span>;
      default: return null;
    }
  };

  const getSeverityBadge = (severity) => {
    switch(severity) {
      case 'High': return <span className="flex items-center gap-1 text-red-600 dark:text-red-400 font-medium text-sm"><AlertTriangle size={14} /> High</span>;
      case 'Medium': return <span className="flex items-center gap-1 text-orange-500 font-medium text-sm"><AlertTriangle size={14} /> Medium</span>;
      case 'Low': return <span className="flex items-center gap-1 text-blue-500 font-medium text-sm"><AlertTriangle size={14} /> Low</span>;
      default: return null;
    }
  };

  return (
    <div className="flex bg-slate-50 dark:bg-slate-900 min-h-[calc(100vh-64px)]">
      {/* Sidebar - Desktop Only */}
      <aside className="w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 hidden md:block">
        <div className="p-6">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">University Cell</p>
          <nav className="space-y-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-xl font-medium transition-colors">
              <FileText size={20} /> Incidents
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl font-medium transition-colors">
              <Users size={20} /> Officers
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl font-medium transition-colors">
              <AlertTriangle size={20} /> SOS Alerts
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Overview Dashboard</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Welcome back, Admin. Here is what's happening today.</p>
          </div>
          <button className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-medium transition-colors shadow-sm">
            Generate Report
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                  {stat.icon}
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">{stat.trend}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Incidents Table */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
            <h2 className="text-lg font-bold text-foreground">Recent Incident Reports</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Search ID..." className="pl-9 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 w-48 transition-all" />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-sm border-b border-slate-200 dark:border-slate-700">
                  <th className="px-6 py-4 font-semibold">Tracking ID</th>
                  <th className="px-6 py-4 font-semibold">Date Reported</th>
                  <th className="px-6 py-4 font-semibold">Type</th>
                  <th className="px-6 py-4 font-semibold">Severity</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                {recentIncidents.map((incident, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 font-mono font-medium text-primary-600 dark:text-primary-400">{incident.id}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{incident.date}</td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-800 dark:text-slate-200">{incident.type}</td>
                    <td className="px-6 py-4">{getSeverityBadge(incident.severity)}</td>
                    <td className="px-6 py-4">{getStatusBadge(incident.status)}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-slate-200 dark:border-slate-700 text-center">
            <button className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 transition-colors">
              View All Reports
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
