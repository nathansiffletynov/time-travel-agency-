import ScrollReveal from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const details = [
  {
    title: "Paris — 1889",
    items: [
      "La Tour Eiffel flambant neuve",
      "Boulevards animés et cafés parisiens",
      "Exposition Universelle et art de la Belle Époque",
      "Conseils : Tenue élégante pour flâner dans les rues, ombrelle ou châpeau",
    ],
  },
  {
    title: "au Crétacé",
    items: [
      "Forêts luxuriantes et marais préhistoriques",
      "Dinosaures en liberté",
      "Observation de paysages intactes",
      "Conseils : \nchaussures et vêtements solides et confortables",
    ],
  },
  {
    title: "Florence 1504",
    items: [
      "Atelier de Michel-Ange — le David en création",
      "Galleria degli Uffizi — chefs-d'œuvre originaux",
      "Dîner Renaissance au Palazzo Vecchio",
      "Conseils : appréciation artistique recommandée",
    ],
  },
];

const DetailsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient-gold">
          Détails des destinations
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-xl mx-auto">
          Monuments, expériences culturelles et conseils pratiques
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <Accordion type="single" collapsible className="space-y-4">
          {details.map((section, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-lg px-6 overflow-hidden"
            >
              <AccordionTrigger className="font-display text-lg text-primary hover:no-underline py-5">
                {section.title}
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 font-body text-sm text-foreground/80 whitespace-pre-line">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default DetailsSection;
