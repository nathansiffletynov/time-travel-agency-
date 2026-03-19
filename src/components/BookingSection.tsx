import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const BookingSection = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination || !date || !travelers) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }
    toast.success("Réservation envoyée ! Nous vous contacterons bientôt.");
    setDestination("");
    setDate("");
    setTravelers("");
  };

  return (
    <section id="reservation" className="section-padding">
      <div className="container mx-auto max-w-xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient-gold">
            Réserver votre voyage
          </h2>
          <p className="text-center text-muted-foreground font-body mb-12">
            Prêt pour l'aventure ? Remplissez le formulaire ci-dessous
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-lg p-8 space-y-6"
          >
            <div className="space-y-2">
              <Label className="font-body text-sm text-foreground/80">Destination</Label>
              <Select value={destination} onValueChange={setDestination}>
                <SelectTrigger className="bg-secondary border-border font-body">
                  <SelectValue placeholder="Choisir une destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="antique">Civilisations antiques</SelectItem>
                  <SelectItem value="medieval">Époque médiévale</SelectItem>
                  <SelectItem value="renaissance">Florence 1504</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="font-body text-sm text-foreground/80">Date de départ</Label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-secondary border-border font-body"
              />
            </div>

            <div className="space-y-2">
              <Label className="font-body text-sm text-foreground/80">Nombre de voyageurs</Label>
              <Input
                type="number"
                min="1"
                max="10"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                placeholder="1-10 voyageurs"
                className="bg-secondary border-border font-body"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-gold-light font-body text-base py-6 tracking-wide transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]"
            >
              Réserver mon voyage
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BookingSection;
