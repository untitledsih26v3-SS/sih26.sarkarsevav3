import React, { useState, useRef } from 'react';
import {
  Search,
  FileText,
  Lock,
  Shield,
  ChevronRight,
  Database,
  Activity,
  Network,
  Server,
  CheckCircle2,
  Check,
  Award,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { REAL_SERVICES, TRANSLATIONS } from '../data/mockData';

interface Props {
  lang: string;
  onOpenCertificate: (serviceName: string, applicantName: string, txId: string) => void;
  onOpenAssistant: (query?: string) => void;
}

export const CitizenPortalView: React.FC<Props> = ({
  lang,
  onOpenCertificate,
  onOpenAssistant,
}) => {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.English;

  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: 'Manya Sharma',
    dob: '1998-07-04',
    scheme: 'Housing Scheme Eligibility',
    consent: false,
  });
  const [pipelineProgress, setPipelineProgress] = useState(0);
  const [activeAgent, setActiveAgent] = useState('');
  const [txId, setTxId] = useState('TXN-IND-88421');
  const workflowRef = useRef<HTMLDivElement>(null);

  const filteredServices = REAL_SERVICES.filter((s) =>
    s.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const triggerServiceWorkflow = (serviceName: string) => {
    setFormData((prev) => ({ ...prev, scheme: serviceName }));
    setStep(1);
    setSearchQuery('');
    setShowSuggestions(false);
    workflowRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const runPipeline = () => {
    setStep(3);
    setPipelineProgress(0);
    const agents = [
      '1. Request Agent (Intent Extraction)',
      '2. Routing Agent (API Mapping)',
      '3. Data Agents (Cross-System Fetch)',
      '4. Validation Agent (Anomaly Check)',
      '5. Consent & Security Agent (DPDP 2023)',
      '6. Response Agent (Payload Formatting)',
    ];
    let i = 0;
    const timer = setInterval(() => {
      setActiveAgent(agents[i]);
      setPipelineProgress(((i + 1) / agents.length) * 100);
      i++;
      if (i >= agents.length) {
        clearInterval(timer);
        const generatedTx = `TXN-IND-${Math.floor(100000 + Math.random() * 900000)}`;
        setTxId(generatedTx);
        setTimeout(() => setStep(4), 1000);
      }
    }, 1100);
  };

  return (
    <div className="space-y-6">
      {/* National Portal of India Style Hero Search Section */}
      <div className="bg-[#002147] text-white py-10 md:py-14 px-5 md:px-8 rounded-2xl shadow-xl relative overflow-hidden border border-blue-900/60">
        {/* Subtle background national emblem motif overlay */}
        <div className="absolute right-4 -bottom-10 opacity-10 text-[180px] pointer-events-none select-none">
          🏛️
        </div>

        <div className="max-w-3xl mx-auto relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Government of Maharashtra • SIH 2026 Interoperability Engine</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white leading-snug">
            {t.nationalPortal}
          </h1>
          <p className="text-blue-200 text-xs md:text-sm font-medium tracking-wide max-w-xl mx-auto">
            {t.subtitle}
          </p>

          {/* Search Box with Real-time Suggestions */}
          <div className="flex flex-col sm:flex-row gap-2 mt-4 relative max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white text-slate-900 placeholder-slate-400 outline-none text-sm md:text-base shadow-lg focus:ring-4 focus:ring-blue-500/40 transition-all"
              />

              {showSuggestions && searchQuery && filteredServices.length > 0 && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50 text-left">
                  {filteredServices.map((service) => (
                    <button
                      key={service}
                      onClick={() => triggerServiceWorkflow(service)}
                      className="w-full text-left px-5 py-3 text-slate-800 hover:bg-blue-50 border-b border-slate-100 last:border-0 font-medium text-xs md:text-sm flex items-center justify-between transition-colors"
                    >
                      <span>{service}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                if (searchQuery.trim()) {
                  triggerServiceWorkflow(searchQuery);
                }
              }}
              className="bg-red-600 hover:bg-red-700 px-6 py-3.5 rounded-xl font-bold text-white text-sm shadow-md transition-colors whitespace-nowrap active:scale-95"
            >
              Search Service
            </button>
          </div>

          {/* Trending Searches Tags */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 pt-2 text-xs text-blue-200">
            <span className="font-bold text-white text-xs">{t.trending}</span>
            {REAL_SERVICES.slice(0, 5).map((service) => (
              <button
                key={service}
                onClick={() => triggerServiceWorkflow(service)}
                className="bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-1 rounded-full text-[11px] font-medium transition-all text-white"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 5-Step Citizen Workflow Container */}
      <div ref={workflowRef} className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Stepper Header */}
          <div className="bg-slate-50 border-b border-slate-200 px-3 py-2.5 flex overflow-x-auto scrollbar-none">
            {['Request', 'Consent', 'Agent Swarm', 'Data Ledger', 'Result'].map((lbl, i) => (
              <div
                key={lbl}
                className={`flex-1 min-w-[120px] text-center px-2 py-2 border-b-2 transition-all duration-300 ${
                  step >= i + 1 ? 'border-blue-600 text-blue-700' : 'border-transparent text-slate-400'
                }`}
              >
                <div
                  className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${
                    step >= i + 1 ? 'text-blue-600' : 'text-slate-400'
                  }`}
                >
                  Step 0{i + 1}
                </div>
                <div className="text-xs font-semibold">{lbl}</div>
              </div>
            ))}
          </div>

          <div className="p-6 md:p-10 min-h-[460px] flex flex-col justify-center">
            {/* STEP 1: Application Details */}
            {step === 1 && (
              <div className="max-w-xl mx-auto space-y-6 w-full animate-in fade-in duration-300">
                <div className="text-center space-y-1">
                  <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    Application Details
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Enter basic details once. The multi-agent swarm will query and cross-verify registries automatically.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.selectScheme}
                    </label>
                    <select
                      value={formData.scheme}
                      onChange={(e) => setFormData({ ...formData, scheme: e.target.value })}
                      className="w-full p-3.5 bg-slate-50/80 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none font-semibold text-slate-900 text-sm"
                    >
                      {REAL_SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.applicantName} *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Manya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3.5 border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-blue-600 outline-none text-sm font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Secure Govt ID (Edge-Masked)
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        disabled
                        value="[Aadhaar Redacted • SHA-256 Verified]"
                        className="w-full pl-10 p-3.5 bg-slate-100 border border-slate-200 text-slate-500 rounded-xl font-mono text-xs cursor-not-allowed font-semibold"
                      />
                    </div>
                    <p className="text-[11px] text-emerald-600 mt-1.5 flex items-center gap-1 font-medium">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Edge-masked for strict DPDP Act 2023 compliance. No raw identifiers stored.</span>
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      if (!formData.name.trim()) {
                        alert('Please enter applicant name.');
                        return;
                      }
                      setStep(2);
                    }}
                    className="w-full bg-[#002147] hover:bg-blue-900 text-white py-3.5 rounded-xl font-bold mt-2 transition-all shadow-md flex items-center justify-center gap-2 active:scale-95 text-sm"
                  >
                    <span>{t.proceedConsent}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Digital Authorization Consent Gate */}
            {step === 2 && (
              <div className="max-w-xl mx-auto space-y-6 w-full animate-in slide-in-from-right-4 duration-300">
                <div className="text-center space-y-1">
                  <div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    Digital Authorization Consent Gate
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Data Protection & Cross-Departmental Interoperability Gate
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs text-slate-700 leading-relaxed shadow-xs">
                  <p className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-sm">
                    <Database className="w-4 h-4 text-blue-600" />
                    <span>Automated Interoperability Notice:</span>
                  </p>
                  <p className="text-slate-600">
                    To adjudicate your request for <strong className="text-blue-700">{formData.scheme}</strong> without requiring physical document submissions, the Sarkar Seva Multi-Agent Swarm will securely query the following state and central databases:
                  </p>
                  <ul className="list-disc pl-5 mt-2.5 space-y-1 font-semibold text-slate-700">
                    <li>State Revenue Department & CBDT (Income & Tax records)</li>
                    <li>State Land Records Registry (Property & Urban asset search)</li>
                    <li>Central Identity Portal / UIDAI (Identity & Token authentication)</li>
                  </ul>
                </div>

                <label className="flex items-start gap-3.5 p-4 border border-blue-200 bg-blue-50/60 rounded-xl cursor-pointer hover:bg-blue-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-600"
                  />
                  <span className="text-xs font-semibold text-slate-800 leading-normal">
                    I provide explicit, purpose-restricted digital consent under the DPDP Act 2023 authorizing Sarkar Seva to query connected departmental APIs for this transaction.
                  </span>
                </label>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 bg-white border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 text-xs transition-colors"
                  >
                    Back
                  </button>

                  <button
                    disabled={!formData.consent}
                    onClick={runPipeline}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-xs transition-all disabled:opacity-50 shadow-md flex items-center justify-center gap-2"
                  >
                    <Activity className="w-4 h-4" />
                    <span>Authorize & Orchestrate Swarm</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: LangGraph Agent Swarm Execution */}
            {step === 3 && (
              <div className="max-w-2xl mx-auto text-center space-y-8 w-full animate-in fade-in duration-300 py-4">
                <div className="space-y-1">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    Multi-Agent AI Swarm Orchestration
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    LangGraph autonomous agents are querying departmental endpoints concurrently.
                  </p>
                </div>

                <div className="relative flex items-center justify-center py-4">
                  <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center relative z-10 border border-blue-200 shadow-xl shadow-blue-500/10">
                    <Network className="w-9 h-9 text-blue-600 animate-pulse" />
                  </div>
                  <div className="absolute w-28 h-28 bg-blue-400/20 rounded-full animate-ping pointer-events-none"></div>
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <div className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 inline-block px-4 py-1.5 rounded-full">
                    Executing: {activeAgent}
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden shadow-inner border border-slate-200">
                    <div
                      className="bg-blue-600 h-full transition-all duration-300 ease-out"
                      style={{ width: `${pipelineProgress}%` }}
                    />
                  </div>
                </div>

                {/* 6 Specialized Agent Status Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-left">
                  {[
                    'Request Agent',
                    'Routing Agent',
                    'Data Agents',
                    'Validation Agent',
                    'Consent & Security',
                    'Response Agent',
                  ].map((agent, idx) => {
                    const isDone = pipelineProgress > (idx / 6) * 100;
                    return (
                      <div
                        key={agent}
                        className={`p-3 rounded-xl border text-xs font-mono transition-all duration-300 ${
                          isDone
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-800 shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-400'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-[11px]">{idx + 1}. {agent}</span>
                          {isDone && <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: Canonical Interoperability Ledger (JSON View) */}
            {step === 4 && (
              <div className="max-w-2xl mx-auto space-y-5 w-full animate-in slide-in-from-bottom-4 duration-300">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <Server className="w-6 h-6 text-slate-800" />
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">
                        Interoperability Ledger & API Payload
                      </h2>
                      <p className="text-[11px] text-slate-500 font-medium">
                        Standardized Canonical JSON returned across departmental bridges
                      </p>
                    </div>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                    HTTP 200 OK
                  </span>
                </div>

                <div className="bg-[#0f172a] rounded-2xl overflow-hidden shadow-xl border border-slate-800">
                  <div className="bg-[#1e293b] px-4 py-2.5 flex items-center justify-between border-b border-slate-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                      <span className="text-xs font-mono text-slate-300 ml-2 font-semibold">
                        canonical_ledger_payload.json
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">TLS 1.3 • AES-256</span>
                  </div>

                  <pre className="p-5 text-[11px] md:text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">
{`{
  "transaction_id": "${txId}",
  "timestamp": "${new Date().toISOString()}",
  "workflow": "${formData.scheme.replace(/\\s+/g, '_')}",
  "departments_queried": ["State_Revenue_DB", "UIDAI_Aadhaar", "Land_Records"],
  "response": {
    "identity_verification": {
      "status": 200,
      "name_match": true,
      "uid_hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    "revenue_verification": {
      "status": 200,
      "income_threshold_met": true,
      "land_record_clear": true
    }
  },
  "ai_validation": {
    "anomaly_detected": false,
    "confidence_score": 0.994
  },
  "security": {
    "consent_verified": true,
    "encryption": "AES-256-GCM"
  }
}`}
                  </pre>
                </div>

                <button
                  onClick={() => setStep(5)}
                  className="w-full bg-[#002147] hover:bg-blue-900 text-white py-3.5 rounded-xl font-bold transition-all shadow-md flex justify-center items-center gap-2 text-xs md:text-sm active:scale-95"
                >
                  <Award className="w-4 h-4" />
                  <span>Generate Final Decision Certificate</span>
                </button>
              </div>
            )}

            {/* STEP 5: Approved Result & Verifiable Certificate */}
            {step === 5 && (
              <div className="max-w-md mx-auto text-center space-y-6 w-full animate-in zoom-in-95 duration-300 py-4">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner border-4 border-white">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-1">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">Approved</h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Your application passed AI verification across all 3 departmental databases successfully.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs text-left space-y-3.5 relative overflow-hidden">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Application ID
                    </span>
                    <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-xs">
                      {txId}
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Service
                    </span>
                    <span className="font-semibold text-slate-800 text-xs">{formData.scheme}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Applicant
                    </span>
                    <span className="font-semibold text-slate-800 text-xs">{formData.name}</span>
                  </div>

                  <div className="flex justify-between items-center pt-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Verdict
                    </span>
                    <span className="text-emerald-700 font-extrabold flex items-center gap-1 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified & Cleared</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => onOpenCertificate(formData.scheme, formData.name, txId)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Award className="w-4 h-4" />
                    <span>View Official Certificate</span>
                  </button>

                  <button
                    onClick={() => {
                      setStep(1);
                      setFormData({
                        name: 'Manya Sharma',
                        dob: '1998-07-04',
                        scheme: 'Ayushman Bharat Card',
                        consent: false,
                      });
                    }}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-3 rounded-xl font-bold text-xs transition-colors border border-slate-200"
                  >
                    Start New Request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
