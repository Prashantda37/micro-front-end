import React from 'react';
import classNames from 'classnames';

export function Input ({
  label,
  name,
  type = 'text',
  inputClassName,
  ...attr
}) {
  const classes = classNames(
    'rl-input min-h-32 w-full p-1',
    inputClassName,
    'border border-solid rounded transition-colors duration-300 ring-transparent outline-none',
    'group-focus:outline-none focus:z-10',
  );
  return (
    <div className="p-1">
      <label htmlFor={ name } className="text-gray-500">
        {label}
      </label>
      <input
        id={ name }
        type={ type }
        name={ name }
        data-testid={ name }
        className={ classes }
        { ...attr }
      />
    </div>
  );
}
