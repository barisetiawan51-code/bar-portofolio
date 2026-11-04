"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { MapPin, Globe2 } from "lucide-react";
import { CV_DATA } from "@/lib/constant";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          {/* Brand & Location */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white/40 text-sm font-light">
              <MapPin size={14} className="text-gold/60" />
              <span>{CV_DATA.footer.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8">
            <motion.a
              whileHover={{ y: -3, color: "#d4af37" }}
              href={CV_DATA.contact.github}
              target="_blank"
              className="text-white/40 transition-colors"
            >
              <FaGithub size={22} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, color: "#d4af37" }}
              href={CV_DATA.contact.linkedin}
              target="_blank"
              className="text-white/40 transition-colors"
            >
              <FaLinkedinIn size={22} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, color: "#d4af37" }}
              href={`mailto:${CV_DATA.contact.email}`}
              className="text-white/40 transition-colors"
            >
              <IoMailOutline size={24} />
            </motion.a>
          </div>

          {/* Language Note */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl glass-opulent border border-gold/30">
            <Globe2 size={14} className="text-jade" />
            <span className="text-[10px] uppercase tracking-widest text-white/50 font-medium">
              {CV_DATA.footer.languages}
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            © {currentYear} {CV_DATA.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] text-white/20 uppercase tracking-widest font-mono">
            <span>Data Science</span>
            <span>Full-Stack Developer</span>
          </div>
        </div>
      </div>

      {/* Final Gold Filigree Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold to-transparent opacity-50" />
    </footer>
  );
}
