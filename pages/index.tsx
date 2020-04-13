import Head from 'next/head';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import { Container, Layout, AlbumItem } from '../components';
import { Entry } from '../interfaces';

function fetcher(url: string) {
  return fetch(url).then((r) => r.json());
}

export default function Index() {
  const router = useRouter();
  const { data, error } = useSWR(
    `/api/albums?${queryString.stringify(router.query)}`,
    fetcher
  );

  if (error) {
    return <div>Something went wrong</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Layout>
        <Head>
          <title>Music feed</title>
        </Head>
        <Container>
          {data.map((album: Entry) => (
            <AlbumItem {...album} key={album.id.attributes['im:id']} />
          ))}
        </Container>
      </Layout>
    </>
  );
}
