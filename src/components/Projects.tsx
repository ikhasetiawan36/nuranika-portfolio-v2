import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        
        {/* Section Header (Davin Reference Style) */}
        <div className="mb-14 flex flex-col gap-4 items-center text-center">
          <span className="eyebrow">Selected work</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
            Testing Portfolio &amp; Projects
          </h2>
          <p className="max-w-2xl text-base text-text-secondary sm:text-lg">
            Real enterprise and academic projects preserving authentic documentation, test architectures, and system screenshots.
          </p>
        </div>

        {/* Project Cards Grid (Davin Reference Style) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group glass-card flex h-full flex-col overflow-hidden transition-shadow duration-500 hover:shadow-glow cursor-pointer"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video sm:aspect-[16/10] w-full overflow-hidden bg-base">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/95 via-base/20 to-transparent" />

                {/* Top Left Category Badge */}
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                  {project.category}
                </span>

                {/* Top Right Quick Icon */}
                <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-glow">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="text-xs font-mono font-medium text-secondary mb-1">
                  {project.subtitle}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white transition-colors group-hover:text-primary mb-2">
                  {project.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-text-secondary line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Tech Pills (Davin Reference Style) */}
                <div className="mt-auto flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-text-secondary/60">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Card Action Link */}
                <div className="mt-5 flex items-center justify-between text-xs text-primary font-medium group-hover:text-primary-light">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>View Case Study &amp; Assets</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
