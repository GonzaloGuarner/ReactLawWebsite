import React from 'react';
import profileImage from '../../assets/images/profile.webp';
import type { SiteConfig } from '../../types/types';

interface Props {
  lawyer: SiteConfig['lawyer'];
}

const ProfileSection: React.FC<Props> = ({ lawyer }) => (
  <section id="profile" data-title="Profile" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            {lawyer.name}
            <br />
            <span className="text-2xl text-gray-600">{lawyer.title}</span>
          </h2>

          <div className="space-y-6 text-gray-700">
            {lawyer.birthPlace && <p>{lawyer.birthPlace}</p>}
            {lawyer.admitted && <p>{lawyer.admitted}</p>}

            <div>
              {/* <h3 className="font-semibold text-gray-800 mb-2 border-l-4 border-primary pl-4">
                Educación
              </h3> */}
              <ul className="list-disc list-inside space-y-1">
                {lawyer.education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </div>

            {lawyer.languages && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 border-l-4 border-primary pl-4">
                  Lenguas
                </h3>
                <p>{lawyer.languages}</p>
              </div>
            )}
          </div>
        </div>

        <div className="text-center">
          <img
            src={profileImage}
            alt={lawyer.name}
            loading="lazy"
            className="w-50 h-60 object-contain rounded-[5%] mx-auto mb-6 border-[6px] border-primary shadow-md bg-white"
          />
          <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
            {lawyer.bio}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ProfileSection;
