const developers = [
  { name: "Emaar", logo: "EMAAR" },
  { name: "Damac", logo: "DAMAC" },
  { name: "Sobha", logo: "SOBHA" },
  { name: "Meraas", logo: "MERAAS" },
  { name: "Nakheel", logo: "NAKHEEL" },
];

const DeveloperLogos = () => {
  return (
    <section id="developers" className="py-20 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="luxury-subheading text-[10px] text-muted-foreground mb-4">
            Trusted Partners
          </p>
          <h2 className="text-2xl md:text-3xl font-light tracking-wide">
            Premier Developers
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {developers.map((developer) => (
            <div
              key={developer.name}
              className="group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <span className="text-xl md:text-2xl font-light tracking-[0.3em] text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {developer.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperLogos;
