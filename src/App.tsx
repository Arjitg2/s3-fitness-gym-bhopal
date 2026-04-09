import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Home from "@/pages/Home";
import Transformations from "@/pages/Transformations";
import ServicesPage from "@/pages/ServicesPage";
import PricingPage from "@/pages/PricingPage";
import LocationPage from "@/pages/LocationPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-neon selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/transformations" element={<Transformations />} />
          <Route path="/location" element={<LocationPage />} />
        </Routes>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}

