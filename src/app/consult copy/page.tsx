import ManutheraBanner from "@/components/consult/manutherabanner";
import Navbar from "@/components/consult/Navbar";
import AboutSection from "@/components/consult/AboutSection";
import VideoTestimonials from "@/components/consult/VideoTestimonials";
import BeforeAfterVideoCarousel from "@/components/consult/BeforeAfterVideoCarousel";
import Footer from "@/components/consult/Footer";

export default function ConsultPage() {
  return (
    <div className="relative bg-surface">
      <Navbar />
      <ManutheraBanner />
      <AboutSection />
      <BeforeAfterVideoCarousel />
      <Footer />
    </div>
  );
}
