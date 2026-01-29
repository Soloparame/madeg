'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Donate() {
  const { t } = useI18n();
  const [type, setType] = useState<"monthly" | "one-time">("monthly");
  const [amount, setAmount] = useState<number>(50);

  const amounts = [25, 50, 100, 250];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Column: Context */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 font-bold text-xs uppercase tracking-wider mb-4">
                {t("urgent_need")}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal leading-tight">
                {t("giving_changes_lives")}
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                {t("donate_subtitle")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { val: "85%", label: "Program Delivery", icon: Heart, color: "text-red-500" },
                { val: "100%", label: "Transparency", icon: ShieldCheck, color: "text-blue" },
                { val: "24h", label: "Emergency Response", icon: Zap, color: "text-yellow-500" },
                { val: "5k+", label: "Mothers Helped", icon: Heart, color: "text-pink-500" },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                  <div className={`p-2 rounded-full bg-slate-50 ${stat.color}`}>
                    <stat.icon size={20} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-charcoal">{stat.val}</div>
                    <div className="text-xs text-slate-500 font-bold uppercase">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-blue/5 rounded-2xl border border-blue/10">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue text-white flex items-center justify-center font-bold text-xl">
                    ?
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal text-lg">{t("why_monthly")}</h3>
                  <p className="text-slate-600 text-sm mt-1">
                    {t("why_monthly_desc")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-8 md:p-10 shadow-2xl relative"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-blue to-pink-500 rounded-t-2xl" />

            <h2 className="text-2xl font-bold text-charcoal mb-6">{t("make_donation")}</h2>

            {/* Type Toggle */}
            <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
              {["monthly", "one-time"].map((tType) => (
                <button
                  key={tType}
                  onClick={() => setType(tType as any)}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold capitalize transition-all ${type === tType
                      ? "bg-white text-primary shadow-sm"
                      : "text-slate-500 hover:text-charcoal"
                    }`}
                >
                  {tType === "monthly" ? t("monthly_giving") : t("one_time_giving")}
                </button>
              ))}
            </div>

            {/* Amount Grid */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-charcoal mb-3">{t("select_amount")}</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                {amounts.map((v) => (
                  <button
                    key={v}
                    onClick={() => setAmount(v)}
                    className={`py-3 px-2 rounded-xl font-bold border-2 transition-all ${amount === v
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-slate-100 bg-white text-slate-600 hover:border-slate-200"
                      }`}
                  >
                    ${v}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 font-bold text-charcoal transition-all"
                />
              </div>
            </div>

            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
              {type === 'monthly' ? t("donate_month").replace("${amount}", amount.toString()) : t("donate_once").replace("${amount}", amount.toString())}
            </button>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400 font-semibold">
              <ShieldCheck size={14} />
              <span>{t("secure_payment")}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
