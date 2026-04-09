import { motion } from "motion/react";

const images = [
  "/unnamed (1).webp",
  "/unnamed (2).webp",
  "/unnamed (4).webp",
  "/unnamed (5).webp",
  "/unnamed (6).webp",
  "/unnamed.webp",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-[36px]"
          >
            GYM <span className="text-neon">GALLERY</span>
          </motion.h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Take a virtual tour of our premium facility. Modern equipment, spacious interiors, and a high-energy environment await you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-video sm:aspect-square overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={img}
                alt={`Gym Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
