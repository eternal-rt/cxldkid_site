import React from 'react';

export function Card({ children, className = '', ...props }) {
  return (
    <div className={`bg-gray-900 rounded-lg shadow-md p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={`text-gray-300 ${className}`} {...props}>
      {children}
    </div>
  );
}
