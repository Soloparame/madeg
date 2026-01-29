'use client';
import Link from "next/link";
import { useI18n, useLang } from "@/lib/i18n";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { t } = useI18n();
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    // Check initial scroll position
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: t("nav_about") },
    { href: "/mission-vision", label: t("nav_mission") },
    { href: "/projects", label: t("nav_projects") },
    { href: "/contact", label: t("nav_contact") },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 py-3" 
          : "bg-white/80 backdrop-blur-md py-3"
      }`}
      initial={false}
      animate={{ y: 0 }}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5 group-hover:scale-105 transition-transform duration-300">
            <img
              src="/logo.png"
              alt="MADEG Foundation"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-charcoal' : 'text-charcoal'}`}>
            MADEG <span className="text-primary">Foundation</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-charcoal/80">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Switcher - Desktop */}
          <div className="hidden sm:flex items-center gap-1 bg-white/50 backdrop-blur-sm rounded-full p-1 border border-black/5 shadow-sm">
             <button
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                lang === "en" ? "bg-white shadow text-primary" : "text-charcoal hover:text-primary"
              }`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                lang === "am" ? "bg-white shadow text-primary" : "text-charcoal hover:text-primary"
              }`}
              onClick={() => setLang("am")}
            >
              አማ
            </button>
          </div>
          
          <Link href="/donate" className={`hidden lg:inline-flex btn btn-primary py-2.5 px-6 text-xs ${scrolled ? '' : 'shadow-xl'}`}>
            {t("donate_now") || "Donate"}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-charcoal hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-white/20"
          >
            <nav className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm font-semibold text-charcoal/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/donate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full btn btn-primary py-2.5 px-6 text-xs text-center"
                >
                  {t("donate_now") || "Donate"}
                </Link>
              </div>
              {/* Language Switcher - Mobile */}
              <div className="flex items-center justify-center gap-1 bg-white/50 backdrop-blur-sm rounded-full p-1 border border-black/5 shadow-sm mt-4">
                <button
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    lang === "en" ? "bg-white shadow text-primary" : "text-charcoal hover:text-primary"
                  }`}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
                <button
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    lang === "am" ? "bg-white shadow text-primary" : "text-charcoal hover:text-primary"
                  }`}
                  onClick={() => setLang("am")}
                >
                  አማ
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
