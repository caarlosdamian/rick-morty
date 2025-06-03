'use client';
import Image from 'next/image';
import { GalleryLiveStat } from '../galleryLiveStat/GalleryLiveStat';
import { GalleryStats } from '../galleryStats/GalleryStats';
import styles from './Gallery.module.css';
import { Character } from 'rickmortyapi';

export const Gallery = ({ character }: { character: Character }) => {
  return (
    <div className={styles.gallery_container}>
      {/* <GalleryPhoto /> */}
      <Image objectFit="cover" fill src={character?.image} alt="user" />
      <GalleryLiveStat status={character.status} />
      <GalleryStats character={character} />
    </div>
  );
};
