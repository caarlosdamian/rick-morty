'use client';
import Image from 'next/image';
import { GalleryLiveStat } from '../galleryLiveStat/GalleryLiveStat';
import { GalleryStats } from '../galleryStats/GalleryStats';
import styles from './Gallery.module.css';
import { useSelectedCharacterContext } from '@/context/selectedCharacterContext';

export const Gallery = () => {
  const { selectedCharacterData } = useSelectedCharacterContext();

  return (
    <div className={styles.gallery_container}>
      {selectedCharacterData && (
        <Image
          objectFit="cover"
          fill
          src={selectedCharacterData?.image || ''}
          alt="user"
        />
      )}
      <GalleryLiveStat status={selectedCharacterData?.status} />
      <GalleryStats character={selectedCharacterData} />
    </div>
  );
};
