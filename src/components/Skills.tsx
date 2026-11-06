import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Flatten all skills with their category name
  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({
      ...skill,
      category: cat.category,
      categoryIcon: cat.iconName
    }))
  );

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  const filteredSkills = activeCategory === 'All'
    ? allSkills
    : allSkills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container">
        
        {/* Section Header (Davin Reference Style) */}
        <div className="mb-14 flex flex-col gap-4 items-center text-center">
          <span className="eyebrow">What I work with</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
            Skills &amp; Technologies
          </h2>
          <p className="max-w-2xl text-base text-text-secondary sm:text-lg">
            Structured suite of performance tools, observability platforms, automation frameworks, and QA methodologies.
          </p>
        </div>

        {/* Filter Pills (Davin Reference Style) */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 sm:text-sm ${
                  isActive
                    ? 'border-primary/60 bg-primary/20 text-white shadow-glow'
                    : 'border-white/10 bg-white/[0.02] text-text-secondary hover:border-white/25 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid (Reference Style) */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
            >
              {/* Radial Glow on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(108,99,255,0.25), transparent 70%)'
                }}
              />

              {/* Official Logo Container at the Top */}
              <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-white/[0.07]">
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    loading="lazy"
                    className="h-9 w-9 sm:h-10 sm:w-10 object-contain select-none"
                  />
                )}
              </div>

              {/* Tool or Technology Name Underneath */}
              <span className="relative text-xs font-semibold text-white sm:text-sm leading-snug">
                {skill.name}
              </span>

              {/* Existing Category Label Below the Name */}
              <span className="relative text-[10px] uppercase tracking-wider text-text-secondary">
                {skill.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
