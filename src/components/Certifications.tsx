import React from 'react';
import { certificatesAndAchievements } from '../data/portfolioData';
import { Award, FileText, CheckCircle2, Zap, GraduationCap } from 'lucide-react';

export const Certifications: React.FC = () => {
  const getItemIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Zap className="w-5 h-5 text-primary" />;
      case 1:
        return <FileText className="w-5 h-5 text-secondary" />;
      case 2:
        return <Award className="w-5 h-5 text-accent" />;
      case 3:
        return <GraduationCap className="w-5 h-5 text-primary" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section id="certificates" className="section-padding relative">
      <div className="section-container">
        
        {/* Section Header (Davin Reference Style) */}
        <div className="mb-14 flex flex-col gap-4 items-center text-center">
          <span className="eyebrow">Proof of learning</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
            Certificates &amp; Achievements
          </h2>
          <p className="max-w-2xl text-base text-text-secondary sm:text-lg">
            Recognized performance engineering milestones, published academic research, and professional QA certifications.
          </p>
        </div>

        {/* Text-Based Achievement Cards Grid (Clean, Elegant, No Photos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificatesAndAchievements.map((item, idx) => (
            <div
              key={item.id}
              className="glass-card p-6 sm:p-7 flex flex-col justify-between group hover:border-primary/50 transition-all duration-300"
            >
              <div>
                {/* Header row with Icon and Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-105 transition-transform">
                    {getItemIcon(idx)}
                  </div>
                  <span className="eyebrow !text-[10px] !py-0.5">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors mb-1.5">
                  {item.title}
                </h3>

                {/* Focus / Provider */}
                <p className="text-xs sm:text-sm font-mono text-secondary mb-3">
                  {item.focus}
                </p>

                {/* Detailed Description */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Skills / Scope Badges */}
              <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
