import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import JoinNowModal from "@/components/JoinNowModal";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main>
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Trust />
        <Services />
        <WhyChooseUs />
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-neon text-black overflow-hidden relative">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tight leading-none">
              START YOUR FITNESS <br /> JOURNEY TODAY
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-[72px]">
              <JoinNowModal>
                <button className="bg-black text-white hover:bg-black/90 font-black text-xl py-6 px-12 rounded-2xl transition-all shadow-2xl">
                  BOOK FREE TRIAL
                </button>
              </JoinNowModal>
              <a href="tel:07400979269" className="inline-flex items-center justify-center bg-transparent border-2 border-black text-black hover:bg-black hover:text-white font-black text-xl py-6 px-12 rounded-2xl transition-all">
                CALL: 074009 79269
              </a>
            </div>
          </div>
          
          {/* Decorative background text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black opacity-5 whitespace-nowrap pointer-events-none select-none">
            S3 FITNESS GYM
          </div>
        </section>
        
        <Gallery />
        <Pricing />
        <Contact />
      </motion.div>
    </main>
  );
}
