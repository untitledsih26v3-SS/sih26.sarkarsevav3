import React, { useState } from 'react';
import { MAHARASHTRA_SERVICES } from '../data/maharashtraData';
import { CitizenRequest, ServiceItem } from '../types';
import {
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ExternalLink,
  Lock,
  Layers,
  Award,
  Sparkles,
  UserCheck,
} from 'lucide-react';

interface Props {
  citizenName: string;
  requests: CitizenRequest[];
  onStartServiceJourney: (service: ServiceItem, customQuery?: string) => void;
  onViewTimeline: (req: CitizenRequest) => void;
  onViewCertificate: (req: CitizenRequest) => void;
  onOpenDemo: () => void;
}

export const CitizenPortal: React.FC<Props> = ({
  citizenName,
  requests,
  onStartServiceJourney,
  onViewTimeline,
  onViewCertificate,
  onOpenDemo,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'services' | 'tracking' | 'consent'>('services');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const found = MAHARASHTRA_SERVICES.find(
      (s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase())
    ) || MAHARASHTRA_SERVICES[0];
    onStartServiceJourney(found, searchQuery);
  };

  return (
    <div className="w-full bg-[#090e1c] text-white rounded-3xl p-4 md:p-6 border border-slate-800 space-y-6 shadow-2xl">
      {/* Top Citizen Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <UserCheck className="w-3 h-3" />
              <span>MeriPehchaan / MahaSSO Verified</span>
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Aaple Sarkar • Citizen Single Window
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-tight mt-1 flex items-center gap-2">
            <span>Namaste, {citizenName}</span>
            <span className="text-amber-400 text-lg">🙏</span>
          </h2>
          <p className="text-xs text-slate-400">
            One Citizen Request • Multiple Maharashtra Departments • Zero Duplicate Submissions.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenDemo}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch 12-Screen Live Demo</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800 text-xs font-bold gap-3">
        <button
          onClick={() => setActiveTab('services')}
          className={`pb-3 px-3 border-b-2 transition-colors ${
            activeTab === 'services'
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          All Maharashtra Public Services (Integrated)
        </button>
        <button
          onClick={() => setActiveTab('tracking')}
          className={`pb-3 px-3 border-b-2 transition-colors ${
            activeTab === 'tracking'
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          Unified Application Tracker ({requests.length})
        </button>
        <button
          onClick={() => setActiveTab('consent')}
          className={`pb-3 px-3 border-b-2 transition-colors ${
            activeTab === 'consent'
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          DPDP 2023 Consent Manager
        </button>
      </div>

      {/* Tab Content: Services */}
      {activeTab === 'services' && (
        <div className="space-y-6">
          {/* Natural Language Prompt Search Bar */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 md:p-5 shadow-inner space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              What service do you need from Maharashtra Government today?
            </label>
            <form onSubmit={handleSearch} className="flex items-center space-x-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. Check my Pramod Mahajan skill subsidy or Housing Scheme eligibility..."
                  className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl pl-9 pr-4 py-3 text-xs md:text-sm font-medium text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl font-bold text-xs md:text-sm flex items-center space-x-1.5 transition-all shadow-md shrink-0"
              >
                <span>Orchestrate Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Integrated Maharashtra Services Grid */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-300">
              <span>Departmental Schemes Ready for Zero-Paperwork Exchange</span>
              <span className="text-[11px] text-emerald-400 font-mono">100% Interoperable</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {MAHARASHTRA_SERVICES.map((service) => (
                <div
                  key={service.id}
                  onClick={() => onStartServiceJourney(service)}
                  className="bg-slate-900/80 border border-slate-800 hover:border-blue-500/80 p-5 rounded-2xl flex flex-col justify-between space-y-4 cursor-pointer transition-all hover:-translate-y-1 shadow-sm group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                        {service.icon}
                      </span>
                      <span className="text-[10px] font-bold text-blue-400 bg-blue-950/80 border border-blue-800 px-2 py-0.5 rounded-full">
                        RTS SLA: {service.slaDays} Days
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                        {service.name}
                      </h4>
                      {service.marathiName && (
                        <div className="text-[11px] text-amber-300/80 font-medium">
                          {service.marathiName}
                        </div>
                      )}
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-500 font-medium">
                      {service.departments.length} registries connected
                    </span>
                    <span className="text-blue-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Apply</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab Content: Unified Tracking */}
      {activeTab === 'tracking' && (
        <div className="space-y-4">
          <div className="text-xs text-slate-400">
            Consolidated tracking across MahaDBT, MahaBhumi, Mahaswayam, and Aaple Sarkar RTS without visiting multiple portals.
          </div>

          <div className="space-y-3">
            {requests.map((req) => (
              <div
                key={req.id}
                className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-950 text-blue-400 border border-blue-800 flex items-center justify-center text-lg shrink-0">
                    🏛️
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{req.title}</div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                      Ref: <strong className="text-slate-200">{req.refNo}</strong> • Submitted on {req.date}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">
                      Registries Verified: {req.departments.join(' • ')}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 self-end sm:self-center">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                      req.status === 'Completed'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        : 'bg-amber-950 text-amber-400 border border-amber-800'
                    }`}
                  >
                    {req.status}
                  </span>

                  <button
                    onClick={() => onViewTimeline(req)}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  >
                    View Journey
                  </button>

                  {req.status === 'Completed' && (
                    <button
                      onClick={() => onViewCertificate(req)}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>Download Certificate</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content: DPDP 2023 Consent Manager */}
      {activeTab === 'consent' && (
        <div className="space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  Active Departmental Consent Tokens (Digital Personal Data Protection Act 2023)
                </h3>
                <p className="text-[11px] text-slate-400">
                  You retain full ownership of your data. You may revoke access or review purpose-limited queries at any time.
                </p>
              </div>

              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded-full">
                Zero Permanent PII Storage
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Identity Department</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[11px] text-slate-400">UIDAI / DigiLocker Token</div>
                <div className="text-[10px] text-slate-500 font-mono">Purpose: Scheme Eligibility</div>
                <button
                  onClick={() => alert('Consent revoked for Identity Registry.')}
                  className="w-full text-center py-1 text-[11px] text-rose-400 hover:text-rose-300 font-semibold border border-rose-950 rounded-lg hover:bg-rose-950/30 transition-colors"
                >
                  Revoke Access
                </button>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Income Department</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[11px] text-slate-400">CBDT Tax Registry</div>
                <div className="text-[10px] text-slate-500 font-mono">Purpose: Subsidy Ceiling Check</div>
                <button
                  onClick={() => alert('Consent revoked for Income Registry.')}
                  className="w-full text-center py-1 text-[11px] text-rose-400 hover:text-rose-300 font-semibold border border-rose-950 rounded-lg hover:bg-rose-950/30 transition-colors"
                >
                  Revoke Access
                </button>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Revenue Department</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[11px] text-slate-400">MahaBhumi 7/12 Land Records</div>
                <div className="text-[10px] text-slate-500 font-mono">Purpose: Non-encumbrance Title</div>
                <button
                  onClick={() => alert('Consent revoked for Revenue Registry.')}
                  className="w-full text-center py-1 text-[11px] text-rose-400 hover:text-rose-300 font-semibold border border-rose-950 rounded-lg hover:bg-rose-950/30 transition-colors"
                >
                  Revoke Access
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
