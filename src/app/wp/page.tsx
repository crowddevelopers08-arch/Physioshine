import type { Metadata } from "next";
import Navbar from "@/components/wp/Navbar";
import HeroSection from "@/components/wp/HeroSection";
import USPStrip from "@/components/wp/USPStrip";
import ClinicSection from "@/components/wp/ClinicSection";
import PathToRecovery from "@/components/wp/PathToRecovery";
import TreatmentGrid from "@/components/wp/TreatmentGrid";
import DoctorsSection from "@/components/wp/DoctorsSection";
import VideoTestimonials from "@/components/wp/VideoTestimonials";
import ReviewsCarousel from "@/components/wp/ReviewsCarousel";
import FAQSection from "@/components/wp/FAQSection";
import Footer from "@/components/wp/Footer";
import ThreeHomepageBackground from "@/components/wp/ThreeHomepageBackground";

export const metadata: Metadata = {
  title: "Physio Shine | Advanced Physiotherapy & Chiropractic Rehab",
  description:
    "Personalised, technology-driven physiotherapy and chiropractic treatments in Hyderabad designed to help you recover faster, move better, and live pain-free.",
};

export default function WpHome() {
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
        <Footer />
      </div>
    </div>
  );
}
