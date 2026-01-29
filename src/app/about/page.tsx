'use client';
import { motion } from "framer-motion";
import { Award, Users, Globe, Heart, Shield } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function About() {
  const { t } = useI18n();
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm">{t("who_we_are")}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">{t("about_madeg")}</h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-300">
              Derived from the Amharic word for "empowerment," we are dedicated to advancing women’s health, education, and economic resilience in Ethiopia.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative -mt-16 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 shadow-2xl relative z-20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-6">{t("our_background")}</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    MADEG, derived from the Amharic word for "empowerment," is a registered charity organization (License No. 7592, December 30, 2024) dedicated to advancing women’s health, education, and economic empowerment in Ethiopia. Founded by <strong>Wossene Bowler</strong>, a lifelong advocate for women’s wellbeing who mobilized significant resources for major hospitals, and co-founder <strong>Alemayhu Tsegaye</strong>, an experienced educator and development professional, MADEG brings together diverse experts from academia, NGOs, government, and the private sector.
                  </p>
                  <p>
                    The organization aims to establish a Women’s Empowerment Vocational and Entrepreneurship Skills Training Center to provide essential skills, foster entrepreneurship, and promote mentorship. Its mission is to strengthen women’s capacity to contribute to local economies, reduce dependency on imports, and support national goals of gender equality and sustainable development. MADEG also emphasizes collaboration with government, businesses, and partners to build a more equitable and prosperous society.
                  </p>
                </div>
              </div>
              <div className="relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=800"
                  alt="Women Empowerment"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-charcoal">{t("core_values")}</h2>
            <p className="text-slate-600 mt-3">{t("core_values_subtitle")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: Heart, label: t("compassion") },
              { icon: Globe, label: t("transparency") },
              { icon: Award, label: t("empowerment") },
              { icon: Users, label: t("community") },
              { icon: Shield, label: t("integrity") },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:-translate-y-2 transition-all border border-slate-100"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-charcoal">{item.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl opacity-90">
          <div className="p-8 border-l-4 border-primary bg-slate-50 rounded-r-xl text-left">
            <h3 className="text-xl font-bold text-charcoal mb-2">{t("our_main_goal")}</h3>
            <p className="text-slate-700 text-lg">
              {t("main_goal_text")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
