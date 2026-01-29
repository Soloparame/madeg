'use client';
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function MissionVision() {
  const { t } = useI18n();
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-charcoal to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            {t("mission_vision")}
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t("mission_vision_subtitle")}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-t-4 border-primary relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-9xl font-bold font-serif">M</div>
            <h2 className="text-3xl font-bold text-charcoal mb-6 relative z-10">{t("our_mission_title")}</h2>
            <p className="text-zinc-600 text-lg leading-relaxed relative z-10">
              {t("mission_text")}
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 border-t-4 border-blue relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-9xl font-bold font-serif">V</div>
            <h2 className="text-3xl font-bold text-charcoal mb-6 relative z-10">{t("our_vision_title")}</h2>
            <p className="text-zinc-600 text-lg leading-relaxed relative z-10">
              {t("vision_text")}
            </p>
          </motion.section>
        </div>

        {/* Wos Gebeya – marketplace supporting mothers & girls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass-card p-8 md:p-10 border-t-4 border-primary relative overflow-hidden"
        >
          <h3 className="text-2xl font-bold text-charcoal mb-4 relative z-10">{t("wos_gebeya_heading")}</h3>
          <p className="text-zinc-600 text-lg leading-relaxed mb-6 relative z-10">
            {t("wos_gebeya_desc")}
          </p>
          <a
            href="https://wosgebeya.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
          >
            {t("wos_gebeya_cta")}
            <span aria-hidden>→</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-charcoal mb-8">{t("strategic_pillars")}</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[t("pillar_empowerment"), t("pillar_capacity"), t("pillar_system")].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 font-bold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
