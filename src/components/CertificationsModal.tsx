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
      <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 max-w-3xl w-full max-h-[85vh] overflow-y-auto">
        <div className="sticky top-0 flex justify-between items-center p-6 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Certifications & Training</h2>
          <button onClick={onClose} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors" aria-label="Close">
            <X size={22} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {certifications.map(cert => {
            const card = 'flex items-start justify-between gap-4 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950';
            const content = <><div><h3 className="font-semibold">{cert.title}</h3><p className="text-sm text-zinc-600 dark:text-zinc-400">{cert.issuer}</p>{cert.credentialUrl && <span className="mt-2 inline-flex items-center gap-1 text-xs text-zinc-700 dark:text-zinc-300">View credential <ExternalLink size={12}/></span>}</div><span className="text-xs text-zinc-600 dark:text-zinc-400">{cert.year}</span></>;
            return cert.credentialUrl ? <a key={cert.title} href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className={`${card} hover:border-zinc-400 dark:hover:border-zinc-500 focus-visible:outline focus-visible:outline-2`}>{content}</a> : <div key={cert.title} className={card}>{content}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export type { Certification };
export default CertificationsModal;


