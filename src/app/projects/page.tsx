'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { Hammer, ArrowRight, HeartPulse, GraduationCap, Coins, Siren } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const projects = [
  {
    title: "Women’s Empowerment Center",
    desc: "Vocational and entrepreneurship skills training with mentorship.",
    gradient: "from-pink-500 to-rose-500",
    icon: Hammer,
    bg: "bg-pink-50 text-pink-600"
  },
  {
    title: "Health Access & Advocacy",
    desc: "Mobilizing resources and improving access to women’s health services.",
    gradient: "from-blue-500 to-cyan-500",
    icon: HeartPulse,
    bg: "bg-blue-50 text-blue-600"
  },
  {
    title: "Education & Scholarships",
    desc: "Scholarships and essential supplies for girls and children.",
    gradient: "from-amber-400 to-orange-500",
    icon: GraduationCap,
    bg: "bg-amber-50 text-amber-600"
  },
  {
    title: "Local Economic Empowerment",
    desc: "Support local production, reduce import dependency, strengthen communities.",
    gradient: "from-emerald-500 to-green-600",
    icon: Coins,
    bg: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Emergency Support",
    desc: "Rapid support for crises impacting women and families.",
    gradient: "from-red-500 to-orange-600",
    icon: Siren,
    bg: "bg-red-50 text-red-600"
  },
];

export default function Projects() {
  const { t } = useI18n();
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm">{t("what_we_build")}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">{t("our_projects")}</h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-300">
              {t("projects_subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Overlay */}
      <section className="relative -mt-16 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 text-center shadow-2xl relative z-20"
          >
            <h2 className="text-2xl font-bold text-charcoal mb-4">{t("projects_main_goal")}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t("projects_goal_text")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-slate-50 pt-0">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${p.gradient} rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity`} />

                <div className={`w-14 h-14 rounded-xl ${p.bg} flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform`}>
                  <p.icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-charcoal mb-3">{p.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{p.desc}</p>

                <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors">
                  {t("learn_more")} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
