import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-dubai.jpg";

const About = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] mt-20">
        <img
          src={heroImage}
          alt="Dubai skyline"
          className="w-full h-full object-cover grayscale-img"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="luxury-subheading text-[10px] text-primary-foreground/80 mb-4">
              Our Story
            </p>
            <h1 className="text-4xl md:text-5xl font-light tracking-wide text-primary-foreground">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-8">
              Dubai's Premier Luxury Real Estate Specialists
            </h2>
            <div className="luxury-divider mb-8" />
            <p className="luxury-body text-muted-foreground">
              Since our founding, Prestige Dubai has been the trusted partner for discerning 
              individuals seeking exceptional properties in the world's most dynamic city. 
              Our team of dedicated specialists brings unparalleled expertise and personalized 
              service to every client relationship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-20">
            <div className="text-center">
              <p className="text-5xl font-light mb-4">500+</p>
              <p className="luxury-subheading text-[10px]">Properties Sold</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-light mb-4">AED 5B+</p>
              <p className="luxury-subheading text-[10px]">Transaction Value</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-light mb-4">15+</p>
              <p className="luxury-subheading text-[10px]">Years Experience</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mt-24">
            <div>
              <h3 className="text-2xl font-light tracking-wide mb-6">Our Mission</h3>
              <p className="luxury-body text-muted-foreground">
                To redefine luxury real estate by delivering exceptional properties and 
                unmatched service. We believe that finding your perfect home should be 
                an experience as refined as the properties we represent.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light tracking-wide mb-6">Our Approach</h3>
              <p className="luxury-body text-muted-foreground">
                Every client receives personalized attention from our expert team. 
                We take the time to understand your unique requirements, ensuring 
                that each property we present aligns perfectly with your vision of luxury living.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
