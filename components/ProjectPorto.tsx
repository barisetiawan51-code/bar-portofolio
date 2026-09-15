"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  ChevronRight,
  ChevronDown,
  Globe,
  LaptopIcon
} from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { CV_DATA } from "@/lib/constant";

type ProjectType = typeof CV_DATA.projects[0] & {
  githubFrontend?: string;
  githubBackend?: string;
};

function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative bg-[#0B0C10] rounded-3xl border border-white/5 transition-all duration-500 hover:border-white/10 h-full flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden shrink-0 rounded-t-3xl">
        <div className="absolute inset-0 bg-white/5" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0B0C10] via-[#0B0C10]/60 to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-5 left-5 flex gap-2">
          <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[9px] text-white/90 font-semibold border border-white/10 uppercase tracking-wider">
            {project.category}
          </span>
          {project.institution && (
            <span className="px-3 py-1.5 rounded-full bg-indigo-500/80 backdrop-blur-md text-[9px] text-white font-semibold flex items-center gap-1.5 border border-indigo-400/30">
              {project.institution}
            </span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 p-7 pt-0 flex flex-col grow">
        
        <div>
          <h3 className="text-xl font-bold font-outfit mb-3 text-white/90 group-hover:text-white transition-colors leading-tight">
            {project.title}
          </h3>

          <div className="mb-6">
            <p className={`text-white/40 text-[13px] font-light leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
              {project.highlights.join(" ")}
            </p>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-indigo-400 hover:text-indigo-300 text-[11px] font-medium mt-2 transition-colors flex items-center gap-1"
            >
              {isExpanded ? "Show Less" : "Read More"}
              <ChevronRight size={12} className={`transition-transform ${isExpanded ? '-rotate-90' : 'rotate-90'}`} />
            </button>
          </div>

          {/* Stats Box */}
          {project.stats && (
            <div className="grid grid-cols-2 gap-4 bg-white/[0.02] border border-white/5 rounded-2xl p-4 mb-6">
              {project.stats.map((stat: any, i: number) => (
                <div key={i} className={`flex flex-col gap-1 ${i === 1 ? 'items-end text-right' : ''}`}>
                  <span className="text-[10px] text-white/30 font-medium uppercase tracking-wider">{stat.label}</span>
                  <span className={`text-sm font-bold ${i === 1 ? 'text-emerald-400' : 'text-amber-400'}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[10px] text-white/40 font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-end">
          <div className="flex gap-2">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-semibold flex items-center gap-2 transition-colors">
                <LaptopIcon size={18} /> Demo App
              </a>
            )}
            {project.githubFrontend && project.githubBackend ? (
              <div className="relative group">
                <button className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-white/60 group-hover:bg-white/[0.08] group-hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold">
                  <FiGithub size={18} /> Code <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute right-0 top-full mt-2 w-27 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                  <div className="p-2 rounded-xl bg-[#1C1F26] border border-white/10 shadow-2xl flex flex-col gap-1">
                    <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg hover:bg-white/5 text-white/70 hover:text-white transition-colors flex items-center gap-2 text-[11px] font-medium">
                      <Globe size={14} /> Frontend
                    </a>
                    <a href={project.githubBackend} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg hover:bg-white/5 text-white/70 hover:text-white transition-colors flex items-center gap-2 text-[11px] font-medium">
                      <Database size={14} /> Backend
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 text-white/60 hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                  <FiGithub size={18} /> Code
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SelectedWorks() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'AI', 'Data', 'Web'];

  const filteredProjects = CV_DATA.projects.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI') return project.category.includes('AI');
    if (activeFilter === 'Data') return project.category.includes('DATA');
    if (activeFilter === 'Web') return project.category.includes('WEB');
    return true;
  });

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit tracking-tight">
            Project <span className="text-gold">Portofolio</span>
          </h2>
        </div>
        <p className="max-w-md text-white/40 font-light text-xs sm:text-sm text-left md:text-right leading-relaxed mt-2 md:mt-0">
          Precision-engineered solutions bridging Data Science{" "}
          <br className="hidden md:block" />
          and High-End Web Architecture.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-6 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 ${
              activeFilter === f 
                ? 'bg-white text-[#111215]' 
                : 'bg-white/[0.03] text-white/40 hover:bg-white/[0.08] hover:text-white border border-white/5'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
