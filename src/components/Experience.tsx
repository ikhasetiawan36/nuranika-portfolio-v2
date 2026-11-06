import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Building2, CheckCircle2, Cpu } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container">
        
        {/* Section Header (Davin Reference Style) */}
        <div className="mb-14 flex flex-col gap-4 items-center text-center">
          <span className="eyebrow">My path so far</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
            Professional Experience
          </h2>
          <p className="max-w-2xl text-base text-text-secondary sm:text-lg">
            Practical enterprise performance testing and software quality assurance history.
          </p>
        </div>

        {/* Timeline (Davin Reference Centered / Alternating Timeline) */}
        <div className="relative mx-auto max-w-4xl">
          
          {/* Vertical Timeline Lines */}
          <div className="absolute left-5 top-0 h-full w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2" />
          <div className="absolute left-5 top-0 h-full w-px bg-[linear-gradient(180deg,#6C63FF,#00E5FF,#FF4D9D)] sm:left-1/2 sm:-translate-x-1/2 opacity-70" />

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-12 sm:gap-14">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className="relative flex flex-col gap-4 pl-14 sm:grid sm:grid-cols-2 sm:gap-10 sm:pl-0 items-start"
                >
                  {/* Center Node Icon */}
                  <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-surface text-primary shadow-glow sm:left-1/2 sm:-translate-x-1/2 z-10">
                    <Briefcase className="w-4 h-4" />
                  </span>

                  {/* Left Column / Even Card */}
                  <div className={`${isEven ? 'sm:text-right sm:pr-8' : 'sm:order-2 sm:pl-8'}`}>
                    <div className="glass-card p-6 sm:p-7 text-left group">
                      
                      <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                        <span className="eyebrow !text-[10px] !py-0.5">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="text-[10px] font-mono uppercase tracking-wider text-secondary px-2 py-0.5 rounded-full bg-secondary/10 border border-secondary/20">
                            Enterprise Focus
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>

                      <p className="text-sm font-medium text-secondary mt-1 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{exp.company} &bull; {exp.location}</span>
                      </p>

                      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                        {exp.summary}
                      </p>

                      {/* Technical Scope Breakdown */}
                      <div className="mt-4 pt-3 border-t border-white/[0.06]">
                        <div className="text-xs font-mono uppercase tracking-wider text-white/60 mb-2 flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-primary" />
                          <span>Testing Scope &amp; Responsibilities:</span>
                        </div>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-text-secondary">
                          {exp.technicalScope.map((scope, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                              <span>{scope}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Highlights */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mt-4 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                          <div className="text-[11px] font-mono text-secondary uppercase tracking-wider mb-1">
                            Key Outcomes:
                          </div>
                          <ul className="space-y-1 text-xs text-text-secondary">
                            {exp.achievements.map((ach, aIdx) => (
                              <li key={aIdx} className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-secondary" />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tools & Tech Stack Pills (Davin Reference Style) */}
                      <div className="mt-5 flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
                        {exp.tools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-text-secondary"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Empty spacer for the alternating column on desktop */}
                  <div className={`hidden sm:block ${isEven ? 'sm:order-2' : 'sm:order-1'}`} aria-hidden="true" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
