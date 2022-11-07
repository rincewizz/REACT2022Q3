import { AnyAction, Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

type RouterProviderType = { children: React.ReactNode; store: Store<unknown, AnyAction> };

export function RouterProvider({ children, store }: RouterProviderType) {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
}
export const renderRouterProvider = (
  ui: ReactElement,
  { route = '/' } = {},
  store: Store<unknown, AnyAction>
) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(ui, {
      wrapper: (props) => <RouterProvider {...props} store={store} />,
    }),
  };
};
