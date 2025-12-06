import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="luxury-subheading text-[10px] text-muted-foreground mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-6">
            Contact Us
          </h1>
          <div className="luxury-divider" />
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
};

export default Contact;
