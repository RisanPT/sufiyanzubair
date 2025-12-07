import { useState } from "react";
import { toast } from "sonner";
// --- Font Awesome Imports ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Solid Icons for contact details
import { faMapPin, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// Brand Icons for social media
import { faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';


// 2. Define Social Links Data (UPDATED to use FA icon objects)
const socialLinks = [
  { icon: faInstagram, href: "https://www.instagram.com/sufiyan.realtor.lyka/?utm_source=qr", name: "Instagram" },
  { icon: faYoutube, href: "https://www.youtube.com/@Realtorsufiyanzubair", name: "YouTube" },
  { icon: faTiktok, href: "https://www.tiktok.com/@sufiyan.relator_lyka?_t=ZS-8y9FHnVWL0i&_r=1'", name: "TikTok" },
];


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "general",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your inquiry. Our team will contact you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      interest: "general",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info (Icons Updated) */}
          <div>
            <p className="luxury-subheading text-[10px] text-muted-foreground mb-4">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
              Schedule a Private Viewing
            </h2>
            <div className="luxury-divider !mx-0 mb-8" />
            <p className="luxury-body text-muted-foreground mb-12 max-w-md">
              Our dedicated team of luxury property specialists is ready to assist you
              in finding your perfect Dubai residence. Experience personalized service
              at its finest.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                {/* Updated Icon: MapPin -> faMapPin */}
                <FontAwesomeIcon icon={faMapPin} className="w-5 h-5 text-foreground mt-1" />
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                    Address
                  </p>
                  <p className="font-light font-semibold mb-1">
                    Lyka Real Estate Broker L.L.C.
                  </p>
                  <p className="font-light">
                    Office 4501, Level 45, Emirates Towers
                    <br />
                    Sheikh Zayed Rd, Trade Centre 2, Dubai, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                {/* Updated Icon: Phone -> faPhone */}
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-foreground mt-1" />
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                    Phone
                  </p>
                  <p className="font-light">+971 502 26 8804</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                {/* Updated Icon: Mail -> faEnvelope */}
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-foreground mt-1" />
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                    Email
                  </p>
                  <p className="font-light">sufiyan.refthub@gmail.com</p>
                </div>
              </div>
            </div>

            {/* 3. Social Media Links Section (Rendering Updated) */}
            <div className="mt-12 pt-6 border-t border-border">
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
                Connect with us
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-foreground hover:text-muted-foreground transition-colors p-2 border border-border rounded-full hover:bg-background"
                  >
                    {/* Using FontAwesomeIcon to render the icon object */}
                    <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* ... form fields ... */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-border py-3 font-light focus:outline-none focus:border-foreground transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-3 font-light focus:outline-none focus:border-foreground transition-colors"
                    placeholder="+971 50 000 0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border py-3 font-light focus:outline-none focus:border-foreground transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Area of Interest
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-border py-3 font-light focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
                >
                  <option value="general">General Inquiry</option>
                  <option value="palm">Palm Jumeirah</option>
                  <option value="downtown">Downtown Dubai</option>
                  <option value="marina">Dubai Marina</option>
                  <option value="creek">Dubai Creek Harbour</option>
                </select>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 font-light focus:outline-none focus:border-foreground transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="luxury-button luxury-button-primary w-full sm:w-auto group"
              >
                <span>Send Inquiry</span>
                {/* Updated Icon: Send -> faPaperPlane */}
                <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;