import { memo } from 'react';
import { motion } from 'motion/react';

interface TrustCard {
  title: string;
  subtitle: string;
  description: string;
  stat?: string;
}

const points: TrustCard[] = [
  {
    title: 'Подбор под ваш интерьер',
    subtitle: 'Не просто каталог товаров',
    description: 'Мы анализируем архитектурные объемы, высоту потолков, температуру стен и мебельные акценты. Только затем рекомендуем люстры, подвесы или споты, которые станут фокусом, а не просто источником света.',
    stat: '01'
  },
  {
    title: 'Бренды со всего мира',
    subtitle: 'Оригинальное партнерство',
    description: 'Более 20 сертифицированных фабрик в каталоге, включая Maytoni, Lightstar, Eglo и ODEON LIGHT. Все приборы поставляются с आधिकारिक гарантией, надлежащей изоляцией цепей и заводскими блоками питания.',
    stat: '02'
  },
  {
    title: 'Наличие и оперативный подбор',
    subtitle: 'Реальный склад в Казахстане',
    description: 'Сотни позиций доступны к быстрой отгрузке напрямую со склада. Больше не нужно месяцами ждать люстры в пустой квартире — большая часть коллекций находится в наличии или доставляется в кратчайшие дни.',
    stat: '03'
  },
  {
    title: 'Работа с дизайнерами',
    subtitle: 'Профессиональное партнерство',
    description: 'Понимаем разницу между заливающим и акцентным светом, легко читаем чертежи в DWG, умеем делать расчеты освещенности в DiaLux и строго соблюдаем заложенный в проект рамки бюджета.',
    stat: '04'
  }
];

export default memo(function WhyHaydi() {
  const easeCurve = [0.22, 1, 0.36, 1];

  return (
    <section 
      className="relative bg-[#150f0c] py-28 border-t border-white/5"
      id="why-haydi"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#2e1f1b]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: easeCurve }}
            className="mb-4"
          >
            <div className="glass-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2">
              <span className="text-[10px] tracking-[0.2em] font-bold text-brand-gold uppercase">
                Почему Haydi
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeCurve }}
            className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.02]"
          >
            Салон, который помогает выбрать свет осознанно
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeCurve }}
            className="mt-4 text-sm sm:text-base text-white/50 leading-relaxed max-w-2xl mx-auto"
          >
            Мы работаем не только с товаром, но и с задачей интерьера: стилем, пропорциями, траекторией взгляда и вашим ощущением пространства.
          </motion.p>
        </div>

        {/* 4 Cards dynamic clean glass grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, delay: idx * 0.08, ease: easeCurve }}
              className="rounded-[28px] border border-white/10 bg-white/4 p-8 backdrop-blur-xl relative overflow-hidden group hover:border-brand-gold/25 transition-all duration-500"
            >
              {/* Subtle background static graphic touch: number */}
              <div className="absolute right-8 top-6 text-6xl font-black text-white/5 select-none font-mono group-hover:text-brand-gold/10 transition-colors duration-450">
                {point.stat}
              </div>

              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold block mb-1">
                  {point.subtitle}
                </span>

                <h3 className="text-xl font-bold text-white tracking-tight mb-4 group-hover:text-brand-gold transition-colors duration-300">
                  {point.title}
                </h3>

                <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-lg">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
});
