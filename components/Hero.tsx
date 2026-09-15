"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, BadgeCheck } from "lucide-react";
import { CV_DATA } from "@/lib/constant";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-10 sm:py-20"
    >
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-125 h-125 bg-sapphire/15 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-150 h-150 bg-amethyst/15 blur-[140px] rounded-full"
        />
      </div>

      <div className="flex flex-col items-center text-center max-w-5xl px-6 pt-5">
        {/* Name Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gold font-outfit tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-4"
        >
          {CV_DATA.name}
        </motion.div>


        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold font-outfit tracking-tight mb-6 leading-[1.1]"
        >
          <span className="bg-linear-to-r from-sapphire via-white to-amethyst bg-clip-text text-transparent whitespace-pre-line">
            {CV_DATA.hero.title}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white/50 text-sm sm:text-base lg:text-lg font-light leading-relaxed mb-6 max-w-2xl"
        >
          {CV_DATA.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a
            href={CV_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-jade text-white font-bold rounded-xl overflow-hidden jade-glow transition-all hover:scale-105 active:scale-95 flex items-center justify-center text-sm sm:text-base"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="flex items-center gap-2">
              Explore Portfolio <ArrowRight size={18} />
            </span>
          </a>

          <a
            href={CV_DATA.contact.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass-opulent border border-gold/30 text-white font-bold rounded-xl hover:bg-gold/5 active:bg-gold/5 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Download CV <Download size={18} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-linear-to-b from-gold/50 to-transparent" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
}
