import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { FileDown, Mail, ArrowDown, ShieldCheck, Gauge, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[75vh]">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
            
            {/* Eyebrow Pill */}
            <div className="eyebrow mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span>Available for Roles &bull; QA & Performance</span>
            </div>

            {/* Main Greeting & Full Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.12] tracking-tight text-white mb-4">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="gradient-text">{personalInfo.fullName}</span>
            </h1>

            {/* Professional Headline */}
            <p className="text-lg sm:text-xl font-medium text-secondary mb-4">
              {personalInfo.headline}
            </p>

            {/* Compelling Headline & Supporting Description */}
            <div className="space-y-2 mb-8 max-w-xl">
              <h2 className="text-base sm:text-lg font-semibold text-white">
                "{personalInfo.tagline}"
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-text-secondary">
                {personalInfo.description}
              </p>
            </div>

            {/* Action Buttons (Davin Reference Style) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href="#contact"
                className="btn-ghost"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified Focus Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-text-secondary pt-4 border-t border-white/[0.08] w-full max-w-xl">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/50">Core Focus:</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-white">LoadRunner</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-white">Katalon &amp; Cypress</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-white">Manual Testing</span>
            </div>

          </div>

          {/* Right Column: Hero Portrait Showcase Card */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-64 sm:w-80 lg:w-92">
              
              {/* Outer Radial Glow Blur Halo (Davin Reference) */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-[2.5rem] bg-[linear-gradient(135deg,rgba(108,99,255,0.35),rgba(0,229,255,0.25),rgba(255,77,157,0.2))] blur-3xl opacity-70"
              />

              {/* Glass Card Container */}
              <div className="glass-card p-3 rounded-3xl shadow-2xl relative overflow-hidden group">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-base relative">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.fullName}
                    className="w-full h-full object-cover object-center filter saturate-[1.05] transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent opacity-60" />

                  {/* Inside Card Footer Badge */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-base/80 backdrop-blur-md border border-white/10 p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-primary font-mono font-medium">Verified Identity</div>
                        <div className="text-xs sm:text-sm font-bold text-white">{personalInfo.fullName}</div>
                      </div>
                      <Sparkles className="w-4 h-4 text-secondary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge: Bank Syariah Indonesia */}
              <div className="absolute -top-3 -left-4 sm:-left-6 rounded-2xl bg-base/90 backdrop-blur-md border border-white/15 px-3.5 py-2 shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                  <Gauge className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-text-secondary font-medium">Quality Assurance Engineer</div>
                  <div className="text-xs font-bold text-white">Manual Test • Automation Test • Performance Testing</div>
                </div>
              </div>

              {/* Floating Badge: 100+ Performance Tests */}
              <div className="absolute -bottom-3 -right-4 rounded-2xl bg-base/90 backdrop-blur-md border border-white/15 px-3.5 py-2 shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-text-secondary font-medium">Quality Assurance</div>
                  <div className="text-xs font-bold text-white">100+ Performance Tests</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Row (Davin Reference Glass Cards) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-5 text-center flex flex-col items-center justify-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFFFFF,#00E5FF)]">
                {stat.value}
              </div>
              <div className="text-xs text-text-secondary mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll down button at bottom center */}
        <div className="flex justify-center mt-12">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="flex items-center justify-center rounded-full border border-white/10 bg-base/40 p-2 text-text-secondary backdrop-blur-sm hover:text-white hover:border-white/20 transition-colors"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
