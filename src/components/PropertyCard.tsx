import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  developer: string;
  startingPrice: string;
  bedrooms: string;
  type: string;
}

const PropertyCard = ({
  id,
  image,
  title,
  location,
  developer,
  startingPrice,
  bedrooms,
  type,
}: PropertyCardProps) => {
  return (
    <Link to={`/property/${id}`} className="luxury-card group block">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="luxury-card-image w-full h-full object-cover grayscale-img"
        />
        <div className="absolute inset-0 luxury-gradient-overlay opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Developer Badge */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-medium tracking-widest uppercase text-primary-foreground bg-foreground/80 px-3 py-1">
            {developer}
          </span>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-xl font-light tracking-wide mb-2">{title}</h3>
            <p className="text-xs font-light tracking-wider text-primary-foreground/70 mb-4">
              {location}
            </p>
            
            <div className="flex items-center justify-between border-t border-primary-foreground/20 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <div>
                <p className="text-[10px] tracking-widest uppercase text-primary-foreground/60 mb-1">
                  Starting From
                </p>
                <p className="text-sm font-medium tracking-wide">
                  {startingPrice}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] tracking-widest uppercase text-primary-foreground/60 mb-1">
                  {type}
                </p>
                <p className="text-sm font-medium tracking-wide">
                  {bedrooms}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <ArrowRight className="w-5 h-5 text-primary-foreground" />
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
