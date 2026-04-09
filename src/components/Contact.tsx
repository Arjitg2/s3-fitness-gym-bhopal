import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const mapsUrl = "https://maps.google.com/?q=Sahu+Market,+Kolar+Road,+Priyanka+Nagar,+Lalita+Nagar,+Bhopal";

  return (
    <section id="location" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black mb-8 leading-tight"
            >
              FIND US <span className="text-neon">HERE</span>
            </motion.h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-neon/10 rounded-2xl flex items-center justify-center text-neon flex-shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Our Location</h4>
                  <p className="text-white/60 leading-relaxed">
                    2nd Floor, Sahu Market, in front of Kolar Road, <br />
                    Priyanka Nagar, Lalita Nagar, Bhopal
                  </p>
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="link" className="text-neon p-0 h-auto mt-2 font-bold">
                      GET DIRECTIONS
                    </Button>
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-neon/10 rounded-2xl flex items-center justify-center text-neon flex-shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Call Us</h4>
                  <p className="text-white/60 text-lg font-bold">074009 79269</p>
                  <p className="text-white/40 text-sm">Mon - Sat: 6:00 AM - 10:00 PM</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-neon/10 rounded-2xl flex items-center justify-center text-neon flex-shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Working Hours</h4>
                  <p className="text-white/60">Monday - Saturday: 6 AM - 10 PM</p>
                  <p className="text-white/60">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-[300px] bg-charcoal rounded-3xl overflow-hidden border border-white/10 relative group">
              <img 
                src="https://storage.googleapis.com/aistudio-user-content-prod-asia-southeast1/021239851614-1744282161-image_2025-04-09_16-17-08.png" 
                alt="Gym Location"
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-neon text-black font-black px-8 py-6 rounded-xl shadow-neon hover:bg-neon/90 transition-colors">
                    OPEN IN GOOGLE MAPS
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-charcoal p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl"
          >
            <h3 className="text-3xl font-black mb-2">GET A <span className="text-neon">FREE TRIAL</span></h3>
            <p className="text-white/50 mb-8">Fill the form below and our team will contact you shortly to schedule your free session.</p>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white/70">Full Name</Label>
                <Input id="name" placeholder="Enter your name" className="bg-black border-white/10 h-14 rounded-xl focus:border-neon text-white transition-colors" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white/70">Phone Number</Label>
                <Input id="phone" placeholder="Enter your mobile number" className="bg-black border-white/10 h-14 rounded-xl focus:border-neon text-white transition-colors" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="goal" className="text-white/70">Your Fitness Goal</Label>
                <select id="goal" className="w-full bg-black border border-white/10 h-14 rounded-xl px-4 text-white/70 focus:border-neon outline-none transition-colors appearance-none">
                  <option value="">Select your goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="general-fitness">General Fitness</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <Button className="w-full bg-neon text-black hover:bg-neon/90 font-black text-lg py-8 rounded-xl shadow-neon group">
                SUBMIT REQUEST
                <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
              </Button>
              
              <p className="text-center text-xs text-white/30 mt-4">
                By submitting, you agree to our terms and conditions.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
