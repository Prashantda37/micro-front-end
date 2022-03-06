import React from 'react';
import ReactDOM from 'react-dom';

import {
  render, cleanup, fireEvent,
} from '@testing-library/react';
import { Input } from '../input';
import '@testing-library/jest-dom';

describe('Input Element', () => {
  afterEach(cleanup);
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input></Input>, div);
  });

  test('render correctly input', () => {
    const { getByTestId } = render(<Input label="text" name="test" />);
    const inputEl = getByTestId('test');
    expect(inputEl).toBeInTheDocument();
  });
  // to be test later
  // test('should have label Element', () => {
  //   const { getByTestId } = render(<Input label="text" name="test" />);
  //   const inputEl = getByTestId('text');
  //   expect(inputEl).toBeInTheDocument();
  // });

  test('should have text type', () => {
    const { getByTestId } = render(<Input label="text" name="test" />);
    const inputEl = getByTestId('test');
    expect(inputEl).toHaveAttribute('type', 'text');
  });

  test('render input value', () => {
    const { getByLabelText } = render(<Input label="text" name="name" />);
    const input = getByLabelText('text');
    fireEvent.change(input, { target: { value: '$23' } });
    expect(input.closest('input').value).toEqual('$23');
  });
});
