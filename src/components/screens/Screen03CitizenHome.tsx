import React, { useState, useEffect } from 'react';
import { SarkarSevaLogo } from '../SarkarSevaLogo';
import { SERVICES } from '../../data/mockData';
import { ArrowRight, Home, PlusCircle, ClipboardList, User, HelpCircle, Search, ExternalLink } from 'lucide-react';

interface Props {
  citizenName?: string;
  onSelectService: (serviceId: string, customQuery?: string) => void;
  onViewRequests: () => void;
  onOpenAbout?: () => void;
  onOpenHowItWorks?: () => void;
  autoTypeQuery?: boolean;
}

export const Screen03CitizenHome: React.FC<Props> = ({
  citizenName = 'Manya',
  onSelectService,
  onViewRequests,
  onOpenAbout,
  onOpenHowItWorks,
  autoTypeQuery = true,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNav, setActiveNav] = useState<'home' | 'new' | 'requests' | 'profile' | 'about'>('home');

  useEffect(() => {
    if (autoTypeQuery) {
      const targetQuery = 'Check my housing scheme eligibility';
      setSearchQuery('');
      let idx = 0;
      const interval = setInterval(() => {
        if (idx < targetQuery.length) {
          setSearchQuery((prev) => prev + targetQuery.charAt(idx));
          idx++;
        } else {
          clearInterval(interval);
        }
      }, 45);
      return () => clearInterval(interval);
    }
  }, [autoTypeQuery]);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSelectService('housing-scheme', searchQuery || 'Check my housing scheme eligibility');
  };

  return (
    <div className="w-full h-full min-h-[580px] bg-[#fbfbfe] text-slate-900 flex rounded-2xl overflow-hidden shadow-sm select-none">
      {/* Left Sidebar */}
      <aside className="w-52 border-r border-slate-100 p-5 flex flex-col justify-between bg-white shrink-0">
        <div className="space-y-6">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <SarkarSevaLogo size="xs" showText={false} />
            <span className="font-extrabold text-sm tracking-tight text-slate-900">Sarkar Seva</span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5 text-xs font-semibold">
            <button
              onClick={() => setActiveNav('home')}
              className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl transition-all ${
                activeNav === 'home'
                  ? 'bg-blue-50 text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Home className="w-4 h-4 text-blue-600" />
              <span>Home</span>
            </button>

            <button
              onClick={() => {
                setActiveNav('new');
                onSelectService('housing-scheme');
              }}
              className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl transition-all ${
                activeNav === 'new'
                  ? 'bg-blue-50 text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <PlusCircle className="w-4 h-4 text-slate-500" />
              <span>New Request</span>
            </button>

            <button
              onClick={() => {
                setActiveNav('requests');
                onViewRequests();
              }}
              className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl transition-all ${
                activeNav === 'requests'
                  ? 'bg-blue-50 text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <ClipboardList className="w-4 h-4 text-slate-500" />
              <span>My Requests</span>
            </button>

            {onOpenAbout && (
              <button
                onClick={() => {
                  setActiveNav('about');
                  onOpenAbout();
                }}
                className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl transition-all ${
                  activeNav === 'about'
                    ? 'bg-blue-50 text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <HelpCircle className="w-4 h-4 text-blue-500" />
                <span>About Platform</span>
              </button>
            )}

            <button
              onClick={() => setActiveNav('profile')}
              className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl transition-all ${
                activeNav === 'profile'
                  ? 'bg-blue-50 text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <User className="w-4 h-4 text-slate-500" />
              <span>Profile</span>
            </button>
          </nav>
        </div>

        {/* Bottom User Avatars & Help */}
        <div className="flex items-center space-x-2 border-t pt-4 border-slate-100">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">
            MC
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-semibold">
            SK
          </div>
          <button
            onClick={() => onOpenHowItWorks ? onOpenHowItWorks() : alert('Sarkar Seva Citizen Support: 1800-11-2026')}
            className="text-[11px] text-slate-400 hover:text-slate-700 ml-auto flex items-center gap-1 transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Guide</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-8 space-y-6 overflow-y-auto">
        {/* Greetings Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 flex items-center space-x-2">
              <span>Good morning, {citizenName}</span>
              <span className="text-xl">☀️</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Let's get your Government work done, together.
            </p>
          </div>
          <div className="font-handwriting text-2xl text-indigo-800 font-bold hidden sm:block">
            Your request matters
          </div>
        </div>

        {/* Natural Language Prompt Search Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 space-y-2">
          <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
            What do you need today?
          </label>
          <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g. Check my housing scheme eligibility..."
                className="w-full bg-slate-50/80 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs md:text-sm font-medium text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
              />
            </div>
            <button
              type="submit"
              className="bg-[#0b1226] text-white w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shadow hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shrink-0"
              title="Submit request"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Popular Services Section */}
        <div className="space-y-2.5">
          <div className="text-xs font-bold text-slate-800 tracking-wide">
            Popular Services
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {SERVICES.map((srv) => (
              <button
                key={srv.id}
                onClick={() => onSelectService(srv.id)}
                className={`${srv.bgLight} border ${srv.borderLight} rounded-2xl p-4 flex flex-col items-center justify-center space-y-1.5 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all text-center group`}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {srv.icon}
                </span>
                <span className="text-xs font-bold text-slate-800">
                  {srv.name}
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  {srv.departments.length} departments
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Requests Tracker */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-800">Recent Requests</span>
            <button
              onClick={onViewRequests}
              className="text-blue-600 hover:text-blue-800 font-bold text-[11px] flex items-center gap-1 transition-colors"
            >
              <span>View all</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          <div
            onClick={onViewRequests}
            className="bg-white border border-slate-100 rounded-xl p-3.5 flex items-center justify-between shadow-sm hover:border-blue-200 transition-all cursor-pointer group"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-base shadow-sm group-hover:bg-blue-100 transition-colors">
                🏠
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Housing Scheme Eligibility
                </div>
                <div className="text-[10px] text-slate-400 font-medium font-mono">
                  Ref. No. GV-00102 • 2 days ago
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Completed</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
