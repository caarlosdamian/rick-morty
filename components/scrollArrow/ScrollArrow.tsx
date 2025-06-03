import styles from './ScrollArrow.module.css';

interface Props {
  direction: 'up' | 'down' | 'left' | 'right';
  onClick: () => void;
}
export const ScrollArrow = ({ direction, onClick }: Props) => (
  <div
    role="button"
    className={`${styles.scrollArrow_container} ${styles[direction]}`}
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      className={styles.arrow}
    >
      <g clipPath="url(#clip0_7_286)">
        <path d="M16 14.4373L9.4 21.0373L7.51467 19.152L16 10.6667L24.4853 19.152L22.5987 21.0373L16 14.4373Z" />
      </g>
      <defs>
        <clipPath id="clip0_7_286">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
);
