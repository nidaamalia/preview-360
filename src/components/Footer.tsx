import { MapPin, Mail, Phone, Facebook, Instagram, X } from "lucide-react";

const Footer = () => {
  return (
    <footer id="konsultasi" className="bg-navy-dark border-t border-border">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground text-lg">
                PT
              </div>
              <span className="font-bold text-xl text-foreground">Paktukang</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Platform jasa tukang profesional #1 di Surabaya & Malang. 
              Kami menyediakan layanan renovasi, bangun rumah, interior, dan lainnya dengan standar kualitas tinggi.
            </p>
            <div className="flex gap-4">
              <a
                href="https://web.facebook.com/paktukangdotcom?_rdc=1&_rdr#"
                target="_blank"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/paktukangdotcom"
                target="_blank"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/paktukangdotcom"
                target="_blank"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Jl. Dupak Bangunsari Tengah 14, Surabaya 60179
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:personalia@paktukang.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  personalia@paktukang.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} PT PAKTUKANG TEKNOLOGI KARYAGLOBAL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
