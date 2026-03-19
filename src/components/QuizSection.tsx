import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";

const questions = [
  {
    q: "Quel type d'expérience vous attire ?",
    options: ["Culturelle et artistique", "Aventure et nature", "Élégance et raffinement"],
  },
  {
    q: "Quelle période vous fascine le plus ?",
    options: ["Histoire moderne", "Temps anciens", "Renaissance"],
  },
  {
    q: "Votre préférence d'environnement ?",
    options: ["Ville effervescente", "Nature sauvage", "Art et architecture"],
  },
  {
    q: "Votre activité idéale en voyage ?",
    options: ["Visiter des monuments", "Observer la faune", "Explorer des musées"],
  },
];

const results: Record<string, { title: string; desc: string }> = {
  ancient: {
    title: "Civilisations antiques",
    desc: "Votre âme d'explorateur vous destine aux grandes civilisations ! Découvrez l'Égypte des pharaons, la Grèce de Périclès ou la Rome impériale.",
  },
  medieval: {
    title: "Époque médiévale",
    desc: "Votre esprit aventurier s'épanouira dans l'Europe médiévale ! Tournois, châteaux et marchés vous attendent.",
  },
  renaissance: {
    title: "Florence à la Renaissance",
    desc: "Votre sensibilité artistique vous mène tout droit à Florence en 1504 ! Michel-Ange, Léonard de Vinci et la beauté Renaissance vous appellent.",
  },
};

const QuizSection = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (optionIdx: number) => {
    const newAnswers = [...answers, optionIdx];
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const sum = newAnswers.reduce((a, b) => a + b, 0);
      if (sum <= 3) setResult("ancient");
      else if (sum <= 6) setResult("medieval");
      else setResult("renaissance");
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-2xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gradient-gold">
            Trouvez votre destination
          </h2>
          <p className="text-center text-muted-foreground font-body mb-12">
            Répondez à 4 questions pour découvrir le voyage idéal pour vous
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-card border border-border rounded-lg p-8 min-h-[300px]">
            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-body text-xs text-muted-foreground">
                      Question {step + 1}/{questions.length}
                    </span>
                    <div className="flex gap-1">
                      {questions.map((_, i) => (
                        <div
                          key={i}
                          className={`w-8 h-1 rounded-full transition-colors duration-300 ${
                            i <= step ? "bg-primary" : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="font-display text-xl mb-8 text-foreground">
                    {questions[step].q}
                  </h3>

                  <div className="space-y-3">
                    {questions[step].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(i)}
                        className="w-full text-left p-4 rounded-lg border border-border bg-secondary/50 font-body text-sm text-foreground/80 hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">✨</span>
                  </div>
                  <h3 className="font-display text-2xl text-primary mb-4">
                    {results[result].title}
                  </h3>
                  <p className="font-body text-foreground/80 mb-8 leading-relaxed">
                    {results[result].desc}
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-gold-light font-body transition-all duration-300"
                    >
                      <a href="#reservation">Réserver ce voyage</a>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={reset}
                      className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-body transition-all duration-300"
                    >
                      Recommencer
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default QuizSection;
