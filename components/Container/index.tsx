import React from 'react';
import styles from './index.module.scss';

type Props = {
  children: React.ReactNode;
  type?: string;
};

export default function Container({ children, type }: Props) {
  return (
    <div
      className={`${styles.container} ${
        type === 'grid' ? styles['container--grid'] : ''
      }`}
    >
      {children}
    </div>
  );
}
