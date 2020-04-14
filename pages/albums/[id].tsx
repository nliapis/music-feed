import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Container, Layout, Card } from '../../components';
import { Entry } from '../../interfaces';
import styles from './index.module.scss';

export default function Album() {
  const [album, setAlbum] = useState<Entry | ''>('');
  useEffect(() => {
    setAlbum(JSON.parse(localStorage.getItem('album') || ''));
  }, []);

  if (!album) {
    return (
      <Layout>
        <Container>There is no available album</Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container>
        <Head>
          <title>{album['im:name'].label}</title>
        </Head>
        <Link href="/">
          <a className={styles['back-button']}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z" />
            </svg>
            back
          </a>
        </Link>
        <Card album={album} />
      </Container>
    </Layout>
  );
}
