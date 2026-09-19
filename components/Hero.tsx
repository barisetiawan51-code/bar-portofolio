"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { CV_DATA } from "@/lib/constant";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-12"
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

      <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full z-20 relative">
        {/* Existing Text Layout - Completely Untouched */}
        <div className="flex flex-col items-start text-left max-w-4xl">
          {/* Name Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gold font-outfit tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-4"
          >
            <p>HELLO, I'M {CV_DATA.name}</p>
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
            className="text-white/50 text-xs xs:text-base xs:text-xs font-light leading-relaxed mb-8 max-w-2xl text-left"
          >
            {CV_DATA.hero.subtitle}
          </motion.p>

          {/* Links to GitHub, LinkedIn, and Email (Icon only) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3 sm:gap-4"
          >
            {CV_DATA.contact.github && (
              <a
                href={CV_DATA.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group w-12 h-12 sm:w-13 sm:h-13 rounded-xl glass-opulent border border-gold/30 hover:border-gold/60 text-gold hover:text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]"
              >
                <FaGithub className="group-hover:scale-110 transition-transform" size={22} />
              </a>
            )}

            {CV_DATA.contact.linkedin && (
              <a
                href={CV_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group w-12 h-12 sm:w-13 sm:h-13 rounded-xl glass-opulent border border-gold/30 hover:border-gold/60 text-gold hover:text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]"
              >
                <FaLinkedinIn className="group-hover:scale-110 transition-transform" size={22} />
              </a>
            )}

            {CV_DATA.contact.email && (
              <a
                href={`mailto:${CV_DATA.contact.email}`}
                aria-label="Email"
                className="group w-12 h-12 sm:w-13 sm:h-13 rounded-xl glass-opulent border border-gold/30 hover:border-gold/60 text-gold hover:text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]"
              >
                <FiMail className="group-hover:scale-110 transition-transform" size={22} />
              </a>
            )}
          </motion.div>

          {/* Mobile Avatar View (Centered below buttons on smaller screens) */}
          <div className="lg:hidden mt-6 sm:mt-8 mb-2 sm:mb-4 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-[180px] sm:w-[220px]"
            >
              <Image
                src="/Firefly.png"
                alt="Hero Icon"
                width={512}
                height={768}
                priority
                className="w-full h-auto max-h-[260px] sm:max-h-[300px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Side Empty Space: Desktop Icon Placement (Centered in right area) */}
        <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-[42%] pointer-events-none select-none items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-[260px] xl:w-[310px] 2xl:w-[340px] flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full flex justify-center"
            >
              <Image
                src="/Firefly.png"
                alt="Hero Icon"
                width={512}
                height={768}
                priority
                className="w-full h-auto max-h-[440px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-40 lg:h-80 bg-linear-to-t from-background to-transparent pointer-events-none z-0" />
    </section>
  );
}
