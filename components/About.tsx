"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { CV_DATA } from "@/lib/constant";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 pt-4 sm:pt-6 lg:pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Avatar Photo */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[430px] sm:max-w-[480px] flex items-center justify-center">
            <div className="relative aspect-[4/5] w-full flex items-end justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,black_60%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_98%)]">
              <Image
                src="/hero_photo.png"
                alt={CV_DATA.name}
                fill
                priority
                unoptimized
                sizes="(max-width: 640px) 430px, 480px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Text & Content matching Portfolio Design */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Header with Portfolio Gold Accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-outfit tracking-tight mb-6">
              About{" "}
              <span className="text-gold">Me</span>
            </h2>
          </motion.div>

          {/* Bio / Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/60 font-light text-xs xs:text-sm leading-relaxed mb-8 max-w-2xl"
          >
            {CV_DATA.about.summary} 
          </motion.p>

          {/* Action Buttons moved from Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <a
              href="#projects"
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
      </div>
    </section>
  );
}
