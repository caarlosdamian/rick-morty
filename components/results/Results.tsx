'use client';
import React from 'react';
import { CardList } from '../cardList/CardList';
import { Gallery } from '../gallery/Gallery';
import { Character } from 'rickmortyapi';

interface Props {
  characters: Character[];
}

export const Results = ({ characters }: Props) => {
  // const [selectedElement, setSelectedElement] = useState(() =>
  //   characters?.length !== 0 ? characters[0] : {}
  // );
  // WIP add selected funtionality
  return (
    <>
      <CardList characters={characters as Character[]} />
      <Gallery character={characters[0] as Character} />
    </>
  );
};
