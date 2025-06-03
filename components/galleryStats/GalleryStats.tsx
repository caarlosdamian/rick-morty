import { Character } from 'rickmortyapi';
import styles from './GalleryStats.module.css';
export const GalleryStats = ({ character }: { character: Character }) => {
  const characterInfo = [
    {
      label: 'Origin',
      value: character.origin.name,
    },
    {
      label: 'Location',
      value: character.location.name,
    },
    {
      label: 'Gender',
      value: character.gender,
    },
    {
      label: 'Episodes',
      value: character.episode.length,
    },
  ];

  return (
    <div className={styles.gallery_stats_container}>
      <div className={styles.gallery_stats_item}>
        <strong>{character.name}</strong>
        <span>{character.species}</span>
      </div>
      <div className={styles.gallery_stats_secondary}>
        {characterInfo.map((info) => (
          <div className={styles.gallery_stats_item} key={info.label}>
            <strong>{info.label}</strong>
            <span>{info.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
