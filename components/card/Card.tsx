'use client';
import Image from 'next/image';
import { Character } from 'rickmortyapi';
import { CardLike } from '../cardLike/CardLike';
import styles from './Card.module.css';
import { useSelectedCharacterContext } from '@/context/selectedCharacterContext';

export const Card = ({
  character: { image, name, id },
}: {
  character: Character;
}) => {
  const { selectedCharacter, setSelectedCharacter } =
    useSelectedCharacterContext();
  return (
    <div
      className={`${styles.card_container} ${
        selectedCharacter === id ? styles.card_selected : ''
      }`}
      onClick={() => setSelectedCharacter(id)}
    >
      <span className={styles.card_title}>{name.split(' ')[0]}</span>
      <div className={styles.card_img}>
        <Image fill src={image} alt={`photo-${name}`} />
      </div>
      <CardLike />
    </div>
  );
};
