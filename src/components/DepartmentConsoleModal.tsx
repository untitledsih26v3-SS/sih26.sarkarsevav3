import React, { useState } from 'react';
import { X, CheckCircle2, Shield, Activity, Database, Users, ArrowUpRight, Search, FileText, Check, AlertCircle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  officerDetails?: {
    name: string;
    department: string;
    email: string;
    officerId: string;
  };
  onSwitchToCitizen?: () => void;
}

export const DepartmentConsoleModal: React.FC<Props> = ({
  isOpen,
  onClose,
  officerDetails = {
    name: 'Rajesh Verma',
    department: 'UIDAI - Identity Department',
    email: 'r.verma@uidai.gov.in',
    officerId: 'GOV-UID-8842',
  },
  onSwitchToCitizen,
}) => {
  const [selectedQueue, setSelectedQueue] = useState<string>('all');
  const [attestedList, setAttestedList] = useState<Record<string, boolean>>({
    'GV-00102': true,
  });

  if (!isOpen) return null;

  const toggleAttest = (id: string) => {
    setAttestedList((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const incomingQueue = [
    {
      id: 'GV-00102',
      citizen: 'Manya Sharma',
      scheme: 'Housing Scheme Eligibility (PMAY)',
      dataRequested: 'Aadhaar Biometric & Name Verification',
      timestamp: 'Today, 09:41 AM',
      status: attestedList['GV-00102'] ? 'Attested' : 'Pending Review',
      priority: 'High',
    },
    {
      id: 'SV-00131',
      citizen: 'Aarav Patel',
      scheme: 'National Merit Scholarship',
      dataRequested: 'Student Aadhaar & Parent Linking',
      timestamp: 'Today, 08:15 AM',
      status: 'Attested',
      priority: 'Normal',
    },
    {
      id: 'IC-00090',
      citizen: 'Priya Iyer',
      scheme: 'Income Certificate Issuance',
      dataRequested: 'Identity & Address Hash Proof',
      timestamp: 'Yesterday',
      status: 'In Verification',
      priority: 'Normal',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto select-none">
      <div className="bg-[#0b1226] text-white border border-slate-800 rounded-3xl max-w-5xl w-full p-6 md:p-8 space-y-6 shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          title="Close Console"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Department Badge & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5 pr-10">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
              <Shield className="w-3.5 h-3.5" />
              <span>Government Nodal Officer Gate • Secure Mesh Console</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {officerDetails.department}
            </h2>
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span>Officer: <strong className="text-slate-200">{officerDetails.name}</strong></span>
              <span>•</span>
              <span>ID: <strong className="text-slate-200 font-mono">{officerDetails.officerId}</strong></span>
              <span>•</span>
              <span className="text-blue-400 font-mono">{officerDetails.email}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Live Mesh API Active</span>
            </span>

            {onSwitchToCitizen && (
              <button
                onClick={() => {
                  onClose();
                  onSwitchToCitizen();
                }}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors"
              >
                Switch to Citizen View
              </button>
            )}
          </div>
        </div>

        {/* Telemetry Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
          <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl space-y-1">
            <div className="text-slate-400 text-[11px] font-medium">Pending Queries</div>
            <div className="text-2xl font-black text-white font-mono">1</div>
            <div className="text-[10px] text-amber-400">Action needed (GV-00102)</div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl space-y-1">
            <div className="text-slate-400 text-[11px] font-medium">Automated Cleared (24h)</div>
            <div className="text-2xl font-black text-emerald-400 font-mono">14,291</div>
            <div className="text-[10px] text-slate-500">Autonomous Data Agent</div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl space-y-1">
            <div className="text-slate-400 text-[11px] font-medium">Avg API Latency</div>
            <div className="text-2xl font-black text-blue-400 font-mono">4.2ms</div>
            <div className="text-[10px] text-slate-500">Interoperability Tunnel</div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl space-y-1">
            <div className="text-slate-400 text-[11px] font-medium">DPDP Consent Compliance</div>
            <div className="text-2xl font-black text-purple-400 font-mono">100%</div>
            <div className="text-[10px] text-slate-500">Zero Unencrypted PII</div>
          </div>
        </div>

        {/* Department Requests Queue Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <Database className="w-4 h-4 text-blue-400" />
              <span>Incoming Citizen Inquiries via Sarkar Seva Mesh</span>
            </h3>

            <span className="text-xs text-slate-400 font-mono">
              Auto-refreshed every 5s
            </span>
          </div>

          <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/60">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/90 text-slate-400 font-bold border-b border-slate-800 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="p-3.5">Request Ref</th>
                  <th className="p-3.5">Citizen</th>
                  <th className="p-3.5">Target Scheme</th>
                  <th className="p-3.5">Data Element</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {incomingQueue.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-3.5 font-mono font-bold text-blue-400">
                      {item.id}
                    </td>
                    <td className="p-3.5 font-bold text-white">
                      {item.citizen}
                    </td>
                    <td className="p-3.5 text-slate-300">
                      {item.scheme}
                    </td>
                    <td className="p-3.5 text-slate-400 text-[11px]">
                      {item.dataRequested}
                    </td>
                    <td className="p-3.5">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          item.status === 'Attested'
                            ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-600/40'
                            : 'bg-amber-950/80 text-amber-400 border border-amber-600/40'
                        }`}
                      >
                        {item.status === 'Attested' ? <Check className="w-3 h-3" /> : <Activity className="w-3 h-3 animate-spin" />}
                        <span>{item.status}</span>
                      </span>
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => toggleAttest(item.id)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          attestedList[item.id]
                            ? 'bg-slate-800 text-slate-400 hover:text-white'
                            : 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm'
                        }`}
                      >
                        {attestedList[item.id] ? 'Re-audit' : 'Attest & Release'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Security Seal */}
        <div className="border-t border-slate-800 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Cryptographic Session: TLS 1.3 • AES-GCM-256 • Officer Token Sealed</span>
          </div>

          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-xl text-xs font-bold transition-colors"
          >
            Close Officer Console
          </button>
        </div>
      </div>
    </div>
  );
};
