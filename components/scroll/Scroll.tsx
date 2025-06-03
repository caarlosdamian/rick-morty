'use client';
import { useRef } from 'react';
import styles from './Scroll.module.css';
import { ScrollArrow } from '../scrollArrow/ScrollArrow';

interface Props<T = HTMLDivElement> {
  children: (ref: React.Ref<T>) => React.ReactNode;
}
export const Scroll = <T,>({ children }: Props<T>) => {
  const scrollRef = useRef(null);

  const scrollTo = (direction: string) => {
    const element = scrollRef.current as unknown as Element;

    if (element) {
      const scrollAmount = 200;
      element.scrollBy({
        top: direction === 'up' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.scroll_container}>
      {typeof children === 'function' && children(scrollRef)}
      <div className={styles.scroll_bar}>
        <ScrollArrow direction="up" onClick={() => scrollTo('up')} />
        <ScrollArrow direction="down" onClick={() => scrollTo('down')} />
      </div>
    </div>
  );
};
