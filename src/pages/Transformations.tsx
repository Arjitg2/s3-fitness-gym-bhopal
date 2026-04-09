import { motion } from "motion/react";
import { ArrowRight, Quote } from "lucide-react";

const stories = [
  {
    name: "Vikram Singh",
    duration: "6 Months",
    goal: "Fat Loss & Muscle Definition",
    beforeImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1599058917212-59714cb84743?q=80&w=2069&auto=format&fit=crop",
    story: "I was struggling with my weight for years. The trainers at S3 Fitness didn't just give me a workout plan; they changed my entire lifestyle. The 1-on-1 attention and the premium equipment made all the difference. I've lost 15kg and gained so much confidence.",
  },
  {
    name: "Anjali Desai",
    duration: "8 Months",
    goal: "Strength & Endurance",
    beforeImg: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=2070&auto=format&fit=crop",
    story: "Starting as a complete beginner, I was intimidated by the gym environment. But the friendly vibe at S3 made me feel right at home. I started with Zumba and slowly moved to strength training. Now, I'm lifting weights I never thought possible!",
  },
  {
    name: "Rohan Kapoor",
    duration: "4 Months",
    goal: "Mass Gain",
    beforeImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?q=80&w=2071&auto=format&fit=crop",
    story: "As a hardgainer, putting on muscle was always a challenge. The expert diet consultation and targeted hypertrophy programs at S3 Fitness completely transformed my physique. The environment here pushes you to go that extra mile.",
  }
];

export default function Transformations() {
  return (
    <div className="min-h-screen bg-black pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-neon font-bold tracking-widest uppercase mb-4"
          >
            REAL PEOPLE, REAL RESULTS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none"
          >
            SUCCESS <span className="text-neon">STORIES</span>
          </motion.h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Witness the incredible journeys of our members. With dedication, expert guidance, and the right environment, anything is possible.
          </p>
        </div>

        <div className="space-y-24">
          {stories.map((story, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Images */}
              <div className="w-full lg:w-1/2 flex gap-4">
                <div className="w-1/2 relative group">
                  <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded">Before</div>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                    <img src={story.beforeImg} alt={`${story.name} Before`} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="w-1/2 relative group mt-8">
                  <div className="absolute top-4 right-4 z-10 bg-neon text-black text-xs font-bold px-3 py-1 uppercase tracking-widest rounded shadow-neon">After</div>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-neon/50 shadow-[0_0_30px_rgba(204,255,0,0.15)]">
                    <img src={story.afterImg} alt={`${story.name} After`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <Quote className="text-neon/30 w-16 h-16 mb-4" />
                <h3 className="text-3xl md:text-4xl font-black">{story.name}</h3>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-white/5 border border-white/10 text-white/80 px-4 py-2 rounded-full text-sm font-medium">
                    Duration: <span className="text-neon font-bold">{story.duration}</span>
                  </span>
                  <span className="bg-white/5 border border-white/10 text-white/80 px-4 py-2 rounded-full text-sm font-medium">
                    Goal: <span className="text-white font-bold">{story.goal}</span>
                  </span>
                </div>

                <p className="text-lg text-white/70 leading-relaxed italic">
                  "{story.story}"
                </p>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-white/40 uppercase tracking-widest font-bold mb-2">Ready for your transformation?</p>
                  <a href="/#pricing" className="inline-flex items-center text-neon font-bold hover:text-white transition-colors group">
                    Start Your Journey <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
