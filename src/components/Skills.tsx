import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Zap, 
  Activity, 
  Code2, 
  CheckSquare, 
  FolderKanban, 
  Database, 
  CheckCircle2
} from 'lucide-react';

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

  const getSkillIcon = (skillName: string, category: string) => {
    if (skillName.includes('LoadRunner') || skillName.includes('VuGen') || skillName.includes('Controller')) {
      return <Zap className="w-5 h-5" />;
    }
    if (skillName.includes('Dynatrace') || skillName.includes('Tracing') || skillName.includes('Metrics')) {
      return <Activity className="w-5 h-5" />;
    }
    if (skillName.includes('Cypress') || skillName.includes('Katalon') || skillName.includes('Automation') || skillName.includes('JavaScript')) {
      return <Code2 className="w-5 h-5" />;
    }
    if (skillName.includes('SQL') || skillName.includes('MySQL') || skillName.includes('Navicat') || skillName.includes('Database')) {
      return <Database className="w-5 h-5" />;
    }
    if (skillName.includes('Postman') || skillName.includes('Qase') || skillName.includes('Jira') || skillName.includes('Git')) {
      return <FolderKanban className="w-5 h-5" />;
    }
    if (skillName.includes('Test Case') || skillName.includes('Functional') || skillName.includes('Defect')) {
      return <CheckSquare className="w-5 h-5" />;
    }
    if (category === 'Performance Testing') return <Zap className="w-5 h-5" />;
    if (category === 'Monitoring & APM') return <Activity className="w-5 h-5" />;
    return <CheckCircle2 className="w-5 h-5" />;
  };

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

        {/* Skills Cards Grid (Davin Reference Style) */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-6 text-center transition-colors duration-300 hover:border-primary/50 hover:shadow-glow"
            >
              {/* Radial Glow on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(108,99,255,0.25), transparent 70%)'
                }}
              />

              {/* Icon Container */}
              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                {getSkillIcon(skill.name, skill.category)}
              </span>

              {/* Skill Name */}
              <span className="relative text-xs font-medium text-white sm:text-sm">
                {skill.name}
              </span>

              {/* Sub-tag / Level */}
              <div className="flex items-center gap-1.5 relative">
                <span className="text-[10px] uppercase tracking-wider text-text-secondary">
                  {skill.category}
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/[0.05] text-primary/90 border border-white/10">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
