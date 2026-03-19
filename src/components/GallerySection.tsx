import ScrollReveal from "./ScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Le Parthénon d'Athènes" },
  { src: gallery2, alt: "Le Colisée de Rome" },
  { src: gallery3, alt: "Marché médiéval" },
  { src: gallery4, alt: "Le David de Michel-Ange" },
];

const GallerySection = () => (
  <section id="apropos" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient-gold">
          Galerie Temporelle
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-xl mx-auto">
          Aperçu de ce qui vous attend à travers les âges
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <ScrollReveal key={img.alt} delay={i * 0.1}>
            <div className="relative group overflow-hidden rounded-lg aspect-[4/5]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="font-display text-sm text-primary">{img.alt}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
