import { CheckCircle2, ShieldCheck, Zap, Heart, Users, DollarSign } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    title: "Premium Imported Equipment",
    desc: "Train with the best. We have world-class machines for maximum efficiency.",
    icon: Zap,
  },
  {
    title: "Expert Trainers",
    desc: "Our certified trainers are here to guide you every step of the way.",
    icon: Users,
  },
  {
    title: "Clean & Hygienic Space",
    desc: "We maintain strict hygiene standards for a safe workout environment.",
    icon: ShieldCheck,
  },
  {
    title: "Friendly Environment",
    desc: "Join a community that motivates and supports your fitness journey.",
    icon: Heart,
  },
  {
    title: "Affordable Pricing",
    desc: "Luxury fitness experience at prices that won't break the bank.",
    icon: DollarSign,
  },
  {
    title: "Result Oriented",
    desc: "Our programs are designed to deliver visible results effectively.",
    icon: CheckCircle2,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-neon font-bold tracking-widest uppercase mb-4"
            >
              WHY CHOOSE S3 FITNESS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black mb-8 leading-tight"
            >
              WE ARE MORE THAN JUST A <span className="text-neon">GYM</span>
            </motion.h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              At S3 Fitness Gym, we believe in providing a holistic fitness experience. From the moment you walk in, you'll feel the energy and commitment to excellence that sets us apart.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center text-neon">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-white/50">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border-2 border-neon/20 p-4">
              <img
                src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop"
                alt="Gym Interior"
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-8 -left-8 bg-neon text-black p-6 rounded-2xl shadow-2xl">
              <p className="text-4xl font-black">10+</p>
              <p className="text-xs font-bold uppercase tracking-tighter">Years Experience</p>
            </div>
            <div className="absolute -top-8 -right-8 bg-white text-black p-6 rounded-2xl shadow-2xl">
              <p className="text-4xl font-black">500+</p>
              <p className="text-xs font-bold uppercase tracking-tighter">Active Members</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
