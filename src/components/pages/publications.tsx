import React from 'react';
import NavBar from '../layout/NavBar';
import FooterSection from '../sections/FooterSection';
import Seo from '../layout/Seo';
import siteConfig from '../../config/siteConfig';

const PublicationsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Seo title="Publicaciones" description="Libros, capítulos y artículos de Silvia Bañares Vilella" />
            <NavBar
                isScrolled={false}
                isMenuOpen={false}
                setIsMenuOpen={() => { }}
                navigation={siteConfig.navigation}
                scrollToSection={() => { }}
            />

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
                <h1 className="text-4xl font-serif font-semibold text-gray-800 mb-12 text-center">
                    Publicaciones
                </h1>

                {/* Libros */}
   <section className="mb-16">
  <h2 className="text-2xl font-semibold text-primary mb-8">Libros</h2>

  <div className="space-y-12">
    {/* Book 1 */}
    <div className="flex flex-col md:flex-row items-start md:items-start gap-6">
      {/* Image */}
      <a
        href="https://www.bebookness.com/1169-preguntas-y-respuestas-sobre-el-etiquetado-de-los-alimentos-silvia-banares-vilella"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 md:w-1/4"
      >
        <img
          src="https://i2.wp.com/www.food-message.com/wp-content/uploads/2016/07/1169preguntas-y-respuestas.jpg?w=356"
          alt="Portada del libro de Silvia Bañares: 1169 preguntas y respuestas sobre el etiquetado de alimentos"
          className="w-full rounded shadow"
        />
      </a>

      {/* Text */}
      <div className="md:w-3/4">
        <h3 className="text-lg font-bold mb-1">
          1169 preguntas y respuestas sobre el etiquetado de los alimentos
        </h3>
        <p className="text-gray-600 mb-1">Edición 2015</p>
        <p className="text-gray-600 mb-1">Autores: Silvia Bañares Vilella, Luís González Vaqué</p>
        <p className="text-gray-600 mb-1">
          Temática: <br />
          CIENCIAS SOCIALES / Salud <br />
          DERECHO / Derecho administrativo y práctica reguladora
        </p>
        <p className="text-gray-600 mb-1">ISBN: 9788494342844 — Editor: Bebookness</p>
        <p className="text-gray-700 text-sm">
          Mediante el Reglamento UE 1169/2011, la Unión Europea (UE) se ha impuesto como objetivo mejorar
          las reglas de etiquetado de los productos alimenticios para que los consumidores dispongan de
          información esencial, legible y comprensible y puedan comprar dichos productos con conocimiento
          de causa. Por motivos de seguridad pública, las nuevas disposiciones refuerzan la protección
          contra los alérgenos y abordan otras cuestiones como la responsabilidad de los productores y
          comerciantes, etc.
        </p>
        <p className="text-gray-700 text-sm mt-2">
          De fácil consulta, esta obra constituye un útil instrumento que servirá para despejar dudas e
          incógnitas, evitar errores y mejorar el adecuado cumplimiento del complejo sistema de información
          al consumidor establecido por el nuevo Reglamento comunitario (de aplicación directa en todos los
          Estados miembros de la UE).
        </p>
      </div>
    </div>

    {/* Book 2 */}
    <div className="flex flex-col md:flex-row items-start md:items-start gap-6">
      {/* Image */}
      <a
        href="https://www.amazon.es/Alimentos-funcionales-alegaciones-alimentarias-aproximacion/dp/8496354857"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 md:w-1/4"
      >
        <img
          src="https://i2.wp.com/www.food-message.com/wp-content/uploads/2016/07/los-alimentos-funcionales.jpg?w=356"
          alt="Portada del libro de Silvia Bañares: Los alimentos funcionales y las alegaciones alimentarias"
          className="w-full rounded shadow"
        />
      </a>

      {/* Text */}
      <div className="md:w-3/4">
        <h3 className="text-lg font-bold mb-1">
          Alimentos funcionales y alegaciones alimentarias: una aproximación jurídica
        </h3>
        <p className="text-gray-600 mb-1">Edición 2006</p>
        <p className="text-gray-600 mb-1">Autora: Silvia Bañares Vilella</p>
        <p className="text-gray-600 mb-1">
          Temática: <br />
          CIENCIAS SOCIALES / Salud <br />
          DERECHO / Derecho administrativo y práctica reguladora
        </p>
        <p className="text-gray-600 mb-1">ISBN: 9788496354852 — Editor: Atelier Libros</p>
        <p className="text-gray-700 text-sm">
          Los alimentos funcionales despiertan en la actualidad un gran interés científico: las nuevas
          propiedades de éstos, distintas a sus simples efectos nutritivos y que son consideradas como
          beneficiosas para la salud, están siendo objeto de unas interesantes líneas de investigación tanto
          a nivel europeo como internacional.
        </p>
        <p className="text-gray-700 text-sm mt-2">
          A su vez, la industria alimentaria se ha hecho eco de estos nuevos avances. La incorporación de
          estos productos al mercado, así como la utilización de unas nuevas alegaciones alimentarias (tanto
          en su etiquetado, como en su presentación o publicidad) es un fenómeno de auge creciente.
        </p>
        <p className="text-gray-700 text-sm mt-2">
          Un estudio de estas características permitirá no sólo dar respuesta a las cuestiones que hoy en
          día se formulan, sino también analizar las futuras tendencias legislativas previstas por la Unión
          Europea en materia de alegaciones alimentarias.
        </p>
      </div>
    </div>
  </div>
</section>




                {/* Capítulos */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-primary mb-4">Capítulos</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                        <li>“La venta de alimentos por internet ¿qué información debe figurar online?” en <em>La venta de alimentos online</em>. Thomson Reuters Aranzadi, 2019.</li>
                        <li>“El etiquetado de los productos alimenticios” en <em>Manual Básico de Derecho Alimentario</em>. Tirant lo Blanch, 2019.</li>
                        <li>“Spain” en <em>EU Information Regulation 1169/2011</em>. Food Lawyers’ Network Worldwide, 2016.</li>
                        <li>“Legislación” en <em>Probióticos, prebióticos y salud</em>. Sociedad Española de Probióticos y Prebióticos, 2016.</li>
                        <li>...y más capítulos publicados en obras colectivas sobre derecho alimentario.</li>
                    </ul>
                </section>

                {/* Artículos */}
                <section>
                    <h2 className="text-2xl font-semibold text-primary mb-4">Artículos</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                        <li>“The European Commission establishes the specific compositional and information requirements for total diet replacement for weight control products”. <em>EFFL</em>, 2018.</li>
                        <li>“Alcance de algunas medidas transitorias relativas a las marcas y a las propiedades saludables en los alimentos”. <em>La Ley Unión Europea</em>, 2017.</li>
                        <li>“The European Court of Justice Declares that Regulation Nº 1924/2006 Applies to Health Claims Directed at Health Professionals”. <em>EFFL</em>, 2016.</li>
                        <li>“Probiotics: Stand by or New Opportunities for them?” <em>EFFL</em>, 2016.</li>
                        <li>“Los probióticos: ¿algo nuevo en el horizonte?”. Centro Europeo para el Derecho del Consumo, 2016.</li>
                        <li>...y más de veinte artículos sobre etiquetado, probióticos y declaraciones nutricionales.</li>
                    </ul>
                </section>
            </main>

            <FooterSection />
        </div>
    );
};

export default PublicationsPage;
