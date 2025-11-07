import { Mail, Phone, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12 max-w-5xl mx-auto">
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wide">
              INFORMACE PRO ZÁKAZNÍKY
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Jak to funguje
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  O nás
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Často kladené otázky
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wide">
              TOPSEBEP S.R.O.
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>IČ: 12345678</li>
              <li>Praha, Česká republika</li>
              <li>Otevírací doba:</li>
              <li>Po-Ne 9:00-21:00</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wide">
              KONTAKT
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+420774422"
                  className="hover:text-primary transition-colors"
                >
                  +420 774 422
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@topsebep.cz"
                  className="hover:text-primary transition-colors"
                >
                  info@topsebep.cz
                </a>
              </li>
              <li className="flex gap-3 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary-foreground" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-primary-foreground" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-12 border-t border-border">
          <div className="text-3xl font-bold mb-6">
            TOP<span className="text-gradient">SEBEP</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2024 Topsebep s.r.o. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
