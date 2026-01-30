'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, Heart, Users, BookOpen, Shield, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const HERO_POSTER = "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1600&auto=format&fit=crop";

const fadeInUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const CAROUSEL_SLIDES = 7;
const CAROUSEL_KEYS = ["carousel_caption_1", "carousel_caption_2", "carousel_caption_3", "carousel_caption_4", "carousel_caption_5", "carousel_caption_6", "carousel_caption_7"] as const;

export default function Home() {
  const { t } = useI18n();
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCarouselIndex((i) => (i + 1) % CAROUSEL_SLIDES), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer as any}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-sm font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {t("hero_badge")}
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-extrabold text-charcoal leading-[1.1] mb-6">
                {t("hero_empowering")} <br />
                <span className="text-gradient">{t("hero_women_children")}</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                {t("hero_sub") || "We mobilize resources to empower women, girls, and children, building a future of gender justice, health, and sustainable development."}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link href="/donate" className="btn btn-primary flex items-center gap-2">
                  {t("donate_now") || "Donate Now"} <Heart className="w-4 h-4" fill="currentColor" />
                </Link>
                <Link href="/get-involved" className="btn btn-outline flex items-center gap-2">
                  {t("get_involved") || "Get Involved"} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
                <video
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={HERO_POSTER}
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                  <source src="/hero-video.MP4" type="video/mp4" />
                </video>
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 max-w-xs animate-float"
              >
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                  <BookOpen size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-charcoal">{t("education_first")}</p>
                  <p className="text-xs text-slate-500">{t("education_first_desc")}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Carousel – after header */}
      <section className="relative py-16 lg:py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Impact</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2">Stories from the Children&apos;s Growing Center</h2>
          </div>
          <div className="relative max-w-4xl mx-auto flex items-center gap-2 md:gap-4">
            {/* Prev – outside image area */}
            <button
              type="button"
              onClick={() => setCarouselIndex((i) => (i - 1 + CAROUSEL_SLIDES) % CAROUSEL_SLIDES)}
              className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 text-charcoal shadow-lg flex items-center justify-center hover:bg-white transition-colors z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            {/* Image area – fixed aspect, centered content */}
            <div className="relative flex-1 min-w-0 aspect-[16/9] max-h-[320px] md:max-h-[380px] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/10">
              <AnimatePresence mode="wait">
                {Array.from({ length: CAROUSEL_SLIDES }).map((_, i) =>
                  i === carouselIndex ? (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 group"
                    >
                      <div className="absolute inset-0 overflow-hidden">
                        <img
                          src={`/carousel/carousel-${i + 1}.png`}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-left">
                        <p className="text-white/95 text-sm md:text-base leading-relaxed max-w-2xl drop-shadow-lg">
                          {t(CAROUSEL_KEYS[i])}
                        </p>
                      </div>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
            {/* Next – outside image area */}
            <button
              type="button"
              onClick={() => setCarouselIndex((i) => (i + 1) % CAROUSEL_SLIDES)}
              className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 text-charcoal shadow-lg flex items-center justify-center hover:bg-white transition-colors z-20"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: CAROUSEL_SLIDES }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCarouselIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === carouselIndex ? "w-8 bg-primary" : "w-2 bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Intro Cards */}
      <section className="section bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 -mt-24 relative z-20">
            {[
              { title: t("our_mission"), icon: Shield, color: "text-blue", desc: t("our_mission_desc"), href: "/about" },
              { title: t("our_impact"), icon: Users, color: "text-primary", desc: t("our_impact_desc"), href: "/stories" },
              { title: t("join_us"), icon: Heart, color: "text-pink-500", desc: t("join_us_desc"), href: "/get-involved" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 flex flex-col items-start hover:border-primary/30 group"
              >
                <div className={`p-3 rounded-xl bg-slate-50 mb-4 group-hover:scale-110 transition-transform ${item.color}`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{item.desc}</p>
                <Link href={item.href} className="mt-auto flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {t("read_more")} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Teaser */}
      <section className="section bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal mt-2 mb-4">Holistic Programs for Sustainable Change</h2>
            <p className="text-slate-600">We don't just provide aid; we build capabilities for long-term independence.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t("healthcare"), img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600", desc: t("program_desc").replace("{program}", "healthcare") },
              { title: t("skills"), img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTs3D5K337443LY9cZS0N6mJQtfglKdhC8htA&s=", desc: t("skills_desc") },
              { title: t("nutrition"), img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrj84xAso4YPgUdTf_CKrFdIRDHxT-zE8yHQ&s=", desc: t("program_desc").replace("{program}", "nutrition") },
              { title: t("emergency"), img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTF5A4I5EQpY0Jf-OyUjvAWp5h1GlQtgvtBiw&s=", desc: t("program_desc").replace("{program}", "emergency") },
            ].map((prog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              >
                <img src={prog.img} alt={prog.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{prog.title}</h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    {prog.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/programs" className="btn btn-blue py-4 px-8 shadow-blue/20">{t("view_all_programs")}</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal">{t("voices_community")}</h2>
              <p className="text-slate-600 mt-4 text-lg">{t("voices_subtitle")}</p>
            </div>
            <div className="flex gap-2">
              {/* Simple navigation arrows could go here */}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Hanna", role: "Mother Beneficiary", quote: "The support saved my child’s life. I am forever grateful." },
              { name: "Abel", role: "Student", quote: "Now I can go to school with confidence and materials." },
              { name: "Sister Mary", role: "Community Leader", quote: "MADEG brings hope to our village where there was none." },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/40 border-t-4 border-primary relative"
                whileHover={{ y: -5 }}
              >
                <div className="absolute -top-4 right-6 text-6xl text-slate-100 font-serif leading-none">”</div>
                <p className="text-slate-700 italic mb-6 relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-charcoal">{testimonial.name}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wos Gebeya – small section */}
      <section className="section bg-slate-50/50 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8 border border-primary/10">
            <div className="flex-1">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">{t("wos_gebeya_heading")}</span>
              <p className="text-slate-600 mt-2 text-lg leading-relaxed max-w-2xl">
                {t("wos_gebeya_desc")}
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <Link
                  href="https://wosgebeya.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn btn-primary"
                >
                  {t("wos_gebeya_cta")} <ExternalLink size={18} />
                </Link>
                <Link
                  href="/wos-gebeya"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
                >
                  {t("learn_more")} <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-charcoal to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">{t("ready_difference")}</h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">{t("ready_subtitle")}</p>
          <div className="flex justify-center gap-4">
            <Link href="/donate" className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-full font-bold shadow-lg shadow-primary/25 transition-all transform hover:scale-105">
              {t("donate_now")}
            </Link>
            <Link href="/get-involved" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-bold transition-all">
              {t("become_volunteer")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
