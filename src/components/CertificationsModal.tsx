import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

interface CertificationsModalProps {
  certifications: Certification[];
  onClose: () => void;
}

const CertificationsModal: React.FC<CertificationsModalProps> = ({ certifications, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-2xl border border-slate-800 max-w-3xl w-full max-h-[85vh] overflow-y-auto">
        <div className="sticky top-0 flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900">
          <h2 className="text-2xl font-bold text-white">Certifications</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-lg transition-colors" aria-label="Close">
            <X size={22} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {certifications.map((cert, idx) => (
            <div key={idx} className="flex items-start justify-between gap-6 p-4 rounded-xl border border-slate-800 bg-slate-950">
              <div>
                <h3 className="text-white font-semibold">{cert.title}</h3>
                <p className="text-slate-400 text-sm">{cert.issuer}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs px-2 py-1 rounded-md bg-blue-950/40 text-blue-300 border border-blue-800">{cert.year}</span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-300 hover:text-blue-200 text-sm"
                  >
                    View <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export type { Certification };
export default CertificationsModal;


