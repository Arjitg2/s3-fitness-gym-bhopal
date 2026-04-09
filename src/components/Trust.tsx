import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

const reviews = [
  {
    name: "Rahul Sharma",
    text: "Best gym in Bhopal! The atmosphere is super motivating and the trainers actually care about your progress.",
    rating: 5,
  },
  {
    name: "Priya Singh",
    text: "Hygienic environment and top-brand machines. I've seen amazing results in just 3 months of joining.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    text: "Premium imported equipment and very affordable pricing compared to other luxury gyms in the city.",
    rating: 5,
  },
];

export default function Trust() {
  return (
    <section className="py-16 md:py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neon/5 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-[36px] leading-tight">
              TRUSTED BY <span className="text-neon">1000+</span> <br />FITNESS ENTHUSIASTS
            </h2>
            <p className="text-white/60 text-lg">
              Don't just take our word for it. See what our members have to say about their journey at S3 Fitness Gym.
            </p>
          </div>
          <div className="bg-black/50 backdrop-blur-md p-8 rounded-3xl border border-neon/20 flex flex-col items-center shadow-[0_0_30px_rgba(204,255,0,0.05)]">
            <div className="text-5xl font-black text-neon mb-2">5.0</div>
            <div className="flex text-neon mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <div className="text-sm font-bold text-white/50 uppercase tracking-widest">78 Google Reviews</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-black/40 backdrop-blur-xl border-white/10 h-full hover:border-neon/50 hover:shadow-[0_0_30px_rgba(204,255,0,0.1)] transition-all duration-500 group">
                <CardContent className="p-8 flex flex-col h-full">
                  <Quote className="text-neon mb-6 opacity-20 group-hover:opacity-100 transition-opacity" size={40} />
                  <p className="text-white/80 italic mb-8 flex-grow leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-neon/10 rounded-full flex items-center justify-center font-bold text-neon">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-white">{review.name}</p>
                      <div className="flex text-neon">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={12} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
