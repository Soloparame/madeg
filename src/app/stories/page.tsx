'use client';
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const images = [
  { src: "https://images.unsplash.com/photo-1524603401900-92d6d5345b19?q=80&w=1200&auto=format&fit=crop", alt: "Child smiling with hope" },
  { src: "https://images.unsplash.com/photo-1519689528534-6f0b57726f63?q=80&w=1200&auto=format&fit=crop", alt: "Mother and child bonding" },
  { src: "https://images.unsplash.com/photo-1488521786911-1e51b1e53a14?q=80&w=1200&auto=format&fit=crop", alt: "School children learning" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop", alt: "Community care in action" },
  { src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop", alt: "Emergency response team" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop", alt: "Nutrition support distribution" },
];

export default function Stories() {
  const { t } = useI18n();
  return (
    <div className="section min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm">{t("visual_journey")}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal mt-3 mb-6">{t("gallery_stories")}</h1>
          <p className="mt-4 text-zinc-600 text-lg max-w-3xl mx-auto">
            {t("stories_subtitle")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-10 h-1 bg-primary mb-3 rounded-full" />
                  <p className="text-white font-bold text-lg">{img.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
