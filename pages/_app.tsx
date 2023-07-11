import Layout from '@/components/layout/Layout';
import type { AppProps } from 'next/app';
import '@/styles/global.scss';

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default app;
