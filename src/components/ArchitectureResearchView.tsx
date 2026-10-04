import React, { useState } from 'react';
import {
  Layers,
  BookOpen,
  CheckCircle2,
  XCircle,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Database,
  GitBranch,
  Network,
  FileCheck,
  Scale,
} from 'lucide-react';
import { COMPARISON_MATRIX, CITATIONS_DATA } from '../data/mockData';

export const ArchitectureResearchView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'citations' | 'indea' | 'agents'>('matrix');

  return (
    <div className="space-y-6 text-slate-800">
      {/* Hero Header */}
      <div className="bg-[#09152b] text-white p-6 md:p-8 rounded-2xl border border-blue-900/60 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-full text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span>SIH 2026 Problem Statement SIH26129 • Technical & Research Dossier</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Architecture Baseline & Research Citations
            </h1>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Academic grounding, comparative parity analysis against current digital public infrastructure, and India Enterprise Architecture (InDeA 2.0) conformance specifications.
            </p>
          </div>

          <div className="flex gap-2">
            <div className="bg-slate-800/80 border border-slate-700/80 px-4 py-3 rounded-xl text-center">
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Compliance Standard
              </div>
              <div className="text-sm font-bold text-emerald-400 mt-0.5">GIGW 3.0 & DPDP 2023</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mt-6 pt-5 border-t border-slate-800/80 overflow-x-auto scrollbar-none">
          {[
            { id: 'matrix', label: 'Comparative Benchmark Matrix', icon: Scale },
            { id: 'indea', label: 'InDeA 2.0 Architecture', icon: Layers },
            { id: 'agents', label: 'LangGraph 6-Agent Swarm', icon: Cpu },
            { id: 'citations', label: 'Research Citations & Literature', icon: BookOpen },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: Comparative Matrix */}
      {activeTab === 'matrix' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-black text-slate-900">
                Comparative Parity Matrix: Current Portals vs Sarkar Seva
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Analysis of technological gaps across existing state and national platforms.
              </p>
            </div>
            <span className="text-[11px] font-mono bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-bold self-start md:self-auto">
              SIH 2026 Baseline
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 border-b border-slate-200">Capability Requirement</th>
                  <th className="py-3.5 px-3 border-b border-slate-200">Aaple Sarkar</th>
                  <th className="py-3.5 px-3 border-b border-slate-200">DigiLocker</th>
                  <th className="py-3.5 px-3 border-b border-slate-200">UMANG</th>
                  <th className="py-3.5 px-3 border-b border-slate-200">Physical Files</th>
                  <th className="py-3.5 px-4 border-b border-blue-300 bg-blue-50 text-blue-900 font-extrabold">
                    Sarkar Seva (Ours)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COMPARISON_MATRIX.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-800">
                      {row.capability}
                    </td>
                    <td className="py-3.5 px-3 text-slate-600 font-medium">{row.aapleSarkar}</td>
                    <td className="py-3.5 px-3 text-slate-600 font-medium">{row.digiLocker}</td>
                    <td className="py-3.5 px-3 text-slate-600 font-medium">{row.umang}</td>
                    <td className="py-3.5 px-3 text-slate-400 font-medium">{row.manualFiles}</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/60 border-l border-emerald-200">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.sarkarSeva}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: InDeA 2.0 Baseline Architecture */}
      {activeTab === 'indea' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-black text-slate-900">
              India Enterprise Architecture (InDeA 2.0) Federated Baseline
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Reference architecture formulated by MeitY, aligning state departments into an interoperable API grid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/50 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                1
              </div>
              <h3 className="font-extrabold text-sm text-blue-900">Citizen Touchpoint Layer</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Unified frontend on web/mobile with multi-lingual voice & natural language intent parsing. Compliant with GIGW 3.0 and WCAG 2.1 AA.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-indigo-200 bg-indigo-50/50 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                2
              </div>
              <h3 className="font-extrabold text-sm text-indigo-900">Agentic Orchestration Middleware</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                LangGraph multi-agent swarm replacing static linear BPMN workflows. Autonomous intent routing, semantic transformation, and asynchronous polling.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                3
              </div>
              <h3 className="font-extrabold text-sm text-emerald-900">Federated Registries</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Decentralized databases (UIDAI, State Revenue DB, Land Records, DigiLocker, Treasury) connected via secure TLS 1.3 mTLS API gateways.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-5 rounded-xl space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] text-slate-400">
              <span>Security & Consent Lifecycle (DPDP Act 2023)</span>
              <span>Zero Raw PII Storage Policy</span>
            </div>
            <div className="text-emerald-400 leading-relaxed text-[11px]">
              &gt; Citizen grants purpose-limited consent via OTP / e-Sign.<br />
              &gt; Consent Token generated with ephemeral TTL (15 minutes).<br />
              &gt; Request queries departmental APIs in parallel via TLS 1.3.<br />
              &gt; In-memory data validation performed; raw payloads immediately purged.<br />
              &gt; Cryptographically signed eligibility receipt issued to Citizen DigiLocker.
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: LangGraph 6-Agent Swarm */}
      {activeTab === 'agents' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-black text-slate-900">
              The 6 Specialized Autonomous Agents
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              How the multi-agent mesh cooperates concurrently to adjudicate citizen services without manual hand-offs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                num: '01',
                title: 'Request Agent',
                role: 'Intent Classification',
                desc: 'Extracts entities, target schemes, applicant parameters, and eligible welfare categories from conversational input.',
                color: 'blue',
              },
              {
                num: '02',
                title: 'Routing Agent',
                role: 'Dynamic Ministry Routing',
                desc: 'Maps citizen intent to required state and central ministry endpoints based on statutory rulesets.',
                color: 'indigo',
              },
              {
                num: '03',
                title: 'Data Agents (Parallel Swarm)',
                role: 'Registry Interoperability',
                desc: 'Dispatches asynchronous concurrent queries to Identity (UIDAI), Income (CBDT/Treasury), and Property (Land Records).',
                color: 'sky',
              },
              {
                num: '04',
                title: 'Validation Agent',
                role: 'Anomaly & Consistency Verification',
                desc: 'Cross-checks disparate registry responses, detects phonetic spelling variances, checks income caps, and flags fraud.',
                color: 'amber',
              },
              {
                num: '05',
                title: 'Consent & Security Agent',
                role: 'DPDP Act 2023 Enforcement',
                desc: 'Verifies explicit digital authorization, signs transactions with asymmetric HMAC, and enforces data minimization.',
                color: 'emerald',
              },
              {
                num: '06',
                title: 'Response Agent',
                role: 'Legal Certificate Issuance',
                desc: 'Generates verifiable cryptographic digital certificates, updates citizen audit timeline, and dispatches SMS/WhatsApp alerts.',
                color: 'purple',
              },
            ].map((ag) => (
              <div
                key={ag.num}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded">
                    Agent {ag.num}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    {ag.role}
                  </span>
                </div>
                <h3 className="font-extrabold text-sm text-slate-900">{ag.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{ag.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: Literature Citations */}
      {activeTab === 'citations' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-black text-slate-900">
              Academic Literature & Framework Citations
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Foundational research publications informing the Sarkar Seva architecture.
            </p>
          </div>

          <div className="space-y-4">
            {CITATIONS_DATA.map((cite, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-all space-y-2.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-extrabold text-sm text-slate-900">{cite.title}</h3>
                  <span className="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold shrink-0">
                    Ref [{idx + 1}]
                  </span>
                </div>

                <div className="font-mono text-xs text-blue-700 bg-blue-50/60 p-2.5 rounded-lg border border-blue-100">
                  {cite.citation}
                </div>

                <div className="text-xs text-slate-600 space-y-1">
                  <div>
                    <strong className="text-slate-800">Core Focus: </strong>
                    <span>{cite.focus}</span>
                  </div>
                  <div>
                    <strong className="text-blue-900">Sarkar Seva Mapping: </strong>
                    <span className="text-slate-700 font-medium">{cite.mapping}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
