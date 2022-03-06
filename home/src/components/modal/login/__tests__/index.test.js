import React from 'react';
import {
  render, fireEvent, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { LoginModal } from '..';

// This is seperate build for sevices.
jest.mock('store/actions', () => ({
  handleLoginAction: jest.fn(),
}), { virtual: true });

jest.mock('store/store', () => ({
  useStore: jest.fn(() => ({ dispatcher: jest.fn() })),
}), { virtual: true });

describe('Login Modal', () => {
  test('modal close', () => {
    const toggleButton = jest.fn();
    render(<LoginModal toggle={ toggleButton } isOpen />);
    // debug();
    const elm = document.querySelector('button.btn-close');
    // Act
    fireEvent.click(elm);
    // Assert
    expect(toggleButton).toHaveBeenCalledTimes(1);
  });

  test('should have disable button after submit form', async () => {
    const handleSubmit = jest.fn();
    const { debug } = render(<LoginModal isOpen />);

    // userEvent.type(screen.getByLabelText('/User Email/i'), 'prashant@gmail.com');
    // userEvent.type(screen.getByLabelText('/Password/i'), '123456');
    // fireEvent.click(screen.findAllByText(/Login/i));
    // userEvent.click(screen.getAllByTestId('submit'));
    // fireEvent.click()
    const elm = document.querySelector('button.btn-primary');
    fireEvent.click(elm);
    debug();
    await waitFor(() => {
      expect(elm).toHaveAttribute('disabled');
    });
  });
});
