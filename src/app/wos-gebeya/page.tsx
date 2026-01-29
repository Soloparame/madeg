'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ShoppingBag, Heart, Award, ExternalLink } from "lucide-react";

export default function WosGebeyaPage() {
  const { t } = useI18n();
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-charcoal to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000')] bg-cover bg-center" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm">{t("wos_gebeya_heading")}</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-3 mb-6">{t("wos_gebeya_page_title")}</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t("wos_gebeya_page_subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        {/* What is Wos Gebeya */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 mb-12 border-t-4 border-primary"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">{t("wos_gebeya_what")}</h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            {t("wos_gebeya_what_desc")}
          </p>
          <a
            href="https://wosgebeya.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
          >
            {t("wos_gebeya_visit")} <ExternalLink size={18} />
          </a>
        </motion.section>

        {/* How We Support */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-8 text-center">{t("wos_gebeya_support")}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ShoppingBag, text: t("wos_gebeya_support_1"), color: "text-primary" },
              { icon: Award, text: t("wos_gebeya_support_2"), color: "text-blue" },
              { icon: Heart, text: t("wos_gebeya_support_3"), color: "text-pink-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 md:p-8 border border-slate-100 hover:border-primary/20 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission with Wos Gebeya */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 border-l-4 border-primary bg-slate-50/50"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">{t("wos_gebeya_mission")}</h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            {t("wos_gebeya_mission_desc")}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wosgebeya.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn btn-primary"
            >
              {t("wos_gebeya_cta")} <ExternalLink size={18} />
            </a>
            <Link href="/mission-vision" className="inline-flex items-center gap-2 btn btn-outline">
              {t("nav_mission")}
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
