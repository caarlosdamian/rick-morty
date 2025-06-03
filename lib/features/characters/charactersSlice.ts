import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from 'rickmortyapi';

interface CharactersState {
  isOpen: boolean;
  favs: Character[];
}

const initialState: CharactersState = {
  isOpen: true,
  favs: [],
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Character>) {
      const isAlreadyInFavs = state.favs
        .map((ele) => ele.id.toString())
        .includes(action.payload.id.toString());

      if (!isAlreadyInFavs) {
        state.favs.push(action.payload);
      }
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.favs = state.favs.filter((fav) => fav.id !== action.payload);
    },
    closeMenu(state) {
      state.isOpen = false;
    },
    openMenu(state) {
      state.isOpen = true;
    },
  },
});

export const { addFavorite, openMenu, closeMenu, removeFavorite } =
  charactersSlice.actions;
