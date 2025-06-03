'use client';
import { useEffect, useRef } from 'react';
import styles from './FavMenu.module.css';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { closeMenu } from '@/lib/features/characters/charactersSlice';
import { FavItem } from '../favItem/FavItem';
import { Character } from 'rickmortyapi';
export const FavMenu = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const { favs } = useAppSelector((stat) => stat.characters);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('[data-ignore-outside]')) {
        return;
      }

      if (ref.current && !ref.current.contains(target)) {
        dispatch(closeMenu());
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch]);

  return (
    <div ref={ref} className={`${styles.favmenu_container} ${className}`}>
      {favs.map((element: Character) => (
        <FavItem key={`${element.id}-fav`} element={element} />
      ))}
    </div>
  );
};
