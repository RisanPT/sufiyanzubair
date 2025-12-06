import heroImage from "@/assets/hero-dubai.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dubai skyline at dusk"
          className="w-full h-full object-cover grayscale-img"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto">
          <p className="luxury-subheading text-[10px] md:text-xs text-primary-foreground/80 mb-6 animate-fade-up opacity-0 delay-100">
            Exclusive Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground tracking-wide leading-tight mb-8 animate-fade-up opacity-0 delay-200">
            Luxury Living
            <br />
            <span className="font-semibold">Redefined in Dubai</span>
          </h1>
          <div className="luxury-divider bg-primary-foreground/50 mb-8 animate-fade-up opacity-0 delay-300" />
          <p className="luxury-body text-sm md:text-base text-primary-foreground/80 max-w-2xl mx-auto mb-12 animate-fade-up opacity-0 delay-400">
            Discover exceptional properties from Dubai's most prestigious developers. 
            Where architectural excellence meets unparalleled lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 delay-500">
            <a
              href="#properties"
              className="luxury-button bg-primary-foreground text-foreground border-primary-foreground hover:bg-transparent hover:text-primary-foreground"
            >
              Explore Listings
            </a>
            <a
              href="#contact"
              className="luxury-button border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
            >
              Schedule Viewing
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-primary-foreground/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
