import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import GallerySection from "@/components/GallerySection";
import DetailsSection from "@/components/DetailsSection";
import FAQSection from "@/components/FAQSection";
import BookingSection from "@/components/BookingSection";
import QuizSection from "@/components/QuizSection";
import ChatbotWidget from "@/components/ChatbotWidget";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroSection />
    <DestinationsSection />
    <GallerySection />
    <DetailsSection />
    <QuizSection />
    <FAQSection />
    <BookingSection />
    <FooterSection />
    <ChatbotWidget />
  </div>
);

export default Index;
