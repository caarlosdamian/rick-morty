'use client';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import styles from './FavList.module.css';
import { FavMenu } from '../favMenu/FavMenu';
import { openMenu } from '@/lib/features/characters/charactersSlice';

export const FavList = ({ className }: { className?: string }) => {
  const { isOpen } = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();
  return (
    <>
      {isOpen ? (
        <FavMenu className={className} />
      ) : (
        <div
          className={`${styles.favlist_container} ${className || ''}`}
          onClick={() => dispatch(openMenu())}
        >
          <span>FAVS</span>
        </div>
      )}
    </>
  );
};
