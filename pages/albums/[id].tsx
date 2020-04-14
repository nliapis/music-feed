import Head from 'next/head';
import { useRouter } from 'next/router';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import useSWR from 'swr';
import queryString from 'query-string';
import { Entry } from '../../interfaces';

export default function Album() {
  const album: Entry = JSON.parse(localStorage.getItem('album') || '');

  return (
    <Layout>
      <Container>
        <article>
          <Head>
            <title></title>
          </Head>
        </article>
      </Container>
    </Layout>
  );
}
