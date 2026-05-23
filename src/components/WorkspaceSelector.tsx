import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeftRight, Check, Sparkles, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import { RoomType, RoomDetails } from '../types';

interface WorkspaceSelectorProps {
  onTriggerConsultation: (roomName: string) => void;
}

const roomData: RoomDetails[] = [
  {
    id: 'living',
    title: 'Гостиная',
    subtitle: 'Многофункциональный комфорт',
    description: 'Центр притяжения дома требует гибкого освещения. Оптимальный сценарий включает парадную люстру для приёма гостей, скрытую закарнизную подсветку для вечеров и точечные бра у мягкой зоны.',
    imageUrl: '/assets/images/room-living-desktop.webp',
    lightTypes: ['Дизайнерские люстры', 'Настенные бра', 'Светодиодные профили', 'Шинопровод'],
    tips: ['Теплый свет 2700K-3000K', 'Возможность диммирования', 'Акцентирование арт-объектов']
  },
  {
    id: 'kitchen',
    title: 'Кухня и столовая',
    subtitle: 'Эстетика кулинарной зоны',
    description: 'Требует разделения на две ключевые зоны: яркую рабочую поверхность (встраиваемые споты или саффиты) и обособленный акцентный свет над обеденным столом (группа подвесов на регулируемом шнуре).',
    imageUrl: '/assets/images/room-kitchen-desktop.webp',
    lightTypes: ['Подвесы над столом', 'Глубокие споты', 'Линейная подсветка фартука'],
    tips: ['Высокий индекс цветопередачи CRI >90', 'Высота подвесов 75-80 см над столом']
  },
  {
    id: 'bedroom',
    title: 'Спальня',
    subtitle: 'Оазис визуального покоя',
    description: 'Здесь доминирует мягкий, отраженный свет. Откажитесь от направленных лучей над кроватью в пользу уютных бра у изголовья или элегантных подвесов по бокам от тумбочек.',
    imageUrl: '/assets/images/room-bedroom-desktop.webp',
    lightTypes: ['Прикроватные подвесы', 'Направленные бра для чтения', 'Парящие потолки'],
    tips: ['Сверхтеплый свет 2400K-2700K', 'Проходные выключатели у кровати']
  },
  {
    id: 'bathroom',
    title: 'Санузел',
    subtitle: 'Зеркальная эстетика',
    description: 'Основное внимание уделяется зоне зеркала — свет должен ложиться на лицо мягко и равномерно, без жестких теней снизу. В потолке применяются влагозащищенные софиты IP44.',
    imageUrl: '/assets/images/room-bathroom-desktop.webp',
    lightTypes: ['Влагозащищенный свет IP44', 'Органика вокруг зеркал'],
    tips: ['Нейтральная цветовая температура 3000K-4000K', 'Индекс герметичности корпуса']
  },
  {
    id: 'corridor',
    title: 'Коридор',
    subtitle: 'Логика первого шага',
    description: 'Проходные зоны не требуют постоянного интенсивного света. Здесь идеально работают тонкие бра с направленным по стене лучом или споты с датчиком движения для ночного пути.',
    imageUrl: '/assets/images/room-corridor-desktop.webp',
    lightTypes: ['Направленные споты', 'Тонкие бра', 'Нижняя подсветка пола'],
    tips: ['Перекрестное управление', 'Угол рассеивания спотов 30-40°']
  },
  {
    id: 'commercial',
    title: 'Коммерческое пространство',
    subtitle: 'Статусность бренда',
    description: 'Рестораны, бутики или шоурумы опираются на свет как на логистику продаж. Создаем контрастное, драматическое распределение света, подчеркивающее люкс-текстуры бренда.',
    imageUrl: '/assets/images/room-commercial-desktop.webp',
    lightTypes: ['Магнитный трековый свет', 'Мощные подвесные люстры', 'Акцентная оптика'],
    tips: ['Надежные драйверы с защитой от мерцания', 'Антислепящие решетки honeycomb в спотах']
  }
];

export default memo(function WorkspaceSelector({ onTriggerConsultation }: WorkspaceSelectorProps) {
  const [selectedRoomId, setSelectedRoomId] = useState<RoomType>('living');

  const currentRoom = roomData.find((r) => r.id === selectedRoomId) || roomData[0];
  const easeCurve = [0.22, 1, 0.36, 1];

  return (
    <section 
      className="relative bg-[#150f0c] py-28 border-t border-white/5"
      id="interior-designer"
    >
      {/* Glow overlays */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#2e1f1b]/8 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading Centered */}
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
                Интерактивный подбор
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
            Поможем подобрать свет под ваш интерьер
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeCurve }}
            className="mt-4 text-sm sm:text-base text-white/50 leading-relaxed max-w-2xl mx-auto"
          >
            Выберите помещение и тип задачи, а специалисты нашего салона соберут концепцию освещения: от флагманских люстр до встраиваемых софитов.
          </motion.p>
        </div>

        {/* Double Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Sizable glass selectors */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-[28px] border border-white/10 bg-white/4 p-6 sm:p-8 backdrop-blur-xl flex flex-col h-full">
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-[0.16em] text-white/40 block mb-1">Шаг 1 из 2</span>
                <h3 className="text-xl font-bold text-white tracking-tight">Выберите помещение</h3>
                <p className="text-xs text-white/50 leading-relaxed mt-1">
                  Каждая зона в проекте имеет свою атмосферную и световую логику. Переключайтесь между ними, чтобы ознакомиться.
                </p>
              </div>

              {/* Rows List */}
              <div className="space-y-2 flex-grow">
                {roomData.map((room) => {
                  const isSelected = room.id === selectedRoomId;
                  return (
                    <button
                      key={room.id}
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`w-full text-left px-5 h-13 rounded-2xl flex items-center justify-between border transition-all duration-350 cursor-pointer ${
                        isSelected 
                          ? 'bg-white border-white text-brand-deep font-bold shadow-lg shadow-black/20' 
                          : 'bg-white/3 border-white/5 text-white/70 hover:text-white hover:bg-white/6 hover:border-white/10'
                      }`}
                    >
                      <span className="text-sm font-semibold">{room.title}</span>
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-brand-deep flex items-center justify-center">
                          <Check size={11} className="text-white font-black" />
                        </div>
                      ) : (
                        <span className="text-[10px] text-white/30 uppercase tracking-wider group-hover:text-white/50">Перейти</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Panel: Showcase Preview */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Dynamic Card with Slide/Fade Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRoom.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease: easeCurve }}
                className="rounded-[28px] border border-white/10 bg-[#160f0c] overflow-hidden flex flex-col justify-between h-full shadow-xl"
              >
                
                {/* Photo of Room exactly matching names */}
                <div className="h-[240px] sm:h-[280px] w-full relative">
                  <picture>
                    <source srcSet={`/assets/images/room-${currentRoom.id}-mobile.avif`} media="(max-width: 639px)" type="image/avif" />
                    <source srcSet={`/assets/images/room-${currentRoom.id}-desktop.avif`} media="(min-width: 640px)" type="image/avif" />
                    <source srcSet={`/assets/images/room-${currentRoom.id}-mobile.webp`} media="(max-width: 639px)" type="image/webp" />
                    <source srcSet={`/assets/images/room-${currentRoom.id}-desktop.webp`} media="(min-width: 640px)" type="image/webp" />
                    <img 
                      src={currentRoom.imageUrl} 
                      alt={currentRoom.title} 
                      className="w-full h-full object-cover filter brightness-80"
                      loading="lazy"
                      width={640}
                      height={280}
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#160f0c] via-black/25 to-transparent" />
                  
                  {/* Floating pill over image */}
                  <div className="absolute top-4 left-4 glass-pill px-3 py-1 rounded-full text-[10px] text-white font-medium uppercase tracking-[0.1em]">
                    световые рекомендации haydi
                  </div>
                </div>

                {/* Body instructions */}
                <div className="p-6 sm:p-8 flex-grow">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-brand-gold font-bold mb-1.5 block">
                    {currentRoom.subtitle}
                  </span>
                  
                  <h4 className="text-2xl font-extrabold text-white tracking-tight mb-3">
                    Сценарное освещение: {currentRoom.title}
                  </h4>
                  
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                    {currentRoom.description}
                  </p>

                  <div className="h-px bg-white/10 my-6" />

                  {/* Recommended lighting types */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-[11px] uppercase tracking-[0.12em] text-white/40 font-bold mb-2.5">
                        Рекомендуемый тип света
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {currentRoom.lightTypes.map((type, id) => (
                          <span 
                            key={id} 
                            className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[11px] text-white/80 font-medium"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-[11px] uppercase tracking-[0.12em] text-white/40 font-bold mb-2.5">
                        Инженерные нюансы
                      </h5>
                      <ul className="space-y-1.5">
                        {currentRoom.tips.map((tip, id) => (
                          <li key={id} className="flex items-center gap-2 text-xs text-white/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>

                {/* Footer trigger inside preview */}
                <div className="p-6 sm:p-8 bg-white/3 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <span className="text-white text-xs font-semibold block">Индивидуальный концепт-проект</span>
                    <span className="text-white/40 text-[11px]">Соберем спецификации и рассчитаем освещенность бесплатно.</span>
                  </div>
                  <button
                    onClick={() => onTriggerConsultation(currentRoom.title)}
                    className="w-full sm:w-auto px-6 h-11 rounded-full bg-white text-brand-deep hover:bg-[#F7F3EE] text-xs font-bold flex items-center justify-center gap-1.5 transition-all transform hover:scale-102 cursor-pointer"
                  >
                    <span>Получить подбор</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
});
