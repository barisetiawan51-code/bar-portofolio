"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Code2,
  Database,
  Binary,
  Zap,
  Bot,
  ShieldAlert,
} from "lucide-react";
import { CV_DATA } from "@/lib/constant";

const iconMap = {
  Binary: <Binary className="text-sapphire" size={20} />,
  Code2: <Code2 className="text-amethyst" size={20} />,
  Database: <Database className="text-jade" size={20} />,
  Bot: <Bot className="text-sapphire" size={20} />,
  Cpu: <Cpu className="text-amethyst" size={20} />,
  ShieldAlert: <ShieldAlert className="text-jade" size={20} />,
};

const skills = CV_DATA.skills.map((s) => ({
  ...s,
  icon: iconMap[s.icon as keyof typeof iconMap],
}));

export default function TechnicalArsenal() {
  return (
    <section id="skills" className="py-4 relative overflow-hidden">
      {/* Background Plate with Marble Texture */}
      <div className="absolute inset-0 z-0 px-4 md:px-0">
        <div className="w-full h-full glass-opulent rounded-[3rem] border border-gold/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/marble-texture.png')] bg-cover grayscale" />
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-background via-transparent to-background/50" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-14">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-opulent border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Zap size={12} />
            <span>Capability Index</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            Technical <span className="text-gold">Skills</span>
          </h2>
          <p className="text-white/40 font-light text-sm max-w-xl mx-auto">
            A specialized toolkit optimized for high-stakes data analysis and
            the engineering of premium digital interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-xl bg-white/5 border shadow-inner transition-colors duration-500
                  ${category.color === "sapphire" ? "border-sapphire/20" : ""}
                  ${category.color === "amethyst" ? "border-amethyst/20" : ""}
                  ${category.color === "jade" ? "border-jade/20" : ""}
                `}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold font-outfit tracking-tight">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-3 py-1.5 rounded-lg border text-[10px] font-medium transition-all duration-300 cursor-default
                      ${category.color === "sapphire" ? "bg-sapphire/10 border-sapphire/30 text-sapphire hover:bg-sapphire/20 hover:border-sapphire/50 hover:shadow-[0_0_15px_rgba(26,62,114,0.3)]" : ""}
                      ${category.color === "amethyst" ? "bg-amethyst/10 border-amethyst/30 text-amethyst hover:bg-amethyst/20 hover:border-amethyst/50 hover:shadow-[0_0_15px_rgba(91,60,122,0.3)]" : ""}
                      ${category.color === "jade" ? "bg-jade/10 border-jade/30 text-jade hover:bg-jade/20 hover:border-jade/50 hover:shadow-[0_0_15px_rgba(21,94,61,0.3)]" : ""}
                    `}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
