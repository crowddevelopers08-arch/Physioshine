import Navbar from "@/components/Navbar";
import BookingSection from "@/components/BookingSection";
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

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <BookingSection /> */}
      <HeroSection />
      <USPStrip />
      <ClinicSection />
      <PathToRecovery />
      <TreatmentGrid />
      <DoctorsSection />
      <VideoTestimonials />
      <ReviewsCarousel />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </>
  );
}
