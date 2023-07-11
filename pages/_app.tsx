import Header from '@/components/header/Header';
import type { AppProps } from 'next/app';
import '@/styles/global.scss';

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default app;
