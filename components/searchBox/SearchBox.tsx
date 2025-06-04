'use client';
import { useDebounce } from '@/hooks/useDebounce';
import styles from './SearchBox.module.css';
import React, { useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const SearchBox = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get('query');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const debouncedChange = useDebounce((value: string) => {
    if (value === '') {
      router.push(pathname);
    } else {
      router.push(pathname + '?' + createQueryString('query', value));
    }
  }, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedChange(e.target.value);
  };

  return (
    <div className={styles.searchbox_container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15.5 15H14.71L14.43 14.73C15.41 13.59 16 12.11 16 10.5C16 6.91 13.09 4 9.5 4C5.91 4 3 6.91 3 10.5C3 14.09 5.91 17 9.5 17C11.11 17 12.59 16.41 13.73 15.43L14 15.71V16.5L19 21.49L20.49 20L15.5 15ZM9.5 15C7.01 15 5 12.99 5 10.5C5 8.01 7.01 6 9.5 6C11.99 6 14 8.01 14 10.5C14 12.99 11.99 15 9.5 15Z"
          fill="#76DD00"
        />
      </svg>
      <input
        type="text"
        className={styles.searchbox_input}
        placeholder="Find your character..."
        onChange={handleChange}
        defaultValue={query || ''}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={styles.searchbox_user_icon}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.7799 8.02098C16.3376 9.63187 15.8131 11.4192 14.4733 12.4733C16.765 13.3828 18.3676 15.4829 18.64 17.9333C18.679 18.2974 18.4171 18.6248 18.0533 18.6667H17.98C17.6386 18.6687 17.3509 18.4126 17.3133 18.0733C17.0102 15.3752 14.7285 13.3353 12.0133 13.3353C9.29819 13.3353 7.01642 15.3752 6.71333 18.0733C6.67283 18.4415 6.34152 18.7072 5.97333 18.6667C5.60514 18.6262 5.33949 18.2949 5.37999 17.9267C5.65107 15.4834 7.24473 13.3876 9.52666 12.4733C8.1869 11.4192 7.6624 9.63187 8.22014 8.02098C8.77787 6.41008 10.2953 5.32967 12 5.32967C13.7047 5.32967 15.2221 6.41008 15.7799 8.02098ZM9.33333 9.33333C9.33333 10.8061 10.5272 12 12 12C12.7072 12 13.3855 11.719 13.8856 11.2189C14.3857 10.7189 14.6667 10.0406 14.6667 9.33333C14.6667 7.86057 13.4728 6.66666 12 6.66666C10.5272 6.66666 9.33333 7.86057 9.33333 9.33333Z"
          fill={query ? '#76DD00' : '#555555'}
        />
      </svg>
    </div>
  );
};
