// src/components/ui/SeparatorBar.tsx
import React from 'react';

export const SeparatorBar: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-16 h-1 bg-gray-800 mx-auto my-6 ${className}`} />
);
