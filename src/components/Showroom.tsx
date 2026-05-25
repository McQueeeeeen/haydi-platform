import { useState, useEffect, memo } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Compass, Send, Share2, Navigation, MessageCircle } from 'lucide-react';

interface ShowroomProps {
  onOpenTrigger: () => void;
}

export default memo(function Showroom({ onOpenTrigger }: ShowroomProps) {
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Determine if open now based on standard hours (10:00 - 19:00)
  useEffect(() => {
    const checkSchedule = () => {
      const now = new Date();
      const currentHour = now.getHours();
      if (currentHour >= 10 && currentHour < 19) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    };
    checkSchedule();
    const interval = setInterval(checkSchedule, 60000);
    return () => clearInterval(interval);
  }, []);

  const easeCurve = [0.22, 1, 0.36, 1];

  return (
    <section 
      className="relative bg-[#18120e] py-28 border-t border-white/5"
      id="showroom"
    >
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: easeCurve }}
            className="mb-4"
          >
            <div className="glass-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2">
              <span className="text-[10px] tracking-[0.2em] font-bold text-brand-gold uppercase">
                Шоурум
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeCurve }}
            className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.02]"
          >
            Посмотрите свет вживую в салоне Haydi
          </motion.h2>

          <motion.p
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeCurve }}
            className="mt-4 text-sm sm:text-base text-white/50 leading-relaxed max-w-2xl mx-auto"
          >
            В шоуруме можно лично оценить теплоту рассеивателей, протестировать настенные сценарии, сравнить диаметры колец люстр и забрать готовые комплекты.
          </motion.p>
        </div>

        {/* Showroom Interactive Master Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Contact information summary card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-[28px] border border-white/10 bg-white/4 p-8 backdrop-blur-xl flex flex-col h-full justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-24 bg-[#2e1f1b]/10 rounded-full blur-[40px] pointer-events-none" />
              
              <div>
                {/* City badge */}
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
                  <span className="text-xs tracking-wider text-white font-extrabold font-sans">
                    КАРАГАНДА • ФЛАГМАНСКИЙ САЛОН
                  </span>
                </div>

                <div className="space-y-6">
                  {/* Address info block */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] text-white/40 block uppercase tracking-wider font-semibold">Адрес салона</span>
                      <span className="text-white text-base font-bold block mt-0.5">улица Гоголя, 53а</span>
                      <span className="text-white/50 text-xs mt-0.5 block">Региональный торгово-выставочный комплекс Haydi Light, Караганда</span>
                    </div>
                  </div>

                  {/* Hours info block */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold flex-shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] text-white/40 block uppercase tracking-wider font-semibold">Режим работы</span>
                      <div className="flex items-center gap-2.5 mt-0.5">
                        <span className="text-white text-sm font-bold">Пн — Вс • 10:00 – 19:00</span>
                        {isOpenNow ? (
                          <span className="text-[10px] bg-emerald-950/40 text-emerald-300 border border-emerald-500/15 rounded-full px-2.5 py-0.5 font-bold">
                            Открыто сейчас
                          </span>
                        ) : (
                          <span className="text-[10px] bg-red-950/40 text-red-300 border border-red-500/15 rounded-full px-2.5 py-0.5 font-bold">
                            Салон закрыт
                          </span>
                        )}
                      </div>
                      <span className="text-white/40 text-xs mt-1 block">Консультации на сайте принимаются круглосуточно</span>
                    </div>
                  </div>

                  {/* Contact info block */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] text-white/40 block uppercase tracking-wider font-semibold">Телефоны для оперативного подбора</span>
                      <a href="tel:+77015554321" className="text-white text-base font-bold block hover:text-brand-gold transition-colors mt-0.5">+7 (701) 555-43-21</a>
                      <span className="text-white/50 text-xs mt-0.5 block">Менеджер по работе с ключевыми дизайнерами</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant Messenger and Navigation CTA Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href="https://wa.me/77015554321?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20Haydi.kz.%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D1%80%D0%BE%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D1%83%20%D0%BE%D1%81%D0%B2%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D1%8F."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 rounded-full bg-[#25D366] text-black hover:bg-[#20ba59] text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 transform active:scale-98"
                >
                  <MessageCircle size={15} />
                  <span>Написать в WhatsApp</span>
                </a>

                <a
                  href="https://yandex.com/maps/?text=%D0%9A%D0%B0%D1%80%D0%B0%D0%B3%D0%B0%D0%BD%D0%B4%D0%B0+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%93%D0%BE%D0%B3%D0%BE%D0%BB%D1%8F+53%D0%B0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-brand-deep text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
                >
                  <Navigation size={15} />
                  <span>Построить маршрут к салону</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Panel: Beautiful stylized custom Map canvas vector */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] border border-white/10 overflow-hidden relative group h-[380px] lg:h-full bg-[#140e0c] flex flex-col justify-end">
              
              {/* Stylized vector map system illustration using CSS nodes */}
              <div className="absolute inset-0 bg-gradient-to-[#150f0c] opacity-90 z-0">
                
                {/* Vector road pathways simulation */}
                <svg className="w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                  {/* Road Grid lines */}
                  <line x1="10%" y1="0%" x2="10%" y2="100%" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                  <line x1="45%" y1="0%" x2="45%" y2="100%" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                  <line x1="85%" y1="0%" x2="85%" y2="100%" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                  
                  <line x1="0%" y1="20%" x2="100%" y2="20%" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
                  <line x1="0%" y1="56%" x2="100%" y2="56%" stroke="#c39e72" strokeWidth="4" strokeDasharray="3 3" />
                  <line x1="0%" y1="75%" x2="100%" y2="75%" stroke="rgba(255,255,255,0.06)" strokeWidth="6" strokeDasharray="8 8" />
                  
                  {/* Text annotations of streets */}
                  <text x="3%" y="16%" fill="rgba(255,255,255,0.2)" fontSize="9" className="font-mono uppercase tracking-[0.2em]">Проспект Бухар-Жырау</text>
                  <text x="47%" y="90%" fill="rgba(255,255,255,0.2)" fontSize="9" className="font-mono uppercase tracking-[0.2em] -rotate-90 origin-left">улица лободы</text>
                  <text x="3%" y="52%" fill="#c39e72" opacity="0.8" fontSize="10" className="font-mono uppercase tracking-[0.2em]">УЛИЦА ГОГОЛЯ</text>
                </svg>

                {/* Pulsing ring indicator */}
                <div className="absolute top-[56%] left-[45%] -translate-x-1/2 -translate-y-1/2">
                  <span className="absolute inline-flex h-20 w-20 rounded-full bg-brand-gold/15 animate-ping" />
                  <span className="absolute inline-flex h-10 w-10 rounded-full bg-brand-gold/25 animate-pulse" />
                  
                  {/* Showroom visual Pin point */}
                  <div className="relative w-6 h-6 rounded-full bg-brand-gold border border-brand-deep shadow-lg flex items-center justify-center cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-deep" />
                  </div>
                </div>

                {/* Surrounding landmarks tags */}
                <div className="absolute top-[48%] left-[55%] glass-pill px-3 py-1 rounded-sm text-[9px] uppercase tracking-wider text-white/50 select-none">
                  Карагандинский Цирк (рядом)
                </div>
                
                <div className="absolute top-[68%] left-[20%] glass-pill px-3 py-1 rounded-sm text-[9px] uppercase tracking-wider text-white/50 select-none">
                  Областной Акимат
                </div>
              </div>

              {/* Showroom preview small card overlap inside */}
              <div className="relative z-10 p-6 m-6 rounded-2xl bg-brand-deep/92 border border-white/10 p-5 backdrop-blur-md max-w-sm">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold block mb-1">Фокус прибытия</span>
                <h4 className="text-sm font-bold text-white tracking-tight mb-1.5">Салон Премиум Освещения “Haydi”</h4>
                <p className="text-white/60 text-xs leading-relaxed mb-4">
                  Собственный выставочный зал с высокими парковочными местами. Удобно заезжать как со стороны Бухар-Жырау, так и по улице Гоголя.
                </p>
                <a
                  href="https://yandex.com/maps/?text=%D0%9A%D0%B0%D1%80%D0%B0%D0%B3%D0%B0%D0%BD%D0%B4%D0%B0+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%93%D0%BE%D0%B3%D0%BE%D0%BB%D1%8F+53%D0%B0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 h-9 rounded-full bg-white text-brand-deep hover:bg-white/90 text-[10px] font-bold tracking-wide transition-all inline-flex items-center gap-1 cursor-pointer"
                >
                  Посмотреть на карте
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
});
