
import React from 'react';
import type { FloatingButtonAction } from '../../types/types';

interface FloatingButtonsProps {
  actions: FloatingButtonAction[];
  position?: 'bottom-right' | 'bottom-left';
}


const FloatingButtons: React.FC<FloatingButtonsProps> = ({
  actions,
  position = 'bottom-right',
}) => {
  const positionClasses =
    position === 'bottom-right'
      ? 'bottom-4 right-4'
      : 'bottom-4 left-4';

  return (
    <div className={`fixed ${positionClasses} flex flex-col space-y-2 z-40`}>
      {actions.map(({ key, href, Icon, label, className, target, rel }) => (
        <a
          key={key}
          href={href}
          target={target ?? '_blank'}
          rel={rel ?? 'noopener noreferrer'}
          aria-label={label}
          title={label}
          className={`text-white p-3 rounded-full shadow-lg transition-colors ${className || 'bg-gray-700 hover:bg-gray-800'}`}
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default FloatingButtons;
