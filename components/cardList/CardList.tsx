import { FavList } from '../favList/FavList';
import styles from './CardList.module.css';
import { Card } from '../card/Card';
import { Character } from 'rickmortyapi';

interface Props {
  characters: Character[];
}

export const CardList = ({ characters }: Props) => {
  return (
    <div className={styles.card_container}>
      <div className="">
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
      <FavList />
    </div>
  );
};
