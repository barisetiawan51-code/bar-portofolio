"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Cpu, GraduationCap, Mail } from "lucide-react";
import Link from "next/link";
import { CV_DATA } from "@/lib/constant";

const navLinks = CV_DATA.navLinks;

const IconMap: { [key: string]: any } = {
  Home: Home,
  User: User,
  Briefcase: Briefcase,
  Cpu: Cpu,
  GraduationCap: GraduationCap,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "projects", "skills", "education"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-lg py-3 lg:py-4 shadow-2xl"
            : "bg-transparent py-5 lg:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between relative">
          {/* Logo - Ukuran mengecil di mobile (text-xl) dan normal di desktop (lg:text-2xl) */}
          <Link
            href="/"
            className="text-xl lg:text-2xl font-bold font-outfit tracking-tighter text-white group transition-all"
          >
            BAR
            <span className="text-gold transition-all">
              .
            </span>
          </Link>

          {/* Desktop & Tablet Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="nav-link text-sm font-medium hover:text-gold active:text-gold transition-all"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`mailto:${CV_DATA.contact.email}`}
              className="px-6 py-2 glass-opulent border border-gold/30 rounded-lg text-xs font-bold text-gold uppercase tracking-[0.2em] hover:bg-gold active:bg-gold hover:text-black active:text-black transition-all"
            >
              Contact
            </a>
          </div>

          {/* Mobile Contact - Ditambahkan Border & Ukuran Icon Mengecil */}
          <div className="md:hidden">
            <a
              href={`mailto:${CV_DATA.contact.email}`}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-gold/20 glass-opulent text-gold hover:text-white hover:border-gold/50 transition-all active:scale-90"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Dock */}
      <div className="md:hidden fixed bottom-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="glass-opulent px-6 py-3 rounded-2xl flex items-center gap-8 shadow-2xl border border-white/5 pointer-events-auto"
        >
          {navLinks.map((link) => {
            const Icon = IconMap[link.icon || "Home"];
            const isActive = activeSection === link.href.replace("#", "");

            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative group flex flex-col items-center"
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-gold bg-gold/10"
                      : "text-white/40 hover:text-white active:text-white"
                  }`}
                >
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                </motion.div>

                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 w-1 h-1 bg-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,1)]"
                  />
                )}
              </Link>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
