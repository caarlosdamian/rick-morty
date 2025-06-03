import React, { ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import StoreProvider from '@/app/StoreProvider';
import '@testing-library/jest-dom';

const AllProviders = ({ children }: { children: ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return render(ui, { wrapper: AllProviders, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
