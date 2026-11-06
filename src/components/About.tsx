import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, Zap, ShieldCheck, CheckSquare, Activity, Database, BookOpen, FolderKanban } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        
        {/* Section Header (Davin Reference Style) */}
        <div className="mb-14 flex flex-col gap-4 items-center text-center">
          <span className="eyebrow">Get to know me</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
            About Me
          </h2>
          <p className="max-w-2xl text-base text-text-secondary sm:text-lg">
            Dedicated to software excellence, structured testing methodologies, and performance reliability.
          </p>
        </div>

        {/* 5-Column Grid Layout (Davin Reference Structure) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16 items-start">
          
          {/* Left Column (3 cols): Narrative Bio */}
          <div className="lg:col-span-3 space-y-5">
            <div className="space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              {personalInfo.longBio.map((paragraph, idx) => (
                <p key={idx} className="text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column (2 cols): Strategic Competencies Grid */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Strategic Competencies
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              
              <div className="glass-card flex items-center gap-3 p-4">
                <Zap className="w-4 h-4 shrink-0 text-primary" />
                <span className="text-sm text-text-secondary">Performance Testing</span>
              </div>

              <div className="glass-card flex items-center gap-3 p-4">
                <ShieldCheck className="w-4 h-4 shrink-0 text-secondary" />
                <span className="text-sm text-text-secondary">Automation Testing</span>
              </div>

              <div className="glass-card flex items-center gap-3 p-4">
                <CheckSquare className="w-4 h-4 shrink-0 text-primary" />
                <span className="text-sm text-text-secondary">Manual Testing</span>
              </div>

              <div className="glass-card flex items-center gap-3 p-4">
                <Activity className="w-4 h-4 shrink-0 text-secondary" />
                <span className="text-sm text-text-secondary">Monitoring – Dynatrace</span>
              </div>

              <div className="glass-card flex items-center gap-3 p-4">
                <Database className="w-4 h-4 shrink-0 text-primary" />
                <span className="text-sm text-text-secondary">SQL &amp; MySQL</span>
              </div>

              <div className="glass-card flex items-center gap-3 p-4">
                <BookOpen className="w-4 h-4 shrink-0 text-accent" />
                <span className="text-sm text-text-secondary">SDLC &amp; STLC</span>
              </div>

              <div className="glass-card flex items-center gap-3 p-4">
                <Database className="w-4 h-4 shrink-0 text-secondary" />
                <span className="text-sm text-text-secondary">Navicat Databases</span>
              </div>

              <div className="glass-card flex items-center gap-3 p-4">
                <FolderKanban className="w-4 h-4 shrink-0 text-primary" />
                <span className="text-sm text-text-secondary">Jira</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
