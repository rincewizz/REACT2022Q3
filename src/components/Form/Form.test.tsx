import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event';
import FormPage from 'pages/FormPage';
import '@testing-library/jest-dom/extend-expect';
import { store } from 'app/store';
import { AnyAction, combineReducers, createStore, Store } from '@reduxjs/toolkit';
import formSlice from 'app/formSlice';
import { renderRouterProvider } from 'tests/utils/renderRouterProvider';

export function createTestStore() {
  const store = createStore(
    combineReducers({
      form: formSlice,
    })
  );
  return store;
}

describe('Form', () => {
  let testStore: Store<unknown, AnyAction>;
  beforeEach(() => {
    testStore = createTestStore();
  });

  it('should render the Form', () => {
    const createCardMock = jest.fn();
    renderRouterProvider(<Form createCard={createCardMock} />, {}, testStore);
    const form = screen.getByTestId('form');

    expect(form).toBeInTheDocument();
  });

  it('should disable button on start', () => {
    const createCardMock = jest.fn();
    renderRouterProvider(<Form createCard={createCardMock} />, {}, testStore);
    const submit = screen.getByTestId('submit');
    expect(submit).toBeDisabled();

    const input = screen.getByTestId('input-name');
    userEvent.type(input, 'a');

    expect(submit).not.toBeDisabled();
  });

  describe('should show validation message', () => {
    it('name should be more than 1 letter', async () => {
      renderRouterProvider(<FormPage />, {}, testStore);
      const submit = screen.getByTestId('submit');
      const input = screen.getByTestId('input-name');

      userEvent.type(input, 'q');
      userEvent.click(submit);

      expect(await screen.findByText(/Name should be more than 1 letters/i)).toBeInTheDocument();
    });

    it('name should contain only alphabets', async () => {
      renderRouterProvider(<FormPage />, {}, testStore);
      const submit = screen.getByTestId('submit');
      const input = screen.getByTestId('input-name');

      userEvent.type(input, '111');
      userEvent.click(submit);

      expect(await screen.findByText(/Name should contain only alphabets/i)).toBeInTheDocument();
    });
  });

  it('create card after form send', async () => {
    window.URL.createObjectURL = jest.fn();
    const testImageFile = new File(['hello'], 'hello.png', { type: 'image/png' });

    renderRouterProvider(<FormPage />, {}, store);

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
    userEvent.upload(inputFile, testImageFile);
    userEvent.click(submit);

    expect(await screen.findByTestId('card')).toBeInTheDocument();
  });
});
