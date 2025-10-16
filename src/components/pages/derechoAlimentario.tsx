import React, { useState } from 'react';
import NavBar from '../layout/NavBar';
import FooterSection from '../layout/FooterSection';
import { SectionContainer } from '../layout/SectionContainer';
import { useScrollDetection } from '../hooks/useScrollDetection';
import siteConfig from '../../config/siteConfig';

const DerechoAlimentarioPage: React.FC = () => {
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
          
          <h1 className="text-4xl font-bold text-primary mb-4">
            Derecho Alimentario
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Asesoramos a empresas del sector alimentario en cumplimiento normativo,
            etiquetado, seguridad alimentaria y regulaciones europeas. Nuestra
            práctica combina el conocimiento técnico del producto con la precisión
            jurídica necesaria para garantizar el cumplimiento de la legislación vigente.
          </p>
        </SectionContainer>

        <SectionContainer className="grid md:grid-cols-2 gap-10">
          <div className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-primary mb-3">Cumplimiento Normativo</h2>
            <p>
              Ayudamos a las empresas a cumplir con las normativas nacionales y de la
              Unión Europea en materia de producción, comercialización y distribución
              de alimentos.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-primary mb-3">Etiquetado y Publicidad</h2>
            <p>
              Asesoramos en el diseño y revisión de etiquetas, declaraciones nutricionales
              y alegaciones de salud para evitar sanciones y asegurar transparencia con el consumidor.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-primary mb-3">Seguridad Alimentaria</h2>
            <p>
              Evaluamos procedimientos de control de calidad, trazabilidad y gestión de riesgos
              para mantener los más altos estándares de seguridad alimentaria.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-primary mb-3">Regulación Internacional</h2>
            <p>
              Ofrecemos asistencia en importaciones y exportaciones, armonización de normas y
              cumplimiento con organismos internacionales.
            </p>
          </div>
        </SectionContainer>
      </main>

      <FooterSection />
    </div>
  );
};

export default DerechoAlimentarioPage;
