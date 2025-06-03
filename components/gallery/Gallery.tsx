'use client';
import Image from 'next/image';
import { GalleryLiveStat } from '../galleryLiveStat/GalleryLiveStat';
import { GalleryStats } from '../galleryStats/GalleryStats';
import styles from './Gallery.module.css';
import { useSelectedCharacterContext } from '@/context/selectedCharacterContext';
import { ScrollArrow } from '../scrollArrow/ScrollArrow';
import { useState } from 'react';

export const Gallery = () => {
  const { selectedCharacterData, setSelectedCharacter, characters } =
    useSelectedCharacterContext();

  const [index, setIndex] = useState(0);

  const handleGalleryChange = (direction: 'left' | 'right') => {
    const lasItemIndex = characters.length - 1;

    if (lasItemIndex === -1) {
      return;
    }

    if (direction === 'right') {
      if (index === lasItemIndex) {
        setIndex(0);
        setSelectedCharacter(characters[0]?.id);
        return;
      }
      setIndex((prev) => prev + 1);
      setSelectedCharacter(characters[index + 1]?.id);
      return;
    }

    if (index === 0) {
      setIndex(lasItemIndex);
      setSelectedCharacter(characters[lasItemIndex]?.id);
      return;
    }

    setIndex((prev) => prev - 1);
    setSelectedCharacter(characters[index - 1].id);
  };

  return (
    <div className={styles.gallery_container}>
      {selectedCharacterData && (
        <Image
          objectFit="cover"
          fill
          src={
            selectedCharacterData?.image || 'https://placehold.co/600x400/png'
          }
          alt="user"
        />
      )}
      <GalleryLiveStat status={selectedCharacterData?.status} />
      <GalleryStats character={selectedCharacterData} />
      <ScrollArrow
      className={styles.hidden_desktop}
        direction="left"
        onClick={() => handleGalleryChange('left')}
      />
      <ScrollArrow
      className={styles.hidden_desktop}
        direction="right"
        onClick={() => handleGalleryChange('right')}
      />
    </div>
  );
};
