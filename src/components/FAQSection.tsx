import ScrollReveal from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Comment fonctionne le voyage dans le temps ?",
    a: "Notre technologie propriétaire utilise des portails quantiques pour créer des fenêtres temporelles sécurisées. Vous êtes transporté physiquement dans l'époque choisie tout en restant connecté à notre réseau de sécurité.",
  },
  {
    q: "Les voyages sont-ils sécurisés ?",
    a: "Absolument. Chaque voyage est supervisé par une équipe d'experts temporels. Nos protocoles de sécurité garantissent un retour sans risque. Nous avons effectué plus de 10 000 voyages sans incident.",
  },
  {
    q: "Comment réserver ?",
    a: "Utilisez notre formulaire de réservation ci-dessous, ou contactez notre équipe via le chatbot. Nous vous guiderons dans le choix de la destination et des dates idéales pour votre aventure temporelle.",
  },
  {
    q: "Puis-je interagir avec les habitants de l'époque ?",
    a: "Oui, nos voyageurs peuvent interagir librement. Un traducteur universel intégré vous permet de communiquer dans toutes les langues de l'époque visitée.",
  },
];

const FAQSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto max-w-3xl">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient-gold">
          Questions fréquentes
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12">
          Tout ce que vous devez savoir avant votre premier voyage
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-lg px-6 overflow-hidden"
            >
              <AccordionTrigger className="font-display text-base text-primary hover:no-underline py-5 text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 font-body text-sm text-foreground/80 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQSection;
