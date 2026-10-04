import React, { useState } from 'react';
import { CitizenRequest, MasterBeneficiaryRecord } from '../types';
import { MASTER_BENEFICIARIES } from '../data/maharashtraData';
import {
  CheckCircle2,
  Clock,
  AlertTriangle,
  UserCheck,
  Building,
  FileText,
  Search,
  Check,
  X,
  Send,
  Eye,
  Shield,
  Layers,
  Award,
} from 'lucide-react';

interface Props {
  requests: CitizenRequest[];
  onApproveRequest: (id: string) => void;
  onRejectRequest: (id: string) => void;
  onViewCertificate?: (req: CitizenRequest) => void;
}

export const OfficialConsole: React.FC<Props> = ({
  requests,
  onApproveRequest,
  onRejectRequest,
  onViewCertificate,
}) => {
  const [selectedReqId, setSelectedReqId] = useState<string>(requests[0]?.id || '');
  const [filterDept, setFilterDept] = useState<string>('all');
  const [actionSuccessMsg, setActionSuccessMsg] = useState<string | null>(null);

  const activeRequest = requests.find((r) => r.id === selectedReqId) || requests[0];
  const activeBeneficiary = MASTER_BENEFICIARIES[0];

  const handleApprove = (id: string) => {
    onApproveRequest(id);
    setActionSuccessMsg(`Application ${activeRequest.refNo} approved! Cryptographic order sealed and citizen notified via SMS & WhatsApp.`);
    setTimeout(() => setActionSuccessMsg(null), 4000);
  };

  const handleReject = (id: string) => {
    onRejectRequest(id);
    setActionSuccessMsg(`Application ${activeRequest.refNo} marked for clarification.`);
    setTimeout(() => setActionSuccessMsg(null), 4000);
  };

  return (
    <div className="w-full bg-[#0a0f24] text-white rounded-3xl p-4 md:p-6 border border-slate-800 space-y-6 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2.5 py-0.5 rounded-full">
              Official Desk 360
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Maharashtra Right to Public Services Act (RTS 2015)
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-tight mt-1">
            Consolidated Beneficiary &amp; Application Review Console
          </h2>
          <p className="text-xs text-slate-400">
            Cross-departmental dossier adjudication powered by Sarkar Seva Interoperability Middleware.
          </p>
        </div>

        {/* Live SLA Compliance Metrics */}
        <div className="flex items-center space-x-3 bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-2xl">
          <div className="text-right">
            <div className="text-[10px] text-slate-400 uppercase font-semibold">RTS SLA Compliance</div>
            <div className="text-sm font-black text-emerald-400 font-mono">98.4% On-Time</div>
          </div>
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
            ✓
          </div>
        </div>
      </div>

      {actionSuccessMsg && (
        <div className="bg-emerald-950/80 border border-emerald-500/80 text-emerald-200 px-4 py-3 rounded-2xl text-xs flex items-center space-x-2 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{actionSuccessMsg}</span>
        </div>
      )}

      {/* Main Grid: Left Application Queue, Right Beneficiary 360 Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Applications Queue */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-300">
            <span>Incoming Applications ({requests.length})</span>
            <span className="text-[11px] text-slate-500 font-mono">Real-time Stream</span>
          </div>

          <div className="space-y-2.5 max-h-[560px] overflow-y-auto pr-1">
            {requests.map((req) => {
              const isSelected = req.id === activeRequest.id;
              return (
                <div
                  key={req.id}
                  onClick={() => setSelectedReqId(req.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-950/40 border-blue-500 shadow-md shadow-blue-900/20'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs font-bold text-white leading-snug">
                        {req.title}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                        {req.refNo} • {req.applicantName}
                      </div>
                    </div>

                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        req.status === 'Completed'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : 'bg-amber-950 text-amber-400 border border-amber-800'
                      }`}
                    >
                      {req.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/80 text-[10px] text-slate-400">
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>SLA: {req.slaDaysRemaining}d remaining</span>
                    </span>

                    <span className="text-blue-400 font-semibold">
                      {req.departments.length} registries verified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Consolidated Beneficiary 360 & Dossier */}
        <div className="lg:col-span-7 space-y-4">
          {/* Beneficiary Master Profile (Golden Record) */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-md">
                  {activeBeneficiary.fullName.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-black text-white">
                      {activeBeneficiary.fullName}
                    </h3>
                    <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Golden Record ID
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {activeBeneficiary.goldenId} • {activeBeneficiary.district}
                  </div>
                </div>
              </div>

              {/* Deduplication Guarantee */}
              <div className="bg-blue-950/60 border border-blue-800/60 px-3 py-1.5 rounded-xl text-right">
                <div className="text-[9px] text-blue-300 font-bold uppercase">MDM Deduplication Score</div>
                <div className="text-xs font-black text-blue-400 font-mono">
                  {activeBeneficiary.confidenceScore}% (0 Duplicate Collisions)
                </div>
              </div>
            </div>

            {/* Linked Department Identifiers */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Federated Cross-Department Identifiers (Linked via Middleware)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-mono">
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <div className="text-slate-500">MahaDBT ID</div>
                  <div className="font-bold text-slate-200 truncate">{activeBeneficiary.linkedDepartmentIds.mahadbt}</div>
                </div>
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <div className="text-slate-500">MahaBhumi 7/12</div>
                  <div className="font-bold text-slate-200 truncate">{activeBeneficiary.linkedDepartmentIds.mahabhumi}</div>
                </div>
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <div className="text-slate-500">Mahaswayam</div>
                  <div className="font-bold text-slate-200 truncate">{activeBeneficiary.linkedDepartmentIds.mahaswayam}</div>
                </div>
                <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <div className="text-slate-500">Aaple Sarkar</div>
                  <div className="font-bold text-slate-200 truncate">{activeBeneficiary.linkedDepartmentIds.aaplesarkar}</div>
                </div>
              </div>
            </div>

            {/* Verification Checklist */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Automated Verification Findings (No Manual Paperwork Required)
              </span>

              <div className="space-y-2 text-xs">
                <div className="bg-slate-950/70 border border-slate-800/80 p-2.5 rounded-xl flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <div>
                      <span className="font-bold text-white">Identity (UIDAI):</span>
                      <span className="text-slate-400 ml-1.5">Aadhaar Token Biometrics authenticated with 100% demographic match.</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">MATCH 100%</span>
                </div>

                <div className="bg-slate-950/70 border border-slate-800/80 p-2.5 rounded-xl flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <div>
                      <span className="font-bold text-white">Income (CBDT Tax):</span>
                      <span className="text-slate-400 ml-1.5">Annual gross income ₹2,80,000 (Within low-income criteria).</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">CLEARED</span>
                </div>

                <div className="bg-slate-950/70 border border-slate-800/80 p-2.5 rounded-xl flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <div>
                      <span className="font-bold text-white">Land Records (MahaBhumi):</span>
                      <span className="text-slate-400 ml-1.5">No registered urban housing property found in Mumbai MMR region.</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">ELIGIBLE</span>
                </div>
              </div>
            </div>

            {/* Official Adjudication Action Bar */}
            <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="text-[11px] text-slate-400">
                Adjudicating Officer: <strong className="text-slate-200">Shri R. K. Shinde (Desk Officer, Grade-I)</strong>
              </div>

              <div className="flex items-center space-x-2.5">
                <button
                  onClick={() => handleReject(activeRequest.id)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                  Request Clarification
                </button>

                <button
                  onClick={() => handleApprove(activeRequest.id)}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center space-x-1.5 shadow-md shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Approve &amp; Issue Order</span>
                </button>

                {onViewCertificate && activeRequest.status === 'Completed' && (
                  <button
                    onClick={() => onViewCertificate(activeRequest)}
                    className="p-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 transition-colors"
                    title="View Certificate"
                  >
                    <Award className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
