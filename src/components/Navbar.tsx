import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, FileDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300 py-4 sm:py-5">
      <div className="section-container">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
            isScrolled
              ? 'bg-[#0D1124]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40'
              : 'bg-white/[0.02] backdrop-blur-md border border-white/[0.06]'
          }`}
          aria-label="Primary"
        >
          {/* Logo / Brand Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white group"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-primary/40 group-hover:border-primary transition-colors">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.preferredName}
                className="w-full h-full object-cover"
              />
            </div>
            <span>
              {personalInfo.preferredName}
              <span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links (Davin Reference Style) */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name} className="relative">
                  <a
                    href={link.href}
                    className={`relative block px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-200 rounded-full ${
                      isActive
                        ? 'text-white bg-white/[0.08] border border-white/15'
                        : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Action Button: Download CV */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !text-xs !py-2 !px-4"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-white glass hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden section-container mt-2 animate-in slide-in-from-top-2 duration-200">
          <div className="rounded-2xl bg-[#0D1124]/95 backdrop-blur-xl border border-white/10 p-4 shadow-2xl flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-primary/20 text-white border border-primary/30'
                    : 'text-text-secondary hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 mt-2">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-primary !py-2.5 justify-center"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
