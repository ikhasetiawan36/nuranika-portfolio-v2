import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { Mail, MessageSquare, Copy, Check, ArrowUpRight, FileDown } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container">
        
        {/* Section Header (Davin Reference Style) */}
        <div className="mb-14 flex flex-col gap-4 items-center text-center">
          <span className="eyebrow">Let's connect</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
            Contact Me
          </h2>
          <p className="max-w-2xl text-base text-text-secondary sm:text-lg">
            Have a project, quality engineering opportunity, or inquiry? Feel free to reach out directly through any channel below.
          </p>
        </div>

        {/* Simplified, Compact & Elegant Clickable Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          {/* WhatsApp Card */}
          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="glass-card flex flex-col justify-between p-6 group hover:border-secondary/60 hover:shadow-glow transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </span>
              <ArrowUpRight className="w-4 h-4 text-text-secondary group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <span className="block text-xs font-mono text-text-secondary uppercase tracking-wider">WhatsApp</span>
              <span className="block text-sm sm:text-base font-bold text-white group-hover:text-secondary transition-colors mt-0.5">
                {personalInfo.phone}
              </span>
              <span className="block text-[11px] text-text-secondary/70 mt-1">Direct Chat &bull; Fast Response</span>
            </div>
          </a>

          {/* Email Card with Copy Option */}
          <div className="glass-card flex flex-col justify-between p-6 group hover:border-primary/60 hover:shadow-glow transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg text-text-secondary hover:text-white hover:bg-white/10 transition-colors"
                title="Copy email address"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="block min-w-0"
            >
              <span className="block text-xs font-mono text-text-secondary uppercase tracking-wider">Email</span>
              <span className="block text-sm sm:text-base font-bold text-white truncate group-hover:text-primary transition-colors mt-0.5">
                {personalInfo.email}
              </span>
              <span className="block text-[11px] text-text-secondary/70 mt-1">Click to send or copy</span>
            </a>
          </div>

          {/* LinkedIn Card */}
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="glass-card flex flex-col justify-between p-6 group hover:border-primary/60 hover:shadow-glow transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary group-hover:scale-105 transition-transform">
                <LinkedInIcon className="w-6 h-6" />
              </span>
              <ArrowUpRight className="w-4 h-4 text-text-secondary group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <span className="block text-xs font-mono text-text-secondary uppercase tracking-wider">LinkedIn</span>
              <span className="block text-sm sm:text-base font-bold text-white group-hover:text-primary transition-colors mt-0.5 truncate">
                {personalInfo.preferredName} Ramadhanti
              </span>
              <span className="block text-[11px] text-text-secondary/70 mt-1">Professional Profile</span>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="glass-card flex flex-col justify-between p-6 group hover:border-primary/60 hover:shadow-glow transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-white group-hover:scale-105 transition-transform">
                <GitHubIcon className="w-6 h-6" />
              </span>
              <ArrowUpRight className="w-4 h-4 text-text-secondary group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <span className="block text-xs font-mono text-text-secondary uppercase tracking-wider">GitHub</span>
              <span className="block text-sm sm:text-base font-bold text-white group-hover:text-primary transition-colors mt-0.5">
                @ikhasetiawan36
              </span>
              <span className="block text-[11px] text-text-secondary/70 mt-1">Repositories &amp; Code</span>
            </div>
          </a>

        </div>

        {/* Additional Centered Quick Resume CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost !text-xs !py-2.5 !px-5 gap-2"
          >
            <FileDown className="w-4 h-4 text-secondary" />
            <span>Download Official Resume (Curriculum Vitae)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
