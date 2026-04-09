import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-neon rounded-lg flex items-center justify-center rotate-3">
                <span className="text-black font-black text-xl">S3</span>
              </div>
              <span className="font-heading text-xl font-black tracking-tighter">
                FITNESS <span className="text-neon">GYM</span>
              </span>
            </div>
            <p className="text-white/50 leading-relaxed">
              Bhopal's most trusted premium gym with 5-star ratings. We provide a luxury fitness experience with world-class equipment and expert guidance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-neon hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-neon hover:text-black transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-neon hover:text-black transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-neon">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#home" className="hover:text-neon transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-neon transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-neon transition-colors">Gym Gallery</a></li>
              <li><a href="#pricing" className="hover:text-neon transition-colors">Membership Plans</a></li>
              <li><a href="#location" className="hover:text-neon transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-neon">Our Services</h4>
            <ul className="space-y-4 text-white/60">
              <li>Strength Training</li>
              <li>Personal Training</li>
              <li>Zumba Classes</li>
              <li>HIIT Training</li>
              <li>Power Yoga</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-neon">Contact Info</h4>
            <ul className="space-y-6 text-white/60">
              <li className="flex gap-4">
                <MapPin className="text-neon flex-shrink-0" size={20} />
                <span>2nd Floor, Sahu Market, Kolar Road, Bhopal</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-neon flex-shrink-0" size={20} />
                <span>074009 79269</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-neon flex-shrink-0" size={20} />
                <span>info@s3fitnessbhopal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-sm">
          <p>© 2026 S3 Fitness Gym Bhopal. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
