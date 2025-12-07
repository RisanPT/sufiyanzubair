import heroImage from "@/assets/hero-dubai.jpg";

const Hero = () => {
  // Define the phone number
  const phoneNumber = "971502268804"; // WhatsApp requires the number without '+' or spaces
  const displayPhoneNumber = "+971 502 26 8804"; // For display

  // Construct the WhatsApp URL for pre-filled chat
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%2C%20I%20saw%20your%20listing%20on%20the%20website%20and%20I%27m%20interested%20in%20learning%20more.`;

  // Construct the Call URL (using tel: scheme)
  const callUrl = `tel:${displayPhoneNumber.replace(/\s/g, "")}`;

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
          {/* Rating and Subheading */}

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground tracking-wide leading-tight mb-8 animate-fade-up opacity-0 delay-200">
            Find your next home in Dubai
            <br />
            <span className="font-semibold text-6xl md:text-8xl">with real guidance</span>
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 delay-300">
            {/* WhatsApp Chat Button - White Background, Black Text, Shadow */}
            <a
              href={whatsappUrl}
              target="_blank" // Open in new tab/app
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-3 bg-white text-gray-800 rounded-full text-sm font-medium shadow-lg hover:bg-gray-100 transition duration-200"
            >
              {/* Simple WhatsApp Icon (or use an actual SVG/Component if available) */}
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.039 2c-5.466 0-9.921 4.455-9.921 9.92 0 1.758.468 3.424 1.348 4.881l-1.42 5.176 5.312-1.393c1.393.774 2.973 1.18 4.681 1.18 5.466 0 9.921-4.455 9.921-9.92s-4.455-9.92-9.921-9.92zm4.846 14.636c-.198.36-.615.485-1.01.314s-.696-.546-.826-.828c-.287-.63-.585-1.352-.898-2.148-.313-.796-.65-1.666-.35-2.079.3-.413 1.053-.424 1.488-.073.435.351.683 1.12.783 1.25.1.13.178.29.278.41.1.13.173.28.32.48.147.203.313.364.512.457.198.093.414.155.65.176.236.02.488-.04.706-.17.218-.13.34-.32.48-.51s.29-.41.378-.606c.09-.2.176-.41.282-.62s.226-.45.28-.62c.054-.17.07-.37.07-.57 0-.48-.198-.81-.466-1.11s-.686-.41-1.076-.41c-.39 0-.84.03-.993.03s-.42-.09-.64-.32c-.22-.23-.42-.56-.63-.82s-.41-.56-.64-.86c-.23-.3-.49-.55-.77-.73s-.59-.28-.9-.28c-.31 0-.6-.02-.9-.02s-.65.01-.98.05c-.33.04-.6.12-.86.27-.26.15-.47.38-.63.68s-.24.7-.24 1.14c0 .44.1.84.28 1.25s.45.86.75 1.31c.3.45.67.92 1.12 1.41s.96.94 1.46 1.34c.5.4 1.05.74 1.63 1.02s1.17.47 1.8.47c.63 0 1.14-.13 1.55-.37s.67-.6.82-1.04c.15-.44.22-.84.22-1.18 0-.34-.04-.63-.12-.87z" />
              </svg>
              Chat with us now
            </a>

            {/* Call Button - Primary Color Background, White Text, Rounded */}
            <a
              href={callUrl}
              className="flex items-center justify-center px-8 py-3 bg-[#6C255D] text-white rounded-full text-sm font-medium shadow-lg hover:bg-[#8A327B] transition duration-200"
            >
              Book a 15-min call
            </a>
          </div>
          {/* Note: I removed the divider and body text to match the image's layout more closely, 
             but you can re-add them if you need more text content. */}
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