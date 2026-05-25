import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Phone, User } from 'lucide-react';
import { ModalState } from '../types';

interface ModalProps {
  state: ModalState;
  onClose: () => void;
}

export default function Modal({ state, onClose }: ModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Auto-reset when modal state changes
  useEffect(() => {
    if (state.isOpen) {
      setSubmitted(false);
      setName('');
      setPhone('');
      setError('');
    }
  }, [state.isOpen, state.type, state.selectionName]);

  useEffect(() => {
    if (!state.isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [state.isOpen]);

  // Easy phone formatting: +7 (XXX) XXX-XX-XX
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, ''); // Keep only digits
    
    // Auto strip initial 7 or 8 if typed
    if (input.startsWith('7') || input.startsWith('8')) {
      input = input.substring(1);
    }
    
    // Limit to 10 digits (after high country code +7)
    input = input.substring(0, 10);

    let formatted = '+7 ';
    if (input.length > 0) {
      formatted += '(' + input.substring(0, 3);
    }
    if (input.length >= 3) {
      formatted += ') ';
    }
    if (input.length > 3) {
      formatted += input.substring(3, 6);
    }
    if (input.length >= 6) {
      formatted += '-' + input.substring(6, 8);
    }
    if (input.length >= 8) {
      formatted += '-' + input.substring(8, 10);
    }

    setPhone(formatted);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Пожалуйста, введите ваше имя');
      return;
    }
    
    // Needs to have at least 10 numbers for complete Kazakhstan mobile number
    const numbersOnly = phone.replace(/\D/g, '');
    if (numbersOnly.length < 11) { // includes the '7' country code prefix
      setError('Пожалуйста, введите корректный номер WhatsApp');
      return;
    }

    setError('');
    setSubmitted(true);

    // Simulate successful submission with luxury toast / confirmation feedback
    setTimeout(() => {
      // Send message to local storage or console
      console.log('Haydi Lead Captured:', {
        name,
        phone,
        type: state.type,
        selection: state.selectionName || 'General Consultation',
        timestamp: new Date().toISOString()
      });
    }, 400);
  };

  const isRoomConsult = state.type === 'room';
  const isCollectConsult = state.type === 'collect';

  return (
    <AnimatePresence>
      {state.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            transition={{ duration: 0.4 }}
          />

          {/* Modal panel container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-[32px] border border-white/10 bg-[#1c1410] p-8 md:p-10 shadow-2xl z-10"
            id="lead-capture-modal"
          >
          {/* Subtle warm lighting gradient splash inside */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-brand-gold/10 rounded-full blur-[60px] pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full border border-white/5 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
            aria-label="Закрыть модальное окно"
          >
            <X size={18} />
          </button>

          {!submitted ? (
            <div className="relative">
              <span className="text-[11px] uppercase tracking-[0.15em] text-brand-gold font-medium mb-3 block">
                Haydi.kz / {isRoomConsult ? 'Подбор под помещение' : isCollectConsult ? 'Презентация коллекции' : 'Консультация'}
              </span>

              <h3 className="text-2xl font-bold tracking-tight text-white mb-2 leading-tight">
                {isRoomConsult ? 'Заказать подбор освещения' : isCollectConsult ? 'Заказать презентацию коллекции' : 'Связаться с экспертом Haydi'}
              </h3>

              {state.selectionName && (
                <div className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold text-white bg-white/10 border border-white/10 mb-4">
                  {isRoomConsult ? 'Помещение: ' : 'Коллекция: '}
                  <span className="text-brand-gold font-bold">{state.selectionName}</span>
                </div>
              )}

              <p className="text-sm text-white/60 leading-relaxed mb-6">
                {isRoomConsult 
                  ? 'Мы подготовим индивидуальный список светильников (люстры, бра, подвесы, споты) под выбранную зону с учетом стиля интерьера.'
                  : 'Мы вышлем полную PDF-презентацию дизайнерской серии, проконсультируем по конфигурациям и сориентируем по наличию.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 text-xs rounded-xl bg-red-950/40 border border-red-500/20 text-red-200"
                  >
                    {error}
                  </motion.div>
                )}

                <div className="space-y-1.5">
                  <label htmlFor="modal-name" className="text-xs text-white/52 font-medium ml-1">Как к вам обращаться?</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                    <input
                      id="modal-name"
                      type="text"
                      className="w-full h-13 pl-11 pr-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-gold/60 focus:bg-white/8 transition-all"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="modal-phone" className="text-xs text-white/52 font-medium ml-1">Номер WhatsApp для связи</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                    <input
                      id="modal-phone"
                      type="text"
                      className="w-full h-13 pl-11 pr-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-gold/60 focus:bg-white/8 transition-all"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-13 mt-4 rounded-full bg-white text-brand-deep hover:bg-white/90 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 transform active:scale-98"
                >
                  <span>
                    {isRoomConsult ? 'Получить подбор' : isCollectConsult ? 'Заказать презентацию' : 'Отправить запрос'}
                  </span>
                  <Send size={15} />
                </button>
              </form>

              <div className="mt-5 text-center">
                <p className="text-[11px] text-white/40">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Мы свяжемся с вами в течение 10 минут в рабочее время.
                </p>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 text-center relative"
            >
              <div className="mx-auto w-16 h-16 bg-brand-gold/15 rounded-full flex items-center justify-center mb-6 border border-brand-gold/25">
                <CheckCircle2 size={32} className="text-brand-gold" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Спасибо, {name}!</h3>
              <p className="text-sm text-white/60 leading-relaxed max-w-sm mx-auto mb-8">
                Ваша заявка принята. Специалист салона Haydi уже подготавливает информацию для вас и напишет в WhatsApp на номер <span className="text-white font-medium">{phone}</span> в ближайшее время.
              </p>

              <button
                onClick={onClose}
                className="px-8 h-12 rounded-full border border-white/10 text-white/80 hover:text-white hover:bg-white/5 text-sm font-medium transition-all"
              >
                Закрыть окно
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}
