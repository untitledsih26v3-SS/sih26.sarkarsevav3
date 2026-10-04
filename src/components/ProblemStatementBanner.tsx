import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, ChevronUp, Layers, CheckCircle2, Building2, Award } from 'lucide-react';

export const ProblemStatementBanner: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full bg-gradient-to-r from-blue-950/90 via-indigo-950/90 to-slate-900 border border-blue-800/60 rounded-2xl p-3 md:p-4 mb-4 text-xs shadow-lg shadow-blue-950/30">
      <div className="flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white font-black text-xs flex items-center justify-center shadow-md shadow-amber-500/20">
            26129
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-xs md:text-sm">
                Problem Statement ID 26129: System Integration &amp; Interoperability Among Government Platforms
              </span>
              <span className="bg-amber-500/20 text-amber-300 font-semibold text-[10px] px-2 py-0.5 rounded-full border border-amber-500/30 hidden sm:inline">
                Govt of Maharashtra
              </span>
            </div>
            <p className="text-slate-400 text-[11px] font-medium line-clamp-1">
              Maharashtra State Innovation Society • Dept of Skills, Employment, Entrepreneurship &amp; Innovation
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-1.5 bg-blue-900/60 hover:bg-blue-800/80 text-blue-200 px-3 py-1.5 rounded-xl border border-blue-700/60 font-semibold transition-all hover:scale-105 active:scale-95"
          >
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>{isExpanded ? 'Hide Solution Matrix' : 'View Solution Matrix (PS 26129)'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4 pt-3.5 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 animate-in fade-in duration-200">
          {/* Requirement 1 */}
          <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl space-y-1.5">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>API Exchange &amp; Standards</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-relaxed">
              Standardized Open API / Beckn-DPI protocols connecting MahaDBT, MahaBhumi, Mahaswayam &amp; UIDAI with zero duplicate entry.
            </p>
          </div>

          {/* Requirement 2 */}
          <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl space-y-1.5">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Master Data &amp; Deduplication</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-relaxed">
              Golden Beneficiary Record with fuzzy cross-index matching prevents duplicate subsidy claims across multiple schemes.
            </p>
          </div>

          {/* Requirement 3 */}
          <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl space-y-1.5">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>DPDP Consent &amp; SSO</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-relaxed">
              Granular purpose-limited user consent vault aligned with DPDP Act 2023, coupled with MeriPehchaan / Aadhaar federated SSO.
            </p>
          </div>

          {/* Requirement 4 */}
          <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl space-y-1.5">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Legacy Adapters &amp; RTS SLAs</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-relaxed">
              Reusable REST/SOAP/SQL connectors for legacy district systems, cryptographic audit logs &amp; Maharashtra RTS Act 2015 compliance.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
