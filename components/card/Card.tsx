'use client';
import Image from 'next/image';
import { Character } from 'rickmortyapi';
import { CardLike } from '../cardLike/CardLike';
import styles from './Card.module.css';
import { useSelectedCharacterContext } from '@/context/selectedCharacterContext';

export const Card = ({
  character,
  fav,
}: {
  character: Character;
  fav: boolean;
}) => {
  const { selectedCharacter, setSelectedCharacter } =
    useSelectedCharacterContext();
  return (
    <div
      className={`${styles.card_container} ${
        selectedCharacter === character.id ? styles.card_selected : ''
      }`}
      onClick={() => setSelectedCharacter(character.id)}
    >
      <span className={styles.card_title}>{character.name.split(' ')[0]}</span>
      <div className={styles.card_img}>
        <Image fill src={character.image} alt={`photo-${character.name}`} />
      </div>
      <CardLike character={character} active={fav} />
    </div>
  );
};
