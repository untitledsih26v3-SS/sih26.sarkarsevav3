import React, { useState } from 'react';
import { CONNECTORS_DATA, AUDIT_TRAIL_LOGS, MASTER_BENEFICIARIES } from '../data/maharashtraData';
import { DepartmentConnector } from '../types';
import {
  Cpu,
  Layers,
  Activity,
  ShieldAlert,
  ShieldCheck,
  RefreshCw,
  Server,
  Zap,
  CheckCircle2,
  Lock,
  ArrowRight,
  Database,
  Link2,
} from 'lucide-react';

export const MiddlewareAdmin: React.FC = () => {
  const [connectors, setConnectors] = useState<DepartmentConnector[]>(CONNECTORS_DATA);
  const [activeTab, setActiveTab] = useState<'connectors' | 'mdm' | 'audit' | 'telemetry'>('connectors');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <div className="w-full bg-[#080d21] text-white rounded-3xl p-4 md:p-6 border border-slate-800 space-y-6 shadow-2xl">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-950/60 border border-blue-800/60 px-2.5 py-0.5 rounded-full">
              MahaGateway Interoperability Middleware
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Enterprise Service Bus (ESB) &amp; DPI Agent Mesh
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-tight mt-1">
            Interoperability Engine &amp; Reusable Connectors Hub
          </h2>
          <p className="text-xs text-slate-400">
            Facilitating zero-replacement integration between modern and legacy Maharashtra departmental databases.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleRefresh}
            className="flex items-center space-x-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Sync Mesh</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap border-b border-slate-800 text-xs font-bold gap-2">
        <button
          onClick={() => setActiveTab('connectors')}
          className={`pb-3 px-3.5 border-b-2 flex items-center space-x-2 transition-colors ${
            activeTab === 'connectors'
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Server className="w-4 h-4" />
          <span>Reusable Connectors (Legacy &amp; Modern)</span>
        </button>

        <button
          onClick={() => setActiveTab('mdm')}
          className={`pb-3 px-3.5 border-b-2 flex items-center space-x-2 transition-colors ${
            activeTab === 'mdm'
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>Master Data Management (MDM) &amp; Deduplication</span>
        </button>

        <button
          onClick={() => setActiveTab('audit')}
          className={`pb-3 px-3.5 border-b-2 flex items-center space-x-2 transition-colors ${
            activeTab === 'audit'
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Lock className="w-4 h-4" />
          <span>Immutable Cryptographic Audit Trail</span>
        </button>

        <button
          onClick={() => setActiveTab('telemetry')}
          className={`pb-3 px-3.5 border-b-2 flex items-center space-x-2 transition-colors ${
            activeTab === 'telemetry'
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>DPI Gateway Telemetry</span>
        </button>
      </div>

      {/* Tab 1: Reusable Connectors */}
      {activeTab === 'connectors' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {connectors.map((c) => (
              <div
                key={c.id}
                className="bg-slate-900/90 border border-slate-800 hover:border-blue-500/60 p-4 rounded-2xl space-y-3 transition-all shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-bold text-white leading-snug">
                      {c.name}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                      {c.dept}
                    </div>
                  </div>

                  <span
                    className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      c.type === 'Modern API'
                        ? 'bg-blue-950 text-blue-400 border border-blue-800'
                        : c.type === 'Legacy Wrapper'
                        ? 'bg-amber-950 text-amber-400 border border-amber-800'
                        : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                    }`}
                  >
                    {c.type}
                  </span>
                </div>

                <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                  <div>
                    <span className="text-slate-500">Protocol: </span>
                    <span className="text-slate-200 font-bold">{c.protocol}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Latency: </span>
                    <span className="text-emerald-400 font-bold">{c.latencyMs}ms</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                  <span>Uptime: <strong className="text-slate-200">{c.uptime}</strong></span>
                  <span className="text-blue-400 font-semibold">{c.recordsSyncedToday.toLocaleString()} queries today</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-950/40 border border-blue-900/60 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-3">
              <Zap className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="font-bold text-white">Zero-Replacement Interoperability Principle: </span>
                <span className="text-slate-300">
                  Legacy systems (SOAP/ODBC) communicate seamlessly without rewriting existing departmental software.
                </span>
              </div>
            </div>

            <button
              onClick={() => alert('Connector Config Wizard: Standardized OpenAPI & Beckn Wrapper generation')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-colors"
            >
              + Register New Department Adapter
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Master Data Management (MDM) */}
      {activeTab === 'mdm' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-1">
              <div className="text-[10px] text-slate-400 uppercase font-bold">Deduplicated Citizens Indexed</div>
              <div className="text-2xl font-black text-white font-mono">11,248,920</div>
              <div className="text-[10px] text-emerald-400">Merged across 6 departmental databases</div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-1">
              <div className="text-[10px] text-slate-400 uppercase font-bold">Duplicate Subsidies Prevented</div>
              <div className="text-2xl font-black text-amber-400 font-mono">₹48.2 Crores</div>
              <div className="text-[10px] text-slate-400">Detected via cross-registry anomaly scanner</div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-1">
              <div className="text-[10px] text-slate-400 uppercase font-bold">Golden Record Accuracy</div>
              <div className="text-2xl font-black text-emerald-400 font-mono">99.82%</div>
              <div className="text-[10px] text-slate-400">Using deterministic + probabilistic fuzzy resolution</div>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Golden Beneficiary Master Registry Sample (Live Interoperability View)
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 text-slate-400 font-bold border-b border-slate-800">
                  <tr>
                    <th className="p-3">Golden ID</th>
                    <th className="p-3">Full Name</th>
                    <th className="p-3">District</th>
                    <th className="p-3">Cross-Dept IDs Linked</th>
                    <th className="p-3 text-right">Duplicate Prevented</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {MASTER_BENEFICIARIES.map((ben) => (
                    <tr key={ben.goldenId} className="hover:bg-slate-800/40 transition-colors">
                      <td className="p-3 font-mono font-bold text-blue-400">{ben.goldenId}</td>
                      <td className="p-3 font-bold text-white">{ben.fullName}</td>
                      <td className="p-3 text-slate-400">{ben.district}</td>
                      <td className="p-3 font-mono text-[11px] text-slate-300">
                        DBT: {ben.linkedDepartmentIds.mahadbt} • Land: {ben.linkedDepartmentIds.mahabhumi}
                      </td>
                      <td className="p-3 text-right font-mono font-bold text-emerald-400">
                        {ben.duplicatePrevented} collisions
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Immutable Audit Trail */}
      {activeTab === 'audit' && (
        <div className="space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  Cryptographic Interoperability Audit Ledger (DPDP 2023 Compliant)
                </h3>
                <p className="text-[11px] text-slate-400">
                  Every cross-departmental data query is cryptographically signed and logged with proof of consent.
                </p>
              </div>

              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded-full">
                SHA-256 Merkle Chain Active
              </span>
            </div>

            <div className="space-y-2">
              {AUDIT_TRAIL_LOGS.map((log) => (
                <div
                  key={log.id}
                  className="bg-slate-950/70 border border-slate-800/80 p-3 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-slate-400 text-[11px]">{log.timestamp}</span>
                      <span className="font-bold text-white">{log.action}</span>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Actor: <strong className="text-slate-300">{log.actor}</strong> ({log.role}) • From <span className="text-blue-400">{log.sourceDept}</span> to <span className="text-emerald-400">{log.targetDept}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 font-mono text-[10px]">
                    <span className="text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">{log.txHash}</span>
                    <span className="bg-emerald-950 text-emerald-400 font-bold px-2 py-0.5 rounded border border-emerald-800">
                      {log.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: DPI Gateway Telemetry */}
      {activeTab === 'telemetry' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              API Gateway Metrics &amp; Exception Handling
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400">Average Inter-Departmental Roundtrip</span>
                <span className="font-mono font-bold text-emerald-400">182 ms</span>
              </div>
              <div className="flex justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400">Schema Validation Pass Rate</span>
                <span className="font-mono font-bold text-emerald-400">99.98%</span>
              </div>
              <div className="flex justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400">Automated Retry &amp; Dead-Letter Queue (DLQ)</span>
                <span className="font-mono font-bold text-blue-400">0 unresolved</span>
              </div>
              <div className="flex justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400">DPDP Consent Revocation Latency</span>
                <span className="font-mono font-bold text-emerald-400">&lt; 15 ms</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Event-Driven Notifications Engine
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400">SMS Gateways (MahaSMS &amp; C-DAC)</span>
                <span className="font-mono font-bold text-emerald-400">Active (4.2s dispatch)</span>
              </div>
              <div className="flex justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400">WhatsApp Citizen Notification Channel</span>
                <span className="font-mono font-bold text-emerald-400">Connected (Meta Gov API)</span>
              </div>
              <div className="flex justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400">Departmental Webhook Broadcasts</span>
                <span className="font-mono font-bold text-emerald-400">6 Subscribed Services</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
