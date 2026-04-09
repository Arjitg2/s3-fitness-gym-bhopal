import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import JoinNowModal from "@/components/JoinNowModal";

const plans = [
  {
    name: "Monthly",
    price: "₹1,500",
    period: "/month",
    features: ["All Gym Equipment", "Locker Room Access", "General Training", "1 Session/Day"],
    popular: false,
  },
  {
    name: "Quarterly",
    price: "₹4,000",
    period: "/3 months",
    features: ["All Gym Equipment", "Locker Room Access", "General Training", "Unlimited Access", "Diet Consultation"],
    popular: true,
  },
  {
    name: "Personal Training",
    price: "₹5,000",
    period: "/month",
    features: ["1-on-1 Expert Coach", "Custom Diet Plan", "Body Assessment", "Progress Tracking", "Priority Support"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-[36px]"
          >
            MEMBERSHIP <span className="text-neon">PLANS</span>
          </motion.h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Choose a plan that fits your goals and budget. No hidden fees, just pure fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`relative h-full flex flex-col border-white/5 bg-black overflow-hidden ${plan.popular ? "border-neon/50 shadow-neon" : ""}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-neon text-black text-[10px] font-black px-4 py-1 uppercase tracking-widest rotate-45 translate-x-6 translate-y-2">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader className="p-8 pb-0">
                  <h3 className="text-xl font-bold text-white/70 uppercase tracking-widest mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-white/50 text-sm">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/70">
                        <div className="w-5 h-5 bg-neon/10 rounded-full flex items-center justify-center text-neon">
                          <Check size={12} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-8 pt-0">
                  <JoinNowModal>
                    <Button className={`w-full py-6 text-lg font-black rounded-xl ${plan.popular ? "bg-neon text-black hover:bg-neon/90" : "bg-white/10 text-white hover:bg-white/20"}`}>
                      JOIN NOW
                    </Button>
                  </JoinNowModal>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
