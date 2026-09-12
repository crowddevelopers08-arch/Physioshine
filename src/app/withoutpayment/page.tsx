import type { Metadata } from "next";
import Navbar from "@/components/withoutpayment/Navbar";
import HeroSection from "@/components/withoutpayment/HeroSection";
import USPStrip from "@/components/withoutpayment/USPStrip";
import ClinicSection from "@/components/withoutpayment/ClinicSection";
import PathToRecovery from "@/components/withoutpayment/PathToRecovery";
import TreatmentGrid from "@/components/withoutpayment/TreatmentGrid";
import DoctorsSection from "@/components/withoutpayment/DoctorsSection";
import VideoTestimonials from "@/components/withoutpayment/VideoTestimonials";
import ReviewsCarousel from "@/components/withoutpayment/ReviewsCarousel";
import FAQSection from "@/components/withoutpayment/FAQSection";
import Footer from "@/components/withoutpayment/Footer";
import ThreeHomepageBackground from "@/components/withoutpayment/ThreeHomepageBackground";

export const metadata: Metadata = {
  title: "Physio Shine | Advanced Physiotherapy & Chiropractic Rehab",
  description:
    "Personalised, technology-driven physiotherapy and chiropractic treatments in Hyderabad designed to help you recover faster, move better, and live pain-free.",
};

export default function WithoutPaymentHome() {
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
