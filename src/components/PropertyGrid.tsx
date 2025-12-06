import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const properties = [
  {
    id: "1",
    image: property1,
    title: "Marina Heights Penthouse",
    location: "Dubai Marina, UAE",
    developer: "Emaar",
    startingPrice: "AED 12.5M",
    bedrooms: "4 Bedrooms",
    type: "Penthouse",
  },
  {
    id: "2",
    image: property2,
    title: "Palm Beachfront Villa",
    location: "Palm Jumeirah, UAE",
    developer: "Nakheel",
    startingPrice: "AED 45M",
    bedrooms: "6 Bedrooms",
    type: "Villa",
  },
  {
    id: "3",
    image: property3,
    title: "Downtown Residences",
    location: "Downtown Dubai, UAE",
    developer: "Emaar",
    startingPrice: "AED 3.2M",
    bedrooms: "2-4 Bedrooms",
    type: "Apartment",
  },
  {
    id: "4",
    image: property4,
    title: "Creek Harbour Apartment",
    location: "Dubai Creek, UAE",
    developer: "Emaar",
    startingPrice: "AED 5.8M",
    bedrooms: "3 Bedrooms",
    type: "Apartment",
  },
  {
    id: "5",
    image: property5,
    title: "Waterfront Mansion",
    location: "Palm Jumeirah, UAE",
    developer: "Damac",
    startingPrice: "AED 85M",
    bedrooms: "8 Bedrooms",
    type: "Mansion",
  },
  {
    id: "6",
    image: property6,
    title: "Burj Vista Sky Collection",
    location: "Downtown Dubai, UAE",
    developer: "Sobha",
    startingPrice: "AED 18M",
    bedrooms: "4 Bedrooms",
    type: "Sky Villa",
  },
];

const PropertyGrid = () => {
  return (
    <section id="properties" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="luxury-subheading text-[10px] text-muted-foreground mb-4">
            Curated Selection
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
            Featured Properties
          </h2>
          <div className="luxury-divider" />
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="luxury-button luxury-button-outline"
          >
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
