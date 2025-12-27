import Hero from "@/components/landing/Hero";
import Opportunity from "@/components/landing/Opportunity";
import Pillars from "@/components/landing/Pillars";
import MembersArea from "@/components/landing/MembersArea";
import Testimonials from "@/components/landing/Testimonials";
import Comparison from "@/components/landing/Comparison";
import Modules from "@/components/landing/Modules";
import Bonuses from "@/components/landing/Bonuses";
import Pricing from "@/components/landing/Pricing";
import About from "@/components/landing/About";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Opportunity />
      <Pillars />
      <MembersArea />
      <Testimonials />
      <Comparison />
      <Modules />
      <Bonuses />
      <Pricing />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
