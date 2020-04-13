import Head from 'next/head';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import Container from '../components/container';
import Layout from '../components/layout';

function fetcher(url: string) {
  return fetch(url).then((r) => r.json());
}

export default function Index() {
  const router = useRouter();
  const { data, error } = useSWR(
    `/api/albums?${queryString.stringify(router.query)}`,
    fetcher
  );

  return (
    <>
      <Layout>
        <Head>
          <title>Music feed</title>
        </Head>
        <Container>Home page</Container>
      </Layout>
    </>
  );
}
