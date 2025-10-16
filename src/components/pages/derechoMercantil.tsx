// src/components/pages/derechoMercantil.tsx
import React, { useState } from 'react';
import NavBar from '../layout/NavBar';
import FooterSection from '../layout/FooterSection';
import { SectionContainer } from '../layout/SectionContainer';
import { useScrollDetection } from '../hooks/useScrollDetection';
import { SeparatorBar } from '../ui/SeparatorBar';
import siteConfig from '../../config/siteConfig';

const DerechoMercantilPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollDetection(30);

  return (
    <div className="flex flex-col min-h-screen bg-page_white text-gray-800">
      <NavBar
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigation={siteConfig.navigation}
      />

      <main className="flex-grow pt-24 pb-20">
        <SectionContainer className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Derecho Mercantil</h1>
          <SeparatorBar />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Asesoramos a empresas y emprendedores en todos los aspectos del derecho mercantil: constitución, contratos, fusiones, resolución de conflictos y cumplimiento de obligaciones legales.
          </p>
        </SectionContainer>

        <SectionContainer className="grid md:grid-cols-2 gap-10">
          <div className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-primary mb-3">Contratos Comerciales</h2>
            <p>Redacción, revisión y negociación de contratos nacionales e internacionales.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-primary mb-3">Gobierno Corporativo</h2>
            <p>Asistencia en la constitución de sociedades, estatutos, actas y cumplimiento normativo.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-primary mb-3">Resolución de Conflictos</h2>
            <p>Representación en litigios comerciales y mediación entre socios o partes contratantes.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-primary mb-3">Fusiones y Adquisiciones</h2>
            <p>Asesoramiento integral durante procesos de compraventa y reorganización empresarial.</p>
          </div>
        </SectionContainer>
      </main>

      <FooterSection />
    </div>
  );
};

export default DerechoMercantilPage;
