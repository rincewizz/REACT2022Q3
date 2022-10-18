import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event';
import FormPage from 'pages/FormPage';
import '@testing-library/jest-dom/extend-expect';

describe('Form', () => {
  it('should render the Form', () => {
    render(<Form createCard={() => {}} />);
    const form = screen.getByTestId('form');

    expect(form).toBeInTheDocument();
  });

  it('should disable button on start', () => {
    render(<Form createCard={() => {}} />);
    const submit = screen.getByTestId('submit');
    expect(submit).toBeDisabled();

    const input = screen.getByTestId('input-name');
    userEvent.type(input, 'a');

    expect(submit).not.toBeDisabled();
  });

  describe('should show validation message', () => {
    it('name should be more than 1 letter', async () => {
      render(<FormPage />);
      const submit = screen.getByTestId('submit');
      const input = screen.getByTestId('input-name');

      userEvent.type(input, 'q');
      userEvent.click(submit);

      await setTimeout(() => {
        expect(screen.getByText(/Name should be more than 1 letters/i)).toBeInTheDocument();
      }, 0);
    });

    it('name should contain only alphabets', async () => {
      render(<FormPage />);
      const submit = screen.getByTestId('submit');
      const input = screen.getByTestId('input-name');

      userEvent.type(input, '111');
      userEvent.click(submit);

      await setTimeout(() => {
        expect(screen.getByText(/Name should contain only alphabets/i)).toBeInTheDocument();
      }, 0);
    });
  });

  it('create card after form send', async () => {
    window.URL.createObjectURL = jest.fn();
    render(<FormPage />);
    const submit = screen.getByTestId('submit');
    const inputName = screen.getByTestId('input-name');
    const inputDate = screen.getByTestId('input-date');
    const inputAgree = screen.getByTestId('input-agree');
    const inputFile = screen.getByTestId('input-file');
    const inputSwitcher = screen.getByTestId('input-switcher-no-receiveNotifications');

    userEvent.type(inputName, 'test');
    fireEvent.change(inputDate, { target: { value: '2022-09-27' } });
    userEvent.click(inputAgree);
    userEvent.click(inputSwitcher);
    userEvent.upload(inputFile, [new File(['hello'], 'hello.png', { type: 'image/png' })]);
    userEvent.click(submit);

    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});
