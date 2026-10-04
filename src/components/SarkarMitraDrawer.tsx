import React, { useState } from 'react';
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Shield,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { TRANSLATIONS } from '../data/mockData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang?: string;
  onSelectService?: (serviceName: string) => void;
}

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  suggestedAction?: {
    label: string;
    serviceName: string;
  };
}

export const SarkarMitraDrawer: React.FC<Props> = ({
  isOpen,
  onClose,
  lang = 'English',
  onSelectService,
}) => {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.English;

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: t.welcome || 'Namaste! I am Sarkar Mitra, your autonomous AI guide for Government of India & Maharashtra citizen services. How can I help you today?',
      suggestedAction: {
        label: 'Check Housing Scheme Eligibility',
        serviceName: 'Housing Scheme Eligibility',
      },
    },
  ]);

  if (!isOpen) return null;

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();
    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput('');

    // Automated smart assistant response based on Indian citizen public service intent
    setTimeout(() => {
      let botReply = '';
      let action: { label: string; serviceName: string } | undefined = undefined;

      const lower = userText.toLowerCase();
      if (lower.includes('housing') || lower.includes('ghar') || lower.includes('awas') || lower.includes('home')) {
        botReply =
          'Under the Pradhan Mantri Awas Yojana (PMAY) and Maharashtra state housing programs, eligibility is verified through 3 connected databases: Identity (UIDAI), Income Certificate (Treasury/CBDT), and Land Records. Sarkar Seva can check your eligibility in under 3 minutes without paper submissions.';
        action = {
          label: 'Launch Housing Scheme Check',
          serviceName: 'Housing Scheme Eligibility',
        };
      } else if (lower.includes('ayushman') || lower.includes('health') || lower.includes('hospital') || lower.includes('card')) {
        botReply =
          'Ayushman Bharat (PM-JAY) provides health coverage up to ₹5 Lakh per family per year. We verify your ration card and SECC database records automatically.';
        action = {
          label: 'Apply for Ayushman Bharat Card',
          serviceName: 'Ayushman Bharat Card',
        };
      } else if (lower.includes('income') || lower.includes('certificate') || lower.includes('tahsildar')) {
        botReply =
          'Income Certificates are issued through verified tax filings and state revenue registry records. Cross-checks prevent the need for visiting the Tahsildar office.';
        action = {
          label: 'Request Income Certificate',
          serviceName: 'Income Certificate Issuance',
        };
      } else if (lower.includes('dpdp') || lower.includes('privacy') || lower.includes('data') || lower.includes('consent')) {
        botReply =
          'Under the Digital Personal Data Protection (DPDP) Act 2023, Sarkar Seva operates on purpose-limited, ephemeral consent. Your data is fetched in-memory, checked for anomalies, and never stored as raw PII.';
      } else {
        botReply = `I understand you need assistance with "${userText}". Our multi-agent mesh can cross-verify state and central registries for this service. You can start the verification directly!`;
        action = {
          label: 'Proceed with Verification',
          serviceName: 'Housing Scheme Eligibility',
        };
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: botReply,
          suggestedAction: action,
        },
      ]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300 border-l border-slate-200">
        {/* Header */}
        <div className="bg-[#002147] text-white p-4.5 flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm text-white">Sarkar Mitra AI</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <p className="text-[11px] text-blue-200 font-medium">
                National Citizen Support Assistant
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-blue-900/60 hover:bg-blue-800 text-blue-200 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* DPDP Compliance Notice */}
        <div className="bg-blue-50/80 border-b border-blue-100 px-4 py-2 flex items-center gap-2 text-[11px] text-blue-800">
          <Shield className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>Queries are encrypted and protected under the DPDP Act 2023.</span>
        </div>

        {/* Chat History */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50 text-xs">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className="flex items-start gap-2 max-w-[85%]">
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">
                    SM
                  </div>
                )}
                <div
                  className={`p-3.5 rounded-2xl leading-relaxed shadow-xs ${
                    m.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none font-medium'
                  }`}
                >
                  {m.text}

                  {m.suggestedAction && onSelectService && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100">
                      <button
                        onClick={() => {
                          onSelectService(m.suggestedAction!.serviceName);
                          onClose();
                        }}
                        className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 px-3 py-2 rounded-xl font-bold text-[11px] flex items-center justify-between transition-colors shadow-xs"
                      >
                        <span>{m.suggestedAction.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Prompts */}
        <div className="p-3 bg-white border-t border-slate-100 flex gap-2 overflow-x-auto scrollbar-none text-[11px]">
          {['Housing Scheme', 'Ayushman Bharat', 'Income Certificate', 'Data Privacy'].map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setInput(tag);
              }}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1 rounded-full whitespace-nowrap font-medium transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3.5 bg-white border-t border-slate-200 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            placeholder={t.askEligibility || 'Ask about scheme eligibility or track an application...'}
            className="flex-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            onClick={handleSend}
            className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-sm transition-all active:scale-95"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
