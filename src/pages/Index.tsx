import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DeveloperLogos from "@/components/DeveloperLogos";
import PropertyGrid from "@/components/PropertyGrid";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <DeveloperLogos />
      <PropertyGrid />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
