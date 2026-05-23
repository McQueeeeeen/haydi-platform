import { memo } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, ArrowUp, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenCatalog: () => void;
}

export default memo(function Footer({ onOpenConsultation, onOpenCatalog }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#150f0c] pt-24 pb-12 overflow-hidden border-t border-white/5" id="footer">
      
      {/* Absolute warm golden light flare rising from bottom representing lighting art */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Final CTA Screen Block inside */}
        <div className="text-center max-w-4xl mx-auto mb-24 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-block"
          >
            <div className="glass-pill px-4.5 py-1 rounded-full text-[10px] tracking-[0.2em] text-brand-gold font-bold uppercase">
              haydi.kz • свет как искусство
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[0.98] mb-6"
          >
            Подберите свет, который будет работать на интерьер
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/55 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Перейдите в наш каталог или оставьте экспресс-заявку, чтобы эксперты салона в Караганде составили сценарную спецификацию под ваши задачи.
          </motion.p>

          {/* Dual Buttons CTA limit */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenCatalog}
              className="w-full sm:w-auto px-9 h-13 rounded-full bg-white text-brand-deep font-bold text-xs tracking-wider hover:bg-[#f7f3ee] transition-all transform hover:scale-101.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Перейти в каталог</span>
              <ArrowRight size={14} />
            </button>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-9 h-13 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/8 text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Получить консультацию
            </button>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 w-full my-12" />

        {/* Core Footer Navigation and coordinates */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start relative z-10 mb-16">
          
          {/* Logo element with brand descriptor */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white">
                HAYDI<span className="text-brand-gold">.KZ</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.16em] text-white/40 font-semibold mt-0.5">
                салон премиального освещения
              </span>
            </div>
            
            <p className="text-white/40 text-xs leading-relaxed max-w-sm">
              Продажа элитных люстр, подвесов, бра, спотов и софитов от ведущих мировых производителей. Помогаем создать выверенный сценарий света для квартир, домов и шоурумов в Караганде.
            </p>
          </div>

          {/* Quick links directory */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-widest text-[#c39e72] font-bold mb-4">Навигация</h4>
            <ul className="space-y-2.5 text-xs text-white/50">
              <li><a href="#hero" className="hover:text-white transition-colors">Главный экран</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Световые Категории</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">Курированные коллекции</a></li>
              <li><a href="#interior-designer" className="hover:text-white transition-colors">Интерактивный подбор</a></li>
              <li><a href="#designers" className="hover:text-white transition-colors">Дизайнерам интерьера</a></li>
              <li><a href="#why-haydi" className="hover:text-white transition-colors text-brand-gold">Почему Haydi ?</a></li>
            </ul>
          </div>

          {/* Quick legal / Contacts directory */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] uppercase tracking-widest text-[#c39e72] font-bold mb-4">Контакты</h4>
            <ul className="space-y-3.5 text-xs text-white/50">
              <li className="flex items-center gap-2.5">
                <span className="text-white/30 font-semibold w-10">Адрес:</span>
                <span className="text-white font-medium">Караганда, ул. Гоголя, 53а</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-white/30 font-semibold w-10">Связь:</span>
                <a href="tel:+77015554321" className="text-white font-medium hover:text-brand-gold">+7 (701) 555-43-21</a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-white/30 font-semibold w-10">Сайт:</span>
                <span className="text-white/70">showroom.haydi.kz</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Flat Bottom Copyright Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10 text-[11px] text-white/30 font-medium">
          <div>
            <span>© {currentYear} Haydi.kz — Салон освещения. Все права защищены. Разработано по стандартам брендбука.</span>
          </div>

          {/* Up scrolling bullet */}
          <button 
            onClick={scrollToTop}
            className="group h-8 px-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-brand-gold hover:text-brand-deep cursor-pointer transition-all duration-300 flex items-center gap-1.5"
            aria-label="На заставку"
          >
            <span>Наверх</span>
            <ArrowUp size={11} className="group-hover:translate-y-[-1px] transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
});
