import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { X, CheckCircle2, Target, Wrench, Lightbulb, ExternalLink, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentDisplayImage = activeImage || project.image;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-3xl bg-[#0D1124] border border-white/15 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-base/60 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="eyebrow !text-[11px] !py-0.5">
              {project.category}
            </span>
            <span className="text-xs text-text-secondary font-mono hidden sm:inline">
              Verified Project Case Study
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-text-secondary hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7 custom-scrollbar">
          
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-secondary font-mono text-sm sm:text-base mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Actual Project Screenshot Container */}
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-base relative group">
            <div className="max-h-[380px] flex items-center justify-center bg-black/40 overflow-hidden">
              <img
                src={currentDisplayImage}
                alt={project.imageAlt}
                className="w-full h-auto max-h-[380px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            
            {/* Gallery Thumbnail Selector if multiple images available */}
            {project.galleryImages && project.galleryImages.length > 1 && (
              <div className="flex items-center gap-2 p-2.5 bg-black/50 border-t border-white/10 overflow-x-auto">
                <span className="text-[11px] font-mono text-text-secondary mr-1">Project Views:</span>
                {project.galleryImages.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`h-11 w-16 rounded-lg overflow-hidden border transition-all ${
                      currentDisplayImage === img
                        ? 'border-primary shadow-glow scale-105'
                        : 'border-white/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="p-3 bg-white/[0.02] border-t border-white/10 flex items-center justify-between text-xs text-text-secondary">
              <span className="flex items-center gap-1.5 text-white">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span>Original Verified Documentation Asset</span>
              </span>
              <a
                href={currentDisplayImage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light font-medium inline-flex items-center gap-1"
              >
                <span>View Full Asset</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Metrics if available */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((m, i) => (
                <div key={i} className="glass-card p-3 text-center">
                  <div className="text-xs text-text-secondary">{m.label}</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Overview Description */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-2 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              <span>Project Overview</span>
            </h3>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Objectives */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
              <span>Testing Objectives &amp; Quality Goals</span>
            </h3>
            <ul className="grid grid-cols-1 gap-2">
              {project.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary glass-card p-3 rounded-xl">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Responsibilities */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Key Responsibilities &amp; Contributions</span>
            </h3>
            <ul className="space-y-2">
              {project.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools and Technologies */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-accent" />
              <span>Tools &amp; Technologies Used</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Learnings */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
              <span>Key Learnings &amp; Quality Impact</span>
            </h3>
            <ul className="space-y-2">
              {project.keyLearnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary glass-card p-3 rounded-xl">
                  <span className="text-yellow-400 text-xs font-bold mt-0.5">&bull;</span>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-4 bg-base/60 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="btn-primary !text-xs !py-2 !px-5"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
