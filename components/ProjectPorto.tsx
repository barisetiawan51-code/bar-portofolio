"use client";

import { motion } from "framer-motion";
import {
  Database,
  ShieldAlert,
  Link as LinkIcon,
  Terminal,
  Cpu,
  ChevronRight,
} from "lucide-react";
import { CV_DATA } from "@/lib/constant";

const iconMap = {
  Database: <Database className="text-sapphire" size={24} />,
  ShieldAlert: <ShieldAlert className="text-sapphire" size={24} />,
  Link: <LinkIcon className="text-sapphire" size={24} />,
  Terminal: <Terminal className="text-amethyst" size={24} />,
};

const projects = CV_DATA.projects.map((p) => ({
  ...p,
  icon: iconMap[p.icon as keyof typeof iconMap],
}));

export default function SelectedWorks() {
  return (
    <section id="projects" className="py-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-opulent border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Cpu size={12} />
            <span>Project Registry</span>
          </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative glass-opulent rounded-4xl border border-gold/10 p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-gold/30 hover:gold-glow h-full"
          >
            {/* Marble Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('/marble-texture.png')] bg-cover grayscale" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-gold/30 transition-all">
                  {project.icon}
                </div>
                <div className="text-[10px] text-white/20 font-mono tracking-widest uppercase">
                  {project.institution}
                </div>
              </div>

              <div className="grow">
                <div className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                  {project.focus}
                </div>
                <h3 className="text-3xl font-bold font-outfit mb-6 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <ul className="space-y-3 mb-8">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-3 text-white/40 text-sm font-light"
                    >
                      <div className="w-1 h-1 rounded-full bg-jade/40" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/30 uppercase font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <motion.div className="text-gold/40 group-hover:text-gold transition-colors">
                  <ChevronRight size={20} />
                </motion.div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
