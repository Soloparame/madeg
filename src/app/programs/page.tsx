'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Programs() {
  const { t } = useI18n();
  
  const programs = [
    {
      title: t("child_protection"),
      desc: t("child_protection_desc"),
      gradient: "from-emerald-400 to-teal-500",
      img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: t("mother_health"),
      desc: t("mother_health_desc"),
      gradient: "from-blue-400 to-indigo-500",
      img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: t("education_assistance"),
      desc: t("education_assistance_desc"),
      gradient: "from-amber-400 to-orange-500",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: t("food_nutrition"),
      desc: t("food_nutrition_desc"),
      gradient: "from-green-400 to-emerald-600",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrj84xAso4YPgUdTf_CKrFdIRDHxT-zE8yHQ&s"
    },
    {
      title: t("emergency_response"),
      desc: t("emergency_response_desc"),
      gradient: "from-red-400 to-rose-600",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5A4I5EQpY0Jf-OyUjvAWp5h1GlQtgvtBiw&s"
    },
  ];
  return (
    <div className="section bg-gray-50/50 min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal">Our Programs</h1>
          <p className="mt-4 text-zinc-600 text-lg max-w-2xl mx-auto">
            We deliver life-changing support through integrated programs designed to protect and uplift families.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card group overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${p.gradient} opacity-80 mix-blend-multiply z-10 transition-opacity group-hover:opacity-90`} />
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white z-20">{p.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-zinc-600 mb-6 leading-relaxed">{p.desc}</p>
                <Link href="#" className="flex items-center gap-2 text-primary font-bold group-hover:translate-x-1 transition-transform">
                  {t("learn_more")} <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
