import { useEffect, useState } from 'react';
import Head from 'next/head';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import { Container, Layout, AlbumItem, SearchAlbum } from '../components';
import { Entry } from '../interfaces';

function fetcher(url: string) {
  return fetch(url).then((r) => r.json());
}

export default function Index() {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const { data, error } = useSWR(
    `/api/albums?${queryString.stringify(router.query)}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      localStorage.setItem('albums', JSON.stringify(data));
    }
  }, [data]);

  if (error) {
    return <Container>Something went wrong</Container>;
  }

  if (!data) {
    return <Container>Loading...</Container>;
  }

  return (
    <>
      <Layout>
        <Head>
          <title>Music feed</title>
        </Head>
        <SearchAlbum
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <Container type="grid">
          {data
            .filter((album: Entry) => {
              return (
                album['im:name'].label.toLowerCase().includes(searchValue) ||
                album['im:artist'].label.toLowerCase().includes(searchValue)
              );
            })
            .map((album: Entry) => (
              <AlbumItem {...album} key={album.id.attributes['im:id']} />
            ))}
        </Container>
      </Layout>
    </>
  );
}
