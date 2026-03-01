import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import NavBar from '../layout/NavBar';
import FooterSection from '../layout/FooterSection';
import Seo from '../layout/Seo';
import { SeparatorBar } from '../ui/SeparatorBar';
import { useScrollDetection } from '../hooks/useScrollDetection';
import { useSiteConfig } from '../../config/useSiteConfig';
import book1Image from '../../assets/images/1169preguntas-y-respuestas.webp';
import book2Image from '../../assets/images/los-alimentos-funcionales.webp';

const PublicationsPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollDetection(30);
  const { t } = useTranslation();
  const siteConfig = useSiteConfig();

  const chapters = t('publications.chapters', { returnObjects: true });
  const articles = t('publications.articles', { returnObjects: true });
  const chapterList = Array.isArray(chapters) ? chapters as string[] : [];
  const articleList = Array.isArray(articles) ? articles as string[] : [];

  return (
    <div className="min-h-screen bg-page_white">
      <Seo
        title={t('publications.title')}
        description="Books, chapters and articles by Silvia Bañares Vilella"
      />
      <NavBar
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigation={siteConfig.navigation}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-36">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-sans font-semibold text-primary mb-2">
            {t('publications.title')}
          </h1>
          <SeparatorBar />
        </div>

        {/* Books */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-8">
            {t('publications.booksTitle')}
          </h2>

          <div className="space-y-12">
            {/* Book 1 */}
            <div className="flex flex-col md:flex-row items-start gap-6">
              <a
                href="https://www.bebookness.com/1169-preguntas-y-respuestas-sobre-el-etiquetado-de-los-alimentos-silvia-banares-vilella"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 md:w-1/4"
              >
                <img
                  src={book1Image}
                  alt={t('publications.book1.title')}
                  className="w-full rounded shadow"
                />
              </a>
              <div className="md:w-3/4">
                <h3 className="text-lg font-bold mb-1">{t('publications.book1.title')}</h3>
                <p className="text-gray-600 mb-1">{t('publications.book1.edition')}</p>
                <p className="text-gray-600 mb-1">{t('publications.book1.authors')}</p>
                <p className="text-gray-600 mb-1">
                  {t('publications.book1.topics')}<br />
                  {t('publications.book1.topic1')}<br />
                  {t('publications.book1.topic2')}
                </p>
                <p className="text-gray-600 mb-3">{t('publications.book1.isbn')}</p>
                <p className="text-gray-700 text-sm">{t('publications.book1.desc1')}</p>
                <p className="text-gray-700 text-sm mt-2">{t('publications.book1.desc2')}</p>
              </div>
            </div>

            {/* Book 2 */}
            <div className="flex flex-col md:flex-row items-start gap-6">
              <a
                href="https://www.amazon.es/Alimentos-funcionales-alegaciones-alimentarias-aproximacion/dp/8496354857"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 md:w-1/4"
              >
                <img
                  src={book2Image}
                  alt={t('publications.book2.title')}
                  className="w-full rounded shadow"
                />
              </a>
              <div className="md:w-3/4">
                <h3 className="text-lg font-bold mb-1">{t('publications.book2.title')}</h3>
                <p className="text-gray-600 mb-1">{t('publications.book2.edition')}</p>
                <p className="text-gray-600 mb-1">{t('publications.book2.authors')}</p>
                <p className="text-gray-600 mb-1">
                  {t('publications.book2.topics')}<br />
                  {t('publications.book2.topic1')}<br />
                  {t('publications.book2.topic2')}
                </p>
                <p className="text-gray-600 mb-3">{t('publications.book2.isbn')}</p>
                <p className="text-gray-700 text-sm">{t('publications.book2.desc1')}</p>
                <p className="text-gray-700 text-sm mt-2">{t('publications.book2.desc2')}</p>
                <p className="text-gray-700 text-sm mt-2">{t('publications.book2.desc3')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapters */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            {t('publications.chaptersTitle')}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
            {chapterList.map((chapter, i) => (
              <li key={i}>{chapter}</li>
            ))}
          </ul>
        </section>

        {/* Articles */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            {t('publications.articlesTitle')}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
            {articleList.map((article, i) => (
              <li key={i}>{article}</li>
            ))}
          </ul>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default PublicationsPage;