import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import USPStrip from "@/components/USPStrip";
import ClinicSection from "@/components/ClinicSection";
import PathToRecovery from "@/components/PathToRecovery";
import TreatmentGrid from "@/components/TreatmentGrid";
import DoctorsSection from "@/components/DoctorsSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ThreeHomepageBackground from "@/components/ThreeHomepageBackground";

export default function Home() {
  return (
    <div className="relative bg-surface">
      <ThreeHomepageBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <USPStrip />
        <ClinicSection />
        <PathToRecovery />
        <TreatmentGrid />
        <DoctorsSection />
        <VideoTestimonials />
        <ReviewsCarousel />
        <FAQSection />
        {/* <FinalCTA /> */}
        <Footer />
      </div>
    </div>
  );
}
