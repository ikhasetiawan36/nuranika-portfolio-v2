import React from 'react';
import { educationList } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="section-container">
        
        {/* Section Header (Davin Reference Style) */}
        <div className="mb-14 flex flex-col gap-4 items-center text-center">
          <span className="eyebrow">Academic Background</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
            Education &amp; Professional Training
          </h2>
          <p className="max-w-2xl text-base text-text-secondary sm:text-lg">
            Academic foundations in Information Systems paired with intensive QA industry training.
          </p>
        </div>

        {/* Education Cards Grid (Davin Reference Glass Card Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="p-3 rounded-2xl bg-primary/15 text-primary group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="eyebrow !text-[10px] !py-0.5">
                    {edu.period}
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-1">
                  {edu.degree}
                </h3>
                
                <div className="text-sm font-semibold text-secondary mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-secondary" />
                  <span>{edu.institution}</span>
                </div>

                <div className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-4">
                  Major / Focus: <span className="text-white font-medium">{edu.field}</span>
                </div>

                {/* Details list */}
                <ul className="space-y-2 pt-3 border-t border-white/[0.06] text-xs sm:text-sm text-text-secondary">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Badge */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-text-secondary font-mono">
                <Award className="w-4 h-4 text-secondary" />
                <span>Verified Academic Credentials</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
