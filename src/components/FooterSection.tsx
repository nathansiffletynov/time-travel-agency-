import ScrollReveal from "./ScrollReveal";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
];

const FooterSection = () => (
  <ScrollReveal>
    <footer id="contact" className="border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-xl text-gradient-gold mb-2">TimeTravel Agency</h3>
            <p className="font-body text-sm text-muted-foreground">
              L'avenir du voyage, c'est le passé.
            </p>
          </div>

          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="flex gap-6 font-body text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
            <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary transition-colors">CGV</a>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 TimeTravel Agency – Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  </ScrollReveal>
);

export default FooterSection;
