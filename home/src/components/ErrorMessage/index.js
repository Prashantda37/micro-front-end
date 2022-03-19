import React from 'react';

export function ErrorMessage ({ children }) {
  return (
    <div className="text-red-500 text-sm px-1">
      {children}
    </div>
  );
}
