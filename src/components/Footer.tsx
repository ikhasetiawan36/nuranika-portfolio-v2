import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { Mail, ArrowUp, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#050816]">
      <div className="section-container flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        
        {/* Left: Copyright & Title */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <p className="text-sm text-text-secondary">
            &copy; 2026 <span className="text-white font-medium">{personalInfo.fullName}</span>. All rights reserved.
          </p>
          <p className="text-xs text-text-secondary/60 mt-0.5">
            {personalInfo.headline} &bull; Building Quality Through Testing
          </p>
        </div>

        {/* Center / Right: Social Links & Back to Top (Davin Reference Style) */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-white"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-white"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-white"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-white"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-white hover:border-primary/50"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-primary" />
          </button>
        </div>

      </div>
    </footer>
  );
};
