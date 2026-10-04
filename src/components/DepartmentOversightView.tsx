import React, { useState } from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  Clock,
  Search,
  Filter,
  AlertTriangle,
  FileText,
  UserCheck,
  RefreshCw,
  Eye,
  Activity,
  ArrowUpRight,
  TrendingUp,
  Server,
  Layers,
} from 'lucide-react';
import { INITIAL_ADMIN_CASES, AdminCaseItem } from '../data/mockData';

interface Props {
  lang?: string;
  onOpenCertificate?: (serviceName: string, applicantName: string, txId: string) => void;
}

export const DepartmentOversightView: React.FC<Props> = ({ onOpenCertificate }) => {
  const [cases, setCases] = useState<AdminCaseItem[]>(INITIAL_ADMIN_CASES);
  const [filter, setFilter] = useState<'All' | 'Cleared' | 'Anomaly' | 'Manual Review'>('All');
  const [search, setSearch] = useState('');
  const [selectedCase, setSelectedCase] = useState<AdminCaseItem | null>(null);
  const [resolutionNote, setResolutionNote] = useState('');

  const filteredCases = cases.filter((c) => {
    const matchesFilter = filter === 'All' || c.status === filter;
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase()) ||
      c.service.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleResolveAnomaly = (caseId: string, approve: boolean) => {
    setCases((prev) =>
      prev.map((c) => {
        if (c.id === caseId) {
          return {
            ...c,
            status: approve ? 'Cleared' : 'Manual Review',
            flagged: false,
          };
        }
        return c;
      })
    );
    setSelectedCase(null);
    setResolutionNote('');
  };

  const anomalyCount = cases.filter((c) => c.status === 'Anomaly').length;
  const clearedCount = cases.filter((c) => c.status === 'Cleared').length;
  const manualCount = cases.filter((c) => c.status === 'Manual Review').length;

  return (
    <div className="space-y-6 text-slate-800">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 md:p-8 rounded-2xl border border-slate-800 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-full text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Officer Gateway • Government of Maharashtra</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Department Oversight & Anomaly Portal
            </h1>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
              Cross-registry exception resolution, live SLA observability, and automated anomaly triaging powered by the Sarkar Seva Multi-Agent Interoperability Mesh.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-slate-800/80 border border-slate-700/80 px-4 py-2.5 rounded-xl text-center">
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Average Adjudication SLA
              </div>
              <div className="text-xl font-mono font-black text-emerald-400">1.8 sec</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/80 px-4 py-2.5 rounded-xl text-center">
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Daily Anomaly Rate
              </div>
              <div className="text-xl font-mono font-black text-amber-400">0.42%</div>
            </div>
          </div>
        </div>

        {/* Real-time KPI summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-slate-800/80">
          <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/50">
            <span className="text-[11px] text-slate-400 font-semibold">Total Requests</span>
            <div className="text-xl font-black text-white mt-1">2,841</div>
            <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
              <TrendingUp className="w-3 h-3" /> +14% vs yesterday
            </span>
          </div>

          <div className="bg-amber-950/30 p-3.5 rounded-xl border border-amber-500/30">
            <span className="text-[11px] text-amber-300 font-semibold">Anomalies Detected</span>
            <div className="text-xl font-black text-amber-400 mt-1">{anomalyCount} Cases</div>
            <span className="text-[10px] text-amber-400 font-medium flex items-center gap-1 mt-0.5">
              <AlertTriangle className="w-3 h-3" /> Cross-registry variances
            </span>
          </div>

          <div className="bg-emerald-950/30 p-3.5 rounded-xl border border-emerald-500/30">
            <span className="text-[11px] text-emerald-300 font-semibold">Instant Clearances</span>
            <div className="text-xl font-black text-emerald-400 mt-1">{clearedCount} (98.6%)</div>
            <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
              <CheckCircle2 className="w-3 h-3" /> Auto-cleared in swarm
            </span>
          </div>

          <div className="bg-blue-950/30 p-3.5 rounded-xl border border-blue-500/30">
            <span className="text-[11px] text-blue-300 font-semibold">Officer Queue</span>
            <div className="text-xl font-black text-blue-400 mt-1">{manualCount} Pending</div>
            <span className="text-[10px] text-blue-400 font-medium flex items-center gap-1 mt-0.5">
              <Clock className="w-3 h-3" /> Requires manual review
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {(['All', 'Anomaly', 'Manual Review', 'Cleared'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filter === tab
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by ID, citizen name, service..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Cases Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4">Transaction ID</th>
                <th className="py-3.5 px-4">Citizen Name</th>
                <th className="py-3.5 px-4">Service Requested</th>
                <th className="py-3.5 px-4">Status & Health</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredCases.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-blue-700">
                    {item.id}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    {item.name}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">
                    {item.service}
                  </td>
                  <td className="py-3.5 px-4">
                    {item.status === 'Cleared' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                        <CheckCircle2 className="w-3 h-3" /> Cleared
                      </span>
                    )}
                    {item.status === 'Anomaly' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-200 animate-pulse">
                        <AlertTriangle className="w-3 h-3" /> Anomaly Variance
                      </span>
                    )}
                    {item.status === 'Manual Review' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800">
                        <Clock className="w-3 h-3" /> Manual Queue
                      </span>
                    )}
                    {item.status === 'Pending AI' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">
                        <Activity className="w-3 h-3" /> In Swarm
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-slate-400 font-mono text-[11px]">
                    {item.date}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {item.mismatchDetail && (
                        <button
                          onClick={() => setSelectedCase(item)}
                          className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded-md text-[11px] font-bold flex items-center gap-1 shadow-xs transition-colors"
                        >
                          <Eye className="w-3 h-3" />
                          <span>Inspect Mismatch</span>
                        </button>
                      )}
                      {item.status === 'Cleared' && onOpenCertificate && (
                        <button
                          onClick={() => onOpenCertificate(item.service, item.name, item.id)}
                          className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-md text-[11px] font-bold flex items-center gap-1 transition-colors"
                        >
                          <FileText className="w-3 h-3" />
                          <span>Certificate</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Anomaly Resolution Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-5 shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">
                    Cross-Registry Anomaly Investigation
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    Case {selectedCase.id} • {selectedCase.name}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="text-slate-400 hover:text-slate-600 p-1 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="bg-amber-50/80 border border-amber-200/80 p-4 rounded-xl text-xs space-y-2">
              <div className="font-bold text-amber-900 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Validation Agent Detection Reason:</span>
              </div>
              <p className="text-slate-700 leading-relaxed font-medium">
                {selectedCase.mismatchDetail?.reason}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                  State Revenue / Land Record DB
                </div>
                <div className="font-mono font-bold text-xs text-slate-800 mt-1">
                  {selectedCase.mismatchDetail?.revenueDb}
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                  UIDAI Central Identity DB
                </div>
                <div className="font-mono font-bold text-xs text-blue-700 mt-1">
                  {selectedCase.mismatchDetail?.identityDb}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Official Adjudication Note (Audit Log Entry)
              </label>
              <textarea
                value={resolutionNote}
                onChange={(e) => setResolutionNote(e.target.value)}
                placeholder="Enter justification for overriding or escalating the detected anomaly (e.g. Identity confirmed via Aadhaar OTP & biometric hash)..."
                className="w-full p-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none h-20"
              />
            </div>

            <div className="flex gap-2.5 pt-2">
              <button
                onClick={() => handleResolveAnomaly(selectedCase.id, false)}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
              >
                Send for Physical Field Inspection
              </button>

              <button
                onClick={() => handleResolveAnomaly(selectedCase.id, true)}
                className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Accept Reconciliation & Issue Verdict</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
