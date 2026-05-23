import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, HelpCircle, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenCatalog: () => void;
}

const menuItems = [
  { label: 'Каталог', href: '#categories' },
  { label: 'Коллекции', href: '#collections' },
  { label: 'Новинки', href: '#collections' },
  { label: 'Дизайнерам', href: '#designers' },
  { label: 'Контакты', href: '#showroom' },
];

export default memo(function Header({ onOpenCatalog }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-40 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div 
          className={`h-16 w-full rounded-full flex items-center justify-between px-6 md:px-8 border backdrop-blur-xl transition-all duration-500 shadow-lg ${
            isScrolled 
              ? 'bg-[#150f0c]/90 border-white/15 shadow-black/40' 
              : 'bg-white/[0.04] border-white/10'
          }`}
          id="main-navigation-header"
        >
          {/* Left Area: Logo + Descriptor */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex flex-col select-none">
              <span className="text-xl font-black tracking-[-0.04em] text-white leading-none">
                HAYDI<span className="text-brand-gold font-bold">.KZ</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.16em] text-white/50 font-semibold mt-0.5">
                салон освещения
              </span>
            </a>
          </div>

          {/* Center Area: Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-[13px] font-medium tracking-wide text-white/70 hover:text-white transition-colors duration-300 py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-350 ease-out" />
              </a>
            ))}
          </nav>

          {/* Right Area: CTA button (Desktop) + Burger (Mobile) */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCatalog}
              className="hidden sm:inline-flex items-center justify-center px-6 h-10 rounded-full border border-white/20 bg-transparent text-xs font-semibold text-white/90 hover:bg-white hover:text-brand-deep cursor-pointer transition-all duration-300"
            >
              Перейти в каталог
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Переключить меню"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drop-down overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-24 z-30 lg:hidden rounded-3xl border border-white/15 bg-[#18120e]/95 backdrop-blur-2xl p-6 shadow-2xl flex flex-col gap-5"
          >
            <div className="flex flex-col gap-3">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-xl hover:bg-white/5 text-base font-medium text-white/80 hover:text-white transition-colors block"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="h-px bg-white/10 my-1" />

            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCatalog();
                }}
                className="w-full h-11 rounded-full bg-white text-brand-deep text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Перейти в каталог</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});
