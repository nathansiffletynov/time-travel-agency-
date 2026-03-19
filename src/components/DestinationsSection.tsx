import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import destAncient from "@/assets/dest-ancient.png";
import destMedieval from "@/assets/dest-medieval.png";
import destRenaissance from "@/assets/dest-renaissance.jpg";

const destinations = [
  {
    title: "Paris en pleine effervescence — 1889",
    text: "Flânez dans Paris à l’époque de l’Exposition Universelle et admirez la Tour Eiffel flambant neuve. ",
    image: destAncient
  },
  {
    title: "Aventure préhistorique au Crétacé",
    text: "Explorez un monde peuplé de dinosaures et de forêts anciennes, où la nature règne.\n\n",
    image: destMedieval
  },
  {
    title: "Florence de la Renaissance\n\n",
    text: "Découvrez Florence au sommet de la Renaissance et le David de Michel-Ange.\n\n",
    image: destRenaissance
  }
];


const DestinationsSection = () =>
<section id="destinations" className="section-padding">
    <div className="container mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient-gold">
          Nos Destinations
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-xl mx-auto">
          Choisissez votre époque et vivez une expérience inoubliable
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {destinations.map((dest, i) =>
      <ScrollReveal key={dest.title} delay={i * 0.15}>
            <div className="group bg-card rounded-lg overflow-hidden border border-border hover-elevate cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img
              src={dest.image}
              alt={dest.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy" />
            
                
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-primary mb-3">
                  {dest.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-5 leading-relaxed">
                  {dest.text}
                </p>
                <Button
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-body transition-all duration-300">
              
                  En savoir plus
                </Button>
              </div>
            </div>
          </ScrollReveal>
      )}
      </div>
    </div>
  </section>;


export default DestinationsSection;