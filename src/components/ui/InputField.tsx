import type React from 'react';
import type { InputFieldProps } from '../../types/types';

export const InputField: React.FC<InputFieldProps> = ({ textarea, ...props }) => textarea ? (
  <textarea
    rows={4}
    {...props}
    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none" />
) : (
  <input
    type="text"
    {...props}
    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
);
export default InputField;
