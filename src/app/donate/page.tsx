'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Donate() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-24 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 font-bold text-xs uppercase tracking-wider">
            {t("urgent_need")}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal leading-tight">
            {t("giving_changes_lives")}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t("donate_subtitle")}
          </p>
          <div className="pt-6">
            <Link
              href="https://wosgebeya.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
            >
              {t("donate_now")} <Heart className="w-5 h-5" fill="currentColor" />
            </Link>
          </div>
          <p className="text-sm text-slate-500">
            You can also support mothers and girls by shopping on <a href="https://wosgebeya.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Wos Gebeya</a>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
