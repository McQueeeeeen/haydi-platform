import { memo } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface CollectionCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  badge?: string;
  large?: boolean;
}

interface CollectionsProps {
  onSelectCollection: (name: string) => void;
  onOpenCatalog: () => void;
}

// Editorial list structured exactly as requested
const largeFeatured: CollectionCard = {
  id: 'col-featured',
  title: 'Новинки сезона',
  subtitle: 'Curated 2026',
  description: 'Свежие органические формы, теплые матовые оттенки латуни и технологичные светильники для прогрессивных современных интерьеров.',
  imageUrl: '/assets/images/col-featured-desktop.webp',
  badge: 'Новое поступление',
  large: true
};

const topTwoCards: CollectionCard[] = [
  {
    id: 'col-bestsellers',
    title: 'Бестселлеры Haydi',
    subtitle: 'Шоурум фавориты',
    description: 'Флагманские позиции премиального сегмента, которые чаще всего выбирают дизайнеры для элитных квартир и загородных домов.',
    imageUrl: '/assets/images/col-bestsellers-desktop.webp',
  },
  {
    id: 'col-kitchen',
    title: 'Для кухни и столовой',
    subtitle: 'Свет общения',
    description: 'Каскадные подвесы и линейные люстры для кухонных островов, просторных обеденных зон и открытых студийных пространств.',
    imageUrl: '/assets/images/col-kitchen-desktop.webp',
  }
];

const bottomThreeCards: CollectionCard[] = [
  {
    id: 'col-sconces',
    title: 'Акцентные бра',
    subtitle: 'Настенный свет',
    description: 'Мягкий скульптурный свет для стен, орнаментальных зеркал, мастер-спален и уютных кулуарных прихожих.',
    imageUrl: '/assets/images/col-sconces-desktop.webp',
  },
  {
    id: 'col-architectural',
    title: 'Архитектурный свет',
    subtitle: 'Чистая геометрия',
    description: 'Встраиваемые споты, поворотные саффиты и скрытые шинопроводные системы для идеально чистых потолков.',
    imageUrl: '/assets/images/col-architectural-desktop.webp',
  },
  {
    id: 'col-designer',
    title: 'Дизайнерские серии',
    subtitle: 'Единая концепция',
    description: 'Скоординированные коллекции, в которых люстры, настенные бра и подвесы спроектированы в рамках единого стиля.',
    imageUrl: '/assets/images/col-designer-desktop.webp',
  }
];

const easeCurve = [0.22, 1, 0.36, 1];

export default memo(function Collections({ onSelectCollection, onOpenCatalog }: CollectionsProps) {
  return (
    <section 
      className="relative bg-[#18120e] py-28 border-t border-white/5"
      id="collections"
    >
      {/* Visual background atmospheric balance overlay */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-12 w-80 h-80 bg-[#2e1f1b]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Curated Heading Centered */}
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
                Избранные коллекции
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
            Коллекции, которые задают настроение интерьеру
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeCurve }}
            className="mt-4 text-sm sm:text-base text-white/50 leading-relaxed max-w-2xl mx-auto"
          >
            Мы собрали направления света, которые лучше всего передают философию Haydi — выразительные фактуры, благородный металл и выверенное световое пятно.
          </motion.p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Left Column: Big featured block (Novinki) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: easeCurve }}
            onClick={() => onSelectCollection(largeFeatured.title)}
            className="lg:col-span-1 rounded-[28px] border border-white/10 bg-white/[0.03] overflow-hidden relative group cursor-pointer transition-all duration-600 hover:border-brand-gold/45 shadow-2xl flex flex-col justify-between h-[450px] lg:h-[620px]"
          >
            <div className="absolute inset-0 z-0">
              <picture>
                <source srcSet="/assets/images/col-featured-desktop.avif" media="(min-width: 640px)" type="image/avif" />
                <source srcSet="/assets/images/col-featured-desktop.webp" media="(min-width: 640px)" type="image/webp" />
                <img 
                  src="/assets/images/col-featured-desktop.webp" 
                  alt={largeFeatured.title} 
                  className="w-full h-full object-cover transform scale-101 group-hover:scale-105 transition-all duration-750 ease-out filter brightness-75 group-hover:brightness-[0.85]"
                  loading="lazy"
                  width={500}
                  height={620}
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-[#150f0c] via-black/25 to-transparent" />
            </div>

            {/* Top row */}
            <div className="relative z-10 p-6 flex justify-between items-start">
              <span className="text-[10px] tracking-[0.15em] uppercase text-white/50 font-bold bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
                {largeFeatured.subtitle}
              </span>
              {largeFeatured.badge && (
                <span className="text-[11px] font-bold text-brand-deep bg-brand-gold rounded-full px-3.5 py-1 shadow-md">
                  {largeFeatured.badge}
                </span>
              )}
            </div>

            {/* Bottom details */}
            <div className="relative z-10 p-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3">
                {largeFeatured.title}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
                {largeFeatured.description}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold group-hover:text-white transition-colors duration-300">
                <span>Обсудить коллекцию</span>
                <span className="w-6 h-6 rounded-full bg-brand-gold/10 group-hover:bg-brand-gold group-hover:text-brand-deep flex items-center justify-center transition-colors">
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Two stacked cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-full min-h-[450px] lg:h-[620px]">
            {topTwoCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: idx * 0.08, ease: easeCurve }}
                onClick={() => onSelectCollection(card.title)}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] overflow-hidden relative group cursor-pointer transition-all duration-600 hover:border-brand-gold/45 shadow-2xl flex flex-col justify-end h-full"
              >
                <div className="absolute inset-0 z-0">
                  <picture>
                    <source srcSet={`/assets/images/${card.id}-mobile.avif`} media="(max-width: 639px)" type="image/avif" />
                    <source srcSet={`/assets/images/${card.id}-desktop.avif`} media="(min-width: 640px)" type="image/avif" />
                    <source srcSet={`/assets/images/${card.id}-mobile.webp`} media="(max-width: 639px)" type="image/webp" />
                    <source srcSet={`/assets/images/${card.id}-desktop.webp`} media="(min-width: 640px)" type="image/webp" />
                    <img 
                      src={card.imageUrl} 
                      alt={card.title} 
                      className="w-full h-full object-cover transform scale-101 group-hover:scale-105 transition-all duration-750 ease-out filter brightness-75 group-hover:brightness-[0.85]"
                      loading="lazy"
                      width={400}
                      height={300}
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150f0c] via-black/25 to-transparent" />
                </div>

                <div className="relative z-10 p-6 md:p-8">
                  <span className="text-[9px] tracking-[0.15em] uppercase text-brand-gold font-bold mb-2 block">
                    {card.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed mb-4 line-clamp-2 md:line-clamp-none">
                    {card.description}
                  </p>
                  <span className="text-xs font-semibold text-white/90 group-hover:text-brand-gold transition-colors block">
                    Смотреть детали →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lower Row: Remaining 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {bottomThreeCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: easeCurve }}
              onClick={() => onSelectCollection(card.title)}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] overflow-hidden relative group cursor-pointer transition-all duration-600 hover:border-brand-gold/45 shadow-2xl flex flex-col justify-end h-[280px] lg:h-[340px]"
            >
              <div className="absolute inset-0 z-0">
                <picture>
                  <source srcSet={`/assets/images/${card.id}-mobile.avif`} media="(max-width: 639px)" type="image/avif" />
                  <source srcSet={`/assets/images/${card.id}-desktop.avif`} media="(min-width: 640px)" type="image/avif" />
                  <source srcSet={`/assets/images/${card.id}-mobile.webp`} media="(max-width: 639px)" type="image/webp" />
                  <source srcSet={`/assets/images/${card.id}-desktop.webp`} media="(min-width: 640px)" type="image/webp" />
                  <img 
                    src={card.imageUrl} 
                    alt={card.title} 
                    className="w-full h-full object-cover transform scale-101 group-hover:scale-105 transition-all duration-750 ease-out filter brightness-75 group-hover:brightness-[0.85]"
                    loading="lazy"
                    width={400}
                    height={340}
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#150f0c] via-black/25 to-transparent" />
              </div>

              <div className="relative z-10 p-6 md:p-8">
                <span className="text-[9px] tracking-[0.15em] uppercase text-brand-gold font-bold mb-2 block">
                  {card.subtitle}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight leading-tight mb-2 flex items-center justify-between">
                  <span>{card.title}</span>
                </h3>
                  <p className="text-white/60 text-xs leading-relaxed mb-4 line-clamp-2">
                  {card.description}
                </p>
                <span className="text-xs font-semibold text-white/95 group-hover:text-brand-gold transition-colors block">
                  Запросить серию →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lower CTA - Glass Dark Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: easeCurve }}
          className="mt-16 overflow-hidden rounded-[28px] border border-white/8 bg-white/4 backdrop-blur-xl p-8 md:p-12 text-center relative"
          id="collection-catalogue-cta"
        >
          <div className="absolute top-0 right-0 w-64 h-32 bg-brand-gold/5 rounded-full blur-[60px] pointer-events-none" />
          
          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3">
            Продолжить индивидуальный подбор?
          </h3>
          <p className="text-white/60 text-xs sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Перейдите в наш цифровой каталог или обратитесь за рекомендацией к экспертам салона в Караганде. Подберем свет, полностью советующий вашему масштабу и бюджету.
          </p>

          <button
            onClick={onOpenCatalog}
            className="px-10 h-13 rounded-full bg-white text-brand-deep hover:bg-white/90 text-xs font-semibold tracking-wide shadow-md hover:scale-102 transition-all cursor-pointer"
          >
            Перейти в каталог освещения
          </button>
        </motion.div>

      </div>
    </section>
  );
});
