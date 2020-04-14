import React from 'react';
import './styles.scss';

type Props = {
  Component: React.ComponentType;
  pageProps: Props & React.PropsWithoutRef<JSX.IntrinsicElements['button']>;
};

function MyApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}

export default MyApp;
