import { memo } from 'react';
import { motion } from 'motion/react';

interface CategoryItem {
  id: string;
  title: string;
  qty: string;
  imageUrl: string;
}

interface CategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

const categories: CategoryItem[] = [
  {
    id: 'cat-chandeliers',
    title: 'Люстры',
    qty: '240+ моделей',
    imageUrl: '/assets/images/cat-chandeliers-desktop.webp'
  },
  {
    id: 'cat-sconces',
    title: 'Бра',
    qty: '180+ моделей',
    imageUrl: '/assets/images/cat-sconces-desktop.webp'
  }
];

const extraCategories: CategoryItem[] = [
  {
    id: 'cat-pendants',
    title: 'Подвесы',
    qty: '310+ моделей',
    imageUrl: '/assets/images/cat-pendants-desktop.webp'
  },
  {
    id: 'cat-spots',
    title: 'Споты',
    qty: '150+ моделей',
    imageUrl: '/assets/images/cat-spots-desktop.webp'
  },
  {
    id: 'cat-soffits',
    title: 'Саффиты',
    qty: '90+ моделей',
    imageUrl: '/assets/images/cat-soffits-desktop.webp'
  },
  {
    id: 'cat-designer',
    title: 'Дизайнерские серии',
    qty: '85+ коллекций',
    imageUrl: '/assets/images/cat-designer-desktop.webp'
  }
];

const allCategories = [...categories, ...extraCategories];

// Triplicate for infinite marquee effect
const marqueeItems = [...allCategories, ...allCategories, ...allCategories];

export default memo(function Categories({ onSelectCategory }: CategoriesProps) {
  return (
    <section 
      className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#150f0c] py-24 border-t border-white/5"
      id="categories"
    >
      {/* Background warm mood lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#2e1f1b]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Structured Header centered */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <div className="glass-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2">
            <span className="text-[10px] tracking-[0.2em] font-bold text-brand-gold uppercase">
              Категории
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.02]"
        >
          Выберите свет под сценарий интерьера
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed max-w-xl mx-auto"
        >
          Интерьерный свет разделяется по функциональным слоям — от доминирующих центральных люстр до приглушенной вечерней бра-подсветки.
        </motion.p>
      </div>

      {/* Infinite Scroll Category Ticker */}
      <div className="relative w-full z-10 py-4">
        {/* Edge Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#150f0c] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#150f0c] to-transparent z-10 pointer-events-none" />

        {/* Marquee viewport */}
        <div className="w-full overflow-hidden flex py-4">
          <div className="flex w-max items-center">
            {/* Belt looping at exact 44s matching requirement */}
            <div className="flex animate-marquee-custom gap-6 pr-6">
              {marqueeItems.map((cat, idx) => (
                <div
                  key={`${cat.id}-${idx}`}
                  onClick={() => onSelectCategory(cat.title)}
                  className="relative flex-shrink-0 w-[280px] sm:w-[320px] h-[170px] sm:h-[180px] rounded-[26px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl group cursor-pointer transition-all duration-500 hover:border-brand-gold/40 hover:-translate-y-1.5 active:scale-98"
                >
                  {/* Category Image Cover Background */}
                  <picture>
                    <source srcSet={`/assets/images/${cat.id}-mobile.avif`} media="(max-width: 639px)" type="image/avif" />
                    <source srcSet={`/assets/images/${cat.id}-desktop.avif`} media="(min-width: 640px)" type="image/avif" />
                    <source srcSet={`/assets/images/${cat.id}-mobile.webp`} media="(max-width: 639px)" type="image/webp" />
                    <source srcSet={`/assets/images/${cat.id}-desktop.webp`} media="(min-width: 640px)" type="image/webp" />
                    <img
                      src={cat.imageUrl}
                      alt={cat.title}
                      className="absolute inset-0 w-full h-full object-cover transform scale-101 group-hover:scale-106 transition-all duration-700 ease-out filter brightness-50 contrast-102"
                      loading="lazy"
                      width={320}
                      height={180}
                    />
                  </picture>

                  {/* Glass tint overlay on hover */}
                  <div className="absolute inset-0 bg-[#150f0c]/30 group-hover:bg-[#2e1f1b]/20 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Category details inside */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold font-bold mb-1 opacity-80 group-hover:opacity-100 transition-opacity">
                      {cat.qty}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight leading-normal">
                      {cat.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gentle helper label beneath */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-[11px] text-white/30 tracking-wider text-center mt-8 z-10"
      >
        * Нажмите на интересующую категорию, чтобы обсудить наличие в шоуруме Караганды
      </motion.div>
    </section>
  );
});
