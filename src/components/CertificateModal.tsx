import React from 'react';
import { X, Printer, CheckCircle2, ShieldCheck, Download } from 'lucide-react';
import { ServiceItem } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceItem;
  refNo?: string;
  citizenName?: string;
  timestamp?: string;
}

export const CertificateModal: React.FC<Props> = ({
  isOpen,
  onClose,
  service,
  refNo = 'GV-00102',
  citizenName = 'Manya Sharma',
  timestamp = '12 Sep 2026, 09:43 AM IST',
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-white text-slate-900 border border-slate-200 rounded-3xl max-w-2xl w-full p-6 md:p-8 space-y-6 shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Certificate Container with Ornamental Border */}
        <div className="border-4 border-double border-slate-300 p-6 rounded-2xl bg-gradient-to-b from-amber-50/20 via-white to-sky-50/20 space-y-6">
          {/* Certificate Header */}
          <div className="text-center space-y-1.5 border-b border-slate-200 pb-4">
            <div className="text-2xl font-serif">🏛️</div>
            <div className="text-xs uppercase font-extrabold tracking-widest text-slate-600">
              Government of India • Ministry of Housing & Urban Affairs
            </div>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
              Certificate of Eligibility
            </h3>
            <div className="text-[11px] font-mono text-slate-500">
              Issued via Sarkar Seva Autonomous Interoperability Mesh
            </div>
          </div>

          {/* Certificate Details */}
          <div className="space-y-4 text-xs">
            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-100 font-mono">
              <span>Certificate No: <strong>{refNo}</strong></span>
              <span>Issued On: <strong>{timestamp}</strong></span>
            </div>

            <p className="text-slate-700 leading-relaxed">
              This is to certify that citizen <strong className="text-slate-950">{citizenName}</strong> has been verified across connected departmental registries and adjudicated as <strong className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">ELIGIBLE</strong> for the <strong className="text-slate-950">{service.name}</strong>.
            </p>

            {/* Department Verification Table */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-left text-[11px]">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-2.5">Registry</th>
                    <th className="p-2.5">Data Evaluated</th>
                    <th className="p-2.5 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-2.5 font-bold">UIDAI Identity</td>
                    <td className="p-2.5 text-slate-600">Aadhaar Token Biometrics</td>
                    <td className="p-2.5 text-right text-emerald-600 font-bold">✓ Verified</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">CBDT Income Tax</td>
                    <td className="p-2.5 text-slate-600">Form 26AS & Annual Income Slab</td>
                    <td className="p-2.5 text-right text-emerald-600 font-bold">✓ Verified</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">Revenue & Land Records</td>
                    <td className="p-2.5 text-slate-600">Urban Property Deed Search</td>
                    <td className="p-2.5 text-right text-emerald-600 font-bold">✓ Verified</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Cryptographic Seal & QR Code */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-lg flex items-center justify-center p-1 text-[8px] font-mono text-center leading-tight">
                  [QR VERIFIED]<br />
                  SARKAR-SEVA<br />
                  {refNo}
                </div>
                <div className="text-[10px] text-slate-500">
                  <div className="font-bold text-slate-800">Digitally Signed by Govt Mesh</div>
                  <div>Hash: 7f8a9b2c3d4e5f6a1b2c</div>
                  <div>Tamper-proof verifiable credential</div>
                </div>
              </div>

              <div className="text-right">
                <div className="w-16 h-16 border-2 border-emerald-600/40 rounded-full flex flex-col items-center justify-center text-[8px] font-bold text-emerald-800 uppercase tracking-tighter mx-auto shadow-inner bg-emerald-50">
                  <span>GOVT OF INDIA</span>
                  <span className="text-[10px]">✓</span>
                  <span>APPROVED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2">
          <div className="text-[11px] text-slate-400">
            Valid across all state and central municipal authority submissions.
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="bg-[#0b1226] text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-slate-800 flex items-center space-x-2 shadow-sm transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Certificate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
