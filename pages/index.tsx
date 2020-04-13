import Container from '../components/container';
import Layout from '../components/layout';
import Head from 'next/head';

export default function Index() {
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
