import React, { useState } from 'react';
import { supabase } from './supabase'; // Import our secure connection
import { 
  Building2, 
  ArrowRight, 
  Fingerprint, 
  Smartphone, 
  Mail, 
  User, 
  ArrowLeft,
  Loader2 
} from 'lucide-react';

interface Props {
  onContinue: (data: { name: string; identifier: string; type: string }) => void;
  onDepartmentLogin: (data: { name: string; department: string; email: string; officerId: string }) => void;
  onBack: () => void;
  autoFill?: boolean;
}

export function Screen02SignIn({ onContinue, onDepartmentLogin, onBack, autoFill = false }: Props) {
  const [activeTab, setActiveTab] = useState<'citizen' | 'department'>('citizen');
  
  // New state variables for OTP Auth
  const [email, setEmail] = useState(autoFill ? 'manya.sharma@example.com' : '');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // 1. Send the OTP Email
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        // Optional: redirect back to your Cloudflare page if they click the email link
        emailRedirectTo: window.location.origin,
      }
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      setOtpSent(true); // Switch UI to ask for the code
    }
    setLoading(false);
  };

  // 2. Verify the OTP Code the user types in
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token: otpCode,
      type: 'email'
    });

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
    } else {
      // Success! Pass data back to App.tsx to change the screen
      onContinue({ 
        name: data.user?.email?.split('@')[0] || 'Citizen', 
        identifier: email, 
        type: 'email' 
      });
    }
  };

  // Mock department login (we can secure this later)
  const handleDeptLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onDepartmentLogin({
      name: 'Rajesh Verma',
      department: 'UIDAI - Identity Department',
      email: 'rajesh.verma@uidai.gov.in',
      officerId: 'GOV-UID-8842'
    });
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row bg-slate-900 overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <button 
        onClick={onBack}
        className="absolute top-4 md:top-6 left-4 md:left-6 z-20 text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors bg-slate-900/50 px-3 py-1.5 rounded-full border border-slate-700/50 backdrop-blur-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back</span>
      </button>

      {/* Left Column (Branding) */}
      <div className="hidden md:flex w-5/12 bg-slate-950 p-8 flex-col justify-between border-r border-slate-800 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center border border-blue-500/30 shadow-lg shadow-blue-900/20">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Sarkar Seva</h2>
              <p className="text-xs text-blue-400 font-medium">Unified DPI Portal</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-3xl font-light text-slate-200 leading-tight">
              One Identity.<br />
              <span className="font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Zero Friction.</span>
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Access 4,200+ government services instantly using your secure digital identity. No more repetitive form filling or document uploads.
            </p>
          </div>
        </div>
        
        <div className="bg-blue-950/30 border border-blue-900/50 rounded-xl p-4 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-900/50 rounded-lg text-blue-400 shrink-0">
              <Fingerprint className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-blue-300 mb-1">Privacy Preserving</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Your data never leaves the encrypted DPI vault. Services only receive "Yes/No" verifications, never the raw data itself.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column (Auth Forms) */}
      <div className="w-full md:w-7/12 p-6 md:p-12 flex flex-col justify-center relative z-10">
        <div className="max-w-md w-full mx-auto">
          
          {/* Tab Selector */}
          <div className="flex p-1 bg-slate-950 rounded-xl border border-slate-800 mb-8 mt-12 md:mt-0">
            <button
              onClick={() => setActiveTab('citizen')}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                activeTab === 'citizen' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <User className="w-4 h-4" />
              Citizen Login
            </button>
            <button
              onClick={() => setActiveTab('department')}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                activeTab === 'department' 
                  ? 'bg-emerald-700 text-white shadow-md' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Building2 className="w-4 h-4" />
              Nodal Officer
            </button>
          </div>

          {errorMsg && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
              {errorMsg}
            </div>
          )}

          {activeTab === 'citizen' ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Welcome Citizen</h2>
                <p className="text-slate-400 text-sm">
                  {otpSent ? "We sent a 6-digit code to your email." : "Enter your email to receive a secure one-time passcode."}
                </p>
              </div>

              {!otpSent ? (
                /* Step 1: Email Form */
                <form onSubmit={handleSendOtp} className="space-y-5">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input 
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98] disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Send OTP'}
                  </button>
                </form>
              ) : (
                /* Step 2: OTP Verification Form */
                <form onSubmit={handleVerifyOtp} className="space-y-5">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">One-Time Password</label>
                      <div className="relative">
                        <Smartphone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input 
                          type="text"
                          value={otpCode}
                          onChange={(e) => setOtpCode(e.target.value)}
                          placeholder="123456"
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 tracking-widest font-mono"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98] disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Verify & Continue'}
                    {!loading && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Officer Portal</h2>
                <p className="text-slate-400 text-sm">Access department dashboard.</p>
              </div>
              <form onSubmit={handleDeptLogin} className="space-y-5">
                <button 
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-900/20 active:scale-[0.98]"
                >
                  Access Officer Console
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


// The root App component that Vite is looking for
export default function App() {
  const [view, setView] = useState('login');

  if (view === 'dashboard') {
    return (
      <div className="w-full h-screen bg-slate-900 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4 text-emerald-400">Authentication Successful!</h1>
        <p className="text-slate-400 mb-8">Welcome to the Sarkar Seva secure portal.</p>
        <button 
          onClick={() => setView('login')} 
          className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl font-medium transition-colors"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <Screen02SignIn 
      onContinue={(data) => setView('dashboard')} 
      onDepartmentLogin={(data) => setView('dashboard')} 
      onBack={() => {}} 
    />
  );
}
