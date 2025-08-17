import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import DivisionByCountrySection from "@/components/sections/DivisionByCountrySection";
import CoreValuesSection from "@/components/sections/CoreValuesSection";
import LeadershipTeamSection from "@/components/sections/LeadershipTeamSection";
import ContactSection from "@/components/sections/ContactSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import Footer from "@/components/sections/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-instrument">
      <Header />
      <HeroSection />
      <AboutSection />
      <DivisionByCountrySection />
      <CoreValuesSection />
      <LeadershipTeamSection />
      <ContactSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
