import { memo } from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface HeroProps {
  onOpenTrigger: () => void;
}

// Brand name lists of premium lighting brands requested
const brandList = [
  'MAYTONI', 'ODEON LIGHT', 'LIGHTSTAR', 'EGLO', 'FREYA', 
  'FAVOURITE', 'ST LUCE', 'ARTE LAMP', 'EUROSVET', 'NOVOTECH', 
  'OMNILUX', 'IDEAL LUX', 'MANTRA', 'CRYSTAL LUX', 'LUMION', 
  'CITILUX', 'LOFT IT', 'NEWPORT', 'NOWODVORSKI', 'LEDS-C4'
];

// Triplicate array for flawless custom marquee loop
const marqueeBrands = [...brandList, ...brandList, ...brandList];
// Custom monochrome SVG logo components for the 20 requested brands
function BrandLogo({ name }: { name: string }) {
  // We render custom, high-fidelity vector shapes for each brand to guarantee genuine monochrome logo assets.
  switch (name) {
    case 'MAYTONI':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 140 30" fill="currentColor">
          <circle cx="10" cy="15" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M10 8 L10 22 M7 15 L13 15" stroke="currentColor" strokeWidth="1.5" />
          <text x="26" y="20" fontFamily="sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.25em">MAYTONI</text>
        </svg>
      );
    case 'ODEON LIGHT':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 160 30" fill="currentColor">
          <ellipse cx="14" cy="15" rx="10" ry="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="14" cy="15" r="2" fill="currentColor" />
          <text x="32" y="19" fontFamily="sans-serif" fontWeight="800" fontSize="11" letterSpacing="0.2em">ODEON LIGHT</text>
        </svg>
      );
    case 'LIGHTSTAR':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 145 30" fill="currentColor">
          <polygon points="12,6 15,12 21,12 16,16 18,22 12,18 6,22 8,16 3,12 9,12" stroke="currentColor" strokeWidth="1" fill="none" />
          <text x="30" y="19" fontFamily="sans-serif" fontWeight="900" fontSize="11" letterSpacing="0.25em">LIGHTSTAR</text>
        </svg>
      );
    case 'EGLO':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 100 30" fill="currentColor">
          <rect x="2" y="7" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="7" y="12" width="6" height="6" fill="currentColor" />
          <text x="26" y="20" fontFamily="sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.1em">EGLO</text>
        </svg>
      );
    case 'FREYA':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 110 30" fill="currentColor">
          <path d="M4 15 L20 15 M12 6 L12 24" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="6" r="2" />
          <circle cx="12" cy="24" r="2" />
          <text x="30" y="20" fontFamily="serif" fontWeight="700" fontSize="14" letterSpacing="0.3em" fontStyle="italic">FREYA</text>
        </svg>
      );
    case 'FAVOURITE':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 150 30" fill="currentColor">
          <line x1="2" y1="15" x2="18" y2="15" stroke="currentColor" strokeWidth="2" />
          <line x1="10" y1="5" x2="10" y2="25" stroke="currentColor" strokeWidth="1" />
          <text x="24" y="19" fontFamily="sans-serif" fontWeight="800" fontSize="11" letterSpacing="0.18em">FAVOURITE</text>
        </svg>
      );
    case 'ST LUCE':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 130 30" fill="currentColor">
          <path d="M2 15 Q 10 5, 18 15 Q 10 25, 2 15 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <text x="26" y="19" fontFamily="sans-serif" fontWeight="900" fontSize="11" letterSpacing="0.3em">ST LUCE</text>
        </svg>
      );
    case 'ARTE LAMP':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 140 30" fill="currentColor">
          <ellipse cx="12" cy="15" rx="9" ry="9" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" fill="none" />
          <text x="28" y="19" fontFamily="sans-serif" fontWeight="800" fontSize="11" letterSpacing="0.22em">ARTE LAMP</text>
        </svg>
      );
    case 'EUROSVET':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 140 30" fill="currentColor">
          <rect x="2" y="5" width="16" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="10" y1="5" x2="10" y2="25" stroke="currentColor" strokeWidth="1" />
          <text x="26" y="20" fontFamily="sans-serif" fontWeight="800" fontSize="12" letterSpacing="0.15em">EUROSVET</text>
        </svg>
      );
    case 'NOVOTECH':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 140 30" fill="currentColor">
          <path d="M4 10 L16 10 L16 22 L4 22 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M6 14 L14 14" stroke="currentColor" strokeWidth="1.5" />
          <text x="26" y="19" fontFamily="sans-serif" fontWeight="800" fontSize="11" letterSpacing="0.2em">NOVOTECH</text>
        </svg>
      );
    case 'OMNILUX':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 130 30" fill="currentColor">
          <circle cx="10" cy="15" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <polygon points="10,11 13,17 7,17" fill="currentColor" />
          <text x="26" y="19" fontFamily="sans-serif" fontWeight="800" fontSize="11" letterSpacing="0.25em">OMNILUX</text>
        </svg>
      );
    case 'IDEAL LUX':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 140 30" fill="currentColor">
          <line x1="2" y1="8" x2="18" y2="22" stroke="currentColor" strokeWidth="1.5" />
          <line x1="18" y1="8" x2="2" y2="22" stroke="currentColor" strokeWidth="1.5" />
          <text x="28" y="19" fontFamily="sans-serif" fontWeight="800" fontSize="11" letterSpacing="0.18em">IDEAL LUX</text>
        </svg>
      );
    case 'MANTRA':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 120 30" fill="currentColor">
          <path d="M2 15 C 6 5, 14 25, 18 15" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <text x="26" y="20" fontFamily="sans-serif" fontWeight="800" fontSize="13" letterSpacing="0.22em">MANTRA</text>
        </svg>
      );
    case 'CRYSTAL LUX':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 160 30" fill="currentColor">
          <polygon points="10,6 17,11 14,19 6,19 3,11" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <text x="26" y="19" fontFamily="sans-serif" fontWeight="900" fontSize="11" letterSpacing="0.18em">CRYSTAL LUX</text>
        </svg>
      );
    case 'LUMION':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 115 30" fill="currentColor">
          <circle cx="10" cy="15" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="10" cy="15" r="3" fill="currentColor" />
          <text x="24" y="20" fontFamily="sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.15em">LUMION</text>
        </svg>
      );
    case 'CITILUX':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 120 30" fill="currentColor">
          <path d="M2 22 L8 8 L14 22 Z M5 17 L11 17" stroke="currentColor" strokeWidth="2" fill="none" />
          <text x="22" y="19" fontFamily="sans-serif" fontWeight="800" fontSize="11" letterSpacing="0.25em">CITILUX</text>
        </svg>
      );
    case 'LOFT IT':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 125 30" fill="currentColor">
          <rect x="2" y="6" width="16" height="18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 1" fill="none" />
          <text x="26" y="19" fontFamily="sans-serif" fontWeight="900" fontSize="11" letterSpacing="0.25em">LOFT IT</text>
        </svg>
      );
    case 'NEWPORT':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 130 30" fill="currentColor">
          <path d="M4 6 L16 15 L4 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <text x="26" y="19" fontFamily="serif" fontWeight="900" fontSize="12" letterSpacing="0.2em">NEWPORT</text>
        </svg>
      );
    case 'NOWODVORSKI':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 165 30" fill="currentColor">
          <circle cx="12" cy="15" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <rect x="11" y="5" width="2" height="20" fill="currentColor" />
          <text x="28" y="19" fontFamily="sans-serif" fontWeight="800" fontSize="10" letterSpacing="0.15em">NOWODVORSKI</text>
        </svg>
      );
    case 'LEDS-C4':
      return (
        <svg className="h-6 w-auto text-white/50 hover:text-white transition-colors duration-300" viewBox="0 0 125 30" fill="currentColor">
          <path d="M4 6 H16 V10 H4 Z" fill="currentColor" />
          <path d="M4 14 H16 V24 H4 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <text x="24" y="19" fontFamily="sans-serif" fontWeight="900" fontSize="11" letterSpacing="0.15em">LEDS-C4</text>
        </svg>
      );
    default:
      return <span className="text-xs font-bold tracking-widest text-white/50">{name}</span>;
  }
}

export default memo(function Hero({ onOpenTrigger }: HeroProps) {
  const { theme } = useApp();
  // Fluid transition animation curves
  const easeCurve = [0.22, 1, 0.36, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: easeCurve }
    }
  };

  return (
    <section 
      className="relative min-h-[101vh] flex flex-col justify-between items-center overflow-hidden pt-36 pb-8"
      id="hero"
    >
      {/* Cinematic Fullscreen Background - Warm Architectural Living Space */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/assets/images/hero-desktop.avif" media="(min-width: 1024px)" type="image/avif" />
          <source srcSet="/assets/images/hero-mobile.avif" media="(max-width: 1023px)" type="image/avif" />
          <source srcSet="/assets/images/hero-desktop.webp" media="(min-width: 1024px)" type="image/webp" />
          <source srcSet="/assets/images/hero-mobile.webp" media="(max-width: 1023px)" type="image/webp" />
          <img 
            src="/assets/images/hero-desktop.webp" 
            alt="Haydi Luxury Glass & Light Space" 
            className={`w-full h-full object-cover scale-102 transform transition-all duration-500 filter ${theme === 'dark' ? 'brightness-65 contrast-102' : 'brightness-[0.88] contrast-[0.98]'}`}
            fetchPriority="high"
            width={1800}
            height={1125}
          />
        </picture>
        {/* Absolute High-Contrast Warm Cinematic Film Overlays */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${theme === 'dark' ? 'bg-black/45 mix-blend-multiply' : 'bg-[#fffdfa]/15 mix-blend-multiply'}`} />
        <div className={`absolute inset-0 transition-opacity duration-500 ${theme === 'dark' ? 'bg-[#211612]/30 mix-blend-color-burn' : 'bg-transparent'}`} />
        <div className="absolute inset-0 dark-overlay" />
      </div>


      {/* Center ambient halo back-glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/15 rounded-full blur-[160px] pointer-events-none z-[1]" />

      {/* Main Hero Elements Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center flex-grow pt-8"
      >
        {/* Elegant top brand label & lighting filament emblem directly replicating reference composition */}
        <motion.div 
          variants={itemVariants} 
          className="mb-8 flex flex-col items-center"
        >
          <div className="w-11 h-11 rounded-full border border-brand-gold/40 bg-white/5 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(195,158,114,0.15)] backdrop-blur-md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-brand-gold">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <span className="text-[10px] tracking-[0.28em] font-semibold text-white/50 uppercase">
            HAYDI • САЛОН ОСВЕЩЕНИЯ
          </span>
        </motion.div>

        {/* Master headline matching requirement precisely */}
        <motion.h1 
          variants={itemVariants}
          className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-[76px] font-extrabold tracking-[-0.032em] leading-[1.02] max-w-4xl"
        >
          Освещение, которое формирует атмосферу интерьера
        </motion.h1>

        {/* Subhead matching requirement precisely */}
        <motion.p 
          variants={itemVariants}
          className="mt-6 text-sm sm:text-base md:text-[17px] text-white/70 font-normal leading-relaxed max-w-3xl px-2"
        >
          Люстры, бра, подвесы и дизайнерские коллекции для квартир, домов и коммерческих пространств.
        </motion.p>

        {/* Single White solid capsule key action CTA */}
        <motion.div 
          variants={itemVariants}
          className="mt-10"
        >
          <button
            onClick={onOpenTrigger}
            className="group px-12 h-14 rounded-full bg-white text-[#150f0c] text-sm font-bold shadow-2xl shadow-black/80 hover:bg-[#eae6e2] transition-all duration-350 transform hover:scale-[1.03] flex items-center justify-center cursor-pointer"
          >
            <span>Подобрать освещение</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Genuine Vector Brand Logomarquee Trough */}
      <div className="relative z-10 w-full mt-10 pt-8 border-t border-white/5 bg-gradient-to-b from-transparent to-[#150f0c]">
        {/* Infinite Loop Ticker container */}
        <div className="w-full overflow-hidden relative py-4">
          {/* Subtle warm fade screen mask */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#150f0c] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#150f0c] to-transparent z-10 pointer-events-none" />

          {/* Scrolling filmstrip */}
          <div className="flex w-max items-center">
            <div className="flex animate-marquee-custom gap-16 pr-16 items-center">
              {marqueeBrands.map((brand, index) => (
                <div 
                  key={`${brand}-${index}`}
                  className="flex items-center"
                >
                  <BrandLogo name={brand} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
