import { configureStore } from '@reduxjs/toolkit';
import { charactersSlice } from './features/characters/charactersSlice';

export const makeStore = () => {
  return configureStore({
    reducer: { characters: charactersSlice.reducer },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
