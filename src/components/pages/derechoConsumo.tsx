// src/components/pages/derechoConsumo.tsx
import React, { useState } from 'react';
import NavBar from '../layout/NavBar';
import FooterSection from '../layout/FooterSection';
import { SectionContainer } from '../layout/SectionContainer';
import { useScrollDetection } from '../hooks/useScrollDetection';
import { SeparatorBar } from '../ui/SeparatorBar';
import siteConfig from '../../config/siteConfig';

const DerechoConsumoPage: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-primary mb-2">Derecho de Consumo</h1>
          <SeparatorBar />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Protegemos los derechos de los consumidores y asesoramos a empresas en prácticas comerciales transparentes, publicidad responsable y resolución de reclamaciones.
          </p>
        </SectionContainer>

        <SectionContainer className="grid md:grid-cols-2 gap-10">
          <div className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-primary mb-3">Reclamaciones de Consumo</h2>
            <p>Gestión y defensa de reclamaciones individuales o colectivas ante organismos competentes.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-primary mb-3">Publicidad y Prácticas Comerciales</h2>
            <p>Revisión de campañas y promociones para garantizar su conformidad con la normativa de consumo.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-primary mb-3">Cláusulas Abusivas</h2>
            <p>Identificación y eliminación de cláusulas que vulneren los derechos del consumidor.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-primary mb-3">Protección de Datos y Privacidad</h2>
            <p>Asesoramiento sobre tratamiento de datos personales y cumplimiento del RGPD.</p>
          </div>
        </SectionContainer>
      </main>

      <FooterSection />
    </div>
  );
};

export default DerechoConsumoPage;
