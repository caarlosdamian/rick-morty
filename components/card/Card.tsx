// import { Character } from '@/types/shared';

import { Character } from 'rickmortyapi';

export const Card = ({ character }: { character: Character }) => {
  return <div>{character.name}</div>;
};
