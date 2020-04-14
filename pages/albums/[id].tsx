import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Container, Layout, Card } from '../../components';
import { Entry } from '../../interfaces';

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
        <Card album={album} />
      </Container>
    </Layout>
  );
}
