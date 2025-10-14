import React from 'react';
import siteConfig from '../../config/siteConfig';

const WelcomeSection: React.FC = () => (
  <section className="pt-20 pb-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Welcome
      </h1> */}
      <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8">
        {siteConfig.description}
      </p>
      {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Nos comprometemos a proporcionar un asesoramiento práctico, transparente y oportuno.
Nuestro objetivo es ofrecer soluciones claras y estimaciones de costes realistas,
asegurándonos de que nuestros clientes comprendan cada paso del proceso.
      </p> */}
    </div>
  </section>
);

export default WelcomeSection;
