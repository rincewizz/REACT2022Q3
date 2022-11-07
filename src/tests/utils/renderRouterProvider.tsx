import { render } from '@testing-library/react';
import { AppProvider } from 'appState/appContext';
import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

export function RouterProvider({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <AppProvider>{children}</AppProvider>
    </BrowserRouter>
  );
}
export const renderRouterProvider = (ui: ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(ui, { wrapper: RouterProvider }),
  };
};
