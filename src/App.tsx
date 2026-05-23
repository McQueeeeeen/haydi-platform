import { useState, useCallback } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Collections from './components/Collections';
import WorkspaceSelector from './components/WorkspaceSelector';
import DesignersB2B from './components/DesignersB2B';
import WhyHaydi from './components/WhyHaydi';
import Showroom from './components/Showroom';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { ModalState } from './types';

export default function App() {
  // Main state managing lead capture dialog workflows
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: 'general',
    selectionName: ''
  });

  const handleOpenGeneral = useCallback((ctxName: string = 'Общая консультация') => {
    setModal({
      isOpen: true,
      type: 'general',
      selectionName: ctxName
    });
  }, []);

  const handleOpenCollection = useCallback((collectionName: string) => {
    setModal({
      isOpen: true,
      type: 'collect',
      selectionName: collectionName
    });
  }, []);

  const handleOpenRoom = useCallback((roomName: string) => {
    setModal({
      isOpen: true,
      type: 'room',
      selectionName: roomName
    });
  }, []);

  const handleCloseModal = useCallback(() => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  }, []);

  // Stabilized callback wrappers to avoid inline arrow generation in children
  const handleOpenCatalogFromHeader = useCallback(() => {
    handleOpenGeneral('Полный каталог освещения');
  }, [handleOpenGeneral]);

  const handleOpenTriggerFromHero = useCallback(() => {
    handleOpenGeneral('Первичный подбор освещения');
  }, [handleOpenGeneral]);

  const handleOpenCatalogFromCollections = useCallback(() => {
    handleOpenGeneral('Каталог избранных коллекций');
  }, [handleOpenGeneral]);

  const handleOpenTriggerFromB2B = useCallback(() => {
    handleOpenGeneral('Сотрудничество для дизайнеров (B2B)');
  }, [handleOpenGeneral]);

  const handleOpenTriggerFromShowroom = useCallback(() => {
    handleOpenGeneral('Запись в Шоурум Караганды');
  }, [handleOpenGeneral]);

  const handleOpenConsultationFromFooter = useCallback(() => {
    handleOpenGeneral('Финальная консультация');
  }, [handleOpenGeneral]);

  const handleOpenCatalogFromFooter = useCallback(() => {
    handleOpenGeneral('Каталог из подвала');
  }, [handleOpenGeneral]);

  return (
    <div className="min-h-screen bg-[#150f0c] text-white selection:bg-brand-gold selection:text-brand-deep relative overflow-x-hidden">
      
      {/* Exquisite header component with trigger catalog mapping */}
      <Header onOpenCatalog={handleOpenCatalogFromHeader} />

      {/* Main Sections flow precisely as outlined */}
      <main>
        {/* Section 01: Hero cover page */}
        <Hero onOpenTrigger={handleOpenTriggerFromHero} />

        {/* Section 02: Horizontal scrolling categories strip */}
        <Categories onSelectCategory={handleOpenGeneral} />

        {/* Section 03: Curated Product Collections gallery */}
        <Collections 
          onSelectCollection={handleOpenCollection} 
          onOpenCatalog={handleOpenCatalogFromCollections} 
        />

        {/* Section 04: Interactive room light selecting */}
        <WorkspaceSelector onTriggerConsultation={handleOpenRoom} />

        {/* Section 05: B2B services for Interior Designers */}
        <DesignersB2B onOpenTrigger={handleOpenTriggerFromB2B} />

        {/* Section 06: Trust and brand pillars */}
        <WhyHaydi />

        {/* Section 07: Physical Showroom in Karaganda */}
        <Showroom onOpenTrigger={handleOpenTriggerFromShowroom} />
      </main>

      {/* Section 08: Final Closing CTA and Footer structure */}
      <Footer 
        onOpenConsultation={handleOpenConsultationFromFooter} 
        onOpenCatalog={handleOpenCatalogFromFooter} 
      />

      {/* Shared luxury dialog system */}
      <Modal state={modal} onClose={handleCloseModal} />

    </div>
  );
}
