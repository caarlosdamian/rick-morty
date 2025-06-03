import { Character } from 'rickmortyapi';
import styles from './GalleryLiveStat.module.css';

export const GalleryLiveStat = ({ status }: Pick<Character, 'status'>) => {
  return (
    <div className={styles.galleryLive_container}>
      {status === 'Alive' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
        >
          <circle
            cx="8.34762"
            cy="7.5388"
            r="7.37394"
            fill="url(#paint0_radial_45_370)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_45_370"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(8.34762 7.5388) rotate(90) scale(7.37394)"
            >
              <stop stop-color="#F1F510" />
              <stop offset="1" stop-color="#608F09" />
            </radialGradient>
          </defs>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <circle cx="7.5" cy="7.5" r="7.5" fill="url(#paint0_radial_6_59)" />
          <defs>
            <radialGradient
              id="paint0_radial_6_59"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(7.5 7.5) rotate(90) scale(7.5)"
            >
              <stop stop-color="#E92507" />
              <stop offset="1" stop-color="#7C1616" />
            </radialGradient>
          </defs>
        </svg>
      )}
      <span className={styles.live_title}>{status}</span>
    </div>
  );
};
