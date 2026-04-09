import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Users, Zap, Heart, Target, Flame } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    title: "Strength Training",
    desc: "Build muscle faster with our top-grade imported machines and free weights.",
    icon: Dumbbell,
    image: "/services/strength_training_1775746795718.png",
  },
  {
    title: "Personal Training",
    desc: "Get customized workout plans and 1-on-1 attention from our expert trainers.",
    icon: Target,
    image: "/services/personal_training_1775746813841.png",
  },
  {
    title: "Zumba Classes",
    desc: "Dance your way to fitness with our high-energy, fun-filled Zumba sessions.",
    icon: Flame,
    image: "/services/zumba_classes_1775746834379.png",
  },
  {
    title: "HIIT Training",
    desc: "Burn maximum calories in minimum time with our intense HIIT programs.",
    icon: Zap,
    image: "/services/hiit_training_1775746853398.png",
  },
  {
    title: "Power Yoga",
    desc: "Improve flexibility and mental focus with our specialized power yoga classes.",
    icon: Heart,
    image: "/services/power_yoga_1775746869427.png",
  },
  {
    title: "Abs Training",
    desc: "Target your core and get those shredded abs with our dedicated training modules.",
    icon: Users,
    image: "/services/abs_training_1775746888959.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-neon/5 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-neon font-bold tracking-widest uppercase mb-6"
          >
            OUR SPECIALTIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-[36px]"
          >
            PUSH YOUR <span className="text-neon">LIMITS</span>
          </motion.h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            We offer a wide range of fitness programs designed to help you achieve your specific goals, whether it's weight loss, muscle gain, or overall wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden border-white/10 bg-charcoal h-[400px] hover:border-neon/50 transition-colors duration-500">
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                
                <CardContent className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="w-14 h-14 bg-neon/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-black mb-6 group-hover:-translate-y-2 group-hover:rotate-12 transition-transform duration-500 shadow-neon">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black mb-3 group-hover:text-neon transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
