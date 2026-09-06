"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Award,
  ExternalLink,
  BookOpen,
  Medal,
  ScrollText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { CV_DATA } from "@/lib/constant";

const education = CV_DATA.education;
const continuingEducation = CV_DATA.continuingEducation;
const certifications = CV_DATA.certifications;
const awards = CV_DATA.awards;

export default function EducationAwards() {
  const [certIndex, setCertIndex] = useState(0);
  const itemsPerPage = 3; // Menentukan jumlah sertifikat per halaman

  // Menghitung total halaman berdasarkan jumlah sertifikat
  const totalPages = Math.ceil(certifications.length / itemsPerPage);

  const nextCert = () => {
    setCertIndex((prev) => (prev + 1) % totalPages);
  };

  const prevCert = () => {
    setCertIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Mengambil potongan data (3 item) berdasarkan index saat ini
  const currentCertifications = certifications.slice(
    certIndex * itemsPerPage,
    certIndex * itemsPerPage + itemsPerPage,
  );

  return (
    <section id="education" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Side: Education Timeline */}
        <div className="space-y-10 lg:space-y-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-opulent border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <GraduationCap size={12} />
            <span>Academic Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit">
            Education <span className="text-gold">& Training</span>
          </h2>

          <div className="relative pl-6 sm:pl-8 space-y-8 border-l border-gold/10">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-8.25 sm:-left-10.25 top-0 w-4 h-4 rounded-full bg-background border-2 border-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group"> {/*hover:text-gold transition-colors*/}
                        {edu.institution}
                      </h3>
                      <p className="text-gold/80 font-medium text-[10px] sm:text-xs mt-1">
                        {edu.degree}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                      {edu.period}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className="px-2 py-1 rounded-md bg-jade/10 border border-jade/20 text-jade text-[9px] sm:text-[10px] font-bold uppercase">
                      GPA: {edu.gpa}
                    </div>
                    <div className="px-2 py-1 rounded-md bg-gold/10 border border-gold/20 text-gold text-[9px] sm:text-[10px] font-bold uppercase">
                      {edu.honors}
                    </div>
                  </div>
                  <p className="text-white/40 text-[11px] sm:text-xs leading-relaxed max-w-md">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="pt-2 pb-2">
              <h4 className="text-[9px] sm:text-[10px] font-bold text-gold/40 uppercase tracking-[0.3em] font-mono">
                Continuing Education...
              </h4>
            </div>

            {continuingEducation.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-[-32.5px] sm:left-[-40.5px] top-0 w-3 h-3 rounded-full bg-background border border-gold/40" />
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white/80 group"> {/*hover:text-gold transition-colors*/}
                        {item.title}
                      </h4>
                      <p className="text-gold/80 text-[10px] sm:text-xs font-medium">
                        {item.provider}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-white/30 uppercase">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-white/40 text-[11px] sm:text-xs leading-relaxed max-w-md">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Certifications & Awards */}
        <div className="space-y-10 lg:space-y-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-opulent border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <ScrollText size={12} />
            <span>Professional Registry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit">
            Certifications <span className="text-gold">& Honors</span>
          </h2>

          <div className="glass-opulent rounded-4xl sm:rounded-[2.5rem] border border-gold/10 p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/marble-texture.png')] bg-cover grayscale" />

            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <BookOpen size={14} className="text-white/40" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
                  Certifications
                </span>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={prevCert}
                  className="p-1.5 sm:p-2 rounded-full bg-white/5 border border-white/5 hover:border-gold/30 hover:bg-gold/5 transition-all text-white/30 hover:text-gold"
                >
                  <ChevronLeft size={14} />
                </button>
                <div className="flex gap-1.5">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 h-1 rounded-full transition-all duration-300 ${i === certIndex ? "w-4 bg-gold" : "bg-white/20"}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextCert}
                  className="p-1.5 sm:p-2 rounded-full bg-white/5 border border-white/5 hover:border-gold/30 hover:bg-gold/5 transition-all text-white/30 hover:text-gold"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Carousel Content */}
            <div className="relative min-h-75">
              <AnimatePresence mode="wait">
                <motion.div
                  key={certIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="space-y-3"
                >
                  {currentCertifications.map((cert) => (
                    <a
                      key={cert.title}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/30 hover:bg-gold/5 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-4 sm:gap-5">
                        <div className="w-9 h-9 sm:w-11 sm:h-11 shrink-0 aspect-square rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                          <BookOpen size={18} />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-gold transition-colors leading-snug line-clamp-1">
                            {cert.title}
                          </h4>
                          <p className="text-white/30 text-[10px] sm:text-xs mt-1">
                            {cert.issuer} • {cert.year}
                          </p>
                        </div>
                      </div>
                      <ExternalLink
                        size={14}
                        className="text-white/20 group-hover:text-gold transition-colors shrink-0 ml-4"
                      />
                    </a>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="border-b border-gold/10 my-6 opacity-50" />

            {/* Awards Section */}
            {awards && awards.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Medal size={14} className="text-gold" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold/60">
                    Honors
                  </span>
                </div>
                <div className="space-y-3">
                  {awards.map((award, idx) => (
                    <motion.a
                      key={award.title}
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/30 hover:bg-gold/5 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-4 sm:gap-5">
                        <div className="w-9 h-9 sm:w-11 sm:h-11 shrink-0 aspect-square rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                          <Award size={18} />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-gold transition-colors leading-snug line-clamp-2">
                            {award.title}
                          </h4>
                          <p className="text-white/30 text-[10px] sm:text-xs mt-1">
                            {award.issuer} • {award.year}
                          </p>
                        </div>
                      </div>
                      <ExternalLink
                        size={14}
                        className="text-white/20 group-hover:text-gold transition-colors shrink-0 ml-4"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-6 text-center">
              <p className="text-[9px] sm:text-[10px] text-white/20 uppercase tracking-[0.4em] font-mono">
                Verified Achievement Loop
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
