import styles from './FavList.module.css';

export const FavList = ({ className }: { className?: string }) => {
  return (
    <div className={`${styles.favlist_container} ${className || ''}`}>
      FavList
    </div>
  );
};
