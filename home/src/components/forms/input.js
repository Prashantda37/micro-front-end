import React from 'react';
import classNames from 'classnames';
import { ErrorMessage } from '../ErrorMessage';

export function Input ({
  label,
  name,
  type = 'text',
  inputClassName,
  errorMessage,
  ...attr
}) {
  const classes = classNames(
    'rl-input min-h-32 w-full p-2',
    inputClassName,
    { 'border border-solid': !errorMessage },
    'rounded outline-none',
    'group-focus:outline-none focus:z-10',
    { 'border-1 border-red-500': errorMessage },
  );
  return (
    <div>
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
      {errorMessage ? (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      ) : null}
    </div>
  );
}
