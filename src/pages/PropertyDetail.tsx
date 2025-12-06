import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Bed, Bath, Maximize, MapPin, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const propertiesData: Record<string, {
  image: string;
  title: string;
  location: string;
  developer: string;
  startingPrice: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  type: string;
  completion: string;
  description: string;
  amenities: string[];
}> = {
  "1": {
    image: property1,
    title: "Marina Heights Penthouse",
    location: "Dubai Marina, UAE",
    developer: "Emaar",
    startingPrice: "AED 12,500,000",
    bedrooms: 4,
    bathrooms: 5,
    size: "6,500 sq.ft",
    type: "Penthouse",
    completion: "Ready",
    description: "Experience unparalleled luxury in this stunning penthouse overlooking Dubai Marina. Floor-to-ceiling windows frame panoramic views of the Arabian Gulf and the iconic Dubai skyline. This residence features premium finishes, a private terrace, and exclusive amenities befitting the most discerning buyers.",
    amenities: ["Private Pool", "Smart Home System", "Wine Cellar", "Private Elevator", "Maid's Room", "24/7 Concierge"],
  },
  "2": {
    image: property2,
    title: "Palm Beachfront Villa",
    location: "Palm Jumeirah, UAE",
    developer: "Nakheel",
    startingPrice: "AED 45,000,000",
    bedrooms: 6,
    bathrooms: 8,
    size: "15,000 sq.ft",
    type: "Villa",
    completion: "Ready",
    description: "An architectural masterpiece on the iconic Palm Jumeirah. This beachfront villa offers direct beach access, infinity pool, and breathtaking sunset views. Designed with the finest materials and meticulous attention to detail, this property represents the pinnacle of Dubai luxury living.",
    amenities: ["Private Beach", "Infinity Pool", "Home Cinema", "Gym", "Staff Quarters", "6-Car Garage"],
  },
  "3": {
    image: property3,
    title: "Downtown Residences",
    location: "Downtown Dubai, UAE",
    developer: "Emaar",
    startingPrice: "AED 3,200,000",
    bedrooms: 3,
    bathrooms: 4,
    size: "2,800 sq.ft",
    type: "Apartment",
    completion: "Q4 2025",
    description: "Live at the heart of Dubai in these meticulously designed residences. With views of the Burj Khalifa and Dubai Fountain, these apartments offer the perfect blend of comfort and sophistication. Premium amenities and world-class facilities await.",
    amenities: ["Burj Khalifa Views", "Fitness Center", "Spa", "Kids Play Area", "BBQ Area", "Valet Parking"],
  },
  "4": {
    image: property4,
    title: "Creek Harbour Apartment",
    location: "Dubai Creek, UAE",
    developer: "Emaar",
    startingPrice: "AED 5,800,000",
    bedrooms: 3,
    bathrooms: 4,
    size: "3,200 sq.ft",
    type: "Apartment",
    completion: "Q2 2025",
    description: "Discover waterfront living at Dubai Creek Harbour. These luxurious apartments offer stunning views of the Dubai Creek Tower and the natural mangroves. Modern design meets timeless elegance in these thoughtfully crafted residences.",
    amenities: ["Waterfront Views", "Swimming Pool", "Jogging Track", "Retail Podium", "Mosque", "Community Center"],
  },
  "5": {
    image: property5,
    title: "Waterfront Mansion",
    location: "Palm Jumeirah, UAE",
    developer: "Damac",
    startingPrice: "AED 85,000,000",
    bedrooms: 8,
    bathrooms: 10,
    size: "25,000 sq.ft",
    type: "Mansion",
    completion: "Ready",
    description: "The ultimate expression of luxury. This extraordinary waterfront mansion on Palm Jumeirah offers unmatched privacy and exclusivity. With its own private dock, helipad, and extensive gardens, this property sets a new standard for ultra-luxury living in Dubai.",
    amenities: ["Private Dock", "Helipad", "Tennis Court", "Indoor Pool", "Wine Room", "Staff Villa"],
  },
  "6": {
    image: property6,
    title: "Burj Vista Sky Collection",
    location: "Downtown Dubai, UAE",
    developer: "Sobha",
    startingPrice: "AED 18,000,000",
    bedrooms: 4,
    bathrooms: 5,
    size: "5,500 sq.ft",
    type: "Sky Villa",
    completion: "Q1 2026",
    description: "Elevate your lifestyle in these exclusive Sky Villas with unobstructed views of the Burj Khalifa. Double-height ceilings, private terraces, and bespoke interiors create a sanctuary above the clouds. Limited collection available for the most discerning buyers.",
    amenities: ["Burj Khalifa Views", "Double Height Ceiling", "Private Terrace", "Smart Home", "Wellness Center", "Sky Lounge"],
  },
};

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = propertiesData[id || "1"];

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Property not found</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Image */}
      <section className="relative h-[70vh] mt-20">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover grayscale-img"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-8 left-6 lg:left-12 flex items-center gap-2 text-primary-foreground hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-xs tracking-widest uppercase">Back to Listings</span>
        </Link>

        {/* Developer Badge */}
        <div className="absolute top-8 right-6 lg:right-12">
          <span className="text-[10px] font-medium tracking-widest uppercase text-primary-foreground bg-foreground/80 px-4 py-2">
            {property.developer}
          </span>
        </div>
      </section>

      {/* Property Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{property.location}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
                {property.title}
              </h1>
              
              <div className="luxury-divider !mx-0 mb-8" />
              
              <p className="luxury-body text-muted-foreground mb-12">
                {property.description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                <div className="text-center p-6 bg-secondary">
                  <Bed className="w-6 h-6 mx-auto mb-3 text-muted-foreground" />
                  <p className="text-2xl font-light mb-1">{property.bedrooms}</p>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground">Bedrooms</p>
                </div>
                <div className="text-center p-6 bg-secondary">
                  <Bath className="w-6 h-6 mx-auto mb-3 text-muted-foreground" />
                  <p className="text-2xl font-light mb-1">{property.bathrooms}</p>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground">Bathrooms</p>
                </div>
                <div className="text-center p-6 bg-secondary">
                  <Maximize className="w-6 h-6 mx-auto mb-3 text-muted-foreground" />
                  <p className="text-2xl font-light mb-1">{property.size}</p>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground">Size</p>
                </div>
                <div className="text-center p-6 bg-secondary">
                  <Calendar className="w-6 h-6 mx-auto mb-3 text-muted-foreground" />
                  <p className="text-2xl font-light mb-1">{property.completion}</p>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground">Completion</p>
                </div>
              </div>

              {/* Amenities */}
              <h3 className="text-xl font-light tracking-wide mb-6">Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-foreground" />
                    <span className="text-sm font-light">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-secondary p-8">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Starting From
                </p>
                <p className="text-3xl font-light mb-6">{property.startingPrice}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Property Type</span>
                    <span>{property.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Developer</span>
                    <span>{property.developer}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Completion</span>
                    <span>{property.completion}</span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="luxury-button luxury-button-primary w-full text-center"
                >
                  Schedule Viewing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
};

export default PropertyDetail;
