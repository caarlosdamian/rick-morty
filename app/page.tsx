import Image from 'next/image';
import styles from '../styles/page.module.css';
import { CardList, FavList, Gallery } from '@/components';

export default function Home() {
  return (
    <main className={styles.main_container}>
      <div className={styles.main_bg}>
        <div className={styles.main_content}>
          <div className={styles.main_header_container}>
            <div className={styles.main_header_img}>
              <Image src="/header.png" alt="hero" fill />
            </div>
          </div>
          <div className={styles.main_results}>
            <CardList />
            <Gallery />
          </div>
        </div>
      </div>
      <div className={styles.main_rectangule}>
        <FavList className={styles.hidden_desktop} />
      </div>
    </main>
  );
}
