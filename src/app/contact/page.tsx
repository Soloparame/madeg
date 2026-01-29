'use client';
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();
  return (
    <div className="section min-h-screen bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal">{t("get_in_touch")}</h1>
          <p className="mt-4 text-lg text-zinc-600">{t("contact_subtitle")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 md:p-10"
          >
            <h2 className="text-2xl font-bold text-charcoal mb-8">{t("contact_information")}</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="block text-sm font-bold text-charcoal">{t("email")}</span>
                  <a href="mailto:madeg.eth@gmail.com" className="text-zinc-600 hover:text-primary transition-colors">madeg.eth@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-3 bg-blue/10 rounded-full text-blue">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="block text-sm font-bold text-charcoal">{t("phone")}</span>
                  <p className="text-zinc-600">+251 911 726 317</p>
                  <p className="text-zinc-600">+251 997 000 884</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-3 bg-yellow/10 rounded-full text-yellow-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="block text-sm font-bold text-charcoal">{t("address")}</span>
                  <p className="text-zinc-600">Addis Ababa, Ethiopia</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 pt-8 border-t border-slate-100">
              <h3 className="font-bold text-charcoal mb-4">{t("follow_us")}</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61587359212855" className="p-3 bg-slate-100 rounded-full text-slate-600 hover:bg-primary hover:text-white transition-all">
                  <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/madeg_charity_organization?igsh=MXRmcWp5dHJodjl1bQ" className="p-3 bg-slate-100 rounded-full text-slate-600 hover:bg-pink-600 hover:text-white transition-all">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="card overflow-hidden shadow-2xl h-[500px] lg:h-auto"
          >
            <iframe
              title="Ethiopia Map"
              aria-label="Map of Ethiopia"
              className="w-full h-full min-h-[400px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12752153.791913776!2d29.276238808007917!3d8.33079355746937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b852ed4eb8f85%3A0x4e84f0d540f3d2ea!2sEthiopia!5e0!3m2!1sen!2sus!4v1700000000000"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
