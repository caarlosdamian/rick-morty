'use client';
import React from 'react';
import { CardList } from '../cardList/CardList';
import { Gallery } from '../gallery/Gallery';
import { Character } from 'rickmortyapi';
import { SelectedCharacterContextProvider } from '@/context/selectedCharacterContext';

interface Props {
  characters: Character[];
}

export const Results = ({ characters }: Props) => {
  // filter list based on searchbox
  return (
    <SelectedCharacterContextProvider>
      <CardList characters={characters as Character[]} />
      <Gallery  />
    </SelectedCharacterContextProvider>
  );
};
