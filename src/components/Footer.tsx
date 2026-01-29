'use client';
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h4 className="text-white text-xl font-bold tracking-tight">MADEG Foundation</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering children and mothers in Ethiopia through care, education,
              protection, and sustainable social support.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue hover:text-white transition-colors">
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-white mb-6">{t("our_programs_footer")}</h5>
            <ul className="space-y-3 text-sm">
              <li><Link href="/programs" className="hover:text-primary transition-colors">{t("child_protection_footer")}</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors">{t("maternal_health")}</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors">{t("education_support")}</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors">{t("emergency_relief")}</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors">{t("nutrition_plans")}</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-6">{t("get_involved_footer")}</h5>
            <ul className="space-y-3 text-sm">
              <li><Link href="/donate" className="hover:text-primary transition-colors flex items-center gap-2"><Heart size={14} /> {t("donate_now")}</Link></li>
              <li><Link href="/get-involved" className="hover:text-primary transition-colors">{t("volunteer_with_us")}</Link></li>
              <li><Link href="/get-involved" className="hover:text-primary transition-colors">{t("sponsor_child")}</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">{t("partnerships")}</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-6">Contact Us</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <Mail size={18} className="text-primary mt-0.5" />
                <span>madeg.eth@gmail.com</span>
              </li>
              <li className="flex gap-3 items-start">
                <Phone size={18} className="text-primary mt-0.5" />
                <div className="flex flex-col">
                  <span>+251 911 726 317</span>
                  <span>+251 997 000 884</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MADEG Foundation. {t("all_rights_reserved")}</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">{t("privacy_policy")}</Link>
            <Link href="#" className="hover:text-white transition-colors">{t("terms_service")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
