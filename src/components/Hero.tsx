import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import JoinNowModal from "@/components/JoinNowModal";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="flex text-neon">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="text-neon font-bold tracking-widest text-sm uppercase">
              5.0 RATING (78+ REVIEWS)
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-[5.5rem] lg:text-9xl font-black leading-[1.1] mb-8 text-white tracking-wider uppercase"
          >
            Transform <br />
            <span className="text-neon">body and mind</span> <br />
            at S3 Fitness
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 space-y-4"
          >
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl">
              Bhopal's premier 3,200 sq. ft. facility with 47+ imported machines.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-white/70 text-lg">
                <div className="w-2 h-2 bg-neon rounded-full shadow-neon" />
                <span>Monday to Saturday, 6 AM – 10 PM.</span>
              </div>
              <div className="flex items-center gap-3 text-neon font-black uppercase tracking-widest text-sm">
                <div className="w-2 h-2 bg-neon rounded-full shadow-neon animate-pulse" />
                <span>Monsoon offer ends Sunday</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <JoinNowModal>
              <Button className="w-full sm:w-auto bg-neon text-black hover:bg-neon/90 font-bold text-lg px-10 py-8 rounded-full shadow-neon transition-all hover:scale-105">
                CLAIM FREE TRIAL
              </Button>
            </JoinNowModal>
            
            <a href="#pricing" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-10 py-8 rounded-full transition-all">
                SEE PRICING
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-neon/5 blur-[120px] rounded-full -mr-20 -mb-20" />
    </section>
  );
}
