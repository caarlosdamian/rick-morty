import { FavList } from '../favList/FavList';
import styles from './CardList.module.css';

export const CardList = () => {
  return (
    <div className={styles.card_container}>
      CardList
      <FavList />
    </div>
  );
};
