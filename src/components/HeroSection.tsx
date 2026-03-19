import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="accueil"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-background/60" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

    <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-gold leading-tight"
      >
        Voyagez à travers le temps
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="font-body text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
      >
        Découvrez le passé grâce à nos expériences exclusives de voyage temporel
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <Button
          asChild
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-gold-light font-body text-base md:text-lg px-8 py-6 tracking-wide transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]"
        >
          <a href="#destinations">Explorer les destinations</a>
        </Button>
      </motion.div>
    </div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
        <div className="w-1 h-3 bg-primary rounded-full" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
