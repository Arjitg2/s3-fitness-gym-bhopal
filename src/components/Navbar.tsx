import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { motion } from "motion/react";
import JoinNowModal from "@/components/JoinNowModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Transformations", href: "/transformations" },
    { name: "Location", href: "/location" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-white/5 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-neon rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="text-black font-heading text-3xl mt-1">S3</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading text-3xl tracking-wide text-white">FITNESS</span>
            <span className="font-heading text-3xl tracking-wide text-neon">GYM</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith("/") && !link.href.includes("#") ? (
              <Link
                key={link.name}
                to={link.href}
                className={`text-base font-bold tracking-wide hover:text-neon transition-colors ${location.pathname === link.href ? "text-neon" : "text-white"}`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-bold tracking-wide hover:text-neon transition-colors text-white"
              >
                {link.name}
              </a>
            )
          ))}
          <JoinNowModal>
            <Button className="bg-neon text-black hover:bg-neon/90 font-bold px-8 py-6 rounded-full shadow-neon text-sm tracking-wide">
              JOIN NOW
            </Button>
          </JoinNowModal>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <JoinNowModal>
            <Button className="bg-neon text-black hover:bg-neon/90 font-bold px-4 rounded-full text-xs">
              JOIN
            </Button>
          </JoinNowModal>
          <Sheet>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className="text-neon hover:bg-white/10">
                <Menu size={32} strokeWidth={2.5} />
              </Button>
            } />
            <SheetContent side="right" className="bg-charcoal border-neon/20 text-white">
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`text-3xl font-heading tracking-wide hover:text-neon transition-colors ${location.pathname === link.href ? "text-neon" : "text-white"}`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-3xl font-heading tracking-wide hover:text-neon transition-colors text-white"
                    >
                      {link.name}
                    </a>
                  )
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
