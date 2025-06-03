'use client';
import { FavList } from '../favList/FavList';
import styles from './CardList.module.css';
import { Card } from '../card/Card';
import { Character } from 'rickmortyapi';
import { SearchBox } from '../searchBox/SearchBox';
import { Scroll } from '../scroll/Scroll';
import { Ref } from 'react';
import { useAppSelector } from '@/lib/hooks';

interface Props {
  characters: Character[];
}

export const CardList = ({ characters }: Props) => {
  const { favs } = useAppSelector((state) => state.characters);
  const favsIds = favs.map((element) => element.id);
  return (
    <div className={styles.card_container}>
      <SearchBox />
      <Scroll>
        {(scrollRef) => {
          return (
            <div
              className={styles.card_content}
              ref={scrollRef as Ref<HTMLDivElement>}
            >
              {characters?.map((character) => (
                <Card
                  key={character.id}
                  character={character}
                  fav={favsIds.includes(character.id)}
                />
              ))}
            </div>
          );
        }}
      </Scroll>
      <FavList />
    </div>
  );
};
