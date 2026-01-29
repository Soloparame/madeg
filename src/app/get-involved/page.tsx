'use client';
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { UserPlus, Heart, Users, Handshake } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function GetInvolved() {
  const { t } = useI18n();
  const [status, setStatus] = useState<string>("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(t("thank_you"));
  }

  return (
    <div className="section min-h-screen bg-white text-charcoal">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{t("get_involved_title")}</h1>
          <p className="text-zinc-700 text-lg max-w-2xl mx-auto">
            {t("get_involved_subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card p-8"
          >
            <h2 className="text-2xl font-bold text-charcoal mb-6 flex items-center gap-3">
              <UserPlus className="text-primary" />
              {t("volunteer_with_us")}
            </h2>
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-2">{t("full_name")}</label>
                <input type="text" required className="w-full border border-black/10 rounded-xl px-4 py-3 text-charcoal outline-none focus:ring-1 focus:ring-primary transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-2">{t("email_address")}</label>
                <input type="email" required className="w-full border border-black/10 rounded-xl px-4 py-3 text-charcoal outline-none focus:ring-1 focus:ring-primary transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-2">{t("message_skills")}</label>
                <textarea rows={4} className="w-full border border-black/10 rounded-xl px-4 py-3 text-charcoal outline-none focus:ring-1 focus:ring-primary transition-all" />
              </div>

              <button type="submit" className="w-full btn btn-primary py-4 text-base shadow-lg shadow-primary/25">{t("join_the_team")}</button>
              {status && <p role="status" className="text-green-700 text-center font-bold bg-green-100 p-2 rounded-lg">{status}</p>}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {[
              { title: t("donation"), desc: t("donation_desc"), link: "/donate", btn: t("donate_now"), icon: Heart, color: "text-red-500", grad: "from-red-500/10 to-transparent" },
              { title: t("sponsorship"), desc: t("sponsorship_desc"), btn: t("learn_more"), icon: Users, color: "text-blue-400", grad: "from-blue-500/10 to-transparent" },
              { title: t("partnerships"), desc: t("partnerships_desc"), btn: t("contact_us"), icon: Handshake, color: "text-yellow-400", grad: "from-yellow-500/10 to-transparent" },
            ].map((item, i) => (
              <div key={i} className="card p-6 transition-all group">
                <div className="flex gap-4">
                  <div className={`p-4 rounded-xl bg-gray-soft ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal">{item.title}</h3>
                    <p className="text-zinc-700 mt-2 text-sm">{item.desc}</p>
                    <Link href={item.link || '#'} className="mt-4 inline-block text-sm font-bold text-primary hover:brightness-110 transition-colors">
                      {item.btn} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
