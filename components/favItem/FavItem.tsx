'use client';
import { Character } from 'rickmortyapi';
import styles from './FavItem.module.css';
import { useAppDispatch } from '@/lib/hooks';
import { removeFavorite } from '@/lib/features/characters/charactersSlice';

export const FavItem = ({ element }: { element: Character }) => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.fav_item_container}>
      <span>{element.name}</span>
      <svg
        data-ignore-outside
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 48 48"
        fill="none"
        className={styles.delete_icon}
        onClick={(e) => {
          console.log('e', e);
          e.preventDefault();
          e.stopPropagation();
          dispatch(removeFavorite(element.id));
        }}
      >
        <rect x="12" y="8" width="24" height="4" rx="2" fill="white" />
        <path d="M16 8L17.5 4H30.5L32 8" stroke="white" strokeWidth="1.5" />

        <rect
          x="12"
          y="12"
          width="24"
          height="30"
          rx="2"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />

        <line x1="18" y1="16" x2="18" y2="40" stroke="white" strokeWidth="2" />
        <line x1="24" y1="16" x2="24" y2="40" stroke="white" strokeWidth="2" />
        <line x1="30" y1="16" x2="30" y2="40" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  );
};
