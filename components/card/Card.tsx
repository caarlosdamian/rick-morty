import Image from 'next/image';
import { Character } from 'rickmortyapi';
import { CardLike } from '../cardLike/CardLike';
import styles from './Card.module.css';

export const Card = ({
  character: { image, name },
}: {
  character: Character;
}) => {
  return (
    <div className={styles.card_container}>
      <span className={styles.card_title}>{name.split(' ')[0]}</span>
      <div className={styles.card_img}>
        <Image fill src={image} alt={`photo-${name}`} />
      </div>
      <CardLike />
    </div>
  );
};
