import { ChevronDown, Handshake, Info } from 'lucide-react';
import { useCounterAnimation } from '@/hooks/use-counter-animation';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  const yearsCount = useCounterAnimation(13, 2000, isVisible);
  const clientsCount = useCounterAnimation(500, 2000, isVisible);
  const placementsCount = useCounterAnimation(5000, 2000, isVisible);
  const industriesCount = useCounterAnimation(6, 2000, isVisible);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  const referralUrl = import.meta.env.VITE_REFERRAL_URL as string | undefined;

  return (
    <section 
      id="home" 
      ref={ref}
      className="relative bg-gradient-to-br from-primary to-secondary text-white overflow-hidden min-h-screen flex items-center"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10 pointer-events-none"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
              Premier <span className="text-accent">Manpower</span><br />
              Consultancy Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Connecting talent with opportunity since 2011. Specializing in Gulf/Middle East recruitment across construction, oil & gas, hospitality, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-poppins font-semibold hover:bg-accent/90 transition-colors"
              >
                <Handshake className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Button 
                onClick={() => scrollToSection('about')}
                variant="outline"
                className="border-2 border-white/80 text-white px-8 py-3 rounded-lg font-poppins font-semibold bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary transition-colors"
              >
                <Info className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Animated Stats */}
          <div className={`grid grid-cols-2 gap-6 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {yearsCount}+
              </div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {clientsCount}+
              </div>
              <div className="text-sm opacity-90">Satisfied Clients</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {placementsCount}+
              </div>
              <div className="text-sm opacity-90">Successful Placements</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {industriesCount}+
              </div>
              <div className="text-sm opacity-90">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Side floating Up/Down controls */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        <motion.button
          aria-label="Scroll up"
          drag="y"
          dragConstraints={{ top: -140, bottom: 0 }}
          dragElastic={0.2}
          dragSnapToOrigin
          onClick={scrollToTop}
          onDragEnd={(e, info) => { if (info.offset.y < -30 || info.velocity.y < -600) scrollToTop(); }}
          className="touch-none select-none cursor-grab active:cursor-grabbing h-11 w-11 rounded-full bg-white/80 text-black border border-white shadow-sm flex items-center justify-center hover:bg-white"
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
        <motion.button
          aria-label="Go down / referral"
          drag="y"
          dragConstraints={{ top: 0, bottom: 140 }}
          dragElastic={0.2}
          dragSnapToOrigin
          onClick={() => {
            if (referralUrl) {
              window.open(referralUrl, '_blank', 'noopener,noreferrer');
            } else {
              scrollToBottom();
            }
          }}
          onDragEnd={(e, info) => {
            if (info.offset.y > 30 || info.velocity.y > 600) {
              if (referralUrl) {
                window.open(referralUrl, '_blank', 'noopener,noreferrer');
              } else {
                scrollToBottom();
              }
            }
          }}
          className="touch-none select-none cursor-grab active:cursor-grabbing h-11 w-11 rounded-full bg-white/80 text-black border border-white shadow-sm flex items-center justify-center hover:bg-white"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-white hover:text-accent transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
