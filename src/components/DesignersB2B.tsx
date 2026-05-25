import { memo } from 'react';
import { motion } from 'motion/react';
import { Mail, Briefcase, FileText, Compass, MapPin } from 'lucide-react';

interface B2BBenefit {
  title: string;
  description: string;
  detail: string;
}

interface DesignersB2BProps {
  onOpenTrigger: () => void;
}

const benefits: B2BBenefit[] = [
  {
    title: 'Подбор под проект',
    description: 'Присылайте визуализации или файлы планов в DWG/PDF. Предоставим полную подборку люстр, встроенного и настенного света, полностью соответствующих вашему стилю и бюджету.',
    detail: 'Срок подготовки: 1–2 рабочих дня'
  },
  {
    title: 'Коммерческое предложение',
    description: 'Подготовим структурированную спецификацию с техническими характеристиками, ценами, наличием на центральном складе Казахстана и детальными сроками поставки для вашего клиента.',
    detail: 'Предоставляем чертежи и 3D-модели'
  },
  {
    title: 'Бренды и коллекции',
    description: 'Доступ к каталогам более чем 20 ведущих мировых светотехнических фабрик, от лаконичного скандинавского минимализма до роскошных итальянских стеклянных люстр ручной работы.',
    detail: 'Прямые контакты с производителями'
  },
  {
    title: 'Реальный Салон в Караганде',
    description: 'Вы можете назначить встречу с вашими клиентами непосредственно в нашем светлом, современном премиум-пространстве. Оцените цветовую температуру, масштабы отделок и детали вживую.',
    detail: 'Караганда, ул. Гоголя (своя парковка)'
  }
];

export default memo(function DesignersB2B({ onOpenTrigger }: DesignersB2BProps) {
  const easeCurve = [0.22, 1, 0.36, 1];

  return (
    <section 
      className="relative bg-[#18120e] py-28 border-t border-white/5"
      id="designers"
    >
      {/* Visual glowing points */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Split Section Headline and Label */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: easeCurve }}
              className="mb-4"
            >
              <div className="glass-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2">
                <span className="text-[10px] tracking-[0.2em] font-bold text-brand-gold uppercase">
                  Дизайнерам
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
              Работайте с освещением так же точно, как с отделочными материалами
            </motion.h2>
          </div>

          <div className="lg:col-span-7 lg:pt-14">
            <motion.p
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: easeCurve }}
              className="text-white/60 text-sm sm:text-base leading-relaxed max-w-2xl"
            >
              Светодизайн определяет финал любого интерьера. Мы берем на себя техническую рутину: от просчета мощности светодиодов и укладывания в розничный бюджет до гарантированной логистики. Сделайте Haydi вашим надежным партнером.
            </motion.p>
          </div>
        </div>

        {/* 4 Cards Grid - Standard, sleek minimal glass blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, delay: idx * 0.08, ease: easeCurve }}
              className="rounded-[24px] border border-white/10 bg-white/4 p-6 sm:p-8 backdrop-blur-xl hover:border-brand-gold/30 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-brand-gold font-medium tracking-wide uppercase">
                  {benefit.detail}
                </span>
                <span className="text-[10px] text-white/30 group-hover:text-white/60 transition-colors">
                  Интеграция • B2B
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Centered Row */}
        <motion.div
          initial={{ y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <button
            onClick={onOpenTrigger}
            className="px-10 h-13 rounded-full bg-white text-brand-deep hover:bg-white/90 text-xs font-semibold tracking-wide transition-all duration-350 transform hover:scale-102 cursor-pointer inline-flex items-center gap-2"
          >
            <span>Начать сотрудничество с Haydi</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
});
