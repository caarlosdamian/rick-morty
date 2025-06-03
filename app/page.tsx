import Image from 'next/image';
import styles from '../styles/page.module.css';
import { FavList } from '@/components';
import { Character, getCharacters } from 'rickmortyapi';
import { Results } from '@/components/results/Results';

export default async function Home() {
  const {
    data: { results },
  } = await getCharacters();
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
            <Results characters={results as Character[]} />
          </div>
        </div>
      </div>
      <div className={styles.main_rectangule}>
        <FavList className={styles.hidden_desktop} />
      </div>
    </main>
  );
}
